import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import "./header.css";
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='headerIcon'/>
      </IconButton>
      <img 
        className='headerLogo'
        src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
        alt=''
      />
      <IconButton>
        <ForumIcon fontSize='large' className='forumIcon'/>
      </IconButton>
    </div>
  )
}

export default Header
