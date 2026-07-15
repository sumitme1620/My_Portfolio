import { assets } from "@/assets/assets";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import { btnPrimary, btnSecondary } from "@/lib/ui";

// TODO: expand the bio with your exact company timeline if you'd like it shown.
const Header = () => {
  return (
    <header
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-28 pb-12"
    >
      <Reveal as="div" y={0} duration={0.7}>
        <Image
          src={assets.user_light_image}
          alt="Portrait of Sumit Singh"
          className="rounded-full w-32 h-32 object-cover dark:hidden"
          priority
        />
        <Image
          src={assets.user_dark_image}
          alt="Portrait of Sumit Singh"
          className="rounded-full w-32 h-32 object-cover hidden dark:block"
          priority
        />
      </Reveal>

      <Reveal
        as="h3"
        delay={0.2}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-1 font-Ovo"
      >
        Hi, I&apos;m Sumit Singh
        {/* <Image src={assets.hand_icon} alt="waving hand" className="w-6" /> */}
      </Reveal>

      <Reveal
        as="h1"
        delay={0.3}
        className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight"
      >
        Senior Frontend Developer Building Scalable AI SaaS Products.
      </Reveal>

      <Reveal as="p" delay={0.5} className="max-w-2xl mx-auto font-Ovo">
        I’m a Senior Frontend Developer from Mumbai with 4+ years of experience
        building scalable AI SaaS products and developer platforms. I specialize
        in React.js, Next.js, frontend architecture, and creating fast,
        intuitive user experiences.
      </Reveal>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Reveal as="a" delay={0.7} href="#contact" className={btnPrimary}>
          Contact me
          <svg
            className="w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Reveal>

        <Reveal
          as="a"
          delay={0.8}
          href="/Sumit_Singh_CV.pdf"
          download
          className={btnSecondary}
        >
          Download resume
          <svg
            className="w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v12M8 11l4 4 4-4M5 21h14" />
          </svg>
        </Reveal>
      </div>
    </header>
  );
};

export default Header;
