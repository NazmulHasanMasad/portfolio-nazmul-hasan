"use client";
import React, { useState } from "react";
import { Line } from "../components/display/Line";
import { Text } from "../components/typography/Text";
import { Grid } from "../components/layout/Grid";
import PageTitle from "../components/typography/PageTitle";
import Button from "../components/display/Button";
import MotionDiv from "../components/animations/MotionDiv";
import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import SkillBar from "../components/animations/SkillBar";
import ProjectsCard from "../components/cards/ProjectsCard";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Details from "../components/about-details/Details";
import Link from "next/link";

const AboutPage = () => {
  
    const projects = [
      {
        src: "/images/projects/speech.png",
        title: "Speech Recognition",
        details:
          "A voice-activated AI assistant that uses speech recognition to understand user commands, manage reminders, answer questions, and execute tasks in real-time.",
        github: "https://github.com/NazmulHasanMasad/speech_recognition",
        link: "#",
      },
      {
        src: "/images/projects/portfolio-web.png",
        title: "Portfolio Website",
        details:
          "A visually stunning and responsive portfolio website showcasing skills, projects, and achievements.",
        github: "https://github.com/NazmulHasanMasad/portfolio-nazmul-hasan",
        link: "https://portfolio-nazmul-hasan.vercel.app/",
      },
      {
        src: "/images/projects/hr_mgt.jpeg",
        title: "HR Management App",
        details:
          "A modern HR management application to handle employee records, payroll, and organizational tasks effectively.",
        github: "https://github.com/NazmulHasanMasad/Hr_management",
        link: "#",
      },
      {
        src: "/images/projects/mouse.png",
        title: "Virtual Mouse",
        details:
          "A computer vision-based virtual mouse that uses hand gestures captured via webcam to control cursor movement and perform clicks, eliminating the need for a physical mouse.",
        github: "https://github.com/NazmulHasanMasad/mouse",
        link: "#",
      },
      {
        src: "/images/projects/sc.png",
        title: "Scientefic Calculator",
        details:
          "A Python-based scientific calculator with a user-friendly interface, supporting advanced mathematical operations such as trigonometric functions, logarithms, exponentiation, and more.",
        github: "https://github.com/NazmulHasanMasad/scientefic-calculator",
        link: "#/",
      },
    ];
    
  return (
    <div className="w-full">
      <PageTitle name="ABOUT ME" />
      <div className="md:hidden">
        <div className="flex flex-row justify-center mt-8">
          <div>
            <div className="flex flex-row items-center justify-center">
              <MotionDiv
                src="/images/ai-image-1.jpg"
                isCircularBorder
                isTransparentBG
                isRoundedImage
                className="w-[150px]"
              />
            </div>
            <div className="flex w-full flex-row items-center justify-center mt-4 gap-x-4 mb-4">
              <a href="https://www.facebook.com/nazmul.hasan.masad" target="_blank">
                <FaFacebook
                  color="#1877F2"
                  size={20}
                />
              </a>
              <a href="https://leetcode.com/u/user4533MM/" target="_blank">
                <SiLeetcode 
                  color="#ebb118"
                  size={20}
                />
              </a>
              <a href="https://github.com/NazmulHasanMasad" target="_blank" className="dark:text-white text-gray-600">
                <FaGithub
                  size={20}
                />
              </a>
              <a href="https://linkedin.com/in/nazmul-hasan-masad-63a16b143/" target="_blank">
                <FaLinkedin
                  color="#0077B5"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start text-center mt-4">
          <Text
            text="Nazmul Hasan"
            isBold
            className="text-primary_dark text-[16px] dark:text-cyan-300 mb-4"
          />
          <p className="text-gray-700 dark:text-[#ADB7BE] text-[14px] mb-4 text-justify">
            Crafted by a skilled Software Engineer, specializing in Mobile App
            Development and Web Development, the digital experiences by this
            innovative mind blend technology and creativity seamlessly.
            Dedicated to delivering exceptional solutions, this talent strives
            to make a meaningful impact through their work.
          </p>
          <div className="flex flex-col items-start gap-1">
            <div>
              <FaMapLocationDot
                size={16}
                color="#00BCD4"
                className="mr-4 inline-block align-middle"
              />
              <Text
                text="1212 Dhaka , Bangladesh"
                className="text-gray-700 inline-block align-middle dark:text-white text-[12px]"
              />
            </div>
            <div>
              <FaPhoneVolume
                size={14}
                color="#00BCD4"
                className="mr-4 inline-block align-middle"
              />
              <Text
                text="+8801755073552"
                className="text-gray-700 inline-block align-middle dark:text-white text-[14px]"
              />
            </div>
            <Link href={`mailto:Nazmul.Hasan@g.bracu.ac.bd`} className="mb-2">
              <MdOutlineEmail
                size={18}
                color="#00BCD4"
                className="mr-4 inline-block align-middle"
              />
              <Text
                text="Nazmul.Hasan@g.bracu.ac.bd"
                className="text-gray-700 inline-block align-middle dark:text-white text-[14px]"
              />
            </Link>
            <Link href={"/contact"} className="w-full my-2">
              <Button
                theme="primary"
                className="w-full"
              >
                <Text text="Get in Touch" className="text-[14px] text-white"/>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col alighItems-end justify-start my-4 text-center">
          <Text
            text="My Professional Skills"
            isBold
            className="text-primary_dark text-[16px] dark:text-cyan-300 mb-4"
          />
          <p className="text-gray-700 dark:text-[#ADB7BE] text-[14px] mb-4 text-justify">
            With expertise spanning web development encompassing JavaScript,
            TypeScript, React.js, Next.js, and database management tools like
            MySQL, MongoDB, and Prisma, alongside mobile app development
            proficiency in Java and Android, I bring a comprehensive skill set
            to the table. Complemented by UI/UX design capabilities utilizing
            Figma and Adobe XD, I am equipped to deliver impactful solutions
            across diverse platforms.
          </p>
          <div className="text-start">
            <SkillBar label="Web Development" level={80} />
            <SkillBar label="Mobile App Development" level={70} />
            <SkillBar label="UI/UX Design" level={60} />
          </div>
        </div>
      </div>
      <Grid colCount={3} className="w-full mt-[60px] hidden md:grid">
        <div className="flex flex-col justify-start">
          <Text
            text="Nazmul Hasan"
            isBold
            className="text-primary_dark md:text-[20px] lg:text-[22px] xl:text-[24px] dark:text-cyan-300 mb-4"
          />
          <p className="text-gray-700 dark:text-[#ADB7BE] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-10 text-justify">
            Crafted by a skilled Software Engineer, specializing in Mobile App
            Development and Web Development, the digital experiences by this
            innovative mind blend technology and creativity seamlessly.
            Dedicated to delivering exceptional solutions, this talent strives
            to make a meaningful impact through their work.
          </p>
          <div className="flex flex-col items-start gap-4">
            <div>
              <FaMapLocationDot
                size={18}
                color="#00BCD4"
                className="mr-4 inline-block align-middle"
              />
              <Text
                text="1212 Dhaka , Bangladesh"
                className="text-gray-700 inline-block align-middle dark:text-white md:text-[14px] lg:text-[16px] xl:text-[18px]"
              />
            </div>
            <div>
              <FaPhoneVolume
                size={18}
                color="#00BCD4"
                className="mr-4 inline-block align-middle"
              />
              <Text
                text="+8801755073552"
                className="text-gray-700 inline-block align-middle dark:text-white md:text-[14px] lg:text-[16px] xl:text-[18px]"
              />
            </div>
            <Link href={`mailto:Nazmul.Hasan@g.bracu.ac.bd`}>
              <MdOutlineEmail
                size={24}
                color="#00BCD4"
                className="mr-4 inline-block align-middle"
              />
              <Text
                text="Nazmul.Hasan@g.bracu.ac.bd"
                className="text-gray-700 inline-block align-middle dark:text-white md:text-[14px] lg:text-[16px] xl:text-[18px]"
              />
            </Link>
            <Link href={"/contact"} className="mt-4">
              <Button
                theme="primary"
                className="md:w-[150px] lg:w-[200px] xl:w-[250px]"
              >
                <Text text="Get in Touch" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center md:mt-20 lg:mt-18 xl:mt-16">
          <div>
            <div className="flex flex-row items-center justify-center">
              <MotionDiv
                src="/images/ai-image-1.jpg"
                isCircularBorder
                isTransparentBG
                isRoundedImage
                className="md:w-[150px] lg:w-[200px] xl:w-[250px]"
              />
            </div>
            <div className="flex w-full flex-row items-center justify-center md:mt-4 md:gap-x-4 lg:mt-8 lg:gap-x-8 xl:mt-8 xl:gap-x-8 mb-10">
              <a href="https://www.facebook.com/nazmul.hasan.masad" target="_blank">
                <FaFacebook
                  color="#1877F2"
                  className="md:text-[24px] md:text-[28px] md:text-[30px]"
                />
              </a>
              <a href="https://leetcode.com/u/user4533MM/" target="_blank">
                <SiLeetcode 
                  color="#ebb118"
                  className="md:text-[24px] md:text-[28px] md:text-[30px]"
                />
              </a>
              <a href="https://github.com/NazmulHasanMasad" target="_blank" className="dark:text-white text-gray-600">
                <FaGithub
                  className="md:text-[24px] md:text-[28px] md:text-[30px]"
                />
              </a>
              <a href="https://linkedin.com/in/nazmul-hasan-masad-63a16b143/" target="_blank">
                <FaLinkedin
                  color="#0077B5"
                  className="md:text-[24px] md:text-[28px] md:text-[30px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col alighItems-end justify-start">
          <Text
            text="My Professional Skills"
            isBold
            className="text-primary_dark md:text-[20px] lg:text-[22px] xl:text-[24px] dark:text-cyan-300 mb-4"
          />
          <p className="text-gray-700 dark:text-[#ADB7BE] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-10 text-justify">
            With expertise spanning web development encompassing JavaScript,
            TypeScript, React.js, Next.js, and database management tools like
            MySQL, MongoDB, and Prisma, alongside mobile app development
            proficiency in Java and Android, I bring a comprehensive skill set
            to the table. Complemented by UI/UX design capabilities utilizing
            Figma and Adobe XD, I am equipped to deliver impactful solutions
            across diverse platforms.
          </p>
          <div>
            <SkillBar label="Web Development" level={80} />
            <SkillBar label="Mobile App Development" level={70} />
            <SkillBar label="UI/UX Design" level={60} />
          </div>
        </div>
      </Grid>
      <div className="w-full mt-6">
        <div className="w-full flex flex-col items-center justify-center px-[80px] md:px-[250px] lg:px-[500px] xl:px-[650px]">
          <Line className="w-full border-cyan-500" />
          <Text
            text="My Projects"
            isNosifer
            className="text-primary_dark dark:text-white text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px]"
          />
          <Line className="w-full border-cyan-500" />
        </div>

        {/* Project Cards */}
        <div className="w-full flex flex-col my-6 gap-10">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {projects.map((project, index) => (
              <ProjectsCard
                key={index}
                src={project.src}
                project_title={project.title}
                project_details={project.details}
                github_link={project.github}
                live_link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full my-10">
        <Details />
      </div>
    </div>
  );
}

export default AboutPage;
