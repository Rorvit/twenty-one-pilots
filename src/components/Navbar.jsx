import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink className='navlink' to='/'>
        <div className='navbar__logo'>CONCERT CLUB</div>
      </NavLink>
      <div className='navbar__inputs'>
        <div className='navbar__inputs_left'>Версия для слабовидящих</div>
        <div className='navbar__inputs_right'>Мой профиль</div>
      </div>
    </div>
  );
}

export default Navbar;