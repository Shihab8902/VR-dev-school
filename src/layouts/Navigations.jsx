import React, { useRef } from 'react'
import { FaBars } from "react-icons/fa";

import style from '../styles/navigation.module.css'
import { Link } from 'react-router-dom'


const Navigations = () => {

  const navRef = useRef();

  const menuController = ()=>{
    navRef.current.classList.toggle(style.active)
  }


  return (
    <header className={style.body}>
        <div className="brand">
            <Link to='/' className={style.brandName}>VR Dev School</Link>
        </div>

        <div className={style.navigations} ref={navRef}>
            <Link className={style.navLinks} to='/'>Home</Link>
            <Link to='/login' className={style.navLinks}>Login</Link>
            <Link to='/signin'><button className={style.navLinkMega}>Sign up</button></Link>
        </div>

        <div className="hamburger">
              <button onClick={menuController} className={style.menuButton}> <FaBars /> </button>
        </div>
    </header>
  )
}

export default Navigations