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
    <section className='bg-green pb-48'>
      <div className="container ">
        <div className="upper-layout">
          <Image className='py-2 mx-auto' src="/live.png" width={300} height={100} />
        </div>
        <div className="logo-wrap">
          <Image className='mx-auto' src="/sports.jpg" width={1200} height={200} />
        </div>
        <div className="content py-10 text-center pb-20">
          <h1 className='text-4xl font-bold mb-3'>Welcome to LiveSportsDuniya!</h1>
          <p className='text-white text-xl tracking-widest'>Get live updates, scores, and news from your favorite sports</p>
        </div>
        <div className="sports bg-brown mb-20">
          <ul className='flex flex-wrap py-2 justify-center'>
            {sports.map((sport, index) => (
              <li key={index}>
                <Link className='text-white text-xl mx-5 py-1' href={sport.src}>
                  {sport.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=' bg-white py-20'></div>
    </section>
  );
}

