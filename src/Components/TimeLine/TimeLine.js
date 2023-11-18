
import React, { useEffect, useState } from 'react'
import "./TimeLine.css"
import Post from './Post'
import TweetBox from './TweetBox'
// ./必須
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function TimeLine() {




    const [posts, setPosts] = useState([]);

    //マウント時のみ
    useEffect(() => {
        // NOTE:then FBからのデータ取得は非同期処理
        const postData = collection(db, "posts");
        getDocs(postData).then((querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        });
        console.log("mount")
    }, [])


    return (
        <div className='timeline'>
            {/*コンポーネント:Header*/}
            <div className='timeline--header'>
                <h2>ホーム</h2>
            </div>
            {/*コンポーネント:TweetBox*/}
            <TweetBox></TweetBox>
            {/*コンポーネント:Post*/}

            {posts.map((post) => (
                < Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div>


    )
}

export default TimeLine