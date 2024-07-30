<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <base-label>العرض المقدم</base-label>
      <base-input
        v-model="proposal.price"
        placeholder="العرض المقدم (ل.س)"
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

const { proposal } = storeToRefs(projectStore)

const loading = ref<boolean>(false)

const submit = async () => {
  loading.value = true

  try {
    await projectStore.propose()
  } finally {
    loading.value = false
  }
}
</script>
