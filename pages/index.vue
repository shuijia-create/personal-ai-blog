<script setup lang="ts">
const { getProfile, getProjects, getPosts } = useContentApi()

const [{ data: profileResult, error: profileError }, { data: projectsResult }, { data: postsResult }] =
  await Promise.all([
    useAsyncData('profile', getProfile),
    useAsyncData('projects', getProjects),
    useAsyncData('posts', getPosts)
  ])

useHead({
  title: '税嘉 | 前端开发与 AI 应用'
})

const profile = computed(() => profileResult.value?.data)
const projects = computed(() => projectsResult.value?.data ?? [])
const posts = computed(() => postsResult.value?.data ?? [])
const experience = computed(() => profile.value?.experience ?? [])
const education = computed(() => profile.value?.education)
const focusAreas = computed(() => profile.value?.focusAreas ?? [])
const timeline = computed(() => profile.value?.timeline ?? [])
const faqs = computed(() => profile.value?.faqs ?? [])
const contactPitches = computed(() => profile.value?.contactPitches ?? [])
const socials = computed(() => profile.value?.socials ?? [])
const contactHref = computed(
  () =>
    profile.value?.socials.find((item) => item.label.toLowerCase() === 'email')?.href ??
    profile.value?.socials.find((item) => item.label.toLowerCase() === 'github')?.href ??
    '#projects'
)
const contactLabel = computed(() => (contactHref.value.startsWith('mailto:') ? '联系我' : 'GitHub 联系'))
</script>

<template>
  <div>
    <div v-if="profileError" class="page-state">
      <h1>内容加载失败</h1>
      <p>请稍后刷新页面。</p>
    </div>

    <template v-else-if="profile">
      <HeroScene :profile="profile" />

      <section id="about" class="section band">
        <div class="container two-column">
          <SectionTitle
            eyebrow="About"
            title="我把前端经验转成能落地的 AI 应用能力"
            summary="不是只会调用模型，而是能把页面、接口、权限、流式输出和业务流程接起来。"
          />
          <SkillMatrix :skills="profile.skills" />
        </div>
      </section>

      <section id="fit" class="section">
        <div class="container">
          <SectionTitle
            eyebrow="Fit"
            title="按岗位方向看我的能力证据"
            summary="前端、AI 应用、Nuxt 全栈、Electron 都不是空写名词，每个方向都对应具体项目和可解释的技术点。"
          />
          <FocusExplorer :focus-areas="focusAreas" :timeline="timeline" />
        </div>
      </section>

      <section id="experience" class="section">
        <div class="container two-column experience-layout">
          <SectionTitle
            eyebrow="Experience"
            title="工作经历与教育背景"
            summary="长期围绕前端工程、跨端客户端、企业微信业务和后台系统落地，从页面、组件、接口到上线流程都有实际项目经验。"
          />
          <div class="experience-stack">
            <article v-for="item in experience" :key="item.company" class="experience-card reveal-panel">
              <div class="experience-head">
                <div>
                  <h3>{{ item.company }}</h3>
                  <p>{{ item.role }}</p>
                </div>
                <span>{{ item.period }}</span>
              </div>
              <ul>
                <li v-for="point in item.points" :key="point">{{ point }}</li>
              </ul>
            </article>

            <article v-if="education" class="experience-card education-card reveal-panel">
              <div class="experience-head">
                <div>
                  <h3>{{ education.school }}</h3>
                  <p>{{ education.major }} / {{ education.degree }}</p>
                </div>
                <span>{{ education.period }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="container">
          <SectionTitle
            eyebrow="Projects"
            title="近期重点项目"
            summary="这些项目覆盖后台系统、AI 客服、Electron 客户端和跨端业务。"
          />
          <ProjectShowcase :projects="projects" />
        </div>
      </section>

      <section class="section band">
        <div class="container">
          <div class="section-heading-row">
            <SectionTitle
              eyebrow="Writing"
              title="学习和项目笔记"
              summary="记录我从前端转 AI Agent / 全栈应用的过程。"
            />
            <NuxtLink class="button compact" to="/blog">全部文章</NuxtLink>
          </div>
          <BlogPreviewList :posts="posts.slice(0, 3)" />
        </div>
      </section>

      <section class="section">
        <div class="container two-column faq-layout">
          <SectionTitle
            eyebrow="FAQ"
            title="面试官可能会关心的问题"
            summary="公司项目怎么写、AI 辅助开发怎么说、当前适合投什么岗位，都先讲清楚。"
          />
          <FaqAccordion :items="faqs" />
        </div>
      </section>

      <section class="section cta-section">
        <div class="container cta-layout">
          <div>
            <p class="eyebrow">Contact</p>
            <h2>需要一个能写前端、懂接口、愿意把 AI 接进业务的人</h2>
          </div>
          <div class="cta-actions">
            <a
              class="button primary"
              :href="contactHref"
              :target="contactHref.startsWith('http') ? '_blank' : undefined"
              :rel="contactHref.startsWith('http') ? 'noreferrer' : undefined"
            >
              {{ contactLabel }}
            </a>
          </div>
          <ContactBuilder :pitches="contactPitches" :socials="socials" />
        </div>
      </section>

      <RevealMotion />
    </template>
  </div>
</template>
