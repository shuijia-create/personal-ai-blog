<script setup lang="ts">
import { ArrowDown, Github, Mail, Sparkles } from 'lucide-vue-next'
import { gsap } from 'gsap'
import type { ComponentPublicInstance } from 'vue'
import type { Profile } from '~/types/content'

const props = defineProps<{
  profile: Profile
}>()

const runtimeConfig = useRuntimeConfig()
function toPublicUrl(path: string) {
  const baseURL = runtimeConfig.app.baseURL.replace(/\/$/, '')
  const publicPath = path.startsWith('/') ? path : `/${path}`

  return `${baseURL}${publicPath}`
}

const avatarUrl = computed(() => toPublicUrl(props.profile.avatar))
const githubUrl = computed(() => props.profile.socials.find((item) => item.label.toLowerCase() === 'github')?.href)
const emailUrl = computed(() => props.profile.socials.find((item) => item.label.toLowerCase() === 'email')?.href)

const heroRef = ref<HTMLElement | null>(null)
const codeCards = ref<HTMLElement[]>([])
const pointer = reactive({ x: 0, y: 0 })
let context: gsap.Context | null = null
let quickX: gsap.QuickToFunc | null = null
let quickY: gsap.QuickToFunc | null = null

function setCodeCard(el: Element | ComponentPublicInstance | null) {
  if (el instanceof HTMLElement) {
    codeCards.value.push(el)
  }
}

onBeforeUpdate(() => {
  codeCards.value = []
})

onMounted(() => {
  context = gsap.context(() => {
    quickX = gsap.quickTo('.hero-portrait', 'x', { duration: 0.75, ease: 'power3.out' })
    quickY = gsap.quickTo('.hero-portrait', 'y', { duration: 0.75, ease: 'power3.out' })

    gsap.from('.hero-kicker, .hero-title, .hero-summary, .hero-actions, .hero-metrics', {
      y: 28,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12
    })

    gsap.from('.hero-portrait', {
      x: 72,
      scale: 0.96,
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.12
    })

    gsap.from(codeCards.value, {
      x: 36,
      rotate: 4,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.2
    })

    gsap.to('.scanline', {
      yPercent: 120,
      duration: 2.4,
      ease: 'none',
      repeat: -1
    })

    gsap.to('.hero-beam', {
      xPercent: 20,
      opacity: 0.82,
      duration: 3.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.7
    })
  }, heroRef.value || undefined)

})

function handlePointerMove(event: MouseEvent) {
  if (!heroRef.value || !quickX || !quickY) {
    return
  }

  const rect = heroRef.value.getBoundingClientRect()
  pointer.x = (event.clientX - rect.left) / rect.width - 0.5
  pointer.y = (event.clientY - rect.top) / rect.height - 0.5

  quickX(pointer.x * 22)
  quickY(pointer.y * 18)
}

function resetPointer() {
  quickX?.(0)
  quickY?.(0)
}

onUnmounted(() => {
  context?.revert()
})
</script>

<template>
  <section ref="heroRef" class="hero" @mousemove="handlePointerMove" @mouseleave="resetPointer">
    <div class="hero-grid" aria-hidden="true" />
    <div class="hero-beam beam-one" aria-hidden="true" />
    <div class="hero-beam beam-two" aria-hidden="true" />
    <div class="hero-overlay" aria-hidden="true" />

    <div class="hero-content">
      <p class="hero-kicker">
        <Sparkles :size="18" />
        Vue / Nuxt / AI 应用
      </p>
      <div
        class="mobile-portrait-card"
        :style="{ backgroundImage: `url(${avatarUrl})` }"
        aria-hidden="true"
      />
      <h1 class="hero-title">
        {{ props.profile.name }}
        <span>{{ props.profile.title }}</span>
      </h1>
      <p class="hero-summary">{{ props.profile.summary }}</p>

      <div class="hero-actions">
        <a class="button primary" href="#projects">看项目</a>
        <NuxtLink class="button ghost" to="/blog">读博客</NuxtLink>
        <a v-if="githubUrl" class="icon-link" :href="githubUrl" aria-label="GitHub" target="_blank" rel="noreferrer">
          <Github :size="21" />
        </a>
        <a v-if="emailUrl" class="icon-link" :href="emailUrl" aria-label="Email">
          <Mail :size="21" />
        </a>
      </div>

      <div class="hero-metrics" aria-label="核心经验">
        <div v-for="metric in props.profile.metrics" :key="metric.label" :title="metric.detail">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </div>
      </div>
    </div>

    <div class="hero-stage">
      <div class="hero-portrait" :style="{ backgroundImage: `url(${avatarUrl})` }" aria-label="个人头像">
        <div class="portrait-rim" />
      </div>

      <div class="hero-console" aria-label="技能片段">
        <div class="console-topline">
          <span />
          <span />
          <span />
          <strong>profile.runtime</strong>
        </div>
        <div class="scanline" />
        <div
          v-for="(item, index) in props.profile.highlights"
          :key="item"
          :ref="setCodeCard"
          class="code-card"
        >
          <span>0{{ index + 1 }}</span>
          <p>{{ item }}</p>
        </div>
      </div>
    </div>

    <a class="scroll-cue" href="#about" aria-label="继续向下">
      <ArrowDown :size="22" />
    </a>
  </section>
</template>
