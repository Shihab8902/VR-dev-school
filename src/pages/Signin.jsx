import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import SignupForm from '../components/SignupForm'
import SecondaryFooter from '../layouts/secondaryFooter'

const Signin = () => {
  return <section>
     <Helmet>
        <title>Signin | VR Dev School</title>
    </Helmet>
        <Header />
            <SignupForm />
        <SecondaryFooter />    
  </section>
}

export default Signin