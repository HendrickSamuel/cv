import { ConsultlyLogo, ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hendrick Samuel",
  initials: "HS",
  location: "Liege, Belgium",
  locationLink: "https://www.google.com/maps/place/Liege",
  about:
    "Frontend Analyst Developer with 2 years of experience in developing and maintaining web applications.",
  summary:
    "As I started as a Backend Developer and then moved to become a Frontend Developer, I have a good understanding of the full stack. This aspect helps me on a daily basis to better understand the needs of the project and to be able to communicate with the other team members.",
  avatarUrl: "/profile-alt.png",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "samuel.he@live.fr",
    tel: "+32472421688",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/HendrickSamuel",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samuel-hendrick-2a25571b7/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Haute Ecole de la Province de Liège",
      degree: "Bachelor's degree, Analyst Developer",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Certinergie",
      link: "https://www.certinergie.be/fr/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "ongoing",
      description:
        "Created a custom solution for notaries and real estate agencies to manage and publish their real estate ads. Technologies: Turborepo, React, TypeScript, Chakra-UI, Next.js",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Turborepo", "Git"],
  projects: [
    {
      title: "MagicImmo",
      techStack: ["TypeScript", "Turborepo", "Next.js", "Vitest"],
      description:
        "A platform to manage real estate ads and publish to main real estate websites.",
      logo: ConsultlyLogo,
      link: {
        label: "magicimmo.be",
        href: "https://www.whynot.immo/",
      },
    },
  ],
} as const;
