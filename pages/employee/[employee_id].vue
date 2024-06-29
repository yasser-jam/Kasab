<template>
  <div class="container mx-auto">
    <div class="flex justify-between my-8">
      <layout-breadcrumb></layout-breadcrumb>

      <base-btn icon="mdi:pencil" to="/accounts/company/general-info"
        >تعديل البيانات</base-btn
      >
    </div>

    <div class="flex items-center py-12 px-4 rounded-lg profile-bg">
      <div class="flex items-center gap-8">
        <img
          src="https://res.cloudinary.com/dyefbd6jy/image/upload/v1718994040/phpfBOmlL_oyd8vy.png"
          alt="profile-image"
          class="w-32 h-32 rounded-full"
        />

        <div class="flex flex-col">
          <div class="text-3xl font-bold text-white mb-2">اسم الشركة</div>

          <div
            class="flex items-center gap-4 text-base font-bold text-white mt-2"
          >
            <div class="flex items-center">
              <Icon name="mdi:phone" size="1.5rem" class="text-mt me-2" />
              <div class="tracking-wider">0993544811</div>
            </div>

            <span>/</span>

            <div class="flex items-center mt-1">
              <Icon name="mdi:map-marker" size="1.5rem" class="text-mt me-2" />
              <div class="tracking-wider">الجبة</div>
            </div>
          </div>
        </div>
      </div>

      <base-chip color="gray" class="ms-auto">شركة خدمية</base-chip>
      <div class="ms-8"></div>
    </div>

    <div role="tablist" class="tabs tabs-lifted">
      <!-- <nuxt-link :to="`/employee/${$route.params.employee_id}/general-info`">
        <a role="tab" class="tab">المعلومات العامة</a>
      </nuxt-link>

      <nuxt-link :to="`/employee/${$route.params.employee_id}/portfolio`">
        <a role="tab" class="tab tab-active">معرض الأعمال</a>
      </nuxt-link> -->
      <!-- <a role="tab" class="tab tab-active">معرض الأعمال</a>
      <a role="tab" class="tab tab-active">معرض الأعمال</a> -->
    </div>

    <div role="tablist" class="flex tabs tabs-bordered my-4">
      <a
        role="tab"
        :href="`/employee/${$route.params.employee_id}/general-info`"
        class="tab tab-active font-semibold text-lg"
        >المعلومات العامة</a
      >
      <a
        role="tab"
        :href="`/employee/${$route.params.employee_id}/portfolio`"
        class="tab font-semibold text-lg"
        >معرض الأعمال</a
      >
    </div>
    <NuxtPage />
  </div>
</template>

<style scoped>
.profile-bg {
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: color;
}
</style>
