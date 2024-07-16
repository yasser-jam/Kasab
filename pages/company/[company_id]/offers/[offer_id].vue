<template>
  <div class="container">
    <layout-breadcrumb class="my-8"></layout-breadcrumb>

    <base-title class="mb-12"> مبرمج فرونت اند </base-title>

    <div class="grid grid-cols-4 gap-8">
      <div class="col-span-3">
        <div class="card">
          <base-card-title>وصف العرض</base-card-title>

          <div class="text-slate-700 text-base leading-loose mt-4">
            معلومات كثيرة تصف المشروع وتشرحه معلومات كثيرة تصف المشروع وتشرحه
            معلومات كثيرة تصف المشروع وتشرحه معلومات كثيرة تصف المشروع وتشرحه
            معلومات كثيرة تصف المشروع وتشرحه
          </div>
        </div>

        <base-card-title class="flex justify-between items-center mt-12 mb-4">
          <div class="flex items-center gap-2">
            <div>العروض المقدمة</div>
              <span class="text-gray-500 text-sm font-semibold">(65 عرض)</span>
          </div>

          <base-btn icon="mdi:filter-outline" @click="showFilters = !showFilters"></base-btn>
        </base-card-title>

        <Transition>
          <company-offer-filters v-if="showFilters" class="mb-4" />
        </Transition>
        

        <div class="flex flex-col gap-4 max-h-[500px] overflow-auto">
          <company-offer-proposal v-for="i of 10"></company-offer-proposal>
        </div>
      </div>

      <div>
        <div class="card">
          <base-card-title class="mb-8">بطاقة العرض</base-card-title>

          <div class="flex gap-4 items-center mb-6">
            <div>نوع الوظيفة</div>

            <base-chip>برمجي</base-chip>
          </div>

          <div class="flex gap-4 items-center mb-6">
            <div>الراتب</div>

            <base-chip color="success">400 ل.س</base-chip>
          </div>

          <div class="flex gap-4 items-center mb-6">
            <div>تاريخ الإضافة</div>
            <base-chip color="warning">1/2/2015</base-chip>
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">المهارات المطلوبة</base-card-title>

          <div class="flex gap-4 flex-wrap">
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
            <base-chip color="secondary">HTML</base-chip>
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">رابط العرض</base-card-title>

          <div class="flex justify-between bg-slate-100 rounded-lg p-4">
            <div>https://google.com</div>

            <base-btn
              icon="mdi:link"
              btn-class="btn-link btn-xs btn-primary"
            ></base-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const showFilters = ref(false)

</script>
