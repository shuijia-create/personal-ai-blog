import { posts, profile, projects } from '../data/content'

export function getProfile() {
  return profile
}

export function getProjects() {
  return projects
}

export function getPosts() {
  return posts.map(({ body, ...post }) => post)
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
