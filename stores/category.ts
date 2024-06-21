import { defineStore } from "pinia"
import api from "~/composables/api"
import { type Category } from "~/types"

export const useCategoryStore = defineStore('category', () => {
    
    const categories = ref<Category[]>([])

    interface ListResponse {
        data: { name: string }[]
    }

    const list = async () : Promise<ListResponse> => {
        const res : ListResponse = await api('category/industry/search', {
            method: 'POST',
            body: { name: '' }
        })
    
        categories.value = res.data

        return res
    }

    return {
        categories,
        list
    }
})