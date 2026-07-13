import Image from "next/image";
import { assets } from "@/assets/assets";

/**
 * Project thumbnail card. Uses next/image (`fill`) for optimization + lazy
 * loading. Renders as a link when a URL is present, otherwise a static card
 * (e.g. a project whose live URL is still a TODO).
 */
const ProjectCard = ({ project }) => {
  const { title, description, bgImage, link, featured, stack } = project;
  const hasLink = Boolean(link);
  const Wrapper = hasLink ? "a" : "div";
  const linkProps = hasLink
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      aria-label={hasLink ? `Open ${title} in a new tab` : undefined}
      className="group relative block aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-white/5"
    >
      <Image
        src={bgImage}
        alt={`${title} screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {featured && (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-black/80 px-2.5 py-1 text-xs font-medium text-white">
          Featured
        </span>
      )}

      <div className="absolute bottom-5 left-1/2 flex w-10/12 -translate-x-1/2 items-center justify-between rounded-md bg-white px-5 py-3 text-black duration-500 group-hover:bottom-7">
        <div className="min-w-0">
          <h3 className="truncate font-semibold">{title}</h3>
          <p className="truncate text-sm text-gray-700">{description}</p>
          {featured && stack?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
          <Image src={assets.send_icon} alt="" className="w-5" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
