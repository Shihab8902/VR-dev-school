import React from 'react'
import Banner from '../components/Banner'
import Courses from '../components/Courses'
import Navigations from '../layouts/Navigations'
import Footer from '../layouts/Footer'
import { Helmet } from 'react-helmet'

const Home = () => {
  return <div>
    <Helmet>
        <title>Home | VR Dev School</title>
    </Helmet>
    <Navigations />
      <Banner />
      <Courses />
    <Footer />
  </div>
}

export default Home