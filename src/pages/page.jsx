import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/banner.module.scss'
export default function Page() {
  const sports = [
    {
      name: 'Cricket',
      src: '/cricket'
    },
    {
      name: 'Football',
      src: '/football'
    },
    {
      name: 'Kabaddi',
      src: '/kabaddi'
    },
    {
      name: 'Badminton',
      src: '/badminton'
    },
    {
      name: 'Basketball',
      src: '/basketball'
    }
  ];

  return (
    <section className=' md:pb-48  hero-banner'>
       <div className="bgaAbsolute">
        <Image
          src="https://w.forfun.com/fetch/2e/2e4effd8f92bd3dba025202c5e724612.jpeg"
          height={1000}
          width={600}
          className="w-full h-full opacity-30"
          alt="image"
        />
      </div>
      <div className="container ">
        <div className="upper-layout">
          <Image className='py-2 mx-auto' src="/live.png" width={300} height={100}/>
        </div>
        <div className="logo-wrap">
          <Image className='mx-auto' src="/sports.png" width={1200} height={200} />
        </div>
        <div className="content py-10 text-center pb-10 lg:pg-20">
          <h1 className=' text-2xl md:text-4xl font-bold mb-3'>Welcome to LiveSportsDuniya!</h1>
          <p className='text-white text-lg md:text-xl tracking-widest'>Get live updates, scores, and news from your favorite sports</p>
        </div>
        <div className="sports  mb-20 relative">
        
          <ul className='flex flex-wrap justify-center py-2'>
            {sports.map((sport, index) => (
              <li key={index} className="w-full md:w-auto text-center mb-4 md:mb-0">
                <Link className='text-white md:bg-green text-xl mx-5 md:py-3 px-3 md:hover:text-green md:hover:bg-white inline-block md:border-none hover:border-white  border-green border-2' href={sport.src}>
                  {sport.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      <div className='md:py-5 py-4 px-4 flex flex-wrap'>
        <div className=" md:w-4/12 p-2">
         <Image className='mx-auto object-cover h-80' src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/15/607285143c6f3fa9671daf910a2d9262167378687009024_original.jpeg?impolicy=abp_cdn&imwidth=720" width={500} height={150} />
        </div>
        <div className=" w-4/12 p-2">
         <Image className='mx-auto object-cover h-80' src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-7Qo1RXAQGnGhuiIeWbNgobGydo_MfogtW8_Dp_cNEFjgVa9YCHWtNZpm-_c7owIZG4&usqp=CAU" width={500} height={150} />
        </div>
        <div className=" w-4/12 p-2 ">
         <Image className='mx-auto object-cover h-80' src="https://images.squarespace-cdn.com/content/v1/5bd969d6506fbe4b1a0f5e6b/1613556027347-TNYY9VEX2PRTODIHEP9J/shutterstock_1592944909+-+Badminton+racket+and+shuttlecock+in+motion_1200px+JPEG.jpg" width={500} height={150} />
        </div>
        <div className=" w-4/12 p-2 ">
         <Image className='mx-auto object-cover h-80' src="https://as1.ftcdn.net/v2/jpg/06/29/67/34/1000_F_629673462_C1xnEWxqGU5LCKj1KKQh5u6PSAuHZJun.jpg" width={500} height={150} />
        </div>
        <div className=" w-4/12 p-2">
         <Image className='mx-auto object-cover h-80' src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_md_2x/f_auto/primary/ngdjbafv3twathukjbq2" width={500} height={150} />
        </div>
        <div className=" w-4/12 p-2 ">
         <Image className='mx-auto object-cover h-80' src="https://images.cnbctv18.com/wp-content/uploads/2022/07/Cricket-Shutterstock-1019x573.jpg?im=FitAndFill,width=1200,height=900" width={500} height={150} />
        </div>
      </div>
      </div>
    </section>
  );
}

