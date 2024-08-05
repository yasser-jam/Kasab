<template>
    <div class="container">
      <layout-breadcrumb class="my-8"></layout-breadcrumb>
  
      <base-title class="mb-12"> {{ offer.title }} </base-title>
  
      <div class="grid grid-cols-4 gap-8">
        <div class="col-span-3">
          <div class="card">
            <base-card-title>وصف المشرووع</base-card-title>
  
            <div class="text-slate-700 text-base leading-loose mt-4">
              {{ offer.description }}
            </div>
          </div>
  
          <div class="card mt-8">
            <base-card-title class="mb-4">ملفات المشروع</base-card-title>
  
            <div class="max-h-[400px] overflow-auto">
              <base-file-item
                v-for="file in offer.files"
                :file
                downloadable
              ></base-file-item>
            </div>
          </div>
  
          <div v-if="isProjectOwner" class="card my-8">
            <base-card-title class="flex items-center gap-2 mb-12">
              <div>العروض المقدمة</div>
              <span class="text-gray-500 text-sm font-semibold">(65 عرض)</span>
            </base-card-title>
  
            <div class="flex flex-col max-h-[500px] overflow-auto">
              <div v-for="i of 10">
                <div class="grid grid-cols-1">
                  <project-proposal-card
                    class="border-solid"
                  ></project-proposal-card>
                </div>
  
                <div class="divider !my-1"></div>
              </div>
            </div>
          </div>
  
          <div v-else class="card mt-8">
            <base-card-title class="mb-4">أضف عرضك الآن</base-card-title>
  
            <client-proposal-card />
          </div>
        </div>
  
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
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import dayjs from 'dayjs'
  
  const offerStore = useClientOfferStore()
  const clientStore = useClientStore()
  const userStore = useAuthStore()
  
  const { offer } = storeToRefs(offerStore)
  const { client } = storeToRefs(clientStore)
  const { user } = storeToRefs(userStore)
  
  const isProjectOwner = computed(() => offer.value.client?.id == user.value.id)
  
  const route = useRoute()
  
  const projectId = route.params.project_id
  
  const { pending: loading } = await useLazyAsyncData(() =>
    offerStore.get(Number(projectId))
  )
  
  useLazyAsyncData(() => clientStore.get(Number(offer.value.client_id)))
  
  if (isProjectOwner.value)
    useLazyAsyncData(() => offerStore.listProposals(Number(projectId)))
  </script>
  