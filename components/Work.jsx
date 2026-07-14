"use client";

import { useState } from "react";
import { workData } from "@/assets/assets";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ui/ProjectCard";
import { btnSecondary } from "@/lib/ui";

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? workData : workData.slice(0, 3);

  return (
    <section
      id="work"
      className="w-full px-[4%] py-16 scroll-mt-20 lg:px-[12%]"
    >
      <SectionHeading
        eyebrow="My portfolio"
        title="Projects"
        intro="Production-ready AI SaaS, developer platforms, and enterprise applications I've built."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.title} as="div" delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {workData.length > 3 && (
        <Reveal as="div" delay={0.15} className="flex justify-center my-20">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className={btnSecondary}
          >
            {showAll ? "Show less" : "Show more"}

            <svg
              className={`w-4 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        </Reveal>
      )}
    </section>
  );
};

export default Work;
