<script setup lang="ts">
import { ArrowDown, Github, Mail, Sparkles } from 'lucide-vue-next'
import { gsap } from 'gsap'
import type { ComponentPublicInstance } from 'vue'
import type { Profile } from '~/types/content'

const props = defineProps<{
  profile: Profile
}>()

const heroRef = ref<HTMLElement | null>(null)
const codeCards = ref<HTMLElement[]>([])
let context: gsap.Context | null = null

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
    gsap.from('.hero-kicker, .hero-title, .hero-summary, .hero-actions', {
      y: 28,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12
    })

    gsap.from(codeCards.value, {
      x: 36,
      opacity: 0,
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
  }, heroRef.value || undefined)

})

onUnmounted(() => {
  context?.revert()
})
</script>

<template>
  <section ref="heroRef" class="hero">
    <div class="hero-backdrop" :style="{ backgroundImage: `url(${props.profile.avatar})` }" />
    <div class="hero-overlay" />

    <div class="hero-content">
      <p class="hero-kicker">
        <Sparkles :size="18" />
        Vue / Nuxt / AI 应用
      </p>
      <h1 class="hero-title">
        {{ props.profile.name }}
        <span>{{ props.profile.title }}</span>
      </h1>
      <p class="hero-summary">{{ props.profile.summary }}</p>

      <div class="hero-actions">
        <a class="button primary" href="#projects">看项目</a>
        <NuxtLink class="button ghost" to="/blog">读博客</NuxtLink>
        <a class="icon-link" href="https://github.com/" aria-label="GitHub">
          <Github :size="21" />
        </a>
        <a class="icon-link" href="mailto:hello@example.com" aria-label="Email">
          <Mail :size="21" />
        </a>
      </div>
    </div>

    <div class="hero-console" aria-label="技能片段">
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

    <a class="scroll-cue" href="#about" aria-label="继续向下">
      <ArrowDown :size="22" />
    </a>
  </section>
</template>
