import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/banner.module.scss'

export default function Banner({ image, heading }) {
  return (
    <section className={Styles.Height}>
      <div className="bgaAbsolute">
        <Image
          src={image}
          height={1000}
          width={600}
          className="w-full h-full md:opacity-40"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="content">
          <h1>{heading}</h1>
        </div>
      </div>
    </section>
  );
}
