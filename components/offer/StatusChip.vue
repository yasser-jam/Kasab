<template>
  <base-chip
    :color="
      status == 'pending' ? 'warning' : status == 'active' ? 'success' : 'gray'
    "
  >
    {{
      status == 'pending'
        ? 'قيد الانتظار'
        : status == 'active'
        ? 'فعال'
        : 'منته'
    }}
  </base-chip>
</template>

<script setup lang="ts">
defineProps<{
  status: 'pending' | 'active' | 'cloused'
}>()
</script>
