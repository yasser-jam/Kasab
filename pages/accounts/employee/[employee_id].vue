<template>
  <div class="container mb-8">
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
      <base-title>معلومات الموظف</base-title>
    </div>

    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="card mb-8">
          <div class="text-gray-900 font-semibold text-2xl mb-4">
            معلومات عامة
          </div>

          <div class="grid grid-cols-4">
            <div class="col-span-1">
              <base-image-uploader
                v-model="employee.profile_image_id"
                :url="employee.profile_image_url"
                class="mt-1 w-fit"
              ></base-image-uploader>
            </div>

            <div class="col-span-3">
              <div class="mb-4">
                <base-label>المسمى الوظيفي</base-label>

                <system-job-select v-model="employee.job_role_id"></system-job-select>
              </div>

              <div class="gap-4">
                <div>
                  <base-label>المدينة</base-label>

                  <system-city-select
                    v-model="employee.city"
                  ></system-city-select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="text-gray-900 font-semibold text-2xl mb-4">
            معلومات الموظف
          </div>

          <div class="grid grid-cols-1">
            <div class="mb-4">
              <base-label>نبذة مختصرة</base-label>

              <base-input
                v-model="employee.headline"
                placeholder="مصمم برمجيات محترف!"
              ></base-input>
            </div>

            <div>
              <base-label>معلومات عن الموظف</base-label>

              <base-textarea
                v-model="employee.description"
                placeholder="درست في دمشق ثم انتقلت إلى..."
              ></base-textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="card mb-8">
          <div class="text-gray-900 font-semibold text-2xl mb-4">
            معلومات شخصية
          </div>

          <div class="grid grid-cols-1">
            <div class="mb-4">
              <base-label>تاريخ الميلاد</base-label>

              <base-input
                v-model="employee.date_of_birth"
                type="date"
                placeholder="1/1/2003"
              ></base-input>
            </div>
          </div>

          <div>
            <base-label>النوع</base-label>

            <system-gender-select v-model="employee.gender"></system-gender-select>
          </div>
        </div>

        <div class="card">
          <div class="text-gray-900 font-semibold text-2xl mb-4">
            مهارات الموظف
          </div>

          <div>
            <base-label>اختر المهارات المطلوبة (واحدة أو أكثر)</base-label>

            <system-skill-select v-model="employee.skill_ids"></system-skill-select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NuxtPage />
</template>
<script setup lang="ts">
const employeeStore = useEmployeeStore()

const { employee } = storeToRefs(employeeStore)

const loading = ref<boolean>(false)

const save = async () => {
  loading.value = true

  try {
    await employeeStore.create()

    // redirect to the employee personal profile page
    navigateTo('/employee/4')
  } finally {
    loading.value = false
  }
}
</script>
