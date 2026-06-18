export interface Profile {
  name: string
  title: string
  location: string
  summary: string
  avatar: string
  metrics: ProfileMetric[]
  highlights: string[]
  skills: SkillGroup[]
  focusAreas: FocusArea[]
  timeline: TimelineItem[]
  socials: SocialLink[]
  experience: WorkExperience[]
  education: Education
}

export interface ProfileMetric {
  value: string
  label: string
  detail: string
}

export interface SkillGroup {
  name: string
  items: string[]
}

export interface FocusArea {
  id: string
  label: string
  title: string
  summary: string
  proof: string[]
}

export interface TimelineItem {
  period: string
  title: string
  description: string
  items: string[]
}

export interface SocialLink {
  label: string
  href: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
  points: string[]
}

export interface Education {
  school: string
  major: string
  degree: string
  period: string
}

export interface Project {
  id: string
  name: string
  role: string
  category: string
  year: string
  status: string
  summary: string
  stack: string[]
  impact: string[]
  detail: string[]
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
