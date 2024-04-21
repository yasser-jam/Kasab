<template>
  <div class="grid grid-cols-2 items-center h-full gap-8 mt-48">
    <div class="max-w-[500px]">
      <span class="img-bg"></span>
      <img src="~/assets/images/auth/forget-password.svg" alt="forget-password" />
    </div>

    <div class="bg-white p-8 rounded-lg">
        <div class="text-4xl font-bold text-neutral-content mb-8">Forget Password?</div>

        <div class="grid grid-cols-1 gap-4 w-full">
          <div>
            <base-label>Email</base-label>
            <base-input></base-input>
          </div>
        </div>
      
        <div class="mt-12">
          <base-btn class="btn-block mb-4">Send</base-btn>

          <div class="flex justify-center items-center gap-2 text-slate-500">
            try again?
            <nuxt-link to="/auth/login">
              <div class="text-slate-900 font-medium">return to Login</div>
            </nuxt-link>
          </div>
        </div>

    </div>
  </div>


</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>
