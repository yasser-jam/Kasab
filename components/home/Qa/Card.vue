<template>
    <div>
        <div class="collapse collapse-arrow bg-primary text-white">
          <input type="radio" name="my-accordion" @click="open = !open" :checked="open" />
          <div class="collapse-title text-xl font-medium">
            {{ question.question }}
          </div>
      
          <div class="collapse-content text-lg bg-slate-50 text-primary">
            <p class="mt-4">
                {{ question.answer }}
            </p>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const open = ref(false)

defineProps<{
    question: { question: string, answer: string }
}>()

</script>