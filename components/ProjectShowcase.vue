<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
import type { Project } from '~/types/content'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="project-list">
    <article v-for="project in projects" :key="project.id" class="project-card reveal-panel">
      <div class="project-topline">
        <span>{{ project.role }}</span>
        <ExternalLink :size="18" />
      </div>
      <h3>{{ project.name }}</h3>
      <p>{{ project.summary }}</p>
      <div class="tag-row">
        <span v-for="item in project.stack" :key="item">{{ item }}</span>
      </div>
      <ul>
        <li v-for="item in project.impact" :key="item">{{ item }}</li>
      </ul>
    </article>
  </div>
</template>
