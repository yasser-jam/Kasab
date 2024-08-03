<template>
  <div class="container mx-auto">
    <layout-breadcrumb class="mt-12"></layout-breadcrumb>

    <div class="flex justify-between mt-6 mb-8">
      <h1 class="text-3xl font-bold mb-6">عروض الشركات</h1>
      <!-- <div class="text-xl font-semibold text-gray-400">
        تصفح العروض بمختلف أقسامها، يمكنك البحث عن العرض المناسب ومعرفة مزيد من
        التفاصيل عنه
      </div> -->

      <div class="flex gap-2">
        <base-btn
          icon="mdi:filter-outline"
          @click="showFilters = !showFilters"
        ></base-btn>

        <base-btn v-if="showFilters" @click="refresh">تطبيق الفلاتر</base-btn>
      </div>
    </div>

    <div class="grid grid-cols-8 gap-8">
      <div class="col-span-2">
        <offer-stat></offer-stat>
      </div>

      <div class="col-span-6 flex flex-col gap-8">
        <Transition>
          <company-offer-filters v-if="showFilters" />
        </Transition>
        
        <base-loader v-if="pending" />
        
        <offer-card v-for="offer in offers" :offer />
      </div>
    </div>
  </div>

  <NuxtPage />
</template>

<script setup lang="ts">
const offerStore = useOfferStore()

const { pending, refresh } = useLazyAsyncData(() => offerStore.list())

const { offers } = storeToRefs(offerStore)

const showFilters = ref<boolean>(false)
</script>
