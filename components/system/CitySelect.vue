<template>
    <base-select :items="cities" placeholder="اختر مدينة"></base-select>
</template>

<script setup>
const cities = ref([
    {
        title: 'دمشق',
        value: 'Damascus'
    },
    {
        title: 'حلب',
        value: 'Aleppo'
    },
    {
        title: 'حمص',
        value: 'Homs'
    },
    {
        title: 'حماة',
        value: 'Hamah'
    },
])

</script>