<template>
  <div class="flex items-center gap-4">
    <Swiper
      :slides-per-view="4"
      space-between="50"
      :loop="true"
      class="hidden bg-gray-100 px-8"
    >
      <SwiperSlide v-for="img in images" :key="img" class="">
        <div class="relative w-44 h-44 group">
          <img
            :src="`${img}`"
            alt="gallery-image"
            class="object-contain bg-gray-50 h-full w-full relative block"
          />

          <span
            class="hidden group-hover:flex absolute top-0 left-0 justify-center items-center w-full h-full bg-black/50 rounded-lg cursor-pointer"
            @click="removeImage(img)"
            >
            <Icon name="mdi:close" class="text-error" size="3rem" />
          </span>
        </div>
      </SwiperSlide>
    </Swiper>

    <base-image-uploader v-model="image" @update:model-value="addImage"></base-image-uploader>
  </div>
</template>

<script setup lang="ts">
const companyStore = useCompanyStore()

const { company } = storeToRefs(companyStore)

const image = ref<string>()

const images = computed(() => {
  if (props.modelValue.length >= 4) return props.modelValue

  let items = []

  for (let i = 0; i < 5; i++) {
    items[i] = props.modelValue[i] ?? 'https://via.placeholder.com/120x180'
  }

  return items
})

const props = defineProps<{
  modelValue: string[]
}>()

const addImage = (img: string) => {
  company.value.gallery_images.push(img)

  // reset image
  image.value = undefined
}

const removeImage = (img: string) => {
  company.value.gallery_images = company.value.gallery_images.filter(image => image != img)
}

</script>
