<template>
  <div class="container">
    <layout-breadcrumb class="my-8"></layout-breadcrumb>

    <div class="flex justify-between items-center">
      <base-title class="mb-12"> {{ offer.title }} </base-title>

      <div class="flex gap-4">
        <base-btn icon="mdi:info" :to="`/projects/${projectId}`"
          >معلومات المشروع</base-btn
        >

        <base-btn
          v-if="isContributor"
          icon="mdi:plus"
          color="secondary"
          :to="`/projects/${projectId}/process/create`"
          >إضافة مرحلة</base-btn
        >
      </div>
    </div>
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

        <div class="card mt-8">
          <base-card-title class="mb-4">المحادثة</base-card-title>

          <div class="flex flex-col gap-4 max-h-[600px] overflow-auto px-12">
            <base-message
              v-for="(chat, i) in chats"
              :chat
              :mode="i % 2 == 0 ? 'sender' : 'receiver'"
            ></base-message>
          </div>

          <project-message-card class="mt-4" />

          <project-message-notes />
        </div>

        <div v-if="true" class="mt-8">
          <div class="flex items-center justify-between">
            <base-card-title class="mb-4">مراحل المشروع</base-card-title>

            <base-btn
              icon="mdi:plus"
              :to="`/projects/${projectId}/process/create`"
              >إضافة مرحلة</base-btn
            >
          </div>

          <div class="grid grid-cols-3 gap-4 max-h-[400px] overflow-auto">
            <project-milestone-card v-for="milestone in offer.project.milestones" :milestone active @finish="finishMilestone" />
          </div>
        </div>
      </div>

      <project-info-sidebar></project-info-sidebar>
    </div>
  </div>

  <NuxtPage />
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const offerStore = useClientOfferStore()
const clientStore = useClientStore()
const userStore = useAuthStore()

const { offer, isContributor } = storeToRefs(offerStore)
const { client } = storeToRefs(clientStore)
const { user } = storeToRefs(userStore)

const isProjectOwner = computed(() => offer.value.client?.id == user.value.id)

const route = useRoute()

const projectId = route.params.project_id

const chats = ref<Chat[]>([
  {
    id: 1,
    owner: {} as User,
    date: '21-3-2003:20:20:29',
    msg: 'السلام عليكم'
  },
  {
    id: 1,
    owner: {} as User,
    date: '21-3-2003:20:25:32',
    msg: 'وعليكم السلام يا هلا'
  },
  {
    id: 1,
    owner: {} as User,
    date: '21-3-2003:20:36:19',
    msg: 'ممكن نشتغل مع بعض؟'
  },
  {
    id: 1,
    owner: {} as User,
    date: '21-3-2003:21:00:00',
    msg: 'اكيد'
  }
])

const { pending: loading } = await useLazyAsyncData(() =>
  offerStore.get(Number(projectId))
)

useLazyAsyncData(() => clientStore.get(Number(offer.value.client_id)))

if (isProjectOwner.value)
  useLazyAsyncData(() => offerStore.listProposals(Number(projectId)))

const finishMilestone = async () => {
  try {
    
  } finally {

  }
}
</script>
