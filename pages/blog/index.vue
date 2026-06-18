<script setup lang="ts">
const { getPosts } = useContentApi()

const { data, pending, error } = await useAsyncData('blog-posts', getPosts)

useHead({
  title: '博客 | 税嘉'
})

const posts = computed(() => data.value?.data ?? [])
const searchText = ref('')
const activeTag = ref('全部')
const tags = computed(() => ['全部', ...Array.from(new Set(posts.value.flatMap((post) => post.tags)))])
const filteredPosts = computed(() => {
  const keyword = searchText.value.trim().toLowerCase()

  return posts.value.filter((post) => {
    const matchesTag = activeTag.value === '全部' || post.tags.includes(activeTag.value)
    const matchesKeyword =
      keyword.length === 0 ||
      [post.title, post.excerpt, post.tags.join(' ')].some((text) => text.toLowerCase().includes(keyword))

    return matchesTag && matchesKeyword
  })
})
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

        <div class="blog-toolbar reveal-panel">
          <label class="search-field">
            <span>搜索文章</span>
            <input v-model="searchText" type="search" placeholder="输入 Nuxt、Dify、Agent..." />
          </label>
          <div class="blog-tags" role="tablist" aria-label="文章标签">
            <button
              v-for="tag in tags"
              :key="tag"
              type="button"
              :class="{ active: tag === activeTag }"
              role="tab"
              :aria-selected="tag === activeTag"
              @click="activeTag = tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div v-if="pending" class="page-state compact-state">
          <p>加载文章中...</p>
        </div>
        <div v-else-if="error" class="page-state compact-state">
          <p>文章加载失败。</p>
        </div>
        <div v-else-if="posts.length === 0" class="page-state compact-state">
          <p>暂时还没有文章。</p>
        </div>
        <div v-else-if="filteredPosts.length === 0" class="page-state compact-state">
          <p>没有找到匹配的文章。</p>
        </div>
        <BlogPreviewList v-else :posts="filteredPosts" />
      </div>
    </section>
    <RevealMotion />
  </div>
</template>
