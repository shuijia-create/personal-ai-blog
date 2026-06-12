<script setup lang="ts">
const { getPosts } = useContentApi()

const { data, pending, error } = await useAsyncData('blog-posts', getPosts)

useHead({
  title: '博客 | 税嘉'
})

const posts = computed(() => data.value?.data ?? [])
</script>

<template>
  <div class="page-shell">
    <section class="section">
      <div class="container">
        <SectionTitle
          eyebrow="Blog"
          title="项目复盘和学习笔记"
          summary="围绕 Vue、Nuxt、Dify、RAG、Agent 和工程化持续整理。"
        />

        <div v-if="pending" class="page-state compact-state">
          <p>加载文章中...</p>
        </div>
        <div v-else-if="error" class="page-state compact-state">
          <p>文章加载失败。</p>
        </div>
        <div v-else-if="posts.length === 0" class="page-state compact-state">
          <p>暂时还没有文章。</p>
        </div>
        <BlogPreviewList v-else :posts="posts" />
      </div>
    </section>
    <RevealMotion />
  </div>
</template>
