import React from 'react';
import './Nav.css';
import { IoMdHome } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { BiBookOpen } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {

  const [active,setActive] = useState('#');
  return (
    <nav>
        <a href='#' onClick={()=>setActive('#')} className={active==='#'?'active':''}><IoMdHome /></a>
        <a href='#about' onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><LuUser2 /></a>
        <a href='#experience' onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}><BiBookOpen /></a>
        <a href='#portfolio' onClick={()=>setActive('#portfolio')} className={active==='#portfolio'?'active':''}><RiServiceLine /></a>
        <a href='#contacts' onClick={()=>setActive('#contacts')} className={active==='#contacts'?'active':''}><BiMessageDetail /></a>
      
    </nav>
  )
}

export default Nav;
