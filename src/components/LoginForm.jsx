import React from 'react'

import { Link } from 'react-router-dom'

import style from '../styles/loginForm.style.module.css'

const LoginForm = () => {
  return (
    <section className={style.body}>
        <form className={style.container}>
            <h1 className={style.heading}>Log in</h1>
            <div className={style.email}>
                <label className={style.label} htmlFor="email">Email</label>
                <input className={style.input} type="email" name="email" id="email"  required />
            </div>

            <div className = {style.password}>
                <label className={style.label} htmlFor="password">Password</label>
                <input className={style.input} type="password" name="password" id="password" required />
            </div>

            <div className={style.options}>
                <div className="rememberMe">
                    <input className={style.checkBox} type="checkbox" name="remember" id="remember" />
                    <label className={style.checkBoxText} htmlFor="remember">Remember Me</label>
                </div>
                <Link className={style.resetPassword}>Forgot Password</Link>
            </div>

            <div className="login-button">
                <button type='submit' className={style.loginButton}>Log in</button>
            </div>

            <div className={style.signup}>
                <p className={style.signupText}>Need an account? </p>  <Link to={'signin'} className={style.signupLink}> Sign Up</Link>
            </div>
        </form>
    </section>
  )
}

export default LoginForm