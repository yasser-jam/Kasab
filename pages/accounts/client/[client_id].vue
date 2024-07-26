<template>
  <div v-if="pending">Loading...</div>

  <div v-else class="container mb-96">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn type="cancel" color="gray" @click="$router.push('/accounts')"
          >إلغاء</base-btn
        >
        <base-btn @click="save" :loading>حفظ</base-btn>
      </div>
    </div>

    <div class="flex justify-between items-center mb-8">
      <base-title>معلومات العميل</base-title>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2 grid grid-cols-2 gap-8 card bg-white p-4">

        <div class="col-span-2">
          <base-label>اسم العميل</base-label>

          <base-input
            v-model="client.username"
            placeholder="اسم العميل"
          ></base-input>
        </div>

        <div>
          <base-label>صورة العميل الشخصية</base-label>

          <base-image-uploader
            v-model="client.profile_image_id"
            :url="String(client.profile_image_url)"
            width-full
          ></base-image-uploader>
        </div>

        <div>
          <base-label>صورة غلاف العميل</base-label>

          <base-image-uploader
            v-model="client.background_image_id"
            :url="String(client.background_image_url)"
            width-full
          ></base-image-uploader>
        </div>
      </div>

      <div class="card bg-white h-fit p-4">
        <div class="text-xl text-slate-800 font-semibold mb-8">
          معلومات إضافية
        </div>

        <div>
          <base-label>النوع</base-label>

          <system-gender-select v-model="client.gender" />
        </div>

        <div class="mt-8">
          <base-label>المدينة</base-label>

          <system-city-select v-model="client.city" />
        </div>

        <div class="mt-8">
          <base-label>تاريخ الميلاد</base-label>

          <base-input
            v-model="client.date_of_birth"
            type="date"
            placeholder="تاريخ الميلاد"
          />
        </div>
      </div>
    </div>
  </div>

  <NuxtPage />
</template>

<script setup lang="ts">
const clientStore = useClientStore()

const { client } = storeToRefs(clientStore)

const route = useRoute()

const clientId = route.params.client_id

const editMode = String(clientId) != 'create'

const loading = ref<boolean>(false)

const { pending } = useLazyAsyncData(async () => {
  if (editMode) return await clientStore.get(Number(clientId))
  return Promise.resolve({} as Company)
})

const save = async () => {
  loading.value = true

  try {
    const id = editMode
      ? await clientStore.update(Number(clientId))
      : await clientStore.create()

    navigateTo(`/company/${id}`)
  } finally {
    loading.value = false
  }
}
</script>
