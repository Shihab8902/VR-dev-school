import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import LoginForm from '../components/LoginForm'
import SecondaryFooter from '../layouts/secondaryFooter'

const Login = () => {
  return <section>
    <Helmet>
      <title>Login | VR Dev School</title>
    </Helmet>
        <Header />
            <LoginForm />
        <SecondaryFooter />    
  </section>
}

export default Login