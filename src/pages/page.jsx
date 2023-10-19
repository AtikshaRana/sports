import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const sports = [
    {
      name: 'Cricket',
      src: 'abc'
    },
    {
      name: 'Football',
      src: '/dhkf/kjskd'
    },
    {
      name: 'Kabaddi',
      src: '/dhkf/kjskjdsfd'
    },
    {
      name: 'Badminton',
      src: '/dhdfkf/kjskjdsfd'
    },
    {
      name: 'Basketball',
      src: '/dhdf/kjskjdsfd'
    }
  ];

  return (
    <section className='bg-green md:pb-48'>
      <div className="container ">
        <div className="upper-layout">
          <Image className='py-2 mx-auto' src="/live.png" width={300} height={100} />
        </div>
        <div className="logo-wrap">
          <Image className='mx-auto' src="/sports.jpg" width={1200} height={200} />
        </div>
        <div className="content py-10 text-center pb-10 lg:pg-20">
          <h1 className=' text-2xl md:text-4xl font-bold mb-3'>Welcome to LiveSportsDuniya!</h1>
          <p className='text-white text-lg md:text-xl tracking-widest'>Get live updates, scores, and news from your favorite sports</p>
        </div>
        <div className="sports bg-brown mb-20">
          <ul className='flex flex-wrap justify-center py-2'>
            {sports.map((sport, index) => (
              <li key={index} className="w-full md:w-auto text-center mb-4 md:mb-0">
                <Link className='text-white text-xl mx-5 py-3 px-3 hover:text-green hover:bg-white inline-block' href={sport.src}>
                  {sport.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=' bg-white md:py-20 py-10'></div>
    </section>
  );
}

