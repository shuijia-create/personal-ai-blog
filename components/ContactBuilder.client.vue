<script setup lang="ts">
import { Check, Copy, Github, Send } from 'lucide-vue-next'
import type { ContactPitch, SocialLink } from '~/types/content'

const props = defineProps<{
  pitches: ContactPitch[]
  socials: SocialLink[]
}>()

const activeId = ref(props.pitches[0]?.id ?? '')
const copied = ref(false)
const activePitch = computed(() => props.pitches.find((item) => item.id === activeId.value) ?? props.pitches[0])
const githubUrl = computed(() => props.socials.find((item) => item.label.toLowerCase() === 'github')?.href)
const emailUrl = computed(() => props.socials.find((item) => item.label.toLowerCase() === 'email')?.href)
const mailtoHref = computed(() => {
  if (!emailUrl.value || !activePitch.value) {
    return ''
  }

  const subject = encodeURIComponent(activePitch.value.title)
  const body = encodeURIComponent(activePitch.value.message)

  return `${emailUrl.value}?subject=${subject}&body=${body}`
})

async function copyPitch() {
  if (!activePitch.value) {
    return
  }

  await navigator.clipboard.writeText(activePitch.value.message)
  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 1800)
}
</script>

<template>
  <div class="contact-builder reveal-panel">
    <div class="pitch-tabs" role="tablist" aria-label="联系话术">
      <button
        v-for="pitch in pitches"
        :key="pitch.id"
        type="button"
        :class="{ active: pitch.id === activeId }"
        role="tab"
        :aria-selected="pitch.id === activeId"
        @click="activeId = pitch.id"
      >
        {{ pitch.label }}
      </button>
    </div>

    <article v-if="activePitch" class="pitch-preview">
      <p class="eyebrow">Message</p>
      <h3>{{ activePitch.title }}</h3>
      <p>{{ activePitch.message }}</p>
    </article>

    <div class="contact-actions">
      <button class="button primary" type="button" @click="copyPitch">
        <Check v-if="copied" :size="18" />
        <Copy v-else :size="18" />
        {{ copied ? '已复制' : '复制话术' }}
      </button>
      <a v-if="mailtoHref" class="button ghost dark-ghost" :href="mailtoHref">
        <Send :size="18" />
        发邮件
      </a>
      <a v-if="githubUrl" class="button ghost dark-ghost" :href="githubUrl" target="_blank" rel="noreferrer">
        <Github :size="18" />
        GitHub
      </a>
    </div>
  </div>
</template>
