<script setup lang="ts">
import { ArrowRight, Layers3 } from 'lucide-vue-next'
import type { FocusArea, TimelineItem } from '~/types/content'

const props = defineProps<{
  focusAreas: FocusArea[]
  timeline: TimelineItem[]
}>()

const activeId = ref(props.focusAreas[0]?.id ?? '')
const activeFocus = computed(() => props.focusAreas.find((item) => item.id === activeId.value) ?? props.focusAreas[0])
</script>

<template>
  <div class="focus-layout">
    <div class="focus-card reveal-panel">
      <div class="focus-tabs" role="tablist" aria-label="岗位方向">
        <button
          v-for="item in focusAreas"
          :key="item.id"
          type="button"
          :class="{ active: item.id === activeId }"
          role="tab"
          :aria-selected="item.id === activeId"
          @click="activeId = item.id"
        >
          {{ item.label }}
        </button>
      </div>

      <article v-if="activeFocus" class="focus-detail">
        <p class="eyebrow">Match</p>
        <h3>{{ activeFocus.title }}</h3>
        <p>{{ activeFocus.summary }}</p>
        <ul>
          <li v-for="item in activeFocus.proof" :key="item">
            <ArrowRight :size="16" />
            {{ item }}
          </li>
        </ul>
      </article>
    </div>

    <div class="timeline-card reveal-panel">
      <div class="timeline-title">
        <Layers3 :size="20" />
        <span>成长路线</span>
      </div>
      <div class="timeline-list">
        <article v-for="item in timeline" :key="item.title" class="timeline-item">
          <time>{{ item.period }}</time>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="mini-tag-row">
              <span v-for="tag in item.items" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
