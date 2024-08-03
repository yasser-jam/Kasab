import { OfferFilter } from './../.nuxt/components.d';
import type { Offer, OfferFilters } from "~/types"

export const useOfferStore = defineStore('offer', () => {
    const offer = ref<Offer>(initOffer())

    const offers = ref<Offer[]>([])

    const filters = ref<OfferFilters>({} as OfferFilters)

    const create = async () => {
        await api('company/job_offer/store', {
            method: 'POST',
            body: offer.value
        })
    }

    const get = async (id: number) : Promise<Offer> => {
        const res = await api(`company/job_offer/${id}`)

        offer.value = res?.data

        return offer.value
    }

    const list = async () : Promise<Offer[]> => {
        const res = await api('company/job_offers/list-job-offer', {
            method: 'POST',
            body: filters.value
        })

        offers.value = res?.data

        return offers.value
    }

    const propose = async (offerId: number, msg: string) : Promise<any> => {
        await api('job-offer-proposal/store', {
            method: 'POST',
            body: {
                job_offer_id: offerId,
                message: msg
            }
        })
    }
    
    return {
        offer,
        offers,
        filters,

        get,
        list,
        create,
        propose
    }
})