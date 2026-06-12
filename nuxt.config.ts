import { posts } from './server/data/content'

declare const process: {
  env: Record<string, string | undefined>
}

export default defineNuxtConfig({
  compatibilityDate: '2026-06-12',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  modules: [],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: '税嘉 | 前端开发与 AI 应用',
      meta: [
        {
          name: 'description',
          content: '税嘉的个人介绍、前端项目、Nuxt 全栈实践和 AI 应用博客。'
        }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        ...posts.map((post) => `/blog/${post.slug}`)
      ]
    }
  }
})
