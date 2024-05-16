<template>
  <base-select :items="cities" placeholder="دمشق"></base-select>
</template>

<script setup lang="ts">
const cities = ref<string[]>([
    'دمشق',
    'ريف دمشق',
    'السويداء',
    'حمص',
    'حماة',
    'دير الزور',
    'حلب',
    'اللاذقية',
    'طرطوس',
    'بانياس',
    'إدلب',
    'الرقة',
    'الحسكة',
    'الرقة',
])
</script>
