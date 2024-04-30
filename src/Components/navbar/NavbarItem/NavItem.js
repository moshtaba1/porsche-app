import React from 'react'
import "./NavItem.css"

export default function NavItem({title,link}) {
  return (
    <div className='nav-button'>
        <a className='nav-title' href={link}>{title}</a>
    </div>
  )
}
