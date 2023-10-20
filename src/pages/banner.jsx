import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/banner.module.scss'

export default function Banner({ image, heading }) {
  return (
    <section className={`hero-banner ${Styles.Height}`}>
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

        <div className="content text-center p-6 md:bg-transparent">
          <h1 class=" text-6xl md:text-8xl font-bold mb-3">{heading}</h1>
        </div>
      </div>
    </section>
  );
}
