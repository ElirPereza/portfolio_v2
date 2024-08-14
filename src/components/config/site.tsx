import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  desktopNav: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },

    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  mobileNav: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },

    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: [
    {
      name: "github",
      href: "https://github.com/ElirPereza",
      icon: <FaGithub />,
    },
    {
      name: "discord",
      href: "https://discord.com/users/328275994777747459",
      icon: <FaDiscord />,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/jesusmaldonado24",
      icon: <FaLinkedin />,
    },
  ],
};
