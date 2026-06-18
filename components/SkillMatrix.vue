<script setup lang="ts">
import type { SkillGroup } from '~/types/content'

const props = defineProps<{
  skills: SkillGroup[]
}>()

const activeIndex = ref(0)
const activeSkill = computed(() => props.skills[activeIndex.value] ?? props.skills[0])
</script>

<template>
  <div class="skill-workbench reveal-panel">
    <div class="skill-tabs" role="tablist" aria-label="能力分类">
      <button
        v-for="(group, index) in skills"
        :key="group.name"
        type="button"
        :class="{ active: index === activeIndex }"
        role="tab"
        :aria-selected="index === activeIndex"
        @click="activeIndex = index"
      >
        {{ group.name }}
      </button>
    </div>

    <article v-if="activeSkill" class="skill-panel featured-skill">
      <p class="eyebrow">Selected Skill</p>
      <h3>{{ activeSkill.name }}</h3>
      <ul>
        <li v-for="item in activeSkill.items" :key="item">{{ item }}</li>
      </ul>
    </article>

    <div class="skill-grid compact-skill-grid">
      <article v-for="group in skills" :key="group.name" class="skill-panel">
        <h3>{{ group.name }}</h3>
        <ul>
          <li v-for="item in group.items.slice(0, 5)" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>
