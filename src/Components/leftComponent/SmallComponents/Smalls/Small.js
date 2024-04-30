import React from 'react'
import "./Small.css"

export default function Small() {
  return (
    <div className='small-container'>
        <div className='small-top'>
            <div className='small-tag-name'>991</div>
            <img className='big-icon' src='./images/icons/black-icon.png'/>
        </div>
            <img className='small-img' src='./images/gt3-rs.jpg'></img>
            <h2>GT3 RS</h2>
            <div className='small-divider'></div>
            <p>
                Introduced in 2003, The Porsche 911 GT3 RS
            </p>

    </div>
  )
}
