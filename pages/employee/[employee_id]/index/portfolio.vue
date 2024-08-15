<template>
  <div class="grid grid-cols-3 gap-8 mb-8">
    <job-card></job-card>
    <job-card></job-card>
    <job-card></job-card>
  </div>

  <teleport to="#actions"> 
    <base-btn icon="mdi:plus" :to="`/employee/${$route.params.employee_id}/portfolio/create`">إضافة عمل للمعرض</base-btn>
</teleport>

<NuxtPage />
</template>

<script setup lang="ts">
const employeeStore = useEmployeeStore()

const { employee } = storeToRefs(employeeStore)


</script>
