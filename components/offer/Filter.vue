<template>
  <div class="bg-white shadow-md p-4 my-4 rounded-lg">
    <div class="text-2xl mb-2">نوع العرض</div>

    <base-checkbox v-for="ty in types">
      <template #label>
        <offer-type-label :type="ty"></offer-type-label>
      </template>
    </base-checkbox>
  </div>


  <div class="bg-white shadow-md p-4 my-4 rounded-lg">
    <div class="text-2xl mb-2">متوسط الرواتب</div>
    <base-range></base-range>    
  </div>

  <div class="bg-white shadow-md p-4 my-4 rounded-lg">
    <div class="text-2xl mb-2">معلومات العرض</div>
    
    <base-checkbox label="المواصلات مؤمنة"></base-checkbox>
    <base-checkbox label="تأمينات صحية"></base-checkbox>
    <base-checkbox label="عدم وجود خدمة عسكرية"></base-checkbox>
  </div>
</template>

<script setup lang="ts">
const types = ref([
  {
    name: 'برمجي',
    count: 305
  },
  {
    name: 'طبي',
    count: 20
  },
  {
    name: 'خدمي',
    count: 100
  },
  {
    name: 'صناعي',
    count: 150
  }
])
</script>
