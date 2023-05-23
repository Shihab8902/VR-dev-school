import React from 'react'
import { Link } from 'react-router-dom'

import style from '../styles/footer.module.css'

const Footer = () => {
  return <section className={style.footer}>
        <p className={style.copyrightMessage}>&copy; VR Dev School 2023</p>
        <div className={style.links}>
            <Link to={'termsAndConditions'} className={style.link}>Terms of Use</Link>
            <Link to={'privacyPolicy'} className={style.link}>Privacy Policy</Link>
        </div>
        <p>Powered by: webdev_shihab</p>
  </section>
}

export default Footer