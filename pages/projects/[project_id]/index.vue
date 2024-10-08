<template>

  <base-loader v-if="pending"></base-loader>

  <div v-else class="container">
    <layout-breadcrumb class="my-8"></layout-breadcrumb>

    <div class="flex justify-between items-center">
      <base-title class="mb-12"> {{ offer.title }} </base-title>

      <nuxt-link :to="`/projects/${projectId}/process`">
        <base-btn v-if="isContributor" icon="mdi:info">معلومات العمل</base-btn>
      </nuxt-link>
    </div>

    <base-loading v-if="pending" />

    <div v-else class="grid grid-cols-4 gap-8">
      <div class="col-span-3">
        <div class="card">
          <base-card-title>وصف المشرووع</base-card-title>

          <div class="text-slate-700 text-base leading-loose mt-4">
            {{ offer.description }}
          </div>
        </div>

        <div v-if="offer.files?.length" class="card mt-8">
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

          <div
            v-if="proposals.length"
            class="flex flex-col max-h-[500px] overflow-auto"
          >
            <div v-for="(proposal, index) in proposals">
              <div class="grid grid-cols-1 mb-4">
                <project-proposal-card
                  :proposal
                  class="border-solid"
                  @accept="proposalToggler = true"
                  @reject="reject(Number(proposal.id))"
                  ></project-proposal-card>
              </div>

              <div v-if="index != proposals.length - 1" class="divider !my-1"></div>
            </div>
          </div>

          <base-not-found name="عرض مقدم" v-else />
        </div>

        <div v-else class="card mt-8">
          <base-card-title class="mb-4">أضف عرضك الآن</base-card-title>

          <client-proposal-card
            :offer-id="Number($route.params.project_id)"
            :loading="rejectLoading"
            @accept="accept"
            @reject="reject"
          />

        </div>

        <project-proposal-dialog v-model="proposalToggler" :loading="acceptLoading" @save="acceptOffer" />

      </div>

      <project-info-sidebar></project-info-sidebar>

    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const offerStore = useClientOfferStore()
const userStore = useAuthStore()

const { offer, proposals, isContributor } = storeToRefs(offerStore)
const { user } = storeToRefs(userStore)

const isProjectOwner = computed(() => offer.value.client?.id == user.value.role_id)

const proposalToggler = ref<boolean>(false)
const loading = ref<boolean>(false)

const acceptLoading = ref(false)
const rejectLoading = ref(false)

const route = useRoute()


const projectId = route.params.project_id

await useLazyAsyncData(() => userStore.me())

const acceptOffer = async () => {
  acceptLoading.value = true
  
  try {
    await offerStore.acceptProposal(Number(projectId))
  
    navigateTo(`/projects/${projectId}/process`)
  } finally {
    acceptLoading.value = false

  }
}

const rejectOffer = async () => {
  rejectLoading.value = true
  
  try {
    await offerStore.rejectProposal(Number(projectId))
  } finally {
    rejectLoading.value = false

  }
}

const { pending } = await useLazyAsyncData(() =>
  offerStore.get(Number(projectId))
)

if (isProjectOwner.value) {
  useLazyAsyncData(() => offerStore.listProposals(Number(projectId)))
}

const accept = async (id: number) => {
  loading.value = true

  try {
    await offerStore.acceptProposal(id)
  } finally {
    loading.value = false
  }
}

const reject = async (id: number) => {
  loading.value = true

  try {
    await offerStore.rejectProposal(id)
  } finally {
    loading.value = false
  }
}
</script>
