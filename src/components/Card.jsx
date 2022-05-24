import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({user}) {
  return (
    <div className='card'>
      <div className='card_container_title'>
        <div className='card__fullname'>{user.name}</div>
        <div className='card__city'>{user.address.city}</div>
      </div>
      <div className='card_container_button'>
        <NavLink to={`/user/${user.id}`}>
          <button className='card_container_button__button'>Смотреть профиль</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;