<template>
<div ref="menu" class="relative">
    <div>
      <base-input
        fixed
        class="disabled:cursor-pointer disabled:bg-slate-200 disabled:pointer-events-auto disabled:text-inherit"
        :placeholder="placeholder"
        :value="selectedTitle"
        :model-value="selectedTitle"
        :disabled
      ></base-input>

      <div class="absolute inset-y-0 left-4 flex items-center">
        <base-loading-dots v-if="loading"></base-loading-dots>

        <Icon
          v-else
          :name="`mdi:chevron-${isOpen ? 'up' : 'down'}`"
          size="1.5rem"
          color="gray"
        />
      </div>
    </div>

    <span
      v-if="!disabled"
      class="overlay cursor-pointer"
      @click="() => (isOpen = !isOpen)"
    ></span>

    <Transition>
      <ul
        v-if="isOpen"
        class="min-w-[200px] max-h-[300px] overflow-auto w-full absolute top-14 z-50 shadow-lg"
      >
        <li
          v-for="item in computedItems"
          class="list-item"
          :class="isSelected(item.value) && 'selected'"
          @click="select(item)"
        >
          <span>{{ item.title }}</span>

          <Icon
            v-if="isSelected(item.value)"
            name="mdi:check"
            size="1rem"
          />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const isOpen = ref<boolean>(false)

const menu = ref(null)

onClickOutside(menu, () => (isOpen.value = false))

interface Item {
  title: string
  value: string
}

const props = withDefaults(
  defineProps<{
    items: any[]
    placeholder?: string
    modelValue?: any
    itemTitle?: string
    itemValue?: string
    returnObject?: boolean
    loading?: boolean
    mapOptions?: boolean
    multiple?: boolean
    disabled?: boolean
  }>(),
  {
    itemTitle: 'title',
    itemValue: 'value',
    multiple: false
  }
)

const computedItems = computed(() => {
  if (typeof props.items[0] == 'string') {
    return props.items.map((item) => ({
      title: item,
      value: item
    }))
  } else {
    return props.items.map((item) => ({
      title: item[props.itemTitle],
      value: item[props.itemValue]
    }))
  }
})

const selectedTitle = computed(() => {
  if (props.multiple) {
    if (props.mapOptions) {
      return props.modelValue
        ?.map(
          (val: any) =>
            props.items.find(
              (el) => val == el[props.itemValue as any]
            )?.[props.itemTitle]
        )
        .join(', ')
    } else {
      return props.modelValue.join(', ')
    }
  } else {
    if (props.mapOptions) {
      return props.items?.find(
        (el) => props.modelValue == el[props.itemValue as any]
      )?.[props.itemTitle]
    } else {
      return props.modelValue
    }
  }
})

const isSelected = (value: string) => {
  if (props.multiple) {
    return props.modelValue.includes(value)
  } else {
    return props.modelValue == value
  }
}

const emit = defineEmits(['update:model-value'])

const select = (item: Item) => {
  if (props.multiple) {
    let newValue
    if (props.modelValue.includes(item.value)) {
      newValue = props.modelValue.filter((val: any) => val !== item.value)
    } else {
      newValue = [...props.modelValue, item.value]
    }
    emit('update:model-value', newValue)
  } else {
    emit(
      'update:model-value',
      props.returnObject
        ? props.items.find((i) => i[props.itemValue] == item.value)
        : item.value
    )
  }

  if (!props.multiple) {
    isOpen.value = false
  }
}
</script>

<style scoped>
.list-item {
  @apply py-3 px-4 flex justify-between items-center text-sm font-semibold bg-slate-100 hover:bg-slate-200 cursor-pointer transition-all;
}

.list-item.selected {
  @apply bg-slate-200 !important;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

ul li:first-child {
  @apply rounded-t-lg;
}

ul li:last-child {
  @apply rounded-b-lg;
}
</style>
