<template>
  <div class="relative">
    <button class="btn btn-circle btn-primary" @click="show = !show">
      <Icon name="heroicons:user-circle-solid" size="md" />
    </button>

    <Transition>
      <div
        v-if="show"
        ref="menu"
        class="shadow-md w-[150px] rounded-lg absolute top-16 -left-4 z-50 bg-white"
      >

        <div @click="goToMyAccount" class="border py-3 px-4 cursor-pointer hover:bg-gray-50">
          <Icon name="mdi:account" />
          حسابي
        </div>

        <div
          class="border py-3 px-4 cursor-pointer rounded-b-lg hover:bg-gray-50"
          @click="logout"
        >
          <Icon name="mdi:logout" />
          تسجيل الخروج
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const authStore = useAuthStore()

const { user } = storeToRefs(authStore)

const accessToken = useCookie('access_token')

const show = ref<boolean>(false);

const menu = ref(null);

onClickOutside(menu, () => (show.value = false));


const logout = async () => {
  // delete cookie
  accessToken.value = null

  // redirect to login page
  navigateTo('/auth/login')
}

// go to user account (according to his role)
const goToMyAccount = () => {
  if (user.value.role == 'freelancer') navigateTo(`/employee/${user.value.role_id}/general-info`)
  if (user.value.role == 'company') navigateTo(`/company/${user.value.role_id}`)
  if (user.value.role == 'client') navigateTo(`/client/${user.value.role_id}`)
}

</script>
