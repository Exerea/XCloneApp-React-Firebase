import React from 'react'
import Search from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css";

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets--input'>
                <Search className='widgets--searchIcon'></Search>
                <input placeholder='"キーワードを入力'></input>
            </div>

            <div className='widgets--widgetContainer'>
                <h2>今どうしてる？</h2>
                <TwitterTweetEmbed tweetId={'1572489481646907393'}></TwitterTweetEmbed>
                <TwitterTimelineEmbed sourceType='profile' screenName='kantei' options={{ height: 600 }}></TwitterTimelineEmbed>
                <TwitterShareButton
                    url={'https://twitter.com/dr80x'}
                    options={{ text: 'test tweet \n #reactjs is awesome', via: 'dr80x' }}
                />

            </div>

        </div >

    )
}

export default Widgets