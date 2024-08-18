"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { link } from "fs";
import { title } from "process";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useSendEmail } from "@/hook/useSend";
import { toast } from "@/components/ui/use-toast";
import { contactSchemaType, contactSchema } from "@/schema/contac-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    descripcion: "(+57) 304 678 2289",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    descripcion: "Jmaldona18@cuc.edu.co",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    descripcion: "Barranquilla,colombia",
  },
];

const Contact = () => {
  const { mutate } = useSendEmail();
  const [selectedService, setSelectedService] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema),
  });
  console.log(errors);

  const onSubmit: SubmitHandler<contactSchemaType> = async (data) => {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description:
            "There was an error sending your message. Please try again.",
        });
      },
    });
  };

  const handleSelectChange = (value: any) => {
    setSelectedService(value);
    setValue("service", value);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.5, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl"
            >
              <h3 className="text-4xl text-accent">let&apos;s work together</h3>
              <p className="text-white/60">
                I'm always excited to connect with others, whether it's to
                discuss potential collaborations, explore new opportunities, or
                simply share ideas. If you have any questions, projects in mind,
                or just want to say hello, feel free to reach out! I'll get back
                to you as soon as possible. Let's create something amazing
                together!.
              </p>
              {/* input */}
              <div className="flex flex-col gap-4">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  {...register("firstName")}
      
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  {...register("lastname")}
                />
                {errors.lastname && (
                  <p className="text-red-500">{errors.lastname.message}</p>
                )}
                <Input
                  type="email"
                  placeholder="Email address"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                <Input
                  type="phone"
                  placeholder="Phone number"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <Select
                value={selectedService}
                onValueChange={handleSelectChange}
                {...register("service")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="SEO">SEO</SelectItem>
                  <SelectItem value="IA Consulting">IA Consulting</SelectItem>
                  <SelectItem value="Smart Home">Smart Home</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-red-500">{errors.service.message}</p>
              )}
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
              {/* btn */}
              <Button size={"md"} type="submit" className="flex max-w-full ">
                Send message{" "}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1 ">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.descripcion}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
