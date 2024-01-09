import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/banner.module.scss";
import Banner from "../banner";
export default function index() {
  const [activeTab, setActiveTab] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define the positions at which to reveal tabs
      const revealPositions = {
        section1: 100, // Adjust the position based on your layout
        section2: 120, // Adjust the position based on your layout
        section3: 130, // Adjust the position based on your layout
      };
      // Determine which tab to reveal based on scroll position
      let newActiveTab = null;
      for (const section in revealPositions) {
        if (scrollY >= revealPositions[section]) {
          newActiveTab = section;
        }
      }
      // If the active tab has changed, update it
      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]);

  return (
    <div>
      <div className="tab-container">
        <button className={activeTab === 'section1' ? 'active' : ''}>Tab 1</button>
        <button className={activeTab === 'section2' ? 'active' : ''}>Tab 2</button>
        <button className={activeTab === 'section3' ? 'active' : ''}>Tab 3</button>
      </div>

      <div className="content-container">
        <section id="section1">Content for Section 1</section>
        <section id="section2">Content for Section 2</section>
        <section id="section3">Content for Section 3</section>
      </div>
    </div>
  );

  // const img =
  //   "/badminton.jpeg";
  // const title = "Badminton";
  // return (
  //   <div>
  //     <Banner image={img} heading={title} />
  //     <section className="md:pb-48 bg-white">
  //       <Link
  //         href="/"
  //         className={` py-4 px-7 bg-black text-white ${Styles.home}`}
  //       >
  //         {" "}
  //         Home{" "}
  //       </Link>
  //       <div className="container">
  //         <div className="content text-center lg:pg-20">
  //           <p className="text-black text-lg md:text-2xl tracking-widest">
  //             Badminton is a racquet sport played using racquets to hit a
  //             shuttlecock across a net. Although it may be played with larger
  //             teams, the most common forms of the game are "singles" (with one
  //             player per side) and "doubles" (with two players per side).
  //             Badminton is often played as a casual outdoor activity in a yard
  //             or on a beach; formal games are played on a rectangular indoor
  //             court. Points are scored by striking the shuttlecock with the
  //             racquet and landing it within the other team's half of the court.
  //             Each side may only strike the shuttlecock once before it passes
  //             over the net. Play ends once the shuttlecock has struck the floor
  //             or ground, or if a fault has been called by the umpire, service
  //             judge, or (in their absence) the opposing side. The shuttlecock
  //             is a feathered or (in informal matches) plastic projectile that
  //             flies differently from the balls used in many other sports. In
  //             particular, the feathers create much higher drag, causing the
  //             shuttlecock to decelerate more rapidly. Shuttlecocks also have a
  //             high top speed compared to the balls in other racquet sports. The
  //             flight of the shuttlecock gives the sport its distinctive nature.
  //             The game developed in British India from the earlier game of
  //             battledore and shuttlecock. European play came to be dominated by
  //             Denmark but the game has become very popular in Asia, with recent
  //             competitions dominated by China. In 1992, badminton debuted as a
  //             Summer Olympic sport with four events: men's singles, women's
  //             singles, men's doubles, and women's doubles;mixed doubles was
  //             added four years later. At high levels of play, the sport demands
  //             excellent fitness: players require aerobic stamina, agility,
  //             strength, speed, and precision. It is also a technical sport,
  //             requiring good motor coordination and the development of
  //             sophisticated racquet movements.
  //           </p>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
}
