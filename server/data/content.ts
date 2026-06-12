import type { BlogPost, Profile, Project } from '../../types/content'

export const profile: Profile = {
  name: '税嘉',
  title: '前端开发工程师 / AI 应用实践者',
  location: '四川 / 可远程',
  summary:
    '5 年前端开发经验，长期做 Vue 后台、微信小程序、企业微信侧边栏、Electron 客户端和 Nuxt 全栈项目。最近重点学习 Dify、RAG、OpenAI Agents SDK、LangGraph 和 Codex，把 AI 工具真正接到业务系统里。',
  avatar: '/avatar.png',
  highlights: [
    'Vue2 / Vue3 / TypeScript / Nuxt 全栈',
    '小程序、企微侧边栏、Electron 客户端',
    'Dify RAG、AI 客服、流式输出、工具调用',
    '用 Codex 辅助拆需求、写代码、排查接口'
  ],
  skills: [
    {
      name: '前端工程',
      items: ['Vue3', 'TypeScript', 'Nuxt', 'Pinia', 'Vite', 'Element Plus']
    },
    {
      name: '跨端业务',
      items: ['微信小程序', '企业微信侧边栏', 'Electron', 'H5', 'JSBridge']
    },
    {
      name: 'AI 应用',
      items: ['Dify', 'RAG', 'OpenAI API', 'Agents SDK', 'LangGraph', 'Codex']
    },
    {
      name: '后端基础',
      items: ['Nitro API', 'Flask', 'Redis Session', 'Prisma', 'MariaDB', 'Zod']
    }
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Email', href: 'mailto:hello@example.com' }
  ]
}

export const projects: Project[] = [
  {
    id: 'nuxt-admin-ai',
    name: 'Nuxt 全栈后台管理系统',
    role: '全栈开发 / AI 辅助开发',
    summary:
      '用 Nuxt 4、TypeScript、Element Plus、Pinia、Prisma、MariaDB 和 Redis Session 做后台系统，包含登录、权限、工单、通知和 AI 工单草稿。',
    stack: ['Nuxt 4', 'TypeScript', 'Element Plus', 'Prisma', 'Redis', 'Zod', 'Qwen API'],
    impact: [
      '按 pages -> composables -> api client -> server/api -> services -> Prisma 分层',
      '实现 Cookie + Redis Session 登录和 RBAC 权限控制',
      '用 AI SDK 调 Qwen，Zod 校验 AI 输出，生成稳定工单草稿'
    ]
  },
  {
    id: 'dify-rag-support',
    name: 'Dify RAG 智能客服 Demo',
    role: 'AI 应用开发',
    summary:
      '从上传文档、知识库、Chatflow、知识检索节点、LLM 回答到 Flask/Vue API 调用，打通一个能流式回答的客服原型。',
    stack: ['Dify', 'RAG', 'Flask', 'Vue3', 'Streaming API'],
    impact: [
      '理解 query、inputs、user、response_mode 等 Dify API 参数',
      '处理 SSE 流式响应，让前端逐字输出',
      '把知识库检索结果约束到客服回答流程里'
    ]
  },
  {
    id: 'electron-live-client',
    name: '财助手直播客户端',
    role: 'Electron 前端开发',
    summary:
      '基于 Electron 和 Vue3 做桌面客户端，覆盖主进程、渲染进程、子应用通信、自动更新和 NSIS 打包。',
    stack: ['Electron', 'Vue3', 'IPC', 'electron-builder', 'NSIS'],
    impact: [
      '处理主应用与子应用消息通信',
      '实现客户端自动更新和安装包输出',
      '沉淀桌面端异常处理和多环境配置经验'
    ]
  }
]

export const posts: BlogPost[] = [
  {
    slug: 'how-i-use-codex',
    title: '我如何用 Codex 学 AI 应用开发',
    excerpt:
      '从 Dify 智能客服开始，用 Codex 拆需求、看报错、写接口和做前端联调。',
    date: '2026-06-12',
    readMinutes: 4,
    tags: ['Codex', 'AI 应用', '学习路线'],
    body: [
      '我现在的目标不是单纯会调用一个模型，而是把 AI 能力接到真实业务系统里。第一步是 Dify，因为它能快速看懂知识库、Chatflow、LLM、API 调用这些产品形态。',
      '第二步是自己用 Python 或 Nuxt 写接口。只有自己写过请求、流式输出、错误处理和前端展示，才知道一个 AI 应用为什么会卡住。',
      'Codex 对我最大的帮助是把复杂任务拆开：先确认接口，再写最小可运行版本，再补状态、错误提示、日志和部署。'
    ]
  },
  {
    slug: 'dify-rag-notes',
    title: 'Dify + RAG 智能客服到底做了什么',
    excerpt:
      '知识库不是魔法，核心是文档切分、向量检索、引用来源和只基于资料回答。',
    date: '2026-06-10',
    readMinutes: 5,
    tags: ['Dify', 'RAG', '智能客服'],
    body: [
      'RAG 的核心流程是把文档切成小块，生成 Embedding，用户提问时先检索相关片段，再把片段交给 LLM 组织回答。',
      '智能客服场景最重要的是边界：不知道就说不知道，回答要基于知识库，不要自己编售后政策。',
      'Dify 的好处是把知识库、检索节点、LLM 节点和 API 调用都产品化了，适合先建立整体理解。'
    ]
  },
  {
    slug: 'nuxt-fullstack-roadmap',
    title: 'Nuxt 对前端转全栈有什么帮助',
    excerpt:
      'Nuxt 的 server/api 可以让前端用熟悉的 TypeScript 开始理解后端接口分层。',
    date: '2026-06-08',
    readMinutes: 3,
    tags: ['Nuxt', 'TypeScript', '全栈'],
    body: [
      '对前端来说，Nuxt 的优势是不用一上来就切到完全陌生的后端框架。页面、组件、接口、服务层都在一个项目里，学习路径更顺。',
      '写后台系统时，我会把页面放在 pages，业务请求封装到 composables 或 utils/api，服务端接口放在 server/api，复杂业务再放到 server/services。',
      '这样面试时可以说清楚数据怎么从页面走到接口、服务层和数据库，也能解释权限、会话、校验和错误处理。'
    ]
  }
]
