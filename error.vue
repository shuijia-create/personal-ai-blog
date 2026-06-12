<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()
</script>

<template>
  <div class="page-state">
    <h1>{{ error.statusCode || 500 }}</h1>
    <p>{{ error.statusMessage || error.message || '页面出错了' }}</p>
    <NuxtLink class="button primary" to="/">回到首页</NuxtLink>
  </div>
</template>
