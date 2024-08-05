import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import "../components/CssFile/Technologies.css";
import { SiSwift } from "react-icons/si";
import swiftIcon from "../assets/swift1.png";
import CSharp from "../assets/c-sharp.png";
import Java from "../assets/java.png";
import springboot from "../assets/springboots.png";
import rxswift from "../assets/rxswift.png"
import boostrap from "../assets/boostraps.png"
import mysql from "../assets/mysql.png"
import postgresql from "../assets/postgresql.png"
import visualCode from "../assets/VisualCode.png"
import visualCom from "../assets/VisualCom.png"
import netbean from "../assets/netbeans.png"
import Docker from "../assets/docker.png"
import javascript from "../assets/js.png"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


const Technologies = () => {
    return (
        <div className="borderr-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Skills</motion.h1>
            <div className="List_Skill">
                <div className="">
                    <h2 className="title_tech">Languages</h2>
                    <div className="list grid-cols-2">

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={CSharp}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">C Sharp</h2>
                        </div>

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={swiftIcon}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Swift</h2>
                        </div>
                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={Java}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Java</h2>
                        </div>
                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={javascript}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">JavaScript</h2>
                        </div>

                    </div>
                </div>
                <div className="">
                    <h2 className="title_tech">Technologies</h2>
                    <div className="list grid-cols-2">

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={springboot}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">SpringBoot</h2>
                        </div>

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={rxswift}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">RxSwift</h2>
                        </div>
                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={boostrap}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Boostrap</h2>
                        </div>
                       

                    </div>
                </div>
                <div className="">
                    <h2 className="title_tech">DataBase</h2>
                    <div className="list grid-cols-2">

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={postgresql}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">postgresql</h2>
                        </div>

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={mysql}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Mysql</h2>
                        </div>
                        

                    </div>
                </div>
                <div className="">
                    <h2 className="title_tech">Tools</h2>
                    <div className="list grid-cols-2">

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={visualCode}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Visual Code</h2>
                        </div>

                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={visualCom}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Visual Commnity</h2>
                        </div>
                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={netbean}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Netbeans</h2>
                        </div>
                        <div>
                            <div className="roundOfImage">
                                <div className="imgedit mx-2 my-2 flex rounded-full bg-font w-20 h-20 justify-center items-center">
                                    <img className="w-10" src={Docker}></img>
                                </div>
                            </div>
                            <h2 className="title_skills">Docker</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Technologies;