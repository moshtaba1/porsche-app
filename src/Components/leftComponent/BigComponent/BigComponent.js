import React from 'react'
import "./BigComponent.css"

export default function BigComponent() {
  return (
    <div className='big-container'>
        <h1>Need Money <br/> For Porsche</h1>
        <div className='big-divider'></div>
        <div className='big-info'>
            <p className='big-p'>
                Introduced in 2003, The Porsche 911 GT3 RS<br/> stands as a testament to the
            </p>
            <img className='big-icon' src='./images/icons/black-icon.png'/>
        </div>
    </div>
  )
}
