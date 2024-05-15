<template>
  <div class="flex items-center gap-4">
    <Swiper
      :slides-per-view="4"
      space-between="50"
      :loop="true"
      class="bg-gray-100 px-8"
    >
      <SwiperSlide v-for="slide in 10" :key="slide" class="">
        <div class="relative w-44 h-44 group">
          <img
            src="/test.png"
            alt="gallery-image"
            class="object-contain bg-gray-50 h-full w-full relative block"
          />

          <span
            class="hidden group-hover:flex absolute top-0 left-0 justify-center items-center w-full h-full bg-black/50 rounded-lg cursor-pointer"
          >
            <Icon name="mdi:close" class="text-error" size="3rem" />
          </span>
        </div>
      </SwiperSlide>
    </Swiper>

    <base-image-uploader v-model="test"></base-image-uploader>
  </div>
</template>

<script setup lang="ts">
const test = ref<string>("");
</script>
