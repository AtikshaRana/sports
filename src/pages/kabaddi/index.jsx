import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/banner.module.scss";
import Banner from "../banner";
export default function index() {
  const img =
    "https://ss-i.thgim.com/public/incoming/fjzecq/article66165963.ece/alternates/FREE_1200/315491992_516453253718340_937966576626146612_n.jpg";
  const title = "Kabaddi";
  return (
    <div>
      <Banner image={img} heading={title} />
    <section className="md:pb-48 bg-white">
    <Link href="/" className={` py-4 px-7 bg-black text-white ${Styles.home}`}>  Home </Link>

      <div className="container">
        <div className="content text-center lg:pg-20">
          <p className="text-black text-lg md:text-2xl tracking-widest">
            Kabaddi is a contact team sport played between two teams of seven
            players, originating from India. The objective of the game is for a
            single player on offense, referred to as a "raider", to run into the
            opposing team's half of the court, touch out as many of their
            players and return to their own half of the court, all without being
            tackled by the defenders in 30 seconds. Points are scored for each
            player tagged by the raider, while the opposing team earns a point
            for stopping the raider. Players are taken out of the game if they
            are touched or tackled, but are brought back in for each point
            scored by their team from a tag or a tackle. It is popular in the
            Indian subcontinent and other surrounding Asian countries. Although
            accounts of kabaddi appear in the histories of ancient India, the
            game was popularised as a competitive sport in the 20th century. It
            is the national sport of Bangladesh. It is the state game of the
            Indian states of Andhra Pradesh, Bihar, Chhattisgarh, Haryana,
            Karnataka, Kerala, Maharashtra, Odisha, Punjab, Tamil Nadu,
            Telangana, and Uttar Pradesh. There are two major disciplines:
            "Punjabi kabaddi", also called "circle style", comprises traditional
            forms of the sport that are played on a circular field outdoors, and
            the "standard style", on a rectangular court indoors, is played in
            major professional leagues and international competitions such as
            the Asian Games. This game is known by numerous names in different
            parts of the Indian subcontinent, such as: kabaddi or chedugudu in
            Andhra Pradesh and Telangana; kabaddi in Maharashtra, Karnataka and
            Kerala; kabaddi, komonti or ha-du-du in West Bengal and Bangladesh;
            baibalaa in Maldives, kauddi or kabaddi in the Punjab region;
            hu-tu-tu in Western India, ha-do-do in Eastern India; chadakudu in
            South India; kapardi in Nepal; kabadi or sadugudu in Tamil Nadu; and
            chakgudu in Sri Lanka.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
