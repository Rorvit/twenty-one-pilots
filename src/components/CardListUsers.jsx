import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from '../redux/actionType/ActionType';
import Card from './Card';

function CardListUsers() {

  const dispatch = useDispatch()
  const {users} = useSelector(state => state)

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`, {
      params: {_limit: 4}
    })
    .then(({data}) => dispatch({type: Action.INIT_USERS, payload: data}))
  }, [])

  return (
    <div className='card_list'>
      {users.map(user => 
        <Card key={user.id} user={user} />
        )}
    </div>
  );
}

export default CardListUsers;