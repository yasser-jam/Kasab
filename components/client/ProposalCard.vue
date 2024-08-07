<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <base-label>السعر المقدم</base-label>
      <base-input
        v-model="proposal.price"
        placeholder="السعر المقدم (ل.س)"
      ></base-input>
    </div>

    <div>
      <base-label>الوقت المتوقع</base-label>
      <base-input
        v-model="proposal.days"
        type="number"
        placeholder="عدد الأيام المتوقع"
      ></base-input>
    </div>

    <div class="col-span-2">
      <base-label>وصف العرض</base-label>
      <base-textarea
        v-model="proposal.message"
        placeholder="وصف العرض"
      ></base-textarea>
    </div>

    <base-btn class="col-span-2 mx-auto" @click="submit">إرسال</base-btn>
  </div>
</template>

<script setup lang="ts">
const projectStore = useClientOfferStore()

const props = defineProps<{
  offerId: number
}>()

const { proposal } = storeToRefs(projectStore)

const loading = ref<boolean>(false)

const router = useRouter()

const submit = async () => {
  loading.value = true

  try {
    await projectStore.propose(props.offerId)

    router.push('/projects')

    // init proposal
    proposal.value = initProposal()
  } finally {
    loading.value = false
  }
}
</script>
