<template>
  <div class="container">
    <layout-breadcrumb class="my-8"></layout-breadcrumb>

    <div class="flex justify-between items-center mb-8">
      <base-title class="font-bold">عروضي</base-title>
      <base-btn
        color="neutral"
        icon="mdi:domain"
        :to="`/client/${$route.params.client_id}`"
        >معلومات العميل</base-btn
      >
    </div>

    <div v-if="pending">loading...</div>

    <template v-else>
      <nuxt-link v-for="offer in clientOffers" to="/company/1/offers/1">
        <client-offer-card :offer="offer" class="mb-4"></client-offer-card>
      </nuxt-link>
    </template>
  </div>
</template>

<script setup lang="ts">
const clientStore = useClientStore()

const { clientOffers } = storeToRefs(clientStore)

const route = useRoute()

const clientId = route.params.client_id

const { pending } = useLazyAsyncData<ClientOffer[]>(() =>
  clientStore.myOffers()
)
</script>
