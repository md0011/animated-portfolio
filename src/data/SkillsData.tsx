import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCss3,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiFramer,
  SiCanva,
  SiVisualstudiocode,
  SiGitpod,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "SASS",
    icon: <FaSass color='#000000dc' />,
    link: "https://sass-lang.com/",
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss color='#000000dc' />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },  
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color='#000000dc' />,
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  }, 
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "Github",
    icon: <SiGithub color='#000000dc' />,
    link: "https://github.com/",
  },
  {
    name: "Gitpod",
    icon: <SiGitpod color='#000000dc' />,
    link: "https://www.gitpod.io/",
  },
  {
    name: "Visualstudiocode",
    icon: <SiVisualstudiocode color='#000000dc' />,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Vercel",
    icon: <SiVercel color='#000000dc' />,
    link: "https://vercel.com/",
  },
  {
    name: "Netlify",
    icon: <SiNetlify color='#000000dc' />,
    link: "https://www.netlify.com/",
  },
  {
    name: "Figma",
    icon: <SiFigma color='#000000dc' />,
    link: "https://www.figma.com/",
  },
  {
    name: "Framer",
    icon: <SiFramer color='#000000dc' />,
    link: "https://www.framer.com/",
  },
  {
    name: "Canva",
    icon: <SiCanva color='#000000dc' />,
    link: "https://www.canva.com/",
  },
  // {
  //   name: "TypeScript",
  //   icon: <SiTypescript color='#000000dc' />,
  //   link: "https://www.typescriptlang.org/",
  // },
  // {
  //   name: "Redux",
  //   icon: <SiRedux color='#000000dc' />,
  //   link: "https://redux.js.org/",
  // },
  // {
  //   name: "Postman",
  //   icon: <SiPostman color='#000000dc' />,
  //   link: "https://www.postman.com/",
  // },
];