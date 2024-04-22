<template>
    <nav class="flex justify-center gap-24">
        <nuxt-link v-for="item in links" :to="item.link" class="text-lg font-semibold text-slate-500">{{ item.title }}</nuxt-link>
      </nav>
</template>

<script setup lang="ts">

interface Link {
    title: string
    link: string
}

const links = ref<Link[]>([
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Jobs",
      link: "/jobs",
    },
    {
      title: "Offers",
      link: "/offers",
    },
    {
      title: "My Account",
      link: "/my-account",
    },
  ]);</script>