"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-6">
          <div className="font-semibold">
            Frontend Developer at Techling (Private) Limited
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-2">
            May 2023 - Present
          </span>
          <div className="text-sm mt-2">
            <p className="font-medium mb-1">Chex.ai</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                Led frontend development of AI-integrated SaaS project for
                automated car inspection and certification using Material UI
              </li>
              <li>
                Developed analytics dashboards using Chart.js and managed team
                through development phases
              </li>
            </ul>
            <p className="font-medium mb-1 mt-3">Instant Fulfillments</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                Built and maintained Amazon FBA/FBM warehouse dashboard using
                Next.js, NestJS, Material UI and SWR for data management
              </li>
              <li>
                Developed reusable components with comprehensive test coverage
                using Jest and React Testing Library
              </li>
            </ul>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Science in Information Technology{" "}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            3.23/4.00 GPA
          </span>
        </li>
        <li>University of the Punjab, Lahore</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          MERN Stack
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            - DigiPAKISTAN (2022)
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-black">
            Frontend Developer with years of experience specializing in
            React.js, Next.js, Redux, and modern UI frameworks. Passionate about
            building scalable, user-friendly web applications with a focus on
            performance optimization and responsive design. Adept at state
            management, API integrations, and testing, ensuring smooth user
            experiences. Looking for a role in an company to contribute
            expertise in frontend development.
          </p>
          <div className="flex flex-row justify-start mt-8 text-black">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 text-black">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
