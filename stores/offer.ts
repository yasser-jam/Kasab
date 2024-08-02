import { OfferFilter } from './../.nuxt/components.d';
import type { Offer, OfferFilters } from "~/types"

export const useOfferStore = defineStore('offer', () => {
    const offer = ref<Offer>(initOffer())

    const offers = ref<Offer[]>([])

    const create = async () => {
        await api('company/job_offer/store', {
            method: 'POST',
            body: offer.value
        })
    }

    const filters = ref<OfferFilters>({} as OfferFilters)

    const list = async () : Promise<Offer[]> => {
        const res = await api('company/job_offer/list-job-offer', {
            method: 'POST',
            body: filters.value
        })

        offers.value = res?.data

        return offers.value
    }
    
    return {
        offer,
        offers,
        filters,

        list,
        create,
    }
})