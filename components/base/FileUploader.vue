<template>
    <div class="relative">
      <div
        v-if="!modelValue && !isLoading"
        class="flex flex-col justify-center items-center w-44 h-44 border-2 border-dashed border-slate-300 hover:bg-slate-50 cursor-pointer"
        :class="{
          'w-full': widthFull,
          'rounded-full': circle,
          'rouned-lg': !circle
        }"
        @click="fileInput?.click"
      >
        <Icon name="mdi:upload-circle-outline" color="#2D547C" size="4rem" />
  
        <span class="text-slate-500 text-lg font-semibold font mt-2"
          >اختر فايل</span
        >
      </div>
  
      <!-- Loading indicator -->
      <div v-if="isLoading" class="w-44 h-44 flex justify-center items-center">
        <span class="animate-spin">
          <Icon name="mdi:loading" color="#2D547C" size="2rem" />
        </span>
      </div>
  
      <!-- Display the uploaded file -->
  
      <input
        type="file"
        ref="fileInput"
        class="hidden"
        @change="handleFileChange"
      />
  
      <template v-if="modelValue">
        <base-btn
          icon="mdi:pencil"
          color="primary"
          btn-class="btn-circle btn-sm shadow-md absolute -left-4 -top-4"
        ></base-btn>
  
        <base-btn
          icon="mdi:close"
          color="error"
          btn-class="btn-circle btn-sm shadow-md absolute -left-4 -bottom-4"
          @click="emit('update:model-value', '')"
        ></base-btn>
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
  const isLoading = ref(false);
  const fileInput = ref<HTMLElement | null>(null);
  
  const fileStore = useFileStore()
  
  const props = defineProps<{
    modelValue?: number;
    widthFull?: boolean
    circle?: boolean
  }>();
  
  const emit = defineEmits(["update:model-value", 'update:url']);
  
  async function handleFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      isLoading.value = true;
  
      try {
        // upload file and get its id and url
        const uploadedFile = await fileStore.uploadFile(file);
  
  
        // update file id value
        emit('update:model-value', uploadedFile)
  
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        isLoading.value = false
      }
    }
  }
  </script>
  