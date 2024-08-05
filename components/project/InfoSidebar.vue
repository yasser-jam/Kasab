<template>
  <div>
    <div class="card">
      <base-card-title class="mb-8">صاحب المشروع</base-card-title>

      <project-owner-card :client :user></project-owner-card>
    </div>

    <div class="card mt-8">
      <base-card-title class="mb-8">مراحل المشروع</base-card-title>

      <project-steps-card></project-steps-card>
    </div>

    <div class="card mt-8">
      <base-card-title class="mb-8">بطاقة المشروع</base-card-title>

      <div class="flex gap-4 items-center mb-6">
        <div>مدة التنفيذ</div>
        <base-chip color="secondary">{{ offer.days }} يوم</base-chip>
      </div>

      <div class="flex gap-4 items-center mb-6">
        <div>الميزانية</div>

        <div class="flex items-center font-semibold gap-2">
          <base-chip color="success">{{ offer.min_price }} ل.س</base-chip>

          <Icon name="mdi:arrow-left" />

          <base-chip color="success">{{ offer.max_price }} ل.س</base-chip>
        </div>
      </div>

      <div class="flex gap-4 items-center mb-6">
        <div>متوسط العروض</div>
        <base-chip color="gray">غير محدد</base-chip>
      </div>

      <div class="flex gap-4 items-center mb-6">
        <div>تاريخ الإضافة</div>
        <base-chip color="primary">{{
          dayjs(offer.created_at).format('DD-MM-YYYY')
        }}</base-chip>
      </div>
    </div>

    <div class="card mt-8">
      <base-card-title class="mb-8">المهارات المستخدمة</base-card-title>

      <div class="flex gap-4 flex-wrap">
        <base-chip v-for="skill in offer.skills" color="secondary">{{
          skill.name
        }}</base-chip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const offerStore = useClientOfferStore()
const clientStore = useClientStore()
const authStore = useAuthStore()

const { offer } = storeToRefs(offerStore)
const { client } = storeToRefs(clientStore)
const { user } = storeToRefs(authStore)
</script>
