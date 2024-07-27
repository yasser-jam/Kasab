import { defineStore } from "pinia"
import api from "~/composables/api"
import { type SubCategory } from "~/types"

export const useSubCategoryStore = defineStore('sub-category', () => {
    
    const subCategories = ref<SubCategory[]>([])

    interface ListResponse {
        data: { name: string }[]
    }

    const list = async (categoryId: number) : Promise<ListResponse> => {
        const res : ListResponse = await api(`category/sub-category/${categoryId}`)
    
        subCategories.value = res.data

        return res
    }

    return {
        subCategories,
        list
    }
})