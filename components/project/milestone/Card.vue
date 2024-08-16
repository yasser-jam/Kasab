<template>
  <div class="card shadow-md rounded-lg" :class="{ 'border-2 border-primary': active }">
    <div class="flex justify-between items-center">
      <div class="mb-8">
        <div class="font-semibold text-primary text-xl">عنوان المرحلة</div>
        <div class="text-gray-500 text-sm">{{ milestone.deadline }}</div>
      </div>

      <div>
        <div class="text-primary font-semibold text-xl">{{ milestone.price }}</div>
        <span class="text-gray-500 text-sm">ل.س</span>
      </div>
    </div>

    <div class="text-gray-500 text-base">
      {{ milestone.description }}
    </div>

    <base-btn v-if="getRole() == 'client'" @click="$emit('finish')" class="mx-auto mt-12"
      >إنهاء</base-btn
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
    active?: boolean
    milestone: any
}>()
</script>
