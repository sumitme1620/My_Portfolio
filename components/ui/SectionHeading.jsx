import Reveal from "./Reveal";

/**
 * Shared section header: eyebrow label + serif title + optional intro copy.
 * Server component — animation is delegated to the <Reveal> client wrapper.
 */
const SectionHeading = ({ eyebrow, title, intro, align = "center" }) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <Reveal as="p" className="mb-2 text-lg font-Ovo text-gray-500 dark:text-white/70">
          {eyebrow}
        </Reveal>
      )}

      <Reveal
        as="h2"
        delay={0.1}
        className="text-4xl sm:text-5xl font-Ovo"
      >
        {title}
      </Reveal>

      {intro && (
        <Reveal
          as="p"
          delay={0.2}
          className={`max-w-2xl mt-5 font-Ovo text-gray-600 dark:text-white/80 ${alignment}`}
        >
          {intro}
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
