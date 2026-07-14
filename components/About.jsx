import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1440px] mx-auto px-[6%] sm:px-6 lg:px-10 py-16 scroll-mt-20"
    >
      <SectionHeading eyebrow="Introduction" title="About me" />

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-16 w-full">
        <Reveal
          as="div"
          className="w-[80%] max-w-xs sm:max-w-sm rounded-3xl bg-[#fdf6e3] dark:bg-[#2a004a] shrink-0"
        >
          <Image
            src={assets.user_light_image}
            alt="Sumit Singh"
            className="w-full h-auto rounded-3xl dark:hidden"
          />
          <Image
            src={assets.user_dark_image}
            alt="Sumit Singh"
            className="w-full h-auto rounded-3xl hidden dark:block"
          />
        </Reveal>

        <div className="flex-1 w-full">
          <Reveal
            as="p"
            className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/80"
          >
            Over the past 4+ years, I've built production-ready AI SaaS
            platforms, developer ecosystems, and enterprise web applications
            used by real users. I enjoy turning complex product ideas into
            scalable frontend solutions through modern architecture, reusable
            component systems, performance optimization, and seamless
            collaboration with design, backend, and AI teams.
          </Reveal>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }) => (
              <Reveal
                as="li"
                key={title}
                className="border border-gray-400 rounded-xl p-6 cursor-default transition duration-300 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black dark:border-white/40 dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={icon} alt="" className="w-7 mt-3 dark:hidden" />
                <Image
                  src={iconDark}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
