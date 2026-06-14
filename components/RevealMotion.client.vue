<script setup lang="ts">
import { gsap } from 'gsap'

let observer: IntersectionObserver | null = null

onMounted(() => {
  const panels = gsap.utils.toArray<HTMLElement>('.reveal-panel')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion) {
    gsap.set(panels, { y: 0, scale: 1, rotateX: 0 })
    return
  }

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        gsap.to(entry.target, {
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.85,
          ease: 'power3.out'
        })

        activeObserver.unobserve(entry.target)
      })
    },
    { threshold: 0.18 }
  )

  observer = activeObserver

  panels.forEach((panel) => {
    gsap.set(panel, {
      y: 34,
      scale: 0.97,
      rotateX: 6,
      transformPerspective: 900,
      transformOrigin: '50% 100%'
    })
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
