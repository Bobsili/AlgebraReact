import React from 'react'
import Avatar from './Avatar';
import "./User.css"

const User = ({ src, alt, username }) => {
    return (
        <>
            <Avatar src={src} alt={alt} />
            <div>{username}</div>
        </>
    )
}

export default User;