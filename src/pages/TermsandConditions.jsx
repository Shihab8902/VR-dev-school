import React from 'react'
import Header from '../layouts/Header'
import SecondaryFooter from '../layouts/secondaryFooter'
import TermsandConditionsContent from '../components/TermsandConditionsContent'
import { Helmet } from 'react-helmet'

const TermsandConditions = () => {
  return (
    <section>
      <Helmet>
        <title>VR Dev School</title>
      </Helmet>
        <Header />
                <TermsandConditionsContent />
        <SecondaryFooter />
    </section>
  )
}

export default TermsandConditions