import React from 'react'
import "./RightComponent.css"

export default function RightComponent() {

  return (
    <div className='right-container'>
        <div className='tag-name'>918</div>
        <img className='right-img' src='./images/918.jpeg'></img>
        <div className='main-title'>
            <h2>918 Spider</h2>
            <h3>2010</h3>
        </div>
        <div className='divider'></div>
        <p className='first-p'>
            Introduced in 2003, The Porsche 911 GT3 RS stands as a testament to
            the legacy of pure driving pleasure. This track-focused marvel exudes
            an aura of unbridled athleticism and uncompromising performance
            that leaves car enthusiasts in awe. Every aspect of its design is
            meticulously crafted to deliver an exhilarating experience that
            captivates the senses.
            <br/>
            <br/>
            At first glance, the 911 GT3 RS commands attention with its
            unmistakable presence. Its sleek and aggressive silhouette hints at the
            incredible power that lies beneath its hood. Aerodynamic
            enhancements, such as an adjustable rear wing and large air intakes
            demonstrate Porsche's relentless pursuit of speed and precision.
        </p>
        
        <div className='start-btn'>
                <h4>Get Started</h4>
                <img className='start-icon' src='./images/icons/white-icon.png'></img>
        </div>

    </div>
  )
}
