<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import type { FaqItem } from '~/types/content'

const props = defineProps<{
  items: FaqItem[]
}>()

const openIndex = ref(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <div class="faq-list reveal-panel">
    <article v-for="(item, index) in props.items" :key="item.question" class="faq-item">
      <button type="button" @click="toggle(index)">
        <span>{{ item.question }}</span>
        <ChevronDown :class="{ rotated: openIndex === index }" :size="20" />
      </button>
      <p v-if="openIndex === index">{{ item.answer }}</p>
    </article>
  </div>
</template>
