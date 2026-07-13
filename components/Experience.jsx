import { experienceData } from "@/assets/assets";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-[1440px] mx-auto px-[6%] sm:px-6 lg:px-10 py-16 scroll-mt-20"
    >
      <SectionHeading
        eyebrow="Career"
        title="Experience"
        intro="A snapshot of where I've worked and the impact I've focused on delivering."
      />

      <div className="mt-16 max-w-3xl mx-auto">
        <ol className="relative border-l border-gray-300 dark:border-white/20">
          {experienceData.map((job, index) => (
            <Reveal
              as="li"
              key={job.company}
              delay={index * 0.05}
              className="mb-12 ml-6 last:mb-0"
            >
              <span
                className="absolute -left-1.5 mt-2 w-3 h-3 rounded-full bg-violet-600 ring-4 ring-white dark:ring-darkTheme"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {job.role}
                </h3>
                {job.current && (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                    Current
                  </span>
                )}
              </div>

              <p className="font-medium text-violet-700 dark:text-violet-300">
                {job.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-white/60">
                {job.period}
                {job.location ? ` · ${job.location}` : ""}
              </p>

              <p className="mt-3 text-gray-600 dark:text-white/80">
                {job.summary}
              </p>

              <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-600 dark:text-white/80 leading-7">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
