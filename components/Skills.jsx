import { skillsData, toolsData } from "@/assets/assets";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

// Generic, accurate line icons per category (avoids shipping questionable brand marks).
const categoryIcons = {
  "Frameworks & Libraries":
    "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  Languages: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  "Styling & UI": "M12 2s7 7.6 7 12a7 7 0 1 1-14 0c0-4.4 7-12 7-12z",
  "Architecture & Practices": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "Tooling & Workflow":
    "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.3-.6-.6-2.3 2.1-2.1z",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-[1440px] mx-auto px-[6%] sm:px-6 lg:px-10 py-16 scroll-mt-20"
    >
      <SectionHeading
        eyebrow="What I work with"
        title="Skills & tech stack"
        intro="Technologies and practices behind the production-ready frontend applications I build."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {skillsData.map(({ category, skills }, index) => (
          <Reveal
            as="div"
            key={category}
            delay={index * 0.05}
            className={`border border-gray-300 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-black dark:border-white/20 dark:hover:shadow-white ${
              skills.length >= 5 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-violet-100 text-violet-700 dark:bg-darkHover dark:text-violet-300">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={categoryIcons[category]} />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {category}
              </h3>
            </div>

            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full border border-gray-300 bg-gray-50 text-gray-700 dark:border-white/20 dark:bg-white/5 dark:text-white/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal as="div" delay={0.15} className="mt-14 text-center">
        <h4 className="mb-6 font-Ovo text-gray-700 dark:text-white/80">
          Tools I use daily
        </h4>
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {toolsData.map((tool, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg bg-darkTheme dark:bg-transparent transition duration-300 hover:-translate-y-1 dark:border-white/20"
            >
              <Image src={tool} alt="" className="w-5 sm:w-7" />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};

export default Skills;
