import type { BlogPost, Profile, Project } from '../../types/content'

export const profile: Profile = {
  name: '税嘉',
  title: '前端开发工程师 / 跨端客户端 / AI 应用 / Nuxt 全栈方向',
  location: '四川 / 前端、跨端、企业信息化方向',
  summary:
    '5 年以上前端开发经验，长期参与 B 端后台、H5、微信小程序、企业微信侧边栏、Electron 桌面客户端等多端业务建设。熟悉 Vue2/Vue3、TypeScript、组件封装、权限路由、接口联调、WebSocket 实时通信和跨端兼容处理，也在补 Nuxt 全栈、Dify/RAG、AI 客服与 Codex 辅助开发实践。',
  avatar: '/avatar.png',
  metrics: [
    { value: '5+', label: '年前端经验', detail: 'B 端后台、H5、小程序、企微、Electron 都做过' },
    { value: '6', label: '类端侧场景', detail: 'PC Web、移动 H5、小程序、企微侧边栏、桌面端、AI Web' },
    { value: 'AI', label: '应用落地', detail: 'Dify RAG、流式客服、Codex 辅助开发、Nuxt API' }
  ],
  highlights: [
    '5年以上前端开发经验，覆盖 B 端后台、H5、小程序、企微侧边栏、Electron',
    'Vue2 / Vue3 / TypeScript / Element Plus / Vant / Pinia / Vite',
    'Electron IPC、自动更新、NSIS 安装包、主应用与子应用通信',
    'Nuxt 4 + Nitro API + Prisma / MariaDB + Redis Session 全栈实践',
    'Dify / RAG / AI 客服 / 流式输出 / Codex 辅助开发'
  ],
  skills: [
    {
      name: '前端基础',
      items: ['HTML', 'CSS', 'JavaScript', 'ES6+', 'TypeScript', '响应式布局', '移动端适配']
    },
    {
      name: 'Vue 技术栈',
      items: ['Vue2', 'Vue3', 'Nuxt', 'Vuex', 'Pinia', 'Vue Router', 'Vite', 'Element Plus', 'Vant']
    },
    {
      name: '跨端能力',
      items: ['Electron', '微信小程序', '企业微信侧边栏', 'H5', 'uni-app', 'JSBridge', '企业微信 JS-SDK']
    },
    {
      name: '工程与全栈',
      items: ['组件封装', '接口封装', '动态路由权限', 'WebSocket', 'Git', '自动更新', 'Nuxt server/api', 'Prisma']
    },
    {
      name: 'AI 应用',
      items: ['Dify', 'RAG 知识库', 'AI 客服', '流式输出', 'Python Flask API', 'OpenAI Codex', 'AI Vibe Coding']
    }
  ],
  focusAreas: [
    {
      id: 'frontend',
      label: '前端工程',
      title: '能独立完成后台、H5 和多端页面落地',
      summary:
        '围绕 Vue 技术栈完成业务页面、组件封装、权限控制和接口联调，能够把设计稿、业务规则和后端接口稳定落到可用页面。',
      proof: [
        '长期使用 Vue2/Vue3 + TypeScript 做业务页面和组件封装',
        '熟悉 Element Plus、Vant、Pinia、Vue Router、权限路由和请求封装',
        '处理过列表、表单、审批、文件上传、实时通讯和移动端适配'
      ]
    },
    {
      id: 'ai',
      label: 'AI 应用',
      title: '能把 AI 能力接入真实业务流程',
      summary:
        '在前端能力基础上探索 Dify、RAG、流式输出和 AI 接口调用，重点关注 AI 能力如何进入真实产品页面和业务流程。',
      proof: [
        '完成 Dify 知识库、Chatflow、知识检索节点、LLM 回答和 API 调用链路',
        '用 Flask/Vue 做过流式客服调用，理解 SSE 和 response_mode',
        '使用 Codex 辅助拆需求、生成代码、排查接口错误和整理文档'
      ]
    },
    {
      id: 'fullstack',
      label: 'Nuxt 全栈',
      title: '用 TypeScript 补齐前后端完整链路',
      summary:
        '使用 Nuxt 4 和 Nitro API 搭建轻量全栈项目，能从页面、接口、服务层、数据结构到部署形成完整闭环。',
      proof: [
        '会用 Nuxt 4、Nitro API、server/services 做简单后端分层',
        '理解 Redis Session、RBAC、Zod 校验和 Prisma 数据访问的作用',
        '能把页面、API、服务层、数据结构和部署流程串起来讲清楚'
      ]
    },
    {
      id: 'electron',
      label: 'Electron',
      title: '具备桌面客户端和 Web 子应用通信经验',
      summary:
        '参与过 Electron 桌面客户端相关工作，理解 Web 前端在桌面容器中的通信、打包、更新和异常处理方式。',
      proof: [
        '写过主应用与子应用通信，理解主进程、渲染进程和 IPC',
        '做过自动更新、electron-builder、NSIS 安装包输出',
        '能处理桌面端配置、异常提示、版本发布和多环境差异'
      ]
    }
  ],
  timeline: [
    {
      period: '现在',
      title: '前端能力向 AI 应用和 Nuxt 全栈扩展',
      description:
        '在已有 Vue/跨端经验基础上，继续补充 AI 应用、RAG、服务端接口和线上部署能力。',
      items: ['Nuxt 4 + TypeScript 全栈项目', 'Dify RAG 智能客服', 'Codex 辅助开发流程', 'GitHub Pages 线上展示']
    },
    {
      period: '2022 - 2026',
      title: '多端业务项目落地',
      description:
        '主要围绕企业后台、Electron 客户端、企业微信侧边栏、小程序和 H5 业务开发。',
      items: ['页面和组件开发', '接口联调和权限控制', '跨端兼容处理', '主子应用通信和自动更新']
    },
    {
      period: '2021 - 2022',
      title: '后台系统和 H5 项目积累',
      description:
        '从页面还原、列表表单、订单售后到实时通讯模块，逐步建立完整业务开发习惯。',
      items: ['后台管理系统', 'H5 活动页面', '公共组件封装', '业务模块联调']
    }
  ],
  socials: [
    { label: 'Email', href: 'mailto:1078620612@qq.com' },
    { label: 'GitHub', href: 'https://github.com/shuijia-create' }
  ],
  experience: [
    {
      company: '成都先生科技',
      role: '前端开发工程师',
      period: '2022.03 - 至今',
      points: [
        '参与 B 端后台、Electron 客户端、企业微信侧边栏、小程序和 H5 项目开发，负责核心页面、业务模块、接口联调和多端兼容处理。',
        '与产品、UI、后端协同完成需求拆解、排期评估和交互还原，推动业务从原型到上线落地。',
        '封装公共组件、请求方法、权限处理和页面通用逻辑，降低重复开发成本并提升维护效率。',
        '参与 Electron 主应用与子应用通信、自动更新和安装包相关工作，沉淀桌面端问题排查经验。',
        '对企业微信侧边栏、小程序和 H5 场景进行适配，处理登录态、页面跳转、JS-SDK 调用和端侧兼容。'
      ]
    },
    {
      company: '成都山莓科技公司',
      role: '前端开发工程师',
      period: '2021.01 - 2022.01',
      points: [
        '负责后台管理系统和 H5 页面开发，完成静态页面还原、接口联调、数据展示及业务交互。',
        '参与项目框架搭建和公共组件封装，配合后端完成订单、售后、实时通讯等业务模块开发。',
        '根据业务反馈调整页面交互和数据展示方式，提升后台人员的操作效率。'
      ]
    }
  ],
  education: {
    school: '南充职业技术学院',
    major: '计算机应用技术',
    degree: '专科',
    period: '2017.09 - 2020.09'
  }
}

export const projects: Project[] = [
  {
    id: 'personal-ai-blog',
    name: '个人 AI 作品集博客',
    role: 'Nuxt 全栈开发 / 线上展示',
    category: 'Nuxt 全栈',
    year: '2026',
    status: '可部署',
    summary:
      '用 Nuxt 4、TypeScript、Nitro API 和 GSAP 做个人作品集，集中展示前端经验、跨端项目、AI 应用探索和技术文章。',
    stack: ['Nuxt 4', 'TypeScript', 'Nitro API', 'GSAP', 'VueUse', 'Vercel'],
    impact: [
      '使用 server/api 输出 Profile、Projects、Posts 内容，前端通过 composable 统一请求',
      '加入项目筛选、能力切换、博客搜索和响应式布局，增强浏览效率',
      '通过 npm run typecheck 和 npm run build 验证，可部署到 GitHub Pages'
    ],
    detail: [
      '这个项目的定位不是普通静态页面，而是把个人介绍、项目经历、技术能力和文章沉淀合成一个可上线站点。',
      '内容层放在 server/data，接口层放在 server/api，页面层只消费统一的数据结构，方便以后接 CMS 或数据库。',
      '交互层重点提升阅读效率：访问者可以按技术方向筛选项目，并查看对应技术细节。'
    ]
  },
  {
    id: 'nuxt-admin-ai',
    name: 'Nuxt 全栈后台管理系统',
    role: '全栈开发 / AI 辅助开发',
    category: 'Nuxt 全栈',
    year: '2026',
    status: '学习项目',
    summary:
      '用 Nuxt 4、TypeScript、Element Plus、Pinia、Prisma、MariaDB 和 Redis Session 做后台系统，包含登录、权限、工单、通知和 AI 工单草稿。',
    stack: ['Nuxt 4', 'TypeScript', 'Element Plus', 'Prisma', 'Redis', 'Zod', 'Qwen API'],
    impact: [
      '按 pages -> composables -> api client -> server/api -> services -> Prisma 分层',
      '实现 Cookie + Redis Session 登录和 RBAC 权限控制',
      '用 AI SDK 调 Qwen，Zod 校验 AI 输出，生成稳定工单草稿'
    ],
    detail: [
      '这个项目主要用于补齐前端到后端的完整理解，能解释页面、接口、服务层、数据库和权限之间的关系。',
      'RBAC 用于区分不同角色能访问的菜单、页面和按钮；Redis Session 用于维护登录态。',
      'AI 部分不是只返回一段文本，而是要求模型输出结构化草稿，再用 Zod 校验后进入业务流程。'
    ]
  },
  {
    id: 'dify-rag-support',
    name: 'Dify RAG 智能客服 Demo',
    role: 'AI 应用开发',
    category: 'AI 应用',
    year: '2026',
    status: '可演示',
    summary:
      '从上传文档、知识库、Chatflow、知识检索节点、LLM 回答到 Flask/Vue API 调用，打通一个能流式回答的客服原型。',
    stack: ['Dify', 'RAG', 'Flask', 'Vue3', 'Streaming API'],
    impact: [
      '理解 query、inputs、user、response_mode 等 Dify API 参数',
      '处理 SSE 流式响应，让前端逐字输出',
      '把知识库检索结果约束到客服回答流程里'
    ],
    detail: [
      '核心链路是：用户提问 -> 知识检索 -> LLM 根据资料回答 -> 前端流式展示。',
      '踩过 404、405、500、answer 字段不存在、streaming 解析等问题，因此能解释 Dify API 调用细节。',
      '项目重点体现前端如何接入 AI 服务，包括接口参数、流式响应、错误处理和用户侧展示。'
    ]
  },
  {
    id: 'wechat-sidebar-miniapp',
    name: '企业微信侧边栏与小程序业务',
    role: '跨端前端开发',
    category: '跨端业务',
    year: '2024 - 2025',
    status: '业务项目',
    summary:
      '参与企业微信侧边栏、小程序和 H5 业务开发，围绕客户信息展示、业务跳转、登录态同步和移动端适配完成前端落地。',
    stack: ['Vue3', '微信小程序', '企业微信 JS-SDK', 'Vant', 'JSBridge'],
    impact: [
      '处理企微侧边栏环境识别、页面跳转、客户信息展示和端侧兼容',
      '完成小程序页面、表单、列表、业务状态和接口联调',
      '把多端公共逻辑抽成可复用方法，降低重复开发'
    ],
    detail: [
      '该类业务项目以技术职责和实现思路为主，不涉及客户数据、内部接口和业务敏感信息。',
      '重点能力是理解端侧环境：普通浏览器、微信、企业微信、小程序之间的能力边界不同。',
      '核心技术点包括登录态、JS-SDK、页面跳转、权限控制和多端兼容。'
    ]
  },
  {
    id: 'electron-live-client',
    name: '财助手直播客户端',
    role: 'Electron 前端开发',
    category: 'Electron',
    year: '2023 - 2024',
    status: '业务项目',
    summary:
      '基于 Electron 和 Vue3 做桌面客户端，覆盖主进程、渲染进程、子应用通信、自动更新和 NSIS 打包。',
    stack: ['Electron', 'Vue3', 'IPC', 'electron-builder', 'NSIS'],
    impact: [
      '处理主应用与子应用消息通信',
      '实现客户端自动更新和安装包输出',
      '沉淀桌面端异常处理和多环境配置经验'
    ],
    detail: [
      'Electron 项目的价值是能体现普通 Web 前端之外的客户端经验。',
      '主应用与子应用通信要处理消息格式、异常反馈和生命周期问题。',
      '自动更新和打包发布涉及版本号、安装包、更新源和用户侧异常提示。'
    ]
  },
  {
    id: 'b-admin-workbench',
    name: '企业后台管理工作台',
    role: '前端开发 / 组件封装',
    category: '前端工程',
    year: '2021 - 2025',
    status: '业务项目',
    summary:
      '参与多个 B 端后台系统开发，覆盖菜单权限、列表表格、复杂表单、审批流、文件上传、数据看板和业务状态流转。',
    stack: ['Vue2', 'Vue3', 'TypeScript', 'Element Plus', 'Axios', 'Pinia'],
    impact: [
      '封装请求层、表格、表单、弹窗和业务状态组件',
      '配合后端完成权限、接口异常、登录失效和业务校验处理',
      '对页面加载、表格交互、空状态和错误提示做体验优化'
    ],
    detail: [
      '后台系统最考验稳定性和细节，列表、表单、权限、异常处理都要做扎实。',
      '这类项目能体现长期业务开发经验，包括需求理解、页面抽象、接口联调和上线维护。',
      '项目说明聚焦模块类型、技术点和工程实践，不涉及真实业务数据。'
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
      'Codex 对我最大的帮助是把复杂任务拆开：先确认接口，再写最小可运行版本，再补状态、错误提示、日志和部署。',
      '我不会把 AI 当成替代基本功的东西，而是把它当成提高学习速度和工程执行效率的工具；代码实现仍然要能解释清楚设计原因和边界。'
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
      'Dify 的好处是把知识库、检索节点、LLM 节点和 API 调用都产品化了，适合先建立整体理解。',
      '真正开发时，还要关心前端怎么展示检索来源、接口失败怎么提示、流式输出怎么停止、以及同一个用户的会话如何延续。'
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
      '这种结构能清楚表达数据如何从页面流向接口、服务层和数据库，也能展示权限、会话、校验和错误处理的设计思路。',
      'Nuxt 不能替代系统学习后端，但它很适合作为前端转全栈的第一步，因为反馈快、代码路径短、部署也相对简单。'
    ]
  },
  {
    slug: 'enterprise-frontend-practice',
    title: '企业项目中的前端工程实践',
    excerpt:
      '长期业务项目里，前端不仅是还原页面，还要处理权限、状态、异常、兼容和交付节奏。',
    date: '2026-06-06',
    readMinutes: 4,
    tags: ['前端工程', '企业项目', 'Vue'],
    body: [
      '企业项目的前端工作不只是把页面写出来，还要把权限、接口、异常提示、空状态、加载状态和多端兼容一起考虑清楚。',
      '后台系统里最常见的是列表、表单、弹窗、审批、文件上传和状态流转。这些模块看起来普通，但稳定性和一致性很重要。',
      '我在项目中会优先封装请求层、通用表格、表单项、业务状态和权限判断，让后续页面开发更快，也更容易维护。',
      '对于不能公开展示的公司项目，我会在作品集中保留技术职责和实现思路，避免暴露内部客户、接口、数据和业务细节。'
    ]
  },
  {
    slug: 'frontend-to-agent-learning',
    title: '从前端视角理解 Agent 应用',
    excerpt:
      'Agent 不只是提示词，前端同样要理解接口、状态、工具调用、RAG、日志和部署。',
    date: '2026-06-04',
    readMinutes: 5,
    tags: ['Agent', '前端转型', '工程化'],
    body: [
      'Agent 应用要落地到产品里，不能只停留在提示词层面。真正的业务链路会涉及接口、工具、知识库、会话、权限、成本和失败恢复。',
      '我目前的学习路径是先用 Dify 建一个知识库客服，再用 Python 或 Nuxt 写一个能调用工具的 Agent，最后再学习 LangGraph 这类复杂流程框架。',
      '前端经验不是浪费，因为 AI 产品最终还是要给用户操作。流式输出、加载状态、错误重试、历史会话、引用来源，这些都是前端能发挥价值的地方。',
      '我会先做能跑通的最小应用，再逐步补文档检索、工具调用、人工确认、日志记录和部署能力。'
    ]
  }
]
