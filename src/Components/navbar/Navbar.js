import React from 'react'
import NavItem from './NavbarItem/NavItem'

export default function Navbar() {
    const navItem = [
        {title:"About", link:"#"},
        {title:"Pricing", link:"#"},
        {title:"FAQs", link:"#"},
        {title:"Contacts", link:"#"},
    ]

  return (
    <div className='nav-container'>
        <a className='nav-logo' href="#">PORSCHE</a>
        <NavItem {...navItem[0]}/>
        <NavItem {...navItem[1]}/>
        <NavItem {...navItem[2]}/>
        <NavItem {...navItem[3]}/>
    </div>
  )
}
