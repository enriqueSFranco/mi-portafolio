import NextjsIcon from "/icons/nextjs.svg"
import jsIcon from "/icons/javascript.svg"
import reactIcon from "/icons/react.svg"
import tsIcon from "/icons/typescript.svg"
import tailwindIcon from "/icons/tailwindcss.svg"
import pythonIcon from "/icons/python.svg"
import djangoIcon from "/icons/django.svg"
import styledComponentsIcon from "/icons/styledcomponents.svg"
import nodeIcon from "/icons/node.svg"
import postgresqlIcon from "/icons/postgresql.svg"
import twitchIcon from "/icons/twitch.svg"
import gitIcon from "/icons/git.svg"
import zustandIcon from "/icons/zustand.svg"

export const TAGS = {
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-yellow-500/20 text-white",
    icon: jsIcon,
  },
  TYPESCRIPT: {
    name: "Typescript",
    class: "bg-blue-500/20 text-white",
    icon: tsIcon,
  },
  REACT: {
    name: "React",
    class: "bg-blue-300/20 text-white",
    icon: reactIcon,
  },
  NEXTJS: {
    name: "Nextjs",
    class: "bg-black outline outline-[1px] outline-white/20 text-white",
    icon: NextjsIcon,
  },
  TAILWINDCSS: {
    name: "TailwindCss",
    class: "bg-teal-500/20 text-white",
    icon: tailwindIcon,
  },
  PYTHON: {
    name: "Python",
    class: "bg-blue-500/20 text-white",
    icon: pythonIcon,
  },
  STYLED_COMPONENTS: {
    name: "Styled Components",
    class: "bg-stone-800 text-white",
    icon: styledComponentsIcon,
  },
  DJANGO: {
    name: "Django REST Framework",
    class: "bg-emerald-500/20 text-white",
    icon: djangoIcon,
  },
  POSTGRESQL: {
    name: "Postgresql",
    class: "bg-blue-500/40 text-white",
    icon: postgresqlIcon,
  },
  NODEJS: {
    name: "Node js",
    class: "bg-emerald-500/20 text-white",
    icon: nodeIcon,
  },
  ZUSTAND: {
    name: "Zustand",
    class: "bg-stone-500/40 text-white",
    icon: zustandIcon,
  },
  TWITCH: {
    name: "tmi.js",
    class: "bg-violet-500/40 text-white",
    icon: twitchIcon,
  },
  GIT: {
    name: "Git",
    class: "bg-orange-500/40 text-white",
    icon: gitIcon,
  }
}
