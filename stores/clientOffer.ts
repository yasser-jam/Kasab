import type { ClientOffer, ClientOfferFilters, Proposal } from "~/types"

export const useClientOfferStore = defineStore('client_offer', () => {
    const offer = ref<ClientOffer>(initClientOffer())

    const offers = ref<ClientOffer[]>([])

    const proposal = ref<Proposal>(initProposal())
    const proposals = ref<Proposal[]>([])

    const create = async () => {
        await api('client-offer/client/store', {
            method: 'POST',
            body: offer.value
        })
    }

    const filters = ref<ClientOfferFilters>(initClientOfferFilter())

    const list = async () : Promise<ClientOffer[]> => {
        const res = await api('client-offer/freelancer/freelancer-filter', {
            method: 'POST',
            body: {
                ...filters.value,
                min_days: filters.value.min_days || undefined,
                max_days: filters.value.max_days || undefined,
                min_price: filters.value.min_price || undefined,
                max_price: filters.value.max_price || undefined,
            }
        })

        console.log(res?.data);
        offers.value = res?.data
    
        return offers.value
    }

    const get = async (id: number) : Promise<ClientOffer> => {
        const res = await api(`client-offer/client/${id}`)
        
        offer.value = res?.data

        return offer.value
    }

    const propose = async () => {
        await api('client-offer/freelancer/proposal/store', {
            method: 'POST',
            body: proposal.value
        })
    }

    const listProposals = async (projectId: number, orderByDate: boolean = true, orderByPrice: boolean = true) : Promise<Proposal[]> => {
        const res = await api('/client-offer/clients/proposals', {
            method: 'POST',
            body: {
                client_offer_id: 1,
                orderByPrice,
                orderByDate: orderByDate,
            }
        })

        proposals.value = res?.data

        return proposals.value
    }
    
    return {
        offer,
        offers,
        proposal,
        proposals,
        filters,
        list,
        create,
        get,
        propose,
        listProposals
    }
})