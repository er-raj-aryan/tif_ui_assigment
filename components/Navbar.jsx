import React from 'react'
import style from '@/styles/Navbar.module.css'
import Button from './Button'
import Image from 'next/image'

function Navbar() {
  return (
    <div className={style.root}>
        <img className={style.companyLogo} src="companyLogo.png" alt="Food blogging"/>
        <Button label="Get in Touch"  filled />
    </div>
  )
}

export default Navbar