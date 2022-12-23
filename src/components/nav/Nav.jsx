import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceFill} from "react-icons/ri"
import {BiMessage} from "react-icons/bi"

const Nav = () => {
  return (
    <div className='nav' >
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><BiMessage/></a>

    </div>
  )
}

export default Nav