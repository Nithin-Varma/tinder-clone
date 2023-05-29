import React from 'react'
import "./buttons.css";
import ReplyIcon from '@mui/icons-material/Reply';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';


function buttons() {
  return (
    <div className='buttons'>
        <IconButton className='button_repeat'>
            <ReplyIcon fontSize='large' />
        </IconButton>
        <IconButton className='button_left'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='button_right'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='button_star'>
            <StarIcon fontSize='large' />
        </IconButton>
        <IconButton className='button_lighting'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
      
    </div>
  )
}

export default buttons
