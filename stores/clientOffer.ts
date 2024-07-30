import type { ClientOffer, Proposal } from "~/types"

export const useClientOfferStore = defineStore('client_offer', () => {
    const offer = ref<ClientOffer>(initClientOffer())

    const offers = ref<ClientOffer[]>([])

    const proposal = ref<Proposal>(initProposal())

    const create = async () => {
        await api('client-offer/client/store', {
            method: 'POST',
            body: offer.value
        })
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
    
    return {
        offer,
        offers,
        proposal,
        
        create,
        get,
        propose,
    }
})