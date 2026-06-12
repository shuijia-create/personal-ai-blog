<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  summary?: string
}>()
</script>

<template>
  <div class="section-title">
    <p>{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <span v-if="summary">{{ summary }}</span>
  </div>
</template>
