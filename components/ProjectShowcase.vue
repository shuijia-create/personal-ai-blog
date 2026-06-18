<script setup lang="ts">
import { CheckCircle2, ChevronDown, Filter } from 'lucide-vue-next'
import type { Project } from '~/types/content'

const props = defineProps<{
  projects: Project[]
}>()

const allCategory = '全部'
const activeCategory = ref(allCategory)
const expandedProjectId = ref<string | null>(props.projects[0]?.id ?? null)

const categories = computed(() => [
  allCategory,
  ...Array.from(new Set(props.projects.map((project) => project.category)))
])

const filteredProjects = computed(() => {
  if (activeCategory.value === allCategory) {
    return props.projects
  }

  return props.projects.filter((project) => project.category === activeCategory.value)
})

function selectCategory(category: string) {
  activeCategory.value = category
  expandedProjectId.value = filteredProjects.value[0]?.id ?? null
}

function toggleProject(projectId: string) {
  expandedProjectId.value = expandedProjectId.value === projectId ? null : projectId
}
</script>

<template>
  <div class="project-showcase">
    <div class="project-toolbar reveal-panel">
      <div class="project-toolbar-title">
        <Filter :size="18" />
        <span>按方向筛选项目</span>
      </div>
      <div class="project-filter" role="tablist" aria-label="项目分类">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="{ active: category === activeCategory }"
          role="tab"
          :aria-selected="category === activeCategory"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="project-list">
      <article v-for="project in filteredProjects" :key="project.id" class="project-card reveal-panel">
        <div class="project-topline">
          <span>{{ project.role }}</span>
          <strong>{{ project.status }}</strong>
        </div>
        <h3>{{ project.name }}</h3>
        <p>{{ project.summary }}</p>

        <div class="project-meta-row">
          <span>{{ project.category }}</span>
          <span>{{ project.year }}</span>
        </div>

        <div class="tag-row">
          <span v-for="item in project.stack" :key="item">{{ item }}</span>
        </div>

        <ul>
          <li v-for="item in project.impact" :key="item">
            <CheckCircle2 :size="15" />
            {{ item }}
          </li>
        </ul>

        <button class="project-detail-toggle" type="button" @click="toggleProject(project.id)">
          {{ expandedProjectId === project.id ? '收起细节' : '展开细节' }}
          <ChevronDown :class="{ rotated: expandedProjectId === project.id }" :size="18" />
        </button>

        <div v-if="expandedProjectId === project.id" class="project-detail">
          <p v-for="item in project.detail" :key="item">{{ item }}</p>
        </div>
      </article>
    </div>
  </div>
</template>
