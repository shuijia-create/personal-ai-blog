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
      label: '前端岗位',
      title: '能独立完成后台、H5 和多端页面落地',
      summary:
        '适合 Vue 前端、B 端后台、H5、小程序、企业微信应用方向。优势是项目类型多，能从页面还原做到接口联调和上线问题处理。',
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
        '适合 AI 应用前端、RAG 客服、Agent 原型、企业知识库方向。重点不是只调模型，而是把检索、提示词、流式输出和异常处理接到产品里。',
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
        '适合轻量全栈、内部工具、个人项目、AI 产品原型方向。Nuxt 的 server/api 能让前端用熟悉的技术补齐服务端理解。',
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
        '适合 Electron 客户端、内部工具桌面化、WebView 容器和自动更新方向。对普通前端岗位也是一个加分点。',
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
        '不丢掉已有 Vue/跨端经验，在此基础上补 AI 应用、RAG、服务端接口和工程化表达。',
      items: ['Nuxt 4 + TypeScript 全栈项目', 'Dify RAG 智能客服', 'Codex 辅助开发流程', '部署到域名和线上展示']
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
  faqs: [
    {
      question: '公司项目能不能写到作品集里？',
      answer:
        '可以写，但要脱敏。不要放源码、真实客户名、内部接口、数据库结构和截图。用“某企业内部后台系统”“某企业微信侧边栏项目”这样的表达，重点写技术栈、职责和结果。'
    },
    {
      question: '你现在适合投什么岗位？',
      answer:
        '主线还是 Vue 前端工程师，同时可以投“前端开发 + AI 应用”“Nuxt 全栈前端”“Electron 前端”“企业微信/小程序前端”。简历要把真实项目和新方向分清楚。'
    },
    {
      question: 'AI 辅助开发能不能写？',
      answer:
        '可以写，但不要写成“全靠 AI”。更好的表达是：使用 Codex 辅助需求拆解、接口联调、Bug 排查、代码重构和文档整理，提高开发效率。'
    },
    {
      question: '项目还差什么更像正式作品？',
      answer:
        '需要有线上地址、清楚的项目介绍、可操作交互、技术栈说明、关键难点、部署方式和后续计划。这个站点就是为了补齐这些展示要素。'
    }
  ],
  contactPitches: [
    {
      id: 'frontend',
      label: '应聘前端',
      title: 'Vue 前端开发方向',
      message:
        '您好，我是税嘉，5 年以上 Vue 前端开发经验，做过 B 端后台、H5、小程序、企业微信侧边栏和 Electron 客户端。熟悉 Vue3、TypeScript、Element Plus、Pinia、权限路由、接口联调和组件封装，希望沟通前端开发岗位机会。'
    },
    {
      id: 'ai',
      label: 'AI 应用',
      title: 'AI 应用 / RAG 客服方向',
      message:
        '您好，我最近在从前端扩展到 AI 应用开发，做过 Dify RAG 智能客服、Flask/Vue 流式接口调用和 Nuxt 全栈展示项目。我的优势是能把 AI 能力接到真实页面、接口和业务流程里，希望沟通 AI 应用前端或智能客服方向机会。'
    },
    {
      id: 'fullstack',
      label: 'Nuxt 全栈',
      title: 'Nuxt / TypeScript 全栈方向',
      message:
        '您好，我有多年 Vue 前端经验，也在补 Nuxt 4、Nitro API、Prisma、Redis Session、RBAC 和 Zod 校验等全栈能力。能完成简单前后端项目，也能承担前端主责并配合后端联调，希望沟通 Nuxt 或前端全栈方向机会。'
    }
  ],
  socials: [
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
      '用 Nuxt 4、TypeScript、Nitro API 和 GSAP 做个人作品集，展示前端经验、AI 学习路线、项目复盘和求职方向。',
    stack: ['Nuxt 4', 'TypeScript', 'Nitro API', 'GSAP', 'VueUse', 'Vercel'],
    impact: [
      '使用 server/api 输出 Profile、Projects、Posts 内容，前端通过 composable 统一请求',
      '加入项目筛选、路线切换、FAQ 折叠和联系话术生成，增强可操作性',
      '通过 npm run typecheck 和 npm run build 验证，可部署到 Vercel 并绑定域名'
    ],
    detail: [
      '这个项目的定位不是普通静态简历，而是把简历、作品集、博客和学习路线合成一个可上线站点。',
      '内容层放在 server/data，接口层放在 server/api，页面层只消费统一的数据结构，方便以后接 CMS 或数据库。',
      '交互层重点服务求职展示：让面试官可以快速按方向筛选项目，并看到对应技术证据。'
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
      '适合展示“前端如何接 AI 服务”，也适合作为后续 Agent 学习的入口项目。'
    ]
  },
  {
    id: 'wechat-sidebar-miniapp',
    name: '企业微信侧边栏与小程序业务',
    role: '跨端前端开发',
    category: '跨端业务',
    year: '2024 - 2025',
    status: '公司项目脱敏',
    summary:
      '参与企业微信侧边栏、小程序和 H5 业务开发，围绕客户信息展示、业务跳转、登录态同步和移动端适配完成前端落地。',
    stack: ['Vue3', '微信小程序', '企业微信 JS-SDK', 'Vant', 'JSBridge'],
    impact: [
      '处理企微侧边栏环境识别、页面跳转、客户信息展示和端侧兼容',
      '完成小程序页面、表单、列表、业务状态和接口联调',
      '把多端公共逻辑抽成可复用方法，降低重复开发'
    ],
    detail: [
      '该类项目不能展示内部截图和客户数据，因此作品集只保留脱敏后的技术职责。',
      '重点能力是理解端侧环境：普通浏览器、微信、企业微信、小程序之间的能力边界不同。',
      '面试时可重点讲登录态、JS-SDK、页面跳转、权限和兼容问题。'
    ]
  },
  {
    id: 'electron-live-client',
    name: '财助手直播客户端',
    role: 'Electron 前端开发',
    category: 'Electron',
    year: '2023 - 2024',
    status: '公司项目脱敏',
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
    status: '公司项目脱敏',
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
      '这类项目适合面试前端岗位，因为能体现长期业务开发经验。',
      '在简历和作品集中只写模块类型和技术点，不暴露公司真实数据。'
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
      '我不会把 AI 当成替代基本功的东西，而是把它当成一个能提高学习速度和工程执行效率的工具。真正面试时，还是要能讲清楚代码为什么这样写。'
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
      '这样面试时可以说清楚数据怎么从页面走到接口、服务层和数据库，也能解释权限、会话、校验和错误处理。',
      'Nuxt 不能替代系统学习后端，但它很适合作为前端转全栈的第一步，因为反馈快、代码路径短、部署也相对简单。'
    ]
  },
  {
    slug: 'resume-project-desensitization',
    title: '公司项目怎么写进简历和作品集',
    excerpt:
      '公司项目可以写，但要脱敏。重点写角色、技术栈、职责、难点和结果，不写内部数据。',
    date: '2026-06-06',
    readMinutes: 4,
    tags: ['简历', '项目经历', '面试'],
    body: [
      '公司项目不是不能写，而是不能把公司内部信息直接搬出来。真实客户名称、接口地址、源码仓库、数据库结构、内部截图和业务数据都不应该公开。',
      '安全写法是把项目名称改成“某企业内部后台系统”“某企业微信侧边栏项目”“某 Electron 桌面客户端”，然后说明自己负责的技术工作。',
      '面试官真正想看的是你做了什么、解决了什么问题、用了什么技术、结果怎么样，而不是公司内部细节。',
      '如果项目不能公开演示，可以做一个脱敏版个人作品集，把技术点用自己的数据和页面重新表达出来。'
    ]
  },
  {
    slug: 'frontend-to-agent-learning',
    title: '前端转 Agent 开发不要急着跳层',
    excerpt:
      'Agent 不只是提示词，前端同样要补接口、状态、工具调用、RAG、日志和部署。',
    date: '2026-06-04',
    readMinutes: 5,
    tags: ['Agent', '前端转型', '工程化'],
    body: [
      '前端转 Agent 开发，最容易犯的错误是只看概念，不做完整链路。真正能落地的 Agent 一定会涉及接口、工具、知识库、会话、权限、成本和失败恢复。',
      '我更适合的路线是先用 Dify 建一个知识库客服，再用 Python 或 Nuxt 写一个能调用工具的 Agent，最后再学 LangGraph 这种复杂流程框架。',
      '前端经验不是浪费，因为 AI 产品最终还是要给用户操作。流式输出、加载状态、错误重试、历史会话、引用来源，这些都是前端能发挥价值的地方。',
      '学习时不要追求一下子做大系统，先做一个能跑通的客服，再逐步加文档检索、工具调用、人工确认和日志。'
    ]
  }
]
