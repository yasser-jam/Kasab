<template>
  <div class="border-2 border-dashed border-primary rounded-lg py-3 px-4">
    <div class="flex gap-4">
      <div class="w-12 h-12 bg-gray-200 rounded-full">
        <img v-if="company.profile_image_url" :src="company.profile_image_url" alt="profile-img">
      </div>
      

      <div class="">
          <div class="text-lg font-bold text-primary">{{ company.name }}</div>
    
          <div class="text-sm text-gray-500">{{ company.industry_name }}</div>
      </div>

      <base-btn icon="mdi:info" class="ms-auto" btn-class="btn-ghost" color="primary" :to="`/company/${company.id}`"></base-btn>
    </div>
  </div>
</template>


<script setup lang=ts>
defineProps<{
  company: Company
}>()

</script>