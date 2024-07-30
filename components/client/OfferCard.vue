<template>
  <div class="card shadow-md rounded-lg">
    <div class="flex justify-between">
      <div>
        <div class="text-2xl font-bold mb-3">{{ offer.title }}</div>

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

    <base-chip color="gray" class="text-gray-500 font-semibold mt-8"
      >تاريخ التقديم:
      {{ dayjs(offer.created_at).format('DD-MM-YYYY') }}</base-chip
    >
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

defineProps<{
  offer: ClientOffer
}>()
</script>
