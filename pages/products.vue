<template>
    <div class="container mx-auto">
      <layout-breadcrumb :meta class="mt-12"></layout-breadcrumb>
  
      <div class="flex justify-between mt-6 mb-8">
        <h1 class="text-3xl font-bold mb-6">المنتجات الجاهزة</h1>
        <!-- <div class="text-xl font-semibold text-gray-400">
          تصفح العروض بمختلف أقسامها، يمكنك البحث عن العرض المناسب ومعرفة مزيد من
          التفاصيل عنه
        </div> -->
  
        <!-- <div class="flex gap-2">
          <base-btn
            icon="mdi:filter-outline"
            @click="showFilters = !showFilters"
          ></base-btn>
  
          <base-btn v-if="showFilters" @click="refresh">تطبيق الفلاتر</base-btn>
        </div> -->
      </div>
  
      <div class="grid grid-cols-4 gap-8">
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
      </div>
    </div>
  
    <NuxtPage />
  </template>
  
  <script setup lang="ts">
  const productStore = useProductStore()
  
  const { pending, refresh } = useLazyAsyncData(() => productStore.list())
  
  const { products } = storeToRefs(productStore)
  
  const showFilters = ref<boolean>(false)
  
  const meta = ref([
    {
        title: 'المنتجات الجاهزة',
        link: '/products',
        active: true
    }
  ])
  </script>
  