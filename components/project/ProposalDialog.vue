<template>
  <base-dialog
    :open="modelValue"
    @close="$emit('update:model-value', false)"
    @save="$emit('save')"
  >
    <template #title>تأكيد تعيين الموظف؟</template>
    <template #body> سيبدأ الموظف بالعمل بشكل مباشر </template>
  </base-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()
</script>
