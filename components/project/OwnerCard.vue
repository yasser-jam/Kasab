<template>
  <div class="flex flex-col justfiy-center items-center gap-2">
    <div class="w-16 h-16 rounded-full bg-slate-200" :class="`bg-[url(${client?.background_image_url})]`"></div>

    <div class="text-center">
      <div class="font-semibold text-xl text-primary">{{ `${client?.user?.first_name} ${client?.user?.last_name}` }}</div>

      <div class="text-gray-500">{{ client?.user?.email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  client?: Client
}>()
</script>
