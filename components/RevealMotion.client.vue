<script setup lang="ts">
import { gsap } from 'gsap'

let observer: IntersectionObserver | null = null

onMounted(() => {
  const panels = gsap.utils.toArray<HTMLElement>('.reveal-panel')

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        gsap.to(entry.target, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out'
        })

        activeObserver.unobserve(entry.target)
      })
    },
    { threshold: 0.18 }
  )

  observer = activeObserver

  panels.forEach((panel) => {
    gsap.set(panel, { y: 30, opacity: 0 })
    activeObserver.observe(panel)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <span class="motion-hook" aria-hidden="true" />
</template>
