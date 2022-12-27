import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/sepehr-haghdoustgame-1b645125a/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/SylvanusSlytherin?tab=repositories" target='_blank'><FaGithub/></a>
      <a href="https://t.me/sylvanus_the_sorcerer" target='_blank'><BsTelegram/></a>
    </div>
  )
}

export default HeaderSocials
