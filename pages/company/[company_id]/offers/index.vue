<template>
    <div class="container">
      <layout-breadcrumb class="my-8"></layout-breadcrumb>
  
      <div class="flex justify-between items-center mb-8">
        <base-title class="font-bold">عروضي</base-title>
        <base-btn color="neutral" icon="mdi:domain" :to="`/company/${$route.params.company_id}`">معلومات الشركة</base-btn>
      </div>
  
      <nuxt-link to="/company/1/offers/1">
        <offer-card class="mb-4"></offer-card>
      </nuxt-link>
    </div>
  
    <!-- <NuxtPage /> -->
  
  </template>
  