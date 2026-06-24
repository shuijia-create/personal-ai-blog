<script setup lang="ts">
const { getProfile, getProjects, getPosts } = useContentApi()

const [{ data: profileResult, error: profileError }, { data: projectsResult }, { data: postsResult }] =
  await Promise.all([
    useAsyncData('profile', getProfile),
    useAsyncData('projects', getProjects),
    useAsyncData('posts', getPosts)
  ])

useHead({
  title: '税嘉 | Vue 前端开发工程师'
})

const profile = computed(() => profileResult.value?.data)
const projects = computed(() => projectsResult.value?.data ?? [])
const posts = computed(() => postsResult.value?.data ?? [])
const experience = computed(() => profile.value?.experience ?? [])
const education = computed(() => profile.value?.education)
const focusAreas = computed(() => profile.value?.focusAreas ?? [])
const timeline = computed(() => profile.value?.timeline ?? [])
const contactHref = computed(
  () =>
    profile.value?.socials.find((item) => item.label.toLowerCase() === 'email')?.href ??
    profile.value?.socials.find((item) => item.label.toLowerCase() === 'github')?.href ??
    '#projects'
)
const contactLabel = computed(() => (contactHref.value.startsWith('mailto:') ? '联系我' : 'GitHub 联系'))
const emailHref = computed(() => profile.value?.socials.find((item) => item.label.toLowerCase() === 'email')?.href)
const emailText = computed(() => emailHref.value?.replace('mailto:', '') ?? '')
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
            title="自我介绍"
            summary="我是一名前端开发工程师，主要做 Vue 技术栈、B 端后台、企业微信侧边栏、微信小程序、移动 H5 和 Electron 客户端开发，也在持续补强 Nuxt 全栈后台能力。"
          />
          <SkillMatrix :skills="profile.skills" />
        </div>
      </section>

      <section id="fit" class="section">
        <div class="container">
          <SectionTitle
            eyebrow="Capability"
            title="核心能力与交付范围"
            summary="从业务页面、组件封装、接口联调到跨端兼容和权限链路，我更关注功能能否稳定落地、便于维护。"
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
            summary="这些项目覆盖企业微信侧边栏、Nuxt 后台、小程序/H5、Electron 客户端和 B 端管理系统。"
          />
          <ProjectShowcase :projects="projects" />
        </div>
      </section>

      <section class="section band">
        <div class="container">
          <div class="section-heading-row">
            <SectionTitle
              eyebrow="Writing"
              title="技术文章与项目记录"
              summary="围绕 Vue、Nuxt、企业微信侧边栏、Electron、后台权限和工程化做一些持续整理。"
            />
            <NuxtLink class="button compact" to="/blog">全部文章</NuxtLink>
          </div>
          <BlogPreviewList :posts="posts.slice(0, 3)" />
        </div>
      </section>

      <section class="section cta-section">
        <div class="container cta-layout">
          <div>
            <p class="eyebrow">Contact</p>
            <h2>感谢查看我的个人介绍和项目记录</h2>
            <p class="cta-summary">
              如果需要进一步了解项目细节，可以通过 GitHub 查看源码和更新记录。
            </p>
            <a v-if="emailHref" class="contact-email" :href="emailHref">
              邮箱：{{ emailText }}
            </a>
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
        </div>
      </section>

      <RevealMotion />
    </template>
  </div>
</template>
