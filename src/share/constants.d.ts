import NextjsIcon from "public/icons/nextjs.svg"
import jsIcon from "public/icons/javascript.svg"
import reactIcon from "public/icons/react.svg"
import tsIcon from "public/icons/typescript.svg"
import tailwindIcon from "public/icons/tailwindcss.svg"
import pythonIcon from "public/icons/python.svg"
import djangoIcon from "public/icons/django.svg"
import styledComponentsIcon from "public/icons/styledcomponents.svg"
import nodeIcon from "public/icons/node.svg"
import postgresqlIcon from "public/icons/postgresql.svg"
import twitchIcon from "public/icons/twitch.svg"
import zustandIcon from "public/icons/zustand.svg"

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
    class: "bg-black text-white",
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
  }
}
