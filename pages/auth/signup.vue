<template>
  <div class="grid grid-cols-2 items-center h-full gap-8 mt-24">
    <div class="max-w-[500px]">
      <span class="img-bg"></span>
      <img src="~/assets/images/auth/signup.svg" alt="signup" />
    </div>

    <div>
      <div class="text-4xl font-bold text-neutral-content mb-8">Sign-up</div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <base-label>First Name</base-label>
          <base-input></base-input>
        </div>

        <div>
          <base-label>Last Name</base-label>
          <base-input></base-input>
        </div>

        <div>
          <base-label>Password</base-label>
          <base-input></base-input>
        </div>

        <div>
          <base-label>Confirm Password</base-label>
          <base-input></base-input>
        </div>
      </div>

      <div class="mt-12">
        <base-btn class="btn-block mb-4">Signup</base-btn>

        <div class="flex justify-center items-center gap-2 text-slate-500">
            Already have an account?
            <nuxt-link to="/auth/login">
              <div class="text-slate-900 font-medium">Log in!</div>
            </nuxt-link>
          </div>

          <div class="w-[90%] h-[1px] bg-slate-400 mt-12 mb-4 mx-auto"></div>


        <base-btn class="btn-outline btn-block mb-4">Sign-up Google</base-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>
