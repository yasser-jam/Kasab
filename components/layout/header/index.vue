<template>
  <div
    class="flex justify-between items-center bg-white rounded-bl-3xl rounded-br-3xl py-8 px-12"
  >

  <nuxt-link to="/">
    <div class="flex items-center gap-4">
      <base-btn class="md:hidden" icon="mdi:menu" @click="showMenu = true"></base-btn>

      <div class="text-primary font-semibold text-5xl">
        سُبُل
      </div>
    </div>
    
  </nuxt-link>
  
  <layout-header-menu class="hidden md:flex"></layout-header-menu>

  <layout-mobile-menu v-if="showMenu" ref="menu" class="md:hidden absolute z-40 right-0 top-0 bottom-0"></layout-mobile-menu>
  
  <layout-header-account-menu></layout-header-account-menu>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const showMenu = ref(false)
const menu = ref(null)

onClickOutside(menu.value, () => {
  console.log('test');
  showMenu.value = false
})

</script>
