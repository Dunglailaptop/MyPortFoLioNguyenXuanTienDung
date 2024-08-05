import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/NguyenXuanTienDung-1719929305636.jpg"
import profilepic2 from "../assets/NguyenXuanTien_2.jpg"
import profilepic3 from "../assets/NguyenXuanTien_4.jpg"
import { motion } from "framer-motion"
import "./CssFile/Hero.css";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import javascript from "../assets/github3d.png"
import linkedln from "../assets/linkedln.png"
import facebook from "../assets/facebook.png"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
});

const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
             lg:text-8xl">Nguyen Xuan Tien Dung</motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 
             to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent" >Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter">
                <ul className="listIconInfo">
                  <li className="li_icon"><img className="imgiconinfo" src={javascript}></img><h3 className="title_icon">Github</h3></li>
                  <li className="li_icon"><img className="imgiconinfo" src={linkedln}></img><h3 className="title_icon">Linkedln</h3></li>
                  <li className="li_icon"><img className="imgiconinfo" src={facebook}></img><h3 className="title_icon">Facebook</h3></li>
                </ul>
              </motion.p>
              <button className="BTNCV">Download CV</button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>

                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    
                    src={profilepic3} alt="Tien Dung"></motion.img>

                </SwiperSlide>
                <SwiperSlide >

                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  
                    src={profilepic2} alt="Tien Dung"></motion.img>

                </SwiperSlide>
                <SwiperSlide >

                  <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                   
                    src={profilePic} alt="Tien Dung"></motion.img>

                </SwiperSlide>

              </Swiper>
            </div>
          </div>




        </div>
      </div>
    </>
  );
}

export default Hero;



