import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt } from 'react-icons/bi'
import {RiServiceLine } from 'react-icons/ri'
import {BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
   <nav>
    <a className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} href="#"><AiOutlineHome/></a>
    <a className={activeNav === '#about' ? 'active' : ''} href="#about" onClick={() => setActiveNav('#about')}><AiOutlineUser/></a>
    <a className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')} href="#experience"><BiBookAlt/></a>
    <a className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')} href="#services"><RiServiceLine/></a>
    <a className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')} href="#contact"><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
