import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import PrivacyPolicyContent from '../components/PrivacyPolicyContent'
import SecondaryFooter from '../layouts/secondaryFooter'

const PrivacyPolicy = () => {
  return (
    <section>
        <Helmet>
            <title>VR Dev School</title>
        </Helmet>
            <Header />
                <PrivacyPolicyContent />
            <SecondaryFooter />
    </section>
  )
}

export default PrivacyPolicy