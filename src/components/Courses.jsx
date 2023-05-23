import React from 'react'
import { Link } from 'react-router-dom'

import style from '../styles/courses.module.css'

//Images
import courseImage from '../assets/images/courseImageOne.png';
import mentorImage from '../assets/images/mentor.jpg';

const Courses = () => {
  return (
    <section className={style.courseSection}>
        <h2 className={style.heading}>Featured Course</h2>
        <Link className={style.courseNavigate} to={'/login'}>
        
                <div className={style.cardBody}>
                    <img className={style.mainImage} src={courseImage} alt='Image not found' />
                        <div className={style.cardTextContent}>
                            <h4 className={style.courseHeading}>Cardboard Developer Mini Course</h4>
                            <p className={style.courseText}>Create a virtual reality game for google cardboard on android and IOS</p>
                                <div className={style.pricing}>
                                    <img className={style.mentor} src={mentorImage} alt="Image not found" />
                                    <p className={style.price}>FREE</p>
                                </div>
                        </div>
                </div>
            
        </Link>
    </section>
  )
}

export default Courses