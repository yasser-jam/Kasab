<template>
    <div class="card shadow-md rounded-lg">
      <div class="flex justify-between">
        <div>
          <nuxt-link :to="`/projects/${offer.id}`">
            <div class="text-2xl font-bold mb-3">{{ offer.title }}</div>
          </nuxt-link>
  
          <div class="flex items-center gap-6">
            <div class="text-lg font-semibold text-primary">
              {{ offer.min_price }}ل.س - {{ offer.max_price }}ل.س
            </div>
          </div>
  
        </div>
  
        <offer-status-chip :status="offer.status" />
      </div>
  
      <div class="mt-4">
        <div class="text-lg text-gray-500">
          {{ offer.description }}
        </div>
      </div>
  
      <div class="flex justify-end mt-8">
        <base-chip color="gray" class="text-gray-500 font-semibold"
          >تاريخ التقديم: {{ dayjs(offer.created_at).format('DD-MM-YYYY') }}</base-chip
        >
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  import dayjs from 'dayjs'
  
  defineProps<{
    offer: ClientOffer
  }>()
  </script>
  