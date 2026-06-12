<script setup lang="ts">
import type { SkillGroup } from '~/types/content'

defineProps<{
  skills: SkillGroup[]
}>()
</script>

<template>
  <div class="skill-grid">
    <article v-for="group in skills" :key="group.name" class="skill-panel reveal-panel">
      <h3>{{ group.name }}</h3>
      <ul>
        <li v-for="item in group.items" :key="item">{{ item }}</li>
      </ul>
    </article>
  </div>
</template>
