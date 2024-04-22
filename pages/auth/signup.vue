<template>
  <div class="grid grid-cols-2 items-center min-h-screen">
  
    <div class="">
      <div class="text-4xl font-bold text-neutral-content mb-8">إنشاء حساب</div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <base-label>الاسم الأول</base-label>
          <base-input></base-input>
        </div>

        <div>
          <base-label>الاسم الأخير</base-label>
          <base-input></base-input>
        </div>

        <div class="col-span-2">
          <base-label>البريد الإلكتروني</base-label>
          <base-input></base-input>
        </div>

        <div>
          <base-label>كلمة المرور</base-label>
          <base-input></base-input>
        </div>

        <div>
          <base-label>تأكيد كلمة المرور</base-label>
          <base-input></base-input>
        </div>
      </div>

      <div class="mt-12">
        <base-btn class="btn-block mb-4">التسجيل</base-btn>

        <div class="flex justify-center items-center gap-2 text-slate-500">
            لديك حساب بالفعل؟
            <nuxt-link to="/auth/login">
              <div class="text-slate-900 font-medium">تسجيل الدخول</div>
            </nuxt-link>
          </div>

          <div class="w-[90%] h-[1px] bg-slate-400 mt-12 mb-4 mx-auto"></div>


        <base-btn class="btn-outline btn-block mb-4">تسجيل الدخول عن طريق غوغل</base-btn>
      </div>
    </div>

    <div class="w-[500px] ms-auto">
      <span class="img-bg"></span>
      <img src="~/assets/images/auth/signup.svg" alt="signup" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>
