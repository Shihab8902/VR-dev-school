import React from 'react'

import { Link } from 'react-router-dom'

import style from '../styles/signinForm.style.module.css'

const LoginForm = () => {
  return (
    <section className={style.body}>
        <form className={style.container}>
            <h1 className={style.heading}>Sign in</h1>

            <div className={style.fullName}>
                <label className={style.label} htmlFor="email">Full Name</label>
                <input className={style.input} type="email" name="email" id="email"  required />
            </div>

            <div className={style.email}>
                <label className={style.label} htmlFor="email">Email</label>
                <input className={style.input} type="email" name="email" id="email"  required />
            </div>

            <div className = {style.password}>
                <label className={style.label} htmlFor="password">Password</label>
                <input className={style.input} type="password" name="password" id="password" required placeholder="Minimum 8 character" />
            </div>

            <div className={style.options}>
                    <input className={style.checkBox} type="checkbox" name="remember" id="remember" />
                    <p className={style.optionsText}>Yes, VR Dev School can email me with promotions and news. (optional)</p>
            </div>

            <div className={style.agreement}>
                <p className={style.agreementText}>By signing up, I agree to VR Dev School's <Link to={'/termsAndConditions'} className={style.agreementLink}>Terms of Use</Link> & <Link to={'/privacyPolicy'} className={style.agreementLink}>Privacy Policy</Link>, and the <Link to={'/termsAndConditions'} className={style.agreementLink}>Terms of Use</Link> & <Link to={'/privacyPolicy'} className={style.agreementLink}>Privacy Policy</Link> of the learning platform.</p>
            </div>

            <div className="login-button">
                <button type='submit' className={style.signinButton}>Sign in</button>
            </div>

            <div className={style.signup}>
                <p className={style.signupText}>Already have an account? </p>  <Link to={'login'} className={style.signupLink}> Log in</Link>
            </div>
        </form>
    </section>
  )
}

export default LoginForm