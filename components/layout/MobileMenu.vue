<template>
  <div ref="menu" class="py-12 px-4 bg-white">
    <nav class="flex flex-col items-center justify-center gap-20">
      <nuxt-link
        v-for="item in links"
        :to="item.link"
        :class="isActive(item) ? 'text-primary link-item' : 'text-gray-500'"
        class="relative text-base font-semibold hover:text-primary transition-all"
        >{{ item.title }}</nuxt-link
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
const links = ref<any[]>([
  {
    title: 'عروض التوظيف',
    link: '/offers',
    keys: ['offers']
  },
  {
    title: 'عروض العملاء',
    link: '/projects',
    keys: ['projects']
  },
  {
    title: 'المنتجات الجاهزة',
    link: '/products',
    keys: ['products']
  },
  {
    title: 'الحسابات',
    link: '/accounts',
    keys: ['accounts']
  }
])

const route = useRoute()

const isActive = (item: any) => {
  return item.keys.includes(route.fullPath)
}
</script>
