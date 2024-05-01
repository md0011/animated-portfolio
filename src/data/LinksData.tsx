import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaBehance } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/md0011",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/mayur-dev/",
  },
  {
    title: "Behance",
    icon: <FaBehance color='#000000dc' />,
    link: "https://www.behance.net/mayurdevle",
  },
  {
    title: "Medium",
    icon: <SiMedium color='#000000dc' />,
    link: "https://medium.com/@mayurd0303",
  },
];