<template>
  <nav class="flex justify-center gap-20">
    <nuxt-link
      v-for="item in links"
      :to="item.link"
      :class="isActive(item) ? 'text-primary link-item' : 'text-gray-500'"
      class="relative text-lg font-semibold hover:text-primary transition-all"
      >{{ item.title }}</nuxt-link
    >
  </nav>
</template>

<script setup lang="ts">
interface Link {
  title: string;
  link: string;
  keys: string[]
}

const links = ref<Link[]>([
  {
    title: "عروض التوظيف",
    link: "/offers",
    keys: ['/offers']
  },
  {
    title: "عروض العملاء",
    link: "/projects",
    keys: ['/projects']
  },
  {
    title: "المنتجات الجاهزة",
    link: "/products",
    keys: ['/products']
  },
  {
    title: "الحسابات",
    link: "/accounts",
    keys: ['/accounts']
  },
]);

const route = useRoute()

const isActive = (item: any) => {
  return item.keys.includes(route.fullPath)
} 
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
