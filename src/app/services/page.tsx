"use client";
import { title } from "process";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const servicesData = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Building modern web applications with technologies such as react(JS) and reflex(PY) , including the design and implementation of responsive and optimized user interfaces.",
    href: "",
  },
  {
    num: "02",
    title: "SEO",
    description:
      "SEO Services: Enhance your online presence with tailored SEO strategies that boost your website’s visibility and ranking on search engines. From keyword research to on-page optimization, I provide comprehensive solutions to drive organic traffic and improve search engine performance.",
    href: "",
  },
  {
    num: "03",
    title: "Consulting and AI Model Development",
    description:
      "AI model design and optimization: Development and tuning of AI models tailored to specific business needs, including financial, marketing, statistical and predictive analytics, as well as integration of models into existing systems and performance optimization for real-world applications.",
    href: "",
  },
  {
    num: "04",
    title: "Development and Implementation of Smart Home Solutions",
    description:
      "Design and integrate advanced smart home systems, including automation of lighting, climate control, security, and monitoring systems. Ensure seamless integration with existing infrastructure and provide user-friendly interfaces for control and monitoring. ",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"> </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
