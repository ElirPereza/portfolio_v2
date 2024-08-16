"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/global/worksliderbtns";

interface StackItem {
  name: string;
}

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: StackItem[];
  image: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    num: "01",
    category: "Full Stack",
    title: "CRUD APP",
    description: "This project is a CRUD (Create, Read, Update, Delete) application developed to showcase skills in modern web development. The application allows users to manage data through an intuitive and functional interface, incorporating advanced search features for a better user experience.",
    stack: [
      { name: "Typescript" }, 
      { name: "React" }, 
      { name: "Reactquery" },
      { name: "React Hook Form" },
      { name: "Next JS" },
      { name: "Tailwind" },
      { name: "Node" },
      { name: "Express" },
      { name: "MondoDB" },
      { name: "ShadCN" },
      { name: "Zustand" },
    ],
    image: "/Crud.png",
    live: "https://crud-app-zeta-ashy.vercel.app/",
    github: "https://github.com/ElirPereza/Crud-App",
  },
  {
    num: "02",
    category: "Frontend",
    title: "APP FINANCE MANAGEMENT MODEL",
    description: "I developed banking application using modern technologies such as Supabase, React, Next.js, and Tailwind CSS. This application includes user registration and login functionalities,as well as a well-designed user interface for managing bank accounts, making transfers, and viewing transaction history.",
    stack: [
      { name: "Typescript" }, 
      { name: "React" }, 
      { name: "Reactquery" },
      { name: "React Hook Form" },
      { name: "Next JS" },
      { name: "Tailwind" },
      { name: "Node" },
      { name: "CSS" },
      { name: "Supabase" },
      { name: "ShadCN" },
      { name: "Zustand" },
      { name: "Axios" },
    ],
    image: "/bank_3.png",
    live: "https://bank-app-master-f.vercel.app/auth/login",
    github: "https://github.com/jmaldona18/project2",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Portfolio First version",
    description: "This project marked the beginning of my journey in web development, where I explored and learned how to use the NextUI component library. While creating this portfolio, I focused on designing a modern and responsive interface that showcased my emerging frontend development skills. The process allowed me to deepen my understanding of integrating dynamic and styled components, while enhancing my grasp of application architecture in Next.js. This portfolio not only reflects my growth as a developer but also my ability to learn and apply new technologies effectively.",
    stack: [
      { name: "Typescript" }, 
      { name: "React" }, 
      { name: "React Hook Form" },
      { name: "Next JS" },
      { name: "Tailwind" },
      { name: "Node" },
      { name: "Nextui" },
    ],
    image: "/portfolio1.png",
    live: "https://porfolio-final-version.vercel.app/projects",
    github: "https://github.com/ElirPereza/porfolio_final_version",
  },
];

const Work: React.FC = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-w-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h3 className="text-2xl text-accent">{project.title}</h3>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stacks */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={item.name}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[490px] md:w-full xl:w-[50%] ">
            <Swiper
              className="xl:h-[510px] mb-16"
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) =>
                setProject(projects[swiper.activeIndex])
              }
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 mb-4">
                    {" "}
                    {/* Añadido mb-4 */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        alt="none"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[-5px] z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
