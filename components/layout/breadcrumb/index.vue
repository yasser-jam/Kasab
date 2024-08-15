<template>
  <div class="text-lg font-medium py-0 breadcrumbs overflow-hidden">
    <ul>
      <li><nuxt-link to="/">الصفحة الرئيسية</nuxt-link></li>
      <li
        v-for="item in meta"
        :class="item.active && 'text-primary font-semibold'"
      >
        <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  meta?: { title: string; link: string; active: boolean }[]
}>()
</script>
