import React from 'react'
import { Link } from 'react-router-dom'

import style from '../styles/header.module.css'


const Header = () => {
  return (
    <div className={style.body}>
       <Link className={style.headerLink} to ="/">VR Dev School</Link>
    </div>
  )
}

export default Header