import type { ApiOk, BlogPost, Profile, Project } from '~/types/content'

export function useContentApi() {
  const getProfile = () => $fetch<ApiOk<Profile>>('/api/profile')
  const getProjects = () => $fetch<ApiOk<Project[]>>('/api/projects')
  const getPosts = () => $fetch<ApiOk<Omit<BlogPost, 'body'>[]>>('/api/posts')
  const getPost = (slug: string) => $fetch<ApiOk<BlogPost>>(`/api/posts/${slug}`)

  return {
    getProfile,
    getProjects,
    getPosts,
    getPost
  }
}
