import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();

    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    }
    return (
        <div style={friendStyle}>

            <h2>Name: {name}</h2>
            <p>Email: {email}</p>

            <p>  <Link to={`/friend/${id}`}>
                <Button variant="outline-secondary">Show Detail of {id}</Button>
            </Link></p>
            <Button variant="outline-warning"

                onClick={() => handleClick(id)}
            >
                Details
            </Button>
        </div>
    );
};

export default Friend;