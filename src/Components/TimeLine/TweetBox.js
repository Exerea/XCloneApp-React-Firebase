import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import "./TweetBox.css"
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {

    //ツイートの保管
    const [tweetMessage, settweetMessage] = useState("");
    const [tweetImage, settweetImage] = useState("");

    //firebaseのDBに追加する
    const sendTweet = (e) => {
        //リローディング防止
        e.preventDefault();

        //firebase格納
        addDoc(collection(db, "posts"), {
            displayName: "プログラミングチュートリアル",
            username: "testUser",
            verified: true,
            text: tweetMessage,
            avatar: "https://cdn.discordapp.com/attachments/860904780805308466/1023089259349037127/26.png",
            Image: tweetImage,
        });

        settweetMessage("");
        settweetImage("");

    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox--input'>
                    <Avatar></Avatar>
                    <input
                        value={tweetMessage}
                        placeholder='いまどうしてる？'
                        type="text"
                        onChange={(e) => settweetMessage(e.target.value)}
                    ></input>
                </div>
                <input
                    value={tweetImage}
                    className='tweetBox--imageInput'
                    placeholder='画像のURLを入力してください'
                    type="text"
                    onChange={(e) => settweetImage(e.target.value)}
                >
                </input>
                <Button
                    className='tweetBox--tweetButton'
                    type="submit"
                    onClick={sendTweet}
                >ツイートする
                </Button>
            </form>
        </div>
    )
}

export default TweetBox