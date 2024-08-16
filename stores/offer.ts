import { OfferFilter } from './../.nuxt/components.d';
import type { Offer, OfferFilters } from "~/types"

export const useOfferStore = defineStore('company-offer', () => {
    const offer = ref<Offer>(initOffer())

    const offers = ref<Offer[]>([])

    const filters = ref<OfferFilters>({} as OfferFilters)

    const createO = async () => {
        await api('company/job_offer/store', {
            method: 'POST',
            body: offer.value
        })

        return ''
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

    const proposals = ref<any[]>([])

    const listProposals = async (id: number) : Promise<any[]> => {
        const res = await api('job-offer-proposal/filter', {
            method: 'POST',
            body: {
                job_offer_id: id,
                order: 'asc'
            }
        })

        proposals.value = res?.data

        return proposals.value
    }

    const accept = async (id: number) : Promise<void> => {
        const res = await api(`job-offer-proposal/accept/${id}`, {
            method: 'POST'
        })
    }

    const reject = async (id: number) : Promise<void> => {
        await api('job-offer-proposal/reject', {
            method: 'POST',
            body: {
                job_offer_proposal_ids: [id]
            }
        })
    }
    
    return {
        offer,
        offers,
        filters,
        proposals,

        get,
        list,
        listProposals,
        createO,
        propose,
        accept,
        reject
    }
})