<template>
  <div class="grid grid-cols-2 items-center min-h-screen">
    <div class="">
      <Form @submit="submit" v-slot="{ errors }">
        <div class="text-4xl font-bold text-neutral-content mb-8">
          إنشاء حساب
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <Field
              v-model="data.first_name"
              rules="required"
              name="first_name"
              v-slot="{ field }"
            >
              <base-label>الاسم الأول</base-label>
              <base-input v-bind="field" :errors="errors.first_name" placeholder="أدخل الاسم الأول"></base-input>
            </Field>
          </div>

          <div>
            <Field
              v-model="data.last_name"
              rules="required"
              name="last_name"
              v-slot="{ field }"
            >
              <base-label>الاسم الأخير</base-label>
              <base-input v-bind="field" :errors="errors.last_name" placeholder="أدخل الاسم الأخير"></base-input>
            </Field>
          </div>

          <div class="col-span-2">
            <Field
              v-model="data.email"
              rules="required|email"
              name="email"
              v-slot="{ field }"
            >
              <base-label>البريد الإلكتروني</base-label>
              <base-input v-bind="field" :errors="errors.email" placeholder="أدخل البريد الإلكتروني"></base-input>
            </Field>
          </div>

          <div>
            <Field
              v-model="data.password"
              rules="required"
              name="password"
              v-slot="{ field }"
            >
              <base-label>كلمة المرور</base-label>
              <base-input v-bind="field" :errors="errors.password" type="password" placeholder="********"></base-input>
            </Field>
          </div>

          <div>
            <Field
              v-model="data.confirm_password"
              rules="required"
              name="password"
              v-slot="{ field }"
              @update:model-value="() => data.password != $event ? errors.confirm_password = 'التطابق خاطئ' : ''"
            >
              <base-label>تأكيد كلمة المرور</base-label>
              <base-input v-bind="field" type="password" :errors="errors.confirm_password" placeholder="********"></base-input>
            </Field>
          </div>
        </div>

        <div class="mt-12">
          <base-btn type="submit" class="btn-block mb-4">التسجيل</base-btn>

          <div class="flex justify-center items-center gap-2 text-slate-500">
            لديك حساب بالفعل؟
            <nuxt-link to="/auth/login">
              <div class="text-slate-900 font-medium">تسجيل الدخول</div>
            </nuxt-link>
          </div>

          <div class="w-[90%] h-[1px] bg-slate-400 mt-12 mb-4 mx-auto"></div>

          <base-btn class="btn-outline btn-block mb-4"
            >تسجيل الدخول عن طريق غوغل</base-btn
          >
        </div>
      </Form>
    </div>

    <div class="w-[500px] ms-auto">
      <span class="img-bg"></span>
      <img src="~/assets/images/auth/signup.svg" alt="signup" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';

definePageMeta({
  layout: 'auth'
})

const authStore = useAuthStore()

const loading = ref(false)

const data = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: ''
})

const submit = async () => {
  loading.value = true
  try {
    await authStore.signup(data.value)

    navigateTo('/auth/login')
  } finally {
    loading.value = false
  }
}
</script>
