import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signin from '../pages/Signin'
import TermsandConditions from '../pages/TermsandConditions'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Error from '../pages/Error'

const Index = () => {
  return <BrowserRouter>
            
                <Routes>
                    <Route path='/' element ={<Home />}/>
                    <Route path='/login' element ={<Login />}/>
                    <Route path='/signin/login' element ={<Login />}/>
                    <Route path='/signin' element ={<Signin />}/>
                    <Route path='/login/signin' element ={<Signin />}/>
                    <Route path='/termsAndConditions' element ={<TermsandConditions />}/>
                    <Route path='/privacyPolicy' element ={<PrivacyPolicy />}/>
                    <Route path='*' element ={<Error />}/>
                </Routes>
  
        </BrowserRouter>
}

export default Index