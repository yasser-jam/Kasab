<template>
  <div class="grid grid-cols-2 items-center min-h-screen gap-6">
    <div class="">
        <div class="text-4xl font-bold text-neutral-content mb-8">تسجيل الدخول</div>

        <div class="grid grid-cols-1 gap-4 w-full">
          <div>
            <base-label>الإيميل</base-label>
            <base-input v-model="credentials.email" placeholder="اسم المستخدم"></base-input>
          </div>
      
          <div>
            <base-label>كلمة المرور</base-label>
            
            <base-input type="password" v-model="credentials.password" placeholder="********"></base-input>
            
            <nuxt-link to="/auth/forget-password">
              <div class="text-slate-900 font-medium mt-2">هل نسيت كلمة المرور؟</div>
            </nuxt-link>
          </div>
        </div>
      
        <div class="mt-12">
          <base-btn btn-class="btn-block mb-4" :loading @click="login">الدخول</base-btn>
      
          <div class="flex justify-center items-center gap-2 text-slate-500">
            ليس لديك حساب بعد؟
            <nuxt-link to="/auth/signup">
              <div class="text-slate-900 font-medium">أنشئ حسابك الآن!</div>
            </nuxt-link>
          </div>
      
          <div class="w-[90%] h-[1px] bg-slate-400 mt-12 mb-4 mx-auto"></div>
      
          <base-btn btn-class="btn-outline btn-block mb-4">تسجيل الدخول عن طريق غوغل</base-btn>
        </div>

    </div>

    <div class="w-[500px] ms-auto">
      <span class="img-bg"></span>
      <img src="~/assets/images/auth/login.svg" alt="login" />
    </div>

  </div>


</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});


const authStore = useAuthStore()

const { credentials } = storeToRefs(authStore)

const router = useRouter()

const loading = ref<boolean>(false)

const login = async () => {

  loading.value = true

  try {
    await authStore.login()

    router.push('/')
  } finally {
    loading.value = false
  }
}

</script>
