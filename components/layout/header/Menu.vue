<template>
  <nav class="flex justify-center gap-24">
    <nuxt-link
      v-for="item in links"
      :to="item.link"
      :class="$route.path == item.link ? 'text-primary link-item' : 'text-gray-500'"
      class="relative text-lg font-semibold hover:text-primary transition-all"
      >{{ item.title }}</nuxt-link
    >
  </nav>
</template>

<script setup lang="ts">
interface Link {
  title: string;
  link: string;
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
]);
</script>

<style scoped>
.link-item::after {
  content: "";
  width: 1rem;
  height: .5rem;
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  translate: -50% 0;
  border-radius: 2rem;
  background-color: #2D547C;
}
</style>
