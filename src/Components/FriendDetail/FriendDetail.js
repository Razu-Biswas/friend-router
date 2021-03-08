import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect (() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, []);

    const friendDetailStyle = {
        margin: '30px',
        padding: '20px',
        border: '3px solid green',
        borderRadius: '20px'
    }
    return (
        <div style={friendDetailStyle}>
            <p>This is Friend Detail :  {friendId}</p>
            <h3>{friend.name}  {friend.username}</h3>
            <h5>{friend.email}</h5>
            <p>Phone : {friend.phone}</p>
            <p>Website : {friend.website}</p>

        </div>
    );
};

export default FriendDetail;