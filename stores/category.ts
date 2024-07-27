import { defineStore } from 'pinia'
import api from '~/composables/api'
import { type Category, type SubCategory } from '~/types'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])

  const list = async (): Promise<
    ListResponse<{ id: number; name: string; sub_categories: SubCategory[] }>
  > => {
    const res = await api('category/category')

    categories.value = res.data

    return res
  }

  return {
    categories,
    list
  }
})
