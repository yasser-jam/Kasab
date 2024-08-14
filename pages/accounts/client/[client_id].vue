<template>
  <base-loader v-if="pending" />

  <div v-else class="container">
    <Form v-slot="{ errors }" @submit="save">
      <div class="flex justify-between my-8">
        <layout-breadcrumb></layout-breadcrumb>

        <div class="flex gap-2">
          <base-btn
            type="cancel"
            color="gray"
            @click="$router.push('/accounts')"
            >إلغاء</base-btn
          >
          <base-btn
            type="submit"
            :btn-class="Object.keys(errors).length ? 'btn-disabled' : ''"
            :loading
            >حفظ</base-btn
          >
        </div>
      </div>

      <div class="flex justify-between items-center mb-8">
        <base-title>معلومات العميل</base-title>
      </div>
      <div class="grid grid-cols-3 gap-8">
        <div class="col-span-2 grid grid-cols-1 gap-8 card bg-white p-4">
          <div>
            <base-label>صورة العميل الشخصية</base-label>

            <Field
              v-model="client.profile_image_id"
              rules="required"
              name="profile_image"
              v-slot="{ field }"
            >
              <base-image-uploader
                v-bind="field"
                :model-value="field.value"
                @update:model-value="client.profile_image_id = $event"
                :url="String(client.profile_image_url)"
                width-full
                :errors="errors.profile_image"
              ></base-image-uploader>
            </Field>
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

            <Field
              v-model="client.gender"
              rules="required"
              name="gender"
              v-slot="{ field }"
            >
              <system-gender-select
                v-bind="field"
                :model-value="field.value"
                :errors="errors.gender"
                @update:model-value="client.gender = $event"
              />
            </Field>
          </div>

          <div class="mt-8">
            <base-label>المدينة</base-label>

            <Field
              v-model="client.city"
              rules="required"
              name="city"
              v-slot="{ field }"
            >
              <system-city-select
                v-bind="field"
                :model-value="field.value"
                @update:model-value="client.city = $event"
              />
            </Field>
          </div>

          <div class="mt-8">
            <base-label>تاريخ الميلاد</base-label>

            <Field
              v-model="client.date_of_birth"
              rules="required"
              name="dob"
              v-slot="{ field }"
            >
              <base-input
                v-bind="field"
                :model-value="field.value"
                type="date"
                placeholder="تاريخ الميلاد"
                :errors="errors.dob"
                @update:model-value="client.date_of_birth = $event"
              />
            </Field>
          </div>
        </div>
      </div>
    </Form>
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
  else {
    clientStore.reset()
  }
})

const save = async () => {
  loading.value = true

  try {
    const id = editMode
      ? await clientStore.update()
      : await clientStore.create()

    navigateTo(`/client/${id}`)
  } finally {
    loading.value = false
  }
}
</script>
