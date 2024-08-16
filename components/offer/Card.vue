<template>
  <div class="card shadow-md rounded-lg">
    <div class="flex justify-between">
      <div>
        <nuxt-link to="/offers/1">
          <div class="text-2xl font-bold mb-3">{{ offer.job_role?.name }}</div>
        </nuxt-link>

        <div class="flex items-center gap-6">
          <div class="text-lg font-semibold text-primary">
            {{ offer.min_salary }}ل.س - {{ offer.max_salary }}ل.س
          </div>
          
          <div class="text-gray-500 font-semibold">/</div>

          <div class="text-lg font-semibold text-secondary">
            {{ offer.min_age }}سنة - {{ offer.max_age }}سنة
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

    <div class="flex justify-between items-center mt-8">
      <div class="flex items-center gap-4">
        <badge-health v-if="offer.health_insurance"></badge-health>

        <badge-transportation
          v-if="offer.transportation"
        ></badge-transportation>

        <badge-attendence
          :attendence="offer.attendance_type"
        ></badge-attendence>
      </div>

      <base-chip color="gray" class="text-gray-500 font-semibold"
        >تاريخ التقديم: {{ dayjs(offer.created_at).format('DD-MM-YYYY') }}</base-chip
      >
    </div>
  </div>
</template>

<script setup lang="ts">

import dayjs from 'dayjs'

defineProps<{
  offer: Offer
}>()
</script>
