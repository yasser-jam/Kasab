<template>
    <div class="card">
        <div class="text-2xl font-semibold mb-2">يرجى الانتباه!</div>

        <div v-for="note in notes" class="flex items-center gap-2 text-gray-400 text-base">
          <Icon name="mdi:dots-hexagon" size="1.5rem" />
          <div>{{ note }}</div>
        </div>
    </div>

</template>



<script setup lang="ts">

const notes = [
    'الرجاء الالتزام بالأخلاق وتجنب الأحاديث الجانبية.',
    'يمنع إرسال معلومات تواصل خارجية.',
    'المحادثة خاضعة لرقابة المشرفين لضمان جودة الخدمة.',
]

</script>