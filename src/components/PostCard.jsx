import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import ButtonEdit from './ButtonEdit';

function PostCard({post, setShowCom, showCom}) {

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm();
  const onSubmit = (data) => axios(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    body: data
  })


  return (
    <div className='post_card' onMouseLeave={() => setShowCom(null)}>
      <div className='post_card_head'>
        <div>{(post.title).slice(0,10)}</div>
        <div>{'2022.08.11'}</div>
      </div>
      <div>{post.body}</div>
        <button className='edit' onClick={() => setShowCom(post.id)} >Coment</button>
      {showCom === +post.id && 
        <div className='container_inputs'>
           <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='name' {...register('name')} />
            <input placeholder='email' {...register('email')} />
            <textarea cols={'3'} rows={'5'} {...register('text')} autoFocus ></textarea>
            <div>
              <button>Send</button>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default PostCard;

// onMouseEnter={() => setShowCom(post.id)} onMouseLeave={() => setShowCom(null)} 