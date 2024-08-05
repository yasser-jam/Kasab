<template>
  <div class="chat" :class="mode == 'sender' ? 'chat-start' : 'chat-end'">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img
        v-if="chat.owner"
          alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />

      </div>
    </div>
    <div class="chat-header">
      اسم المرسل
      <time class="text-xs opacity-50">{{ chat.date }}</time>
    </div>
    <div class="chat-bubble">{{ chat.msg }}</div>
    <!-- <div class="chat-footer opacity-50">Delivered</div> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  mode: 'sender' | 'receiver'
  chat: Chat
}>()
</script>
