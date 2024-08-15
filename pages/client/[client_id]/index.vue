<template>
  <base-loader v-if="pending" />

  <div v-else class="container">
    <div class="flex justify-between my-8">
      <layout-breadcrumb :meta></layout-breadcrumb>

      <div class="flex gap-2">
        <base-btn
          v-if="isClient"
          icon="mdi:pencil"
          :to="`/accounts/client/${route.params.client_id}`"
          >تعديل البيانات</base-btn
        >

        <base-btn
          v-if="isClient"
          icon="mdi:eye"
          color="secondary"
          :to="`/client/${route.params.client_id}/offers`"
          >مشاهدة العروض</base-btn
        >

        <base-btn
          v-if="isClient"
          icon="mdi:briefcase"
          color="success"
          :to="`/client/${route.params.client_id}/offers/create`"
          >إضافة عرض</base-btn
        >
      </div>
    </div>

    <div class="grid grid-cols-12 gap-8 my-8">
      <div class="col-span-9">
        <div
          class="grid grid-cols-12 items-center h-44 p-4 rounded-lg profile-bg"
          :style="`background-image: url(${
            client.background_image_url?.length
              ? client.background_image_url
              : 'https://placehold.co/1100x200'
          })`"
        >
          <div class="col-span-2">
            <img
              :src="
                client.profile_image_url?.length
                  ? client.profile_image_url
                  : '/imges/placeholders/client.jpg'
              "
              alt="profile-image"
              class="w-32 h-32 rounded-full"
            />
          </div>

          <div class="col-span-10 ms-8">
            <div class="text-3xl font-bold text-white mb-2">
              {{ `${user.first_name} ${user.last_name}` }}
            </div>

            <div class="flex items-center text-white mt-1 z-50">
              <Icon name="mdi:map-marker" size="1.5rem" class="text-mt me-2" />
              <div class="tracking-wider">{{ client.city }}</div>
            </div>
          </div>
        </div>

        <div class="card mt-8">
          <div class="text-xl font-semibold mb-8">معلومات المستخدم</div>

          <div class="flex justify-between">
            <div class="flex items-center justify-between gap-4">
              <base-label>نوع المستخدم</base-label>
              <badge-gender :gender="client.gender" />
            </div>

            <div class="flex items-center justify-between gap-4">
              <base-label>تاريخ الميلاد</base-label>
              <base-chip>20/2/2002</base-chip>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3 card">
        <div class="text-xl font-semibold mb-8">معلومات إضافية</div>

        <div class="flex items-center justify-between">
          <base-label>عدد العروض الكلي</base-label>
          <base-chip>غير محدد</base-chip>
        </div>

        <div class="flex items-center justify-between mt-8">
          <base-label>عدد العروض المكتملة</base-label>
          <base-chip>غير محدد</base-chip>
        </div>

        <div class="flex items-center justify-between mt-8">
          <base-label>عدد العروض المتاحة</base-label>
          <base-chip>غير محدد</base-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const clientStore = useClientStore()

const { user } = storeToRefs(authStore)
const { client } = storeToRefs(clientStore)

const route = useRoute()

const meta = ref([
  {
    title: 'معلومات العميل',
    link: `/client/${route.params.client_id}`,
    active: true
  }
])

const userRoleId = user.value.role_id
const clientId = Number(route.params.client_id)

const isClient = ref(userRoleId == clientId)

const { pending } = useLazyAsyncData(() => clientStore.get(clientId))
</script>

