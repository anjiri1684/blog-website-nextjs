import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import myImage from "../../public/images/site/vin.jpg";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={myImage}
          alt="An image showing vincent"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Vincent</h1>
      <p>
        I blog about my journey in web development expecially frontend
        frameworks like React and Vue
      </p>
    </section>
  );
}

export default Hero;
