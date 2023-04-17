import styled from "@emotion/styled";
import React from "react";
import style from "@/styles/LandingSection.module.css";
import Button from "@/components/Button";
import Image from "next/image";

function LandingSection() {
  return (
    <div className={style.root}>
      {/* left description section  */}
      <div className={style.leftContainer}>
        <h1 className={style.title}>Discover the <span className={style.titleHighlight}>Best</span> Food and Drinks</h1>
        <p className={style.description}>
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <div>
         <Button label="Explore Now!" filled />
        </div>
      </div>
      {/* right image section */}
      <div className={style.rightContainer}>
        <img className={style.image2} src="/Vector.png"    alt=""/>
      </div>
    </div>
  );
}

export default LandingSection;
