<template>
  <div class="flex items-center gap-4 overflow-hidden">
    <div class="overflow-hidden">
      <Swiper
        :slides-per-view="4"
        space-between="50"
        :loop="false"
        class="hidden bg-gray-100 px-8"
      >
        <SwiperSlide v-for="img in images" class="">
          <div class="relative w-44 h-44 group">
            <img
              :src="`${img.url}`"
              alt="gallery-image"
              class="object-contain bg-gray-50 h-full w-full rounded-lg relative block"
            />

            <span
              v-if="img.id"
              class="hidden group-hover:flex absolute top-0 left-0 justify-center items-center w-full h-full bg-black/50 rounded-lg cursor-pointer"
              @click="removeImage(img.id)"
            >
              <Icon name="mdi:close" class="text-error" size="3rem" />
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <base-image-uploader
      v-model="image"
      @update:url="addImage"
    ></base-image-uploader>
  </div>
</template>

<script setup lang="ts">
const companyStore = useCompanyStore()

const { company } = storeToRefs(companyStore)

const image = ref<string>()

const images = computed(() => {
  if (props.modelValue?.length >= 4) return props.modelValue

  let items = []

  for (let i = 0; i < 5; i++) {
    items[i] = props.modelValue[i] ?? {
      id: undefined,
      url: 'https://via.placeholder.com/180x180'
    }
  }

  return items
})

const props = defineProps<{
  modelValue: { id: number; url: string }[]
}>()

const addImage = (img: any) => {
  company.value.gallery_images_ids.push({
    id: img.id,
    url: img.url
  })

  // reset image
  image.value = undefined
}

const removeImage = (imgId: number) => {
  company.value.gallery_images_ids = company.value.gallery_images_ids.filter(
    (image) => image.id != imgId
  )
}
</script>
