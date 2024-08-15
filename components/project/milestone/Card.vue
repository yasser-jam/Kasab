<template>
  <div class="card shadow-md rounded-lg" :class="{ 'border-2 border-primary': active }">
    <div class="flex justify-between items-center">
      <div class="mb-8">
        <div class="font-semibold text-primary text-xl">المرحلة الأولى</div>
        <div class="text-gray-500 text-sm">20/3/2003</div>
      </div>

      <div>
        <div class="text-primary font-semibold text-xl">3000</div>
        <span class="text-gray-500 text-sm">ل.س</span>
      </div>
    </div>

    <div class="text-gray-500 text-base">
      المطلوب خلال هذه المرحلة القيام بالعديد ممن الأمور المهمة
    </div>

    <base-btn v-if="getRole() == 'client'" class="mx-auto mt-12"
      >إنهاء</base-btn
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
    active?: boolean
}>()
</script>
