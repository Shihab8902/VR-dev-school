import React from 'react'

import style from '../styles/banner.module.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
   <section className={style.body}>
        <div className={style.container}>
          <h1 className={style.header}>Virtual Reality Developer Training</h1>
          <p className={style.subHeader}>Learn how to make games for Oculus Rift, HTC Vive, Gear VR and Google Cardboard</p>
          <Link to='signin'><button className={style.enrollButton}>Enroll now</button></Link>
        </div>
   </section>
  )
}

export default Banner