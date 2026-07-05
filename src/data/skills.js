import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";

import {
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiOpenaigym,
  SiPython,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "OpenAI", icon: SiOpenaigym },
      { name: "Python", icon: SiPython },
      { name: "MCP" },
    ],
  },
];

export default skillCategories;
