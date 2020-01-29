import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';



const Friends = () => {
    const [friendsList, setFriendsList ] = useState([])
    const [ newFriend, setNewFriend ] = useState({
        id: Date.now(),
        name: '',
        age: null,
        email: ''
    })




    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriendsList(res.data)
        })
    },[]);

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {

            setFriendsList(res.data)
            setNewFriend({
                id: Date.now(),
                name: '',
                age: '',
                email: ''
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const deleteFriend = (id) => {
        axiosWithAuth()
        .delete('http://localhost:5000/api/friends/'+id)
        .then(res => {

          setFriendsList(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }

    return (
        <div className='friendsPage'>
            <div className='add-friend-form'>
                <h3>Add A Friend</h3>
                <form onSubmit={addFriend}>
                    <input value={newFriend.name} placeholder='Name' type='text' name='name' onChange={handleChange} />
                    <input value={newFriend.age} placeholder='Age' type='num' name='age' onChange={handleChange} />
                    <input value={newFriend.email} placeholder='email' type='text' name='email' onChange={handleChange} />
                    <button>Add New Friend</button>
                </form>
            </div>
            {friendsList.map(item => <Friend deleteFriend={deleteFriend} key={item.id} friendData={item}/>)}
        </div>
        

    )
}

export default Friends;