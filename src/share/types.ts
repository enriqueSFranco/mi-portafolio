export interface Project {
  name: string
  description: string
  thumbnail?: string | null
  skills: string[]
  repository: string
  deploy?: string | null
}

export interface ItemMenu {
  title: string
  href: string
  icon: string
}