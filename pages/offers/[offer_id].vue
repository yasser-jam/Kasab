<template>
  <base-page-dialog>
    <template #title>
      <div class="flex gap-2">
        <div>
          {{ offer.job_role?.name }}
        </div>

        <!-- <span class="text-sm text-gray-500 self-end">(45 متقدم)</span> -->
      </div>
    </template>

    <template #default>
      <div class="grid grid-cols-1 gap-4">
        <div>
          <div class="text-lg text-gray-500">
            {{ offer.description }}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6 bg-slate-100 rounded-lg p-4">
          <div class="flex gap-2 items-center">
            <base-label class="w-32">نوع العرض</base-label>
            <base-chip>{{ offer.industry_name }}</base-chip>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">المسمى الوظيفي</base-label>
            <base-chip>{{ offer.job_role?.name }}</base-chip>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">الراتب</base-label>

            <div class="flex items-center gap-2 text-success">
              <base-chip color="success">{{ offer.min_salary }}</base-chip>

              <Icon name="mdi:arrow-left" size="1.5rem" />

              <base-chip color="success">{{ offer.max_salary }}</base-chip>
            </div>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">النوع</base-label>
            <badge-gender
              :gender="offer.gender"
              class="!badge-success"
            ></badge-gender>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">العمر</base-label>

            <div class="flex items-center gap-2 text-success">
              <base-chip color="success">{{ offer.min_age }} سنة</base-chip>

              <Icon name="mdi:arrow-left" size="1.5rem" />

              <base-chip color="success">{{ offer.max_age }} سنة</base-chip>
            </div>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">طبيعة الدوام</base-label>
            <badge-attendence
              :attendence="offer.attendence_type"
              class="!badge-success"
            ></badge-attendence>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">المواصلات</base-label>
            <badge-transportation></badge-transportation>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">التأمينات الصحية</base-label>
            <badge-health class="badge-secondary"></badge-health>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">مكان العمل</base-label>
            <badge-location class="badge-secondary"></badge-location>
          </div>

          <div class="flex gap-2 items-center">
            <base-label class="w-32">الخدمة العسكرية</base-label>
            <badge-military class="badge-secondary"></badge-military>
          </div>
        </div>

        <company-info-card
          v-if="offer.company"
          :company="offer.company"
        ></company-info-card>
      </div>
    </template>

    <template #actions>
      <div class="flex justify-end relative gap-2">
        <transition>
          <offer-propose-card
            v-if="showProposalCard"
            v-model="proposalMsg"
            class="absolute -top-44 left-44"
            :loading
            @save="propose"
            @close="showProposalCard = false"
          ></offer-propose-card>
        </transition>

        <base-btn v-if="isEmployee" icon="mdi:check" @click="showProposalCard = !showProposalCard"
          >التقدم للوظيفة</base-btn
        >
      </div>
    </template>

    <!-- company card -->
  </base-page-dialog>
</template>

<script setup lang="ts">
const offerStore = useOfferStore()
const authStore = useAuthStore()

const route = useRoute()

const offerId = route.params.offer_id

const isEmployee = computed(() => authStore.user.role == 'freelancer')

const loading = ref<boolean>(false)
const showProposalCard = ref<boolean>(false)
const proposalMsg = ref<string>(false)

const { pending } = useLazyAsyncData(() => offerStore.get(Number(offerId)))

const { offer } = storeToRefs(offerStore)

const propose = async () => {
  loading.value = true

  try {
    await offerStore.propose(Number(offerId), proposalMsg.value)
  } finally {
    loading.value = false
  }
}
</script>
