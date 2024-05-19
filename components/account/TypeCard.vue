<template>
  <div class="account-type-card" @click="$router.push(typeInfo?.link)">
    <div class="avatar">
      <div class="w-24 h-24">
        <Icon
          :name="typeInfo.icon"
          class="bg-primary rounded-full p-2"
          size="5rem"
          color="#F6F6FD"
        />
      </div>
    </div>

    <div class="text-2xl font-bold text-primary">{{ typeInfo.title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: "company" | "freelancer" | "project-owner";
}>();

const typeInfo = computed(() => {
  switch (props.type) {
    case "company":
      return {
        title: "حساب الشركة",
        link: "/accounts/company/general-info",
        icon: "heroicons:building-library",
      };
    case "freelancer":
      return {
        title: "حساب مستقل",
        link: "/accounts/freelancer/general-info",
        icon: "heroicons:user",
      };
    case "company":
      return {
        title: "حساب صاحب مشروع",
        link: "/accounts/project-owner/general-info",
        icon: "heroicons:user-group",
      };
    default:
      return {
        title: "حساب صاحب مشروع",
        link: "/accounts/project-owner/general-info",
        icon: "heroicons:user-group",
      };
  }
});
</script>

<style scoped lang="scss">
.account-type-card {
  @apply flex flex-col justify-center items-center gap-6
py-10 px-16
bg-white hover:bg-gray-50
rounded-lg
border-2 border-transparent hover:border-primary
shadow-sm
cursor-pointer transition-all;
}
</style>
