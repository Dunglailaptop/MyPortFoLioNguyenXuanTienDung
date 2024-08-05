import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import { FaGithub } from "react-icons/fa6";
import "../components/CssFile/project.css"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Project</motion.h1>
      <div className="ListTitleProject">
        <ul className="ListTitleProject_container">
          <li className="li_btn"><button className="btn_title">Web</button></li>
          <li className="li_btn"><button className="btn_title">Web Server</button></li>
          <li className="li_btn"><button className="btn_title">Mobile</button></li>
          <li className="li_btn"><button className="btn_title">Window Form</button></li>
        </ul>
      </div>
      <div className="container_card_dis grid-cols-1 sm:grid-cols-2 md:flex lg:grid-cols-3 xl:grid-cols-4">
        {/* {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                         <motion.div
                           whileInView={{opacity: 1, x:0}}
                           initial={{opacity: 0, x: -100}}
                           transition={{duration:0.5}}
                         className="w-full lg:w-1/4">
                           <img 
                           src={project.image} 
                           width={150}
                           height={150}
                           alt={project.title}
                           className="mb-6 rounded"
                           ></img>
                        </motion.div>
                          <motion.div
                           whileInView={{opacity: 1, x:0}}
                           initial={{opacity: 0, x: 100}}
                           transition={{duration:1}}
                          className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                               <span key={index} className="mr-2 rounded 
                               bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                               
                               {tech}
                               </span>
                            ))}
                          </motion.div>
                    </div>
            ))} */}

        {/* // <ImageCard imgSrc={ImageCard}>
          //   <h3 className="text-xl font-bold mb-2">
          //     Tittle className
          //   </h3>
          //   <p>
          //     iowqepqwieoiqwpoeiqwopieopqwiep
          //     qweopiqwoepiqwe
          //     Qweopqiweopqwiopeiq
          //   </p>
          //   <div className="space-x-4 mt-4">
          //     <button className="btn">

          //     </button>
          //   </div>
          // </ImageCard> */}
        {PROJECTS.map((project, index) => (
          <div className="card-container">
            <div className="image-container">
              <img src="https://th.bing.com/th/id/OIP.K64a_Nkutw76VB7L7MrNmwHaFj?rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3 className="title-name-cards">Booking Cinema App</h3>
              </div>
              <div className="card-body">
                <p className="title-body">This is manager system ciname with the buy ticket and support infomation to ticket movie, show the trailer movie. You can click chair and order it</p>
              </div>
            </div>
        
            <div className="btn">
              <button className="btn-card">
                <a className="btn-card-button">
                  GitHub
                </a> <FaGithub />
              </button>
            </div>
          </div>
        ))}




      </div>
    </div>
  );
};

export default Project;