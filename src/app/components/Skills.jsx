"use client";

import Marquee from "react-fast-marquee";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiSass,
  DiLess,
  DiNpm,
  DiJqueryLogo,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiFirebase,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiRedux,
  SiAxios,
  SiReactquery,
  SiFormik,
  SiAntdesign,
  SiBootstrap,
  SiTailwindcss,
  SiChartdotjs,
  SiJest,
  SiNetlify,
  SiVercel,
  SiCloudinary,
  SiSlack,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiYarn,
  SiStripe,
} from "react-icons/si";

const Skills = () => {
  const row1Icons = [
    <SiHtml5 />,
    <SiCss3 />,
    <DiJavascript1 />,
    <SiTypescript />,
    <DiReact />,
    <SiNextdotjs />,
    <DiJqueryLogo />,
    <SiRedux />,
    <SiAntdesign />,
    <SiBootstrap />,
    <SiTailwindcss />,
  ];

  const row2Icons = [
    <SiGraphql />,
    <SiAxios />,
    <SiReactquery />,
    <SiFormik />,
    <SiChartdotjs />,
    <SiJest />,
    <SiPostman />,
    <DiGit />,
    <SiWebpack />,
    <SiBabel />,
    <SiEslint />,
  ];

  const row3Icons = [
    <SiNetlify />,
    <SiVercel />,
    <SiCloudinary />,
    <SiSlack />,
    <SiFigma />,
    <DiSass />,
    <DiLess />,
    <DiNpm />,
    <SiYarn />,
    <SiFirebase />,
    <SiStripe />,
  ];

  return (
    <section
      id="skills"
      className="py-8 bg-gradient-to-br from-[#E8CCFF] via-[#CD9BC3] to-[#da2b7c]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Skills & Technologies
        </h2>

        {/* Row 1 - Left to Right */}
        <div className="overflow-hidden relative w-full">
          <Marquee
            speed={30}
            gradient={false}
            delay={0}
            loop={0}
            gradientWidth={200}
          >
            {row1Icons.map((icon, index) => (
              <div
                key={`row1-${index}`}
                className="text-4xl mx-24  transition-transform"
              >
                {icon}
              </div>
            ))}
          </Marquee>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="overflow-hidden relative w-full mt-6">
          <Marquee
            speed={30}
            direction="right"
            gradient={false}
            delay={0}
            loop={0}
            gradientWidth={200}
          >
            {row2Icons.map((icon, index) => (
              <div
                key={`row2-${index}`}
                className="text-4xl mx-24  transition-transform duration-200"
              >
                {icon}
              </div>
            ))}
          </Marquee>
        </div>

        {/* Row 3 - Left to Right */}
        <div className="overflow-hidden relative w-full mt-6">
          <Marquee
            speed={30}
            direction="left"
            gradient={false}
            delay={0}
            loop={0}
            gradientWidth={200}
          >
            {row3Icons.map((icon, index) => (
              <div
                key={`row3-${index}`}
                className="text-4xl mx-24  transition-transform duration-200"
              >
                {icon}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
