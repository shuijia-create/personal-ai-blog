import type { BlogPost, Profile, Project } from '../../types/content'

export const profile: Profile = {
  name: '税嘉',
  title: '前端开发工程师 / Vue3 / TypeScript / 企业后台 / 跨端应用',
  location: '四川 / 前端、跨端、企业信息化方向',
  summary:
    '5 年以上前端开发经验，长期参与 B 端后台、企业微信侧边栏、微信小程序、移动 H5、Electron 桌面客户端等项目。熟悉 Vue2/Vue3、TypeScript、组件封装、权限路由、接口联调、移动端适配和多端兼容处理。近期在补 Nuxt 4 全栈后台、Redis Session、RBAC、Prisma、Zod 等工程能力，目标是能把前端页面、接口、权限和部署链路讲清楚、做扎实。',
  avatar: '/avatar.png',
  metrics: [
    { value: '5+', label: '年前端经验', detail: '长期参与后台系统、H5、小程序、企业微信侧边栏和 Electron 项目' },
    { value: '6', label: '类业务端场景', detail: 'PC Web、移动 H5、微信小程序、企业微信侧边栏、桌面客户端、Nuxt 后台' },
    { value: 'Vue', label: '主技术栈', detail: 'Vue2/Vue3、TypeScript、Vite、Pinia、Element Plus、Vant' }
  ],
  highlights: [
    'Vue2 / Vue3 / TypeScript / Vite / Pinia / Vue Router / Element Plus / Vant',
    '企业后台、列表表单、权限路由、接口联调、状态管理和组件封装',
    '企业微信侧边栏、微信小程序、移动 H5、JS-SDK 与端侧兼容处理',
    'Electron 主应用和子应用通信、自动更新、electron-builder、NSIS 打包',
    'Nuxt 4、Nitro API、Prisma、Redis Session、RBAC、Zod 等全栈补强'
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
      name: '跨端业务',
      items: ['企业微信侧边栏', '微信小程序', '移动 H5', 'Electron', 'JSBridge', '企业微信 JS-SDK', '端侧兼容']
    },
    {
      name: '工程实践',
      items: ['组件封装', '接口封装', '权限路由', '文件上传', 'PDF 预览', 'WebSocket', 'Git', '自动更新']
    },
    {
      name: '全栈拓展',
      items: ['Nuxt 4', 'Nitro server/api', 'Prisma', 'Redis Session', 'RBAC', 'Zod 校验', 'Dify/RAG 了解']
    }
  ],
  focusAreas: [
    {
      id: 'frontend',
      label: '前端工程',
      title: '能独立完成后台、H5 和多端页面落地',
      summary:
        '围绕 Vue 技术栈完成业务页面、公共组件、权限控制和接口联调，能把设计稿、业务规则和后端接口稳定落到可用页面。',
      proof: [
        '长期使用 Vue2/Vue3 + TypeScript 做业务页面和组件封装',
        '熟悉 Element Plus、Vant、Pinia、Vue Router、权限路由和请求封装',
        '处理过列表、表单、弹窗、审批、文件上传、PDF 预览、实时通讯和移动端适配'
      ]
    },
    {
      id: 'cross-end',
      label: '跨端业务',
      title: '熟悉企业微信侧边栏、小程序和移动 H5 开发场景',
      summary:
        '做过企业微信侧边栏、微信小程序和 H5 业务页面，关注登录态、页面跳转、端侧能力差异、移动端适配和接口联调。',
      proof: [
        '企业微信侧边栏项目包含客户详情、学员信息、订单、直播、通知、周报等业务模块',
        '封装过弹窗、日历、Tab、选择器、客户详情、消息内容和 PDF 预览等公共组件',
        '处理过 OSS 上传、PDF/视频预览、px2rem 适配、企业微信环境识别和页面跳转'
      ]
    },
    {
      id: 'fullstack',
      label: 'Nuxt 后台',
      title: '用 TypeScript 补齐前后端完整链路理解',
      summary:
        '使用 Nuxt 4 和 Nitro API 搭建后台项目，从页面、API client、server/api、service、Prisma、Redis Session 到权限校验形成完整闭环。',
      proof: [
        '实现登录鉴权、/api/me getInfo、动态菜单、页面权限和按钮权限',
        '理解 Redis Session、RBAC、Zod 校验和 Prisma 数据访问在后台项目里的作用',
        '能讲清楚工单列表、详情、新增、状态流转、通知和操作日志的分层链路'
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
      title: '强化 Vue 工程化与 Nuxt 全栈后台能力',
      description:
        '在已有 Vue/跨端经验基础上，继续补充 Nuxt 后台、接口分层、权限模型、数据库访问和线上部署能力。',
      items: ['Nuxt 4 + TypeScript 后台项目', 'Redis Session 与 RBAC 权限', 'Prisma 数据访问', 'GitHub Pages 线上展示']
    },
    {
      period: '2022 - 2026',
      title: '多端业务项目落地',
      description:
        '主要围绕企业后台、Electron 客户端、企业微信侧边栏、微信小程序和 H5 业务开发。',
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
        '参与 B 端后台、Electron 客户端、企业微信侧边栏、微信小程序和 H5 项目开发，负责核心页面、业务模块、接口联调和多端兼容处理。',
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
    id: 'enterprise-wechat-sidebar',
    name: '企业微信侧边栏业务系统',
    role: 'Vue3 前端开发 / 跨端业务',
    category: '企业微信',
    year: '2024 - 2025',
    status: '业务项目',
    summary:
      '基于 Vue3、Vite、TypeScript、Pinia、Vant 和 Element Plus 开发企业微信侧边栏业务页面，覆盖客户详情、学员信息、订单、直播、通知、周报、支付链接等模块。',
    stack: ['Vue3', 'TypeScript', 'Vite', 'Pinia', 'Vant', 'Element Plus', 'Axios', 'Ali OSS'],
    impact: [
      '负责客户/学员信息、订单、直播、服务、通知等侧边栏业务页面开发',
      '封装弹窗、日历、Tab、选择器、客户详情、消息内容和 PDF 预览等通用组件',
      '处理企业微信环境下的登录态、接口联调、移动端适配、OSS 上传和文件预览'
    ],
    detail: [
      '项目代码按 api、views、components、utils 分层，业务接口包括 clientDetail、studentInfo、order、liveList、groupChat、weeklyReport 等模块。',
      '公共组件沉淀在 components/common 和 msgContent 下，降低多业务页面的重复开发成本。',
      '项目说明只展示技术职责和实现思路，不公开公司内部接口、客户数据和敏感业务规则。'
    ]
  },
  {
    id: 'nuxt-admin-fullstack',
    name: 'Nuxt 全栈后台管理系统',
    role: '前端主导 / 全栈练习',
    category: '后台系统',
    year: '2026',
    status: '可演示',
    summary:
      '用 Nuxt 4、Vue3、TypeScript、Element Plus、Pinia、Prisma 和 Redis Session 搭建后台管理系统，重点练习登录鉴权、RBAC 权限、工单流程、通知和操作日志。',
    stack: ['Nuxt 4', 'TypeScript', 'Element Plus', 'Pinia', 'Prisma', 'Redis', 'Zod'],
    impact: [
      '实现登录、退出、/api/me getInfo、动态菜单、页面权限和按钮权限',
      '按 pages -> composables -> API client -> server/api -> services -> Prisma 分层',
      '完成工单列表、详情、新增、状态流转、通知和操作日志的数据链路'
    ],
    detail: [
      '登录态由 Redis Session 和 httpOnly cookie 维护，刷新页面时通过 useRequestFetch 转发 cookie 恢复用户信息。',
      'RBAC 用角色、权限、角色权限关系控制菜单、页面和按钮，前端做页面跳转判断，接口侧继续兜底。',
      '这个项目用于补齐前端到后端的完整理解，能解释页面、接口、服务层、数据库和权限之间的职责边界。'
    ]
  },
  {
    id: 'mini-program-h5',
    name: '微信小程序与移动 H5 业务页面',
    role: '小程序 / 移动端前端',
    category: '小程序/H5',
    year: '2023 - 2025',
    status: '业务项目',
    summary:
      '参与微信小程序和移动 H5 业务页面开发，主要处理列表、表单、状态展示、业务跳转、接口联调、移动端适配和多端兼容。',
    stack: ['微信小程序', 'H5', 'JavaScript', 'TypeScript', 'Vant', 'Axios', '移动端适配'],
    impact: [
      '完成小程序页面、表单、列表、状态流转和接口联调',
      '处理移动端适配、端侧跳转、登录态和异常提示',
      '把通用交互和业务状态抽成可复用方法，提升后续页面开发效率'
    ],
    detail: [
      '该类项目重点体现端侧经验：小程序、微信内 H5、普通浏览器和企业微信环境的能力边界不同。',
      '页面开发不只做视觉还原，还要处理加载、空状态、错误提示、提交防重和接口异常。',
      '作品集只描述技术职责，不展示不能公开的业务数据和内部页面。'
    ]
  },
  {
    id: 'electron-live-client',
    name: '直播桌面客户端',
    role: 'Electron 前端开发',
    category: 'Electron',
    year: '2023 - 2024',
    status: '业务项目',
    summary:
      '基于 Electron 和 Vue3 参与桌面客户端开发，覆盖主进程、渲染进程、子应用通信、自动更新和 NSIS 安装包输出。',
    stack: ['Electron', 'Vue3', 'IPC', 'electron-builder', 'NSIS'],
    impact: [
      '处理主应用与子应用消息通信',
      '参与客户端自动更新和安装包输出',
      '沉淀桌面端异常处理、多环境配置和版本发布经验'
    ],
    detail: [
      'Electron 项目体现普通 Web 前端之外的客户端经验，包括通信、窗口生命周期、异常反馈和本地环境差异。',
      '主应用与子应用通信需要约定消息格式、错误反馈和生命周期边界。',
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
  },
  {
    id: 'dify-rag-support',
    name: 'Dify RAG 智能客服 Demo',
    role: '智能客服接入练习',
    category: '工程拓展',
    year: '2026',
    status: '学习 Demo',
    summary:
      '用 Dify 知识库、Chatflow、知识检索节点和 Flask/Vue 接口调用做智能客服原型，重点理解前端如何接入流式回答和错误处理。',
    stack: ['Dify', 'RAG', 'Flask', 'Vue3', 'Streaming API'],
    impact: [
      '理解 query、inputs、user、response_mode 等 Dify API 参数',
      '处理 SSE 流式响应，让前端逐字输出',
      '把知识库检索结果约束到客服回答流程里'
    ],
    detail: [
      '核心链路是：用户提问 -> 知识检索 -> LLM 根据资料回答 -> 前端流式展示。',
      '踩过 404、405、500、answer 字段不存在、streaming 解析等问题，因此能解释 Dify API 调用细节。',
      '该项目作为工程拓展展示，不放在主线经历前面，避免把真实前端项目弱化。'
    ]
  },
  {
    id: 'personal-portfolio',
    name: '个人作品集与项目展示站',
    role: 'Nuxt 开发 / 线上展示',
    category: '作品集',
    year: '2026',
    status: '已上线',
    summary:
      '用 Nuxt 4、TypeScript、Nitro API 和 GSAP 搭建个人作品集，集中展示工作经历、项目能力、技术文章和联系方式。',
    stack: ['Nuxt 4', 'TypeScript', 'Nitro API', 'GSAP', 'VueUse', 'GitHub Pages'],
    impact: [
      '使用 server/api 输出 Profile、Projects、Posts 内容，前端通过 composable 统一请求',
      '加入项目筛选、能力切换、博客搜索和响应式布局，方便面试官快速了解经历',
      '通过 typecheck 和 build 验证后部署到 GitHub Pages'
    ],
    detail: [
      '这个站点用于面试投递，重点是让项目经历、技术职责和联系方式清晰可读。',
      '内容层放在 server/data，接口层放在 server/api，页面层只消费统一的数据结构，后续可以接 CMS 或数据库。',
      '交互层使用 GSAP 和 IntersectionObserver 做滚动进入动画，提升阅读节奏但不影响内容可访问性。'
    ]
  }
]

export const posts: BlogPost[] = [
  {
    slug: 'wechat-sidebar-practice',
    title: '企业微信侧边栏项目里我主要做什么',
    excerpt:
      '侧边栏项目不只是移动端页面，还要处理企业微信环境、客户信息、业务跳转、文件预览、移动端适配和接口联调。',
    date: '2026-06-12',
    readMinutes: 4,
    tags: ['企业微信', 'Vue3', '跨端业务'],
    body: [
      '企业微信侧边栏的核心不是做一个普通 H5 页面，而是在企业微信容器里把客户、学员、订单、直播、通知等业务信息组织成可操作页面。',
      '这类项目会涉及环境识别、登录态、页面跳转、接口异常、移动端适配、OSS 上传、PDF 预览和视频预览。前端需要把端侧能力边界和业务流程一起考虑。',
      '我在项目里主要负责页面开发、接口联调、公共组件封装和兼容处理。比如弹窗、日历、Tab、选择器、客户详情、消息内容等组件都需要考虑复用和维护。',
      '对外展示这类公司项目时，重点应该讲技术职责、模块类型和实现思路，不公开内部接口、客户数据和敏感业务规则。'
    ]
  },
  {
    slug: 'nuxt-admin-auth-rbac',
    title: 'Nuxt 后台项目里的登录、Session 和 RBAC',
    excerpt:
      '用 Nuxt 4 做后台时，我把页面、API client、server/api、service、Prisma 和 Redis Session 拆成清晰链路。',
    date: '2026-06-10',
    readMinutes: 5,
    tags: ['Nuxt', 'RBAC', '后台系统'],
    body: [
      'Nuxt 后台项目让我把前端页面和后端接口放在同一个 TypeScript 项目里练习，适合补齐登录、权限、接口分层和数据库访问的完整理解。',
      '登录链路不是只在前端存一个变量，而是后端校验账号密码，写入 Redis Session 和 httpOnly cookie，再通过 /api/me 返回当前用户、菜单路由和按钮权限。',
      'RBAC 可以先理解成角色权限控制。用户拥有角色，角色绑定权限，权限再决定能看到哪些菜单、访问哪些页面、点击哪些按钮。',
      '工单模块按 pages -> composables -> API client -> server/api -> services -> Prisma 分层，页面只处理交互，真正业务规则放在 service 层。'
    ]
  },
  {
    slug: 'enterprise-frontend-practice',
    title: '企业项目中的前端工程实践',
    excerpt:
      '长期业务项目里，前端不仅是还原页面，还要处理权限、状态、异常、兼容、组件复用和交付节奏。',
    date: '2026-06-08',
    readMinutes: 4,
    tags: ['前端工程', '企业项目', 'Vue'],
    body: [
      '企业项目的前端工作不只是把页面写出来，还要把权限、接口、异常提示、空状态、加载状态和多端兼容一起考虑清楚。',
      '后台系统里最常见的是列表、表单、弹窗、审批、文件上传和状态流转。这些模块看起来普通，但稳定性和一致性很重要。',
      '我在项目中会优先封装请求层、通用表格、表单项、业务状态和权限判断，让后续页面开发更快，也更容易维护。',
      '对于不能公开展示的公司项目，作品集里保留技术职责和实现思路，避免暴露内部客户、接口、数据和业务细节。'
    ]
  },
  {
    slug: 'electron-client-notes',
    title: 'Electron 客户端项目需要注意什么',
    excerpt:
      'Electron 项目比普通 Web 多了主进程、渲染进程、IPC、自动更新、安装包和本地环境差异。',
    date: '2026-06-06',
    readMinutes: 3,
    tags: ['Electron', '桌面客户端', 'Vue'],
    body: [
      'Electron 项目对前端来说是一种跨端能力补充。页面仍然可以用 Vue 写，但运行环境、通信方式、打包发布和异常处理都和普通浏览器不同。',
      '主应用与子应用通信时，需要约定消息格式、调用时机和错误反馈。否则页面能打开，但真正联动时会出现状态不同步或异常难排查的问题。',
      '自动更新和安装包输出要关注版本号、更新源、安装路径、权限和用户侧提示。桌面端发布之后，问题排查不能只看浏览器控制台。',
      '这段经历能说明我不只做普通后台页面，也接触过桌面客户端里的工程问题。'
    ]
  },
  {
    slug: 'dify-rag-notes',
    title: 'Dify + RAG 智能客服到底做了什么',
    excerpt:
      '知识库不是魔法，核心是文档切分、向量检索、引用来源和只基于资料回答。',
    date: '2026-06-04',
    readMinutes: 5,
    tags: ['Dify', 'RAG', '智能客服'],
    body: [
      'RAG 的核心流程是把文档切成小块，生成 Embedding，用户提问时先检索相关片段，再把片段交给 LLM 组织回答。',
      '智能客服场景最重要的是边界：不知道就说不知道，回答要基于知识库，不要自己编售后政策。',
      'Dify 的好处是把知识库、检索节点、LLM 节点和 API 调用都产品化了，适合先建立整体理解。',
      '真正开发时，还要关心前端怎么展示检索来源、接口失败怎么提示、流式输出怎么停止，以及同一个用户的会话如何延续。'
    ]
  }
]
