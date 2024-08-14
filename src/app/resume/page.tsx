"use client";

import { icons } from "lucide-react";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiDjango,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNpm,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiYarn,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";
import {
  LuUserCircle,
  LuSmartphone,
  LuClock3,
  LuMail,
  LuBriefcase,
  LuLanguages,
} from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I’m Jesús, an electronics engineer from Universidad de la Costa with a robust background in programming. My passion for technology drives me to create innovative solutions to complex problems. I thrive on leveraging cutting-edge online resources and embracing new challenges to push the boundaries of what’s possible. With a commitment to continuous learning, I aim to evolve into a developer who not only adapts to new technologies but also shapes them to make a meaningful impact on the world. My goal is to transform ideas into remarkable digital experiences that inspire and drive positive change.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jesus Maldonado",
      icon: <LuUserCircle />,
    },
    {
      fieldName: "Phone",
      fieldValue: "(+57) 304 678 2289",
      icon: <LuSmartphone />,
    },
    { fieldName: "Experience", fieldValue: "1+ Years", icon: <LuClock3 /> },
    { fieldName: "Nationality", fieldValue: "Colombian", icon: <TbWorld /> },
    {
      fieldName: "Email",
      fieldValue: "jmaldona18@cuc.edu.co",
      icon: <LuMail />,
    },
    { fieldName: "Freelance", fieldValue: "Available", icon: <LuBriefcase /> },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
      icon: <LuLanguages />,
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi Experience",
  description:
    "bsdfkjsakjhfka  shdfkha fkashkfhaskfhkashfkashkfhaskfhkjashfkshfkhk  dshfksdhfkdshjf",
  items: [
    {
      company: "tech solutions inc",
      position: "full stack developer",
      duration: "2021-present",
    },
    {
      company: "tech solutions inc",
      position: "full stack developer",
      duration: "2021-present",
    },
    {
      company: "tech solutions inc",
      position: "full stack developer",
      duration: "2021-present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi Education",
  description:
    "bsdfkjsakjhfka  shdfkha fkashkfhaskfhkashfkashkfhaskfhkjashfkshfkhk  dshfksdhfkdshjf",
  items: [
    {
      company: "tech solutions inc",
      posotion: "full stack developer",
      duration: "2021-present",
    },
    {
      company: "tech solutions inc",
      posotion: "full stack developer",
      duration: "2021-present",
    },
    {
      company: "tech solutions inc",
      posotion: "full stack developer",
      duration: "2021-present",
    },
  ],
};

const skills = {
  icon: "/assets/resume/cap.svg",
  title: "Mi Education",
  description:
    "bsdfkjsakjhfka  shdfkha fkashkfhaskfhkashfkashkfhaskfhkjashfkshfkhk  dshfksdhfkdshjf",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },

    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },

    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },

    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },

    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },

    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },

    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },

    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className=" flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education        */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.duration} {/*degree */}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>{" "}
                          {/* institution */}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills       */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-28 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                    
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger   className="flex items-center justify-center xl:justify-start gap-4  " >
                            <span className="text-accent items-center py-9 text-3xl ">{item.icon}</span>
                            <span className="text-lg">{item.fieldValue}</span>
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#232329] rounded-xl p-2">
                          <span className="text-white capitalize">{item.fieldName}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
