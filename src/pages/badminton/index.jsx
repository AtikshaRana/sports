import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/banner.module.scss";
import Banner from "../banner";
export default function index() {
  const img =
    "https://images.squarespace-cdn.com/content/v1/5bd969d6506fbe4b1a0f5e6b/1613556027347-TNYY9VEX2PRTODIHEP9J/shutterstock_1592944909+-+Badminton+racket+and+shuttlecock+in+motion_1200px+JPEG.jpg";
  const title = "Badminton";
  return (
    <div>
      <Banner image={img} heading={title} />
      <section className="md:pb-48 bg-white">
        <Link
          href="/"
          className={` py-4 px-7 bg-black text-white ${Styles.home}`}
        >
          {" "}
          Home{" "}
        </Link>
        <div className="container">
          <div className="content text-center lg:pg-20">
            <p className="text-black text-lg md:text-2xl tracking-widest">
              Badminton is a racquet sport played using racquets to hit a
              shuttlecock across a net. Although it may be played with larger
              teams, the most common forms of the game are "singles" (with one
              player per side) and "doubles" (with two players per side).
              Badminton is often played as a casual outdoor activity in a yard
              or on a beach; formal games are played on a rectangular indoor
              court. Points are scored by striking the shuttlecock with the
              racquet and landing it within the other team's half of the court.
              Each side may only strike the shuttlecock once before it passes
              over the net. Play ends once the shuttlecock has struck the floor
              or ground, or if a fault has been called by the umpire, service
              judge, or (in their absence) the opposing side. The shuttlecock
              is a feathered or (in informal matches) plastic projectile that
              flies differently from the balls used in many other sports. In
              particular, the feathers create much higher drag, causing the
              shuttlecock to decelerate more rapidly. Shuttlecocks also have a
              high top speed compared to the balls in other racquet sports. The
              flight of the shuttlecock gives the sport its distinctive nature.
              The game developed in British India from the earlier game of
              battledore and shuttlecock. European play came to be dominated by
              Denmark but the game has become very popular in Asia, with recent
              competitions dominated by China. In 1992, badminton debuted as a
              Summer Olympic sport with four events: men's singles, women's
              singles, men's doubles, and women's doubles;mixed doubles was
              added four years later. At high levels of play, the sport demands
              excellent fitness: players require aerobic stamina, agility,
              strength, speed, and precision. It is also a technical sport,
              requiring good motor coordination and the development of
              sophisticated racquet movements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
