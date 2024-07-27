import { defineStore } from "pinia"
import api from "~/composables/api"
import { type Industry } from "~/types"

export const useIndustryStore = defineStore('industry', () => {
    
    const industries = ref<Industry[]>([])

    interface ListResponse {
        data: { name: string }[]
    }

    const list = async () : Promise<ListResponse> => {
        const res : ListResponse = await api('category/industry/search', {
            method: 'POST',
            body: { name: '' }
        })
    
        industries.value = res.data

        return res
    }

    return {
        industries,
        list
    }
})