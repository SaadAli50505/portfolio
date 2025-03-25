"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative bg-purple-50"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div> */}
      <div className="z-10 px-6">
        <h5 className="text-3xl font-bold text-purple-900 mb-4">
          Let's Collaborate
        </h5>
        <p className="text-purple-800 mb-6 max-w-md text-lg leading-relaxed">
          I'm actively seeking new challenges and partnerships. Reach out to
          discuss projects, opportunities, or simply to connect. I prioritize
          prompt and meaningful communication.
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="github.com"
            className="hover:scale-110 transition-transform"
          >
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8" />
          </Link>
          <Link
            href="linkedin.com"
            className="hover:scale-110 transition-transform"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div className="z-10 px-6">
        {emailSubmitted ? (
          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <p className="text-purple-800 text-lg font-semibold">
              Message successfully sent!
            </p>
            <p className="text-purple-600 mt-2">I'll respond within 24 hours</p>
          </div>
        ) : (
          <form
            className="flex flex-col p-8 rounded-xl "
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="text-purple-900 block mb-1 text-sm font-semibold"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="text-purple-900 block mb-1 text-sm font-semibold"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="text-purple-900 block mb-1 text-sm font-semibold"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="w-full px-4 py-2.5 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-purple-900 block mb-1 text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full px-4 py-2.5 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Describe your project or inquiry..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Send Professional Inquiry</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
