import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Action } from '../redux/actionType/ActionType';

import PostCard from './PostCard';

function UserCard(props) {

  const { id } = useParams()
  const [user, setUser] = useState({})
  // const [posts, setPosts] = useState([])
  const [showCom, setShowCom] = useState(null)
  const dispatch = useDispatch()
  const {posts} = useSelector(state => state)

  console.log(id);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(({data}) => setUser(data))

    axios(`https://jsonplaceholder.typicode.com/posts/`)
    .then(({data}) => dispatch({type: Action.INIT_POSTS, payload: data}))
  }, [])
  
  return (
    <div className='user_card'>
      <div className='user_card__title'>
        <div className='user_card__title_name'>
          <div>{user.name}</div>
        </div>
        <div className='user_card__title_info'>
          <div>{user?.address?.city}</div>
          <div>{user?.email}</div>
          <div>{user?.phone}</div>
          <button>Написать сообщение</button>
          <button>Предложить сходить на концерт</button>
        </div>
      </div>

      <div className='user_card__posts'>
        <div className='user_card__posts_title'>Посты</div>
        <div className='user_card_posts__container'>
          {posts?.filter(post => 
          post.userId === +id).map(post => 
              <PostCard key={post.id} post={post} showCom={showCom} setShowCom={setShowCom} />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserCard;