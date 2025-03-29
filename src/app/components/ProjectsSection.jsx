"use client";
import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="p-12">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
        <div className="relative group flex justify-end">
          <div className="h-100 md:h-120 overflow-hidden rounded-lg w-full">
            <img
              src="/images/projects/chex1.png"
              alt="Chex.AI Project"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 font-roboto">
          <div className="text-2xl font-bold text-white bg-[#ff9d43] inline-flex items-center px-4 py-1 rounded-full shadow-md w-fit">
            Chex.AI
          </div>

          <ul className="text-lg lg:text-xl text-gray-600 list-disc pl-5">
            <li>
              Contributed to the development of Chex.ai, an AI-integrated SaaS
              project, enabling users to inspect their cars by uploading images
              for automated inspection and certification.
            </li>
            <li>
              Developed dashboards featuring analytics charts and tables using
              Chart.js, facilitating data visualization and insights for users.
            </li>
            <li>
              Designed and implemented multiple user interfaces using Material
              UI, enhancing user experience and ensuring seamless interactions
              throughout the application.
            </li>
            <li>
              Led the frontend team, overseeing all phases of development from
              requirements gathering to staging and production, ensuring timely
              project delivery.
            </li>
            <li>
              Reduced a 4,000-line code file to 800 lines by creating reusable
              components, general functions, and custom hooks, improving code
              maintainability and efficiency.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Ant Design
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Chart.js
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Konva
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-[70px] lg:mt-[120px]">
        <div className="flex flex-col gap-4 font-roboto">
          <div className="text-2xl font-bold text-white bg-[#3cc29f] inline-flex items-center px-4 py-1 rounded-full shadow-md w-fit">
            Instant Fulfillment
          </div>
          <ul className="text-lg lg:text-xl text-gray-600 list-disc pl-5">
            <li>
              Contributed to the development of the Instant Fulfillments
              project, a dashboard for Amazon FBA and FBM warehouses using
              Next.js and NestJS.
            </li>
            <li>
              Designed and implemented new user interfaces, leveraging Material
              UI and Formik to create intuitive and user-friendly forms.
            </li>
            <li>
              Utilized SWR for efficient data fetching and caching, improving
              application performance and user experience.
            </li>
            <li>
              Ensured the creation of reusable components and followed best
              folder structures, enhancing code organization and
              maintainability.
            </li>
            <li>
              Integrated Jest and React Testing Library to write comprehensive
              test cases, ensuring the reliability and stability of the
              application.
            </li>
            <li>
              Collaborated with the backend team to ensure seamless integration
              between the frontend and backend services, optimizing the workflow
              for warehouse management.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Material UI
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Formik
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              SWR
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Jest
            </span>
          </div>
        </div>
        <div className="relative group flex justify-end">
          <div className="h-100 md:h-120 overflow-hidden rounded-lg w-full">
            <img
              src="/images/projects/instant.png"
              alt="Chex.AI Project"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-[70px] lg:mt-[120px]">
        <div className="relative group flex justify-end">
          <div className="h-100 md:h-120 overflow-hidden rounded-lg w-full">
            <img
              src="/images/projects/nz.png"
              alt="Chex.AI Project"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 font-roboto">
          <div className="text-2xl font-bold text-white bg-[#ff4343] inline-flex items-center px-4 py-1 rounded-full shadow-md w-fit">
            NZ Education Consultants
          </div>
          <ul className="text-lg lg:text-xl text-gray-600 list-disc pl-5">
            <li>
              Developed a comprehensive consultancy website from scratch using
              React, Tailwind CSS, Node.js, and Firebase, providing seamless
              access to immigration and education services for students and
              working professionals.
            </li>
            <li>
              Implemented secure user authentication and database management
              using Firebase, enabling efficient handling of client applications
              and documentation for visa processes.
            </li>
            <li>
              Created an intuitive course search and application system,
              allowing prospective students to easily browse and apply for their
              desired programs in Australia.
            </li>
            <li>
              Built a dynamic dashboard for tracking application status,
              document submissions, and consultation appointments, streamlining
              the client experience throughout their journey.
            </li>
            <li>
              Integrated a responsive design system ensuring optimal user
              experience across all devices, making immigration and education
              information accessible to all clients.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Firebase
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="bg-slate-200 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
