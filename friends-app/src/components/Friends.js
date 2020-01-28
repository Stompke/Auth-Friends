import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';

const Friends = () => {
    const [friendsList, setFriendsList ] = useState([])


    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriendsList(res.data)
        })
    },[]);

    return (
        <div>
            <h2> This is the friends component</h2>
            {friendsList.map(item => <Friend key={item.id} friendData={item}/>)}
        </div>

    )
}

export default Friends;