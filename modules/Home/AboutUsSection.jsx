import React from 'react';
import style from '@/styles/AboutUsSection.module.css';
import Button from '@/components/Button';

function AboutUs
() {
  return (
    <div className={style.root}>
    <div className={style.leftContainer}>
        <img src="aboutus.png" alt='' />
    </div>
    <div className={style.rightContainer}>
      <h2>About Us</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
      <div>
      <Button filled label="Read More"/>
      </div>
    </div>
    </div>
  )
}

export default AboutUs;
