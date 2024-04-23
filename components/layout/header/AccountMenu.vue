<template>
  <div class="relative">
    <button class="btn btn-circle btn-primary" @click="show = !show">
      <Icon name="heroicons:user-circle-solid" size="md" />
    </button>

    <Transition>
      <div
        v-if="show"
        ref="menu"
        class="card shadow-md w-[150px] rounded-lg absolute top-16 -left-4 z-50 bg-white"
      >

        <div class="border py-3 px-4 cursor-pointer hover:bg-gray-50">
          <Icon name="heroicons:user" />
          حسابي
        </div>

        <div
          class="border py-3 px-4 cursor-pointer rounded-b-lg hover:bg-gray-50"
        >
          <Icon name="heroicons:arrow-right-start-on-rectangle" />
          تسجيل الخروج
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const show = ref<boolean>(false);

const menu = ref(null);

onClickOutside(menu, () => (show.value = false));
</script>
