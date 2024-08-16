<template>
  <base-loader v-if="pending"></base-loader>

  <div v-else class="container">
    <layout-breadcrumb :meta class="my-8"></layout-breadcrumb>

    <base-title class="mb-12"> {{ offer.job_role?.name }} </base-title>

    <div class="grid grid-cols-4 gap-8">
      <div class="col-span-3">
        <div class="card">
          <base-card-title>وصف العرض</base-card-title>

          <div class="text-slate-700 text-base leading-loose mt-4">
            {{ offer.description }}
          </div>
        </div>

        <base-card-title class="flex justify-between items-center mt-12 mb-4">
          <div class="flex items-center gap-2">
            <div>العروض المقدمة</div>
            <!-- <span class="text-gray-500 text-sm font-semibold">(65 عرض)</span> -->
          </div>

          <base-btn
            icon="mdi:filter-outline"
            @click="showFilters = !showFilters"
          ></base-btn>
        </base-card-title>

        <Transition>
          <company-offer-filters v-if="showFilters" class="mb-4" />
        </Transition>

        <base-loader v-if="loading"></base-loader>

        <template v-if="offer.status != 'done'">
          <div
            v-if="proposals.length"
            class="flex flex-col gap-4 max-h-[500px] overflow-auto"
          >
            <company-offer-proposal
              v-for="proposal in proposals"
              :proposal
              @accept="selectId(proposal.id)"
              @reject="reject"
            ></company-offer-proposal>
          </div>
  
          <base-not-found v-else name="عرض مقدم"></base-not-found>
        </template>

        <template v-else>
          <div>
            عرض منته
          </div>
        </template>
      </div>

      <div>
        <div class="card">
          <base-card-title class="mb-8">بطاقة العرض</base-card-title>

          <div class="flex gap-4 items-center mb-6">
            <div>نوع الوظيفة</div>

            <base-chip>{{ offer.industry_name }}</base-chip>
          </div>

          <div class="flex gap-4 items-center mb-6">
            <div>الراتب</div>

            <div class="flex justify-between items-center">
              <base-chip color="success">{{ offer.min_salary }} ل.س</base-chip>
              <Icon
                name="mdi:arrow-left-bold-outline"
                color="gray"
                size="1.5rem"
                class="mx-2"
              />
              <base-chip color="success">{{ offer.max_salary }} ل.س</base-chip>
            </div>
          </div>

          <div class="flex gap-4 items-center mb-6">
            <div>العمر</div>

            <div class="flex justify-between items-center">
              <base-chip color="secondary">{{ offer.min_age }} ل.س</base-chip>
              <Icon
                name="mdi:arrow-left-bold-outline"
                color="gray"
                size="1.5rem"
                class="mx-2"
              />
              <base-chip color="secondary">{{ offer.max_age }} ل.س</base-chip>
            </div>
          </div>

          <div class="flex gap-4 items-center mb-6">
            <div>تاريخ الإضافة</div>
            <base-chip color="warning">{{
              dayjs(offer.created_at).format('DD-MM-YYYY')
            }}</base-chip>
          </div>
        </div>

        <div class="card mt-8">
          <base-card-title class="mb-8">المهارات المطلوبة</base-card-title>

          <div class="flex gap-4 flex-wrap">
            <base-chip v-for="skill in offer.skills" color="secondary">{{
              skill.name
            }}</base-chip>
          </div>
        </div>
      </div>
    </div>
  </div>

  <base-dialog
    :open="acceptDialogToggler"
    :loading="acceptLoading"
    @close="acceptDialogToggler = false"
    @save="accept"
  >
    <template #title>قبول الطلب</template>

    <template #body>بعد قبول الطلب سيتم إرسال رسالة تعيين للموظف</template>
  </base-dialog>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const showFilters = ref(false)

const offerStore = useOfferStore()
const companyStore = useCompanyStore()

const { offer } = storeToRefs(offerStore)

const route = useRoute()

const companyId = route.params.companyId
const offerId = route.params.offer_id

const acceptDialogToggler = ref(false)
const selectedId = ref(0)

const selectId = (id: number) => {
  selectedId.value = id;

  acceptDialogToggler.value = true
}

const { pending } = useLazyAsyncData(() => offerStore.get(Number(offerId)))

const { proposals } = storeToRefs(offerStore)

const loading = ref(false)

onMounted(async () => {
  loading.value = true

  try {
    await offerStore.listProposals(Number(offerId))
  } finally {
    loading.value = false
  }
})

const acceptLoading = ref(false)
const rejectLoading = ref(false)

const accept = async () => {
  acceptLoading.value = true
  try {
    await offerStore.accept(selectedId.value)
    
    await offerStore.get(Number(offerId))
  
  } finally {
    acceptLoading.value = false

    acceptDialogToggler.value = false
  
  }
}

const reject = async (id: number) => {
  rejectLoading.value = true
  try {
    await offerStore.reject(id)

    await offerStore.listProposals(Number(offerId))
  } finally {
    rejectLoading.value = false
  }
}

const meta = ref([
  {
    title: 'عروضي',
    link: `/company/${companyId}/offers`,
    active: false
  },
  {
    title: 'تفاصيل العرض',
    link: `/company/${companyId}/offers/${offerId}`,
    active: true
  }
])
</script>
