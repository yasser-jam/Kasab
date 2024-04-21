<template>
  <div class="grid grid-cols-2 items-center h-full gap-6 mt-24">
    <div class="max-w-[500px]">
      <span class="img-bg"></span>
      <img src="~/assets/images/auth/login.svg" alt="login" />
    </div>

    <div class="">
        <div class="text-4xl font-bold text-neutral-content mb-8">Login</div>

        <div class="grid grid-cols-1 gap-4 w-full">
          <div>
            <base-label>Email</base-label>
            <base-input></base-input>
          </div>
      
          <div>
            <base-label>Password</base-label>
            <base-input type="password"></base-input>
      
            <nuxt-link to="/auth/forget-password">
              <div class="text-slate-900 font-medium mt-2">forget password?</div>
            </nuxt-link>
          </div>
        </div>
      
        <div class="mt-12">
          <base-btn class="btn-block mb-4">Login</base-btn>
      
          <div class="flex justify-center items-center gap-2 text-slate-500">
            Do not have account yet?
            <nuxt-link to="/auth/signup">
              <div class="text-slate-900 font-medium">Sign up now!</div>
            </nuxt-link>
          </div>
      
          <div class="w-[90%] h-[1px] bg-slate-400 mt-12 mb-4 mx-auto"></div>
      
          <base-btn class="btn-outline btn-block mb-4">Sign-up with Google</base-btn>
        </div>

    </div>
  </div>


</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>
