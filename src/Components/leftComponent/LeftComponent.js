import React from 'react'
import "./LeftComponent.css"
import BigComponent from './BigComponent/BigComponent'
import SmallComponents from './SmallComponents/SmallComponents'

export default function LeftComponent() {
  return (
    <div className='left-container'>
      <BigComponent/>
      <SmallComponents/>
    </div>
  )
}
