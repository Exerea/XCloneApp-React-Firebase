import { Avatar } from '@mui/material'
import React from 'react'
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import "./Post.css"

function Post(displayName) {
    return (
        <div className='post'>
            <div className='post--avatar'>
                <Avatar src={displayName.avatar}></Avatar>
            </div>
            <div className='post--body'>
                <div className='post--header'>
                    <div className='post--headerText'>
                        <h3>
                            {displayName.displayName}

                            <span className='post--headerSpecial'>
                                <VerifiedUser className="post--badge"></VerifiedUser>
                                @{displayName.username}
                            </span>

                        </h3>
                    </div>

                    <div className='post--headerDescription'>
                        <p>{displayName.text}</p>
                    </div>
                </div>
                <img src={displayName.image} alt='randoImage'></img>

                <div className='post--footer'>
                    <ChatBubbleIcon fontSize='small'></ChatBubbleIcon>
                    <RepeatIcon fontSize='small'></RepeatIcon>
                    <FavoriteIcon fontSize='small'></FavoriteIcon>
                    <DownloadIcon fontSize='small'></DownloadIcon>

                </div>
            </div>
        </div>
    )
}

export default Post