<template>
  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-9">
      <div class="card rounded-lg p-4">
        <div class="text-xl font-semibold mb-8">المسمى الوظيفي</div>

        <div class="text-lg bg-slate-50 font-semibold p-4">
          {{ employee.job_role?.name }}
        </div>
      </div>

      <div class="card rounded-lg p-4">
        <div class="text-xl font-semibold mb-8">النبذة المختصرة</div>

        <div class="text-lg bg-slate-50 font-semibold p-4">
          {{ employee.headline }}
        </div>
      </div>

      <div class="card rounded-lg mt-8">
        <div class="text-xl font-semibold mb-8">الوصف العام</div>

        <div class="text-lg bg-slate-50 font-semibold p-4">
          {{ employee.description }}
        </div>
      </div>
    </div>

    <div class="col-span-3">
      <div class="card">
        <div class="text-xl font-semibold mb-8">معلومات شخصية</div>

        <div class="flex items-center justify-between">
          <base-label>المدينة</base-label>
          <base-chip color="success">{{ employee.city }}</base-chip>
        </div>

        <div class="flex items-center justify-between mt-8">
          <base-label>تاريخ الميلاد</base-label>
          <base-chip color="warning">{{
            dayjs(employee.date_of_birth).format('DD-MM-YYYY')
          }}</base-chip>
        </div>

        <div class="flex items-center justify-between mt-8">
          <base-label>النوع</base-label>

          <badge-gender :gender="employee.gender"></badge-gender>
        </div>
      </div>

      <div class="card mt-8">
        <div class="text-xl font-semibold mb-8">المهارات</div>

        <div class="flex flex-wrap items-center gap-4">
          <base-chip v-for="skill in employee.skills" color="secondary">{{
            skill.name
          }}</base-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const employeeStore = useEmployeeStore()

const { employee } = storeToRefs(employeeStore)
</script>
