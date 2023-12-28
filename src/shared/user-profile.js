import React from 'react';

const UserProfile = (props) => {
    return (
        <div className='user-profile'>
            <img src={props.avatar} alt={`${props.name}'s avatar`} />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    );
};

export default UserProfile;