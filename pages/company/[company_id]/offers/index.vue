<template>
  <div class="container">
    <layout-breadcrumb :meta class="my-8"></layout-breadcrumb>

    <div class="flex justify-between items-center mb-8">
      <base-title class="font-bold">عروضي</base-title>
      <base-btn
        color="neutral"
        icon="mdi:domain"
        :to="`/company/${$route.params.company_id}`"
        >معلومات الشركة</base-btn
      >
    </div>

    <base-loader v-if="pending" />

    <template v-else>
      <nuxt-link
        v-for="offer in companyOffers"
        :to="`/company/${$route.params.company_id}/offers/${offer.id}`"
      >
        <offer-card :offer="offer" class="mb-4"></offer-card>
      </nuxt-link>
    </template>
  </div>
</template>

<script setup lang="ts">
const companyStore = useCompanyStore()

const { companyOffers } = storeToRefs(companyStore)

const { pending } = useLazyAsyncData<Offer[]>(() => companyStore.myOffers())

const route = useRoute()

const companyId = route.params.company_id

const meta = ref([
  {
    title: 'عروضي',
    link: `/company/${companyId}/offers`,
    active: true
  }
])
</script>
