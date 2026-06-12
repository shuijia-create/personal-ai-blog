<script setup lang="ts">
import { CalendarDays, Clock3 } from 'lucide-vue-next'
import type { BlogPost } from '~/types/content'

defineProps<{
  posts: Omit<BlogPost, 'body'>[]
}>()
</script>

<template>
  <div class="post-grid">
    <NuxtLink v-for="post in posts" :key="post.slug" class="post-card reveal-panel" :to="`/blog/${post.slug}`">
      <div class="post-meta">
        <span><CalendarDays :size="15" />{{ post.date }}</span>
        <span><Clock3 :size="15" />{{ post.readMinutes }} 分钟</span>
      </div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <div class="tag-row">
        <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
      </div>
    </NuxtLink>
  </div>
</template>
