declare const process: {
  env: Record<string, string | undefined>
}

const blogRoutes = [
  '/blog/wechat-sidebar-practice',
  '/blog/nuxt-admin-auth-rbac',
  '/blog/enterprise-frontend-practice',
  '/blog/electron-client-notes',
  '/blog/dify-rag-notes',
]

export default defineNuxtConfig({
  compatibilityDate: '2026-06-12',
  devtools: { enabled: true },
  buildDir: process.env.NUXT_BUILD_DIR || '.nuxt',
  css: ['~/assets/styles/main.css'],
  modules: [],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: '税嘉 | Vue 前端开发工程师',
      meta: [
        {
          name: 'description',
          content: '税嘉的个人介绍、Vue 前端项目、企业微信侧边栏、Nuxt 后台、Electron 和跨端业务实践。'
        }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  nitro: {
    output: {
      dir: process.env.NITRO_OUTPUT_DIR || '.output'
    },
    prerender: {
      crawlLinks: true,
      routes: blogRoutes
    }
  }
})
