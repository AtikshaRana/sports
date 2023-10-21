import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/banner.module.scss'
import { useState } from 'react'
export default function Page() {
  const sports = [
    {
      name: 'Cricket',
      src: '/cricket',
      image:'https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/15/607285143c6f3fa9671daf910a2d9262167378687009024_original.jpeg?impolicy=abp_cdn&imwidth=720'
    },
    {
      name: 'Football',
      src: '/football',
      image: '/football.webp'
    },
    {
      name: 'Kabaddi',
      src: '/kabaddi',
      image: '/kabaddi.jpeg'
    },
    {
      name: 'Badminton',
      src: '/badminton',
      image: '/badminton.jpeg'
    },
    {
      name: 'Basketball',
      src: '/basketball',
      image: '/basketball.jpeg'
    }
  ];
  // const heroImg = "https://w.forfun.com/fetch/2e/2e4effd8f92bd3dba025202c5e724612.jpeg"
  const [hoveredItem, setHoveredItem] = useState("https://w.forfun.com/fetch/2e/2e4effd8f92bd3dba025202c5e724612.jpeg");
  const [active, setActive] = useState({ isActive: false });

  const handleMouseEnter = (img) => {
    setHoveredItem(img);
    setActive({ isActive: true });
  };

  const handleMouseLeave = () => {
    setHoveredItem("https://w.forfun.com/fetch/2e/2e4effd8f92bd3dba025202c5e724612.jpeg");
    setActive({ isActive: false });
  };


  return (
    <section className=' md:pb-48  hero-banner'>
       <div className={`bgaAbsolute imgchange ${active.isActive ? 'active' : ''}`}>
        <Image
          src={hoveredItem}
          height={1000}
          width={600}
          className={`w-full h-full md:opacity-40 `}
          alt="image"
        />
      </div>
      <div className="container ">
        <div className="upper-layout">
          <Link href="/">
            <Image className='py-2 mx-auto' src="/live.png" width={300} height={100}/>
          </Link>
        </div>
        <div className="logo-wrap">
          <Image className='mx-auto' src="/sports.png" width={1200} height={200} />
        </div>
        <div className="content py-10 text-center pb-10 lg:pg-20">
          <h1 className=' text-2xl md:text-4xl font-bold mb-3'>Welcome to LiveSportsDuniya!</h1>
          <p className='text-white text-lg md:text-xl tracking-widest'>Get live updates, scores, and news from your favorite sports</p>
        </div>
        <div className="sports md:mb-20 relative">
          <ul className='flex flex-wrap justify-center py-2'>
            {sports.map((sport, index) => (
              <li key={index} className="w-full md:w-auto text-center mb-4 md:mb-0">
                <Link  onMouseEnter={() => handleMouseEnter(sport.image)}
                onMouseLeave={() => handleMouseLeave(index)} className='text-white md:bg-green text-xl mx-6 md:py-3 px-4 py-2 bg-green  hover:text-green hover:bg-white inline-block md:border-none ' href={sport.src}>
                  {sport.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      <div className='md:py-5 py-4 flex flex-wrap'>
        <div className=" w-full md:w-2/4 lg:w-4/12 p-2">
         <Image className='mx-auto object-cover h-80' src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/15/607285143c6f3fa9671daf910a2d9262167378687009024_original.jpeg?impolicy=abp_cdn&imwidth=720" width={500} height={150} />
        </div>
        <div className="w-full md:w-2/4 lg:w-4/12 p-2">
         <Image className='mx-auto object-cover h-80' src="/kabaddi.jpeg" width={500} height={150} />
        </div>
        <div className="w-full md:w-2/4 lg:w-4/12 p-2 ">
         <Image className='mx-auto object-cover h-80' src="/badminton.jpeg" width={500} height={150} />
        </div>
        <div className="w-full md:w-2/4 lg:w-4/12 p-2 ">
         <Image className='mx-auto object-cover h-80' src="/basketball.jpeg" width={500} height={150} />
        </div>
        <div className="w-full md:w-2/4 lg:w-4/12 p-2">
         <Image className='mx-auto object-cover h-80' src="/football.webp" width={500} height={150} />
        </div>
        <div className="w-full md:w-2/4 lg:w-4/12 p-2 ">
         <Image className='mx-auto object-cover h-80' src="https://images.cnbctv18.com/wp-content/uploads/2022/07/Cricket-Shutterstock-1019x573.jpg?im=FitAndFill,width=1200,height=900" width={500} height={150} />
        </div>
      </div>
      </div>
    </section>
  );
}

