<script setup lang="ts">
import { CalendarDays, Clock3 } from 'lucide-vue-next'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const { getPost } = useContentApi()

const { data, error } = await useAsyncData(`post-${slug.value}`, () => getPost(slug.value))

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '文章不存在'
  })
}

const post = computed(() => data.value?.data)

useHead({
  title: post.value ? `${post.value.title} | 税嘉` : '文章 | 税嘉'
})
</script>

<template>
  <article v-if="post" class="article-page">
    <div class="container article-container">
      <NuxtLink class="back-link" to="/blog">返回博客</NuxtLink>

      <header class="article-header">
        <div class="tag-row">
          <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.excerpt }}</p>
        <div class="post-meta">
          <span><CalendarDays :size="16" />{{ post.date }}</span>
          <span><Clock3 :size="16" />{{ post.readMinutes }} 分钟</span>
        </div>
      </header>

      <div class="article-body">
        <p v-for="paragraph in post.body" :key="paragraph">{{ paragraph }}</p>
      </div>
    </div>
  </article>
</template>
