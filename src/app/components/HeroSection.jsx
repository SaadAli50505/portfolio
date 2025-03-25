"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDownloadCV = () => {
    const cvUrl =
      "https://docs.google.com/document/d/1q9Sd9FCkohmY_z7pegFEKOr-xX7YZ5EBExU08DBxGOk/export?format=pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Saad_Ali_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="lg:py-16 relative overflow-hidden px-24">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, x: -500 }}
            animate={{
              pathLength: 1,
              x: [0, 500, 0],
              y: [0, 200, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            d="M0,500 Q250,400 500,500 T1000,500"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, y: -300 }}
            animate={{
              pathLength: 1,
              y: [0, 300, 0],
              x: [0, -200, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            d="M0,300 Q500,200 1000,300"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, x: 500 }}
            animate={{
              pathLength: 1,
              x: [0, -500, 0],
              y: [0, -200, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            d="M0,700 Q500,800 1000,700"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          <motion.circle
            initial={{ scale: 0.5, opacity: 0.3 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 300, 0],
              y: [0, 200, 0],
            }}
            whileHover={{ scale: 1.2 }}
            style={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            cx="300"
            cy="300"
            r="100"
            fill="url(#gradient2)"
            opacity="0.1"
          />
          <motion.circle
            initial={{ scale: 0.5, opacity: 0.3 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
              x: [0, -200, 0],
              y: [0, 300, 0],
            }}
            whileHover={{ scale: 1.2 }}
            style={{
              x: mousePosition.x * -0.01,
              y: mousePosition.y * 0.01,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            cx="700"
            cy="500"
            r="150"
            fill="url(#gradient2)"
            opacity="0.1"
          />
          <motion.circle
            initial={{ scale: 0.5, opacity: 0.3 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 250, 0],
              y: [0, -300, 0],
            }}
            whileHover={{ scale: 1.2 }}
            style={{
              x: mousePosition.x * 0.015,
              y: mousePosition.y * -0.015,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            cx="500"
            cy="700"
            r="120"
            fill="url(#gradient2)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-primary-400/10 to-secondary-600/10"
        animate={{
          y: [0, 100, 0],
          x: [0, 200, 0],
          rotate: [0, 360],
        }}
        style={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-primary-400/10 to-secondary-600/10"
        animate={{
          y: [0, -150, 0],
          x: [0, -200, 0],
          rotate: [0, -180, 0],
        }}
        style={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-secondary-600/10 to-primary-400/10"
        animate={{
          x: [0, 150, 0],
          y: [0, -150, 0],
          rotate: [0, -360],
        }}
        style={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * -0.015,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-gradient-to-r from-secondary-600/10 to-primary-400/10"
        animate={{
          x: [0, -200, 0],
          y: [0, 200, 0],
          rotate: [0, 180, 0],
        }}
        style={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Saad Ali", 1000, "Frontend Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#000000] text-base sm:text-lg mb-6 lg:text-xl">
            Frontend Developer with years of experience specializing in
            React.js, Next.js, Redux, and modern UI frameworks.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              onClick={handleDownloadCV}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
