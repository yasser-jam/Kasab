<template>
  <base-loader v-if="pending" />

  <div v-else class="container mx-auto">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <base-btn
        icon="mdi:account-multiple-plus-outline"
        >أرسل دعوة</base-btn
      >
    </div>

    <div class="flex items-center py-12 px-4 rounded-lg profile-bg" :class="`bg-[url(${employee.background_image_url})]`">
      <div class="flex items-center gap-8">
        <img
          :src="employee.profile_image_url"
          alt="profile-image"
          class="w-32 h-32 rounded-full"
        />

        <div class="flex flex-col">
          <div class="text-3xl font-bold text-white mb-2">اسم الموظف</div>

        </div>
      </div>

    </div>

    <div role="tablist" class="flex tabs tabs-bordered my-4">
      <nuxt-link
        role="tab"
        :href="`/employee/${$route.params.employee_id}/general-info`"
        class="tab font-semibold text-lg"
        :class="{ 'tab-active': $route.path.includes('general-info') }"
        >المعلومات العامة</nuxt-link
      >
      <nuxt-link
        role="tab"
        :href="`/employee/${$route.params.employee_id}/portfolio`"
        class="tab font-semibold text-lg"
        :class="{ 'tab-active': $route.path.includes('portfolio') }"
        >معرض الأعمال</nuxt-link
      >
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const employeeStore = useEmployeeStore()

const route = useRoute()

const employeeId = Number(route.params.employee_id)

const { employee } = storeToRefs(employeeStore)

const { pending } = await useLazyAsyncData(() => employeeStore.get(employeeId))
</script>

<style scoped>
.profile-bg {
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: color;
}
</style>
