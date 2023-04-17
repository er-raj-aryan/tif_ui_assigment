import React from 'react'
import style from "@/styles/Footer.module.css";
import { Heading } from '@chakra-ui/react';
function Footer() {
  return (
    <div className={style.root}>
    {/* logo */}
    <div className={style.companyLogo}>
      <img src='companyLogo.png' alt="" />
    </div>
    <div className={style.contactUsContainer}>
    <h1 className={style.heading}>Contact Us</h1>
      <ul>
        <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
        <li>example@mail.com</li>
        <li>(929) 443-3434</li>
      </ul>
    </div>
    <div className={style.moreLinksContainer}>
    <h1 className={style.heading}>More</h1>
      <ul>
        <li>About Us</li>
        <li>Products</li>
        <li>Career</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className={style.socialLinksContainer}>
      <h1 className={style.heading}>Social Links</h1>
      <div className={style.socialSubContainer}>
      <ul>
      <li>
      <img className={style.socialIcon} src="instagram.png" alt=""/>
      </li>
      <li>
      <img className={style.socialIcon} src="twitter.png" alt=""/>
      </li>
      <li>
      <img className={style.socialIcon} src="facebook.png" alt=""/>
      </li>
      </ul>
      <p className={style.copyRight}>© 2022 Food Truck Example</p>
      </div>
    </div>
    
    </div>
  )
}

export default Footer