import { assets } from "@/assets/assets";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "Twitter", href: siteConfig.socials.twitter },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <Image
          src={assets.logo}
          alt="Sumit Singh logo"
          className="mx-auto w-52 rounded-full dark:hidden"
        />
        <Image
          src={assets.logo_dark}
          alt="Sumit Singh logo"
          className="mx-auto hidden w-52 rounded-full dark:block"
        />

        <a
          href={`mailto:${siteConfig.email}`}
          className="mx-auto -mt-4 flex w-max items-center gap-2"
        >
          <Image
            src={assets.mail_icon}
            alt=""
            className="w-6 dark:hidden"
          />
          <Image
            src={assets.mail_icon_dark}
            alt=""
            className="hidden w-6 dark:block"
          />
          {siteConfig.email}
        </a>
      </div>

      <div className="mx-[10%] mt-12 border-t border-gray-400 py-6 text-center sm:flex sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="transition-colors hover:text-violet-600 dark:hover:text-violet-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
