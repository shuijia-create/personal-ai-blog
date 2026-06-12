export interface Profile {
  name: string
  title: string
  location: string
  summary: string
  avatar: string
  highlights: string[]
  skills: SkillGroup[]
  socials: SocialLink[]
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface SocialLink {
  label: string
  href: string
}

export interface Project {
  id: string
  name: string
  role: string
  summary: string
  stack: string[]
  impact: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readMinutes: number
  tags: string[]
  body: string[]
}

export interface ApiOk<T> {
  ok: true
  data: T
}

export interface ApiFail {
  ok: false
  error: {
    code: string
    message: string
  }
}
