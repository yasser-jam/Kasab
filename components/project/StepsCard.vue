<template>
  <div class="flex items-center gap-2 mb-4">
    <Icon :name="stepsColors.receive" class="text-primary" size="2rem" />
    <div class="font-bold">مرحلة تلقي العروض</div>
  </div>

  <div class="flex items-center gap-2 mb-4">
    <Icon :name="stepsColors.progress" class="text-gray-400" size="2rem" />
    <div class="font-semibold">مرحلة التنفيذ</div>
  </div>

  <div class="flex items-center gap-2 mb-4">
    <Icon :name="stepsColors.done" class="text-gray-400" size="2rem" />
    <div class="font-semibold">مرحلة التسليم</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  status?: 'pending' | 'active' | 'cloused' | 'in_progress' | 'done'
}>()

const stepsColors = computed(() => {
  switch (props.status) {
    case 'active':
      return {
        receive: 'mdi:arrow-left-circle',
        progress: 'mdi:circle-double',
        done: 'mdi:circle-double'
      }
    case 'in_progress':
      return {
        receive: 'mdi:arrow-left-circle',
        progress: 'mdi:arrow-left-circle',
        done: 'mdi:circle-double'
      }
    case 'done':
      return {
        receive: 'mdi:arrow-left-circle',
        progress: 'mdi:arrow-left-circle',
        done: 'mdi:arrow-left-circle'
      }
    default:
      return {
        receive: 'mdi:arrow-left-circle',
        progress: 'mdi:circle-double',
        done: 'mdi:circle-double'
      }
  }
})
</script>
