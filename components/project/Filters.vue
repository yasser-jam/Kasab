<template>
  <div class="card grid grid-cols-4 gap-4 shadow-md">
    <!-- <div class="col-span-2">
        <base-label>نوع الوظيفة</base-label>
  
        <system-sub-category-select :category-id="1" v-model="filters.sub_category_id as number" />
      </div> -->

    <div class="col-span-2">
      <base-label>الحالة</base-label>

      <system-status-select v-model="filters.status" />
    </div>

    <div class="col-span-2">
      <base-label>المهارات المطلوبة</base-label>
      
      <system-skill-select v-model="filters.skill_ids"></system-skill-select>
    </div>

    <div>
      <base-label>الحد الأدنى للسعر</base-label>

      <base-input
        type="number"
        v-model="filters.min_price"
        placeholder="الحد الأدنى للسعر"
      />
    </div>

    <div>
      <base-label>الحد الأعلى للسعر</base-label>

      <base-input
        type="number"
        v-model="filters.max_price"
        placeholder="الحد الأعلى للسعر"
      />
    </div>

    <div>
      <base-label>الحد الأدنى للأيام</base-label>

      <base-input
        type="number"
        v-model="filters.min_days"
        placeholder="الحد الأدنى للأيام"
      />
    </div>

    <div>
      <base-label>الحد الأعلى للأيام</base-label>

      <base-input
        type="number"
        v-model="filters.max_days"
        placeholder="الحد الأعلى للأيام"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const offerStore = useClientOfferStore()
const { filters } = storeToRefs(offerStore)
</script>
