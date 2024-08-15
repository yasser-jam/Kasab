import type { ClientOffer, ClientOfferFilters, Milestone, Proposal } from '~/types'

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

  const list = async (): Promise<ClientOffer[]> => {
    const res = await api('client-offer/freelancer/freelancer-filter', {
      method: 'POST',
      body: {
        ...filters.value,
        min_days: filters.value.min_days || undefined,
        max_days: filters.value.max_days || undefined,
        min_price: filters.value.min_price || undefined,
        max_price: filters.value.max_price || undefined
      }
    })

    console.log(res?.data)
    offers.value = res?.data

    return offers.value
  }

  const get = async (id: number): Promise<ClientOffer> => {
    const res = await api(`client-offer/client/${id}`)

    offer.value = res?.data

    return offer.value
  }

  const propose = async (offerId: number) => {
    await api('client-offer/freelancer/proposal/store', {
      method: 'POST',
      body: {
        ...proposal.value,
        client_offer_id: offerId
      }
    })
  }

  const listProposals = async (
    projectId: number,
    orderByDate: boolean = true,
    orderByPrice: boolean = true
  ): Promise<Proposal[]> => {
    const res = await api('client-offer/client/proposals', {
      method: 'POST',
      body: {
        client_offer_id: projectId,
        orderByPrice,
        orderByDate: orderByDate
      }
    })

    proposals.value = res?.data

    return proposals.value
  }

  const acceptProposal = async (id: number) => {
    await api('client-offer/client/proposals/accept', {
      method: 'POST',
      body: {
        proposal_id: id
      }
    })

  }

  const rejectProposal = async (id: number) => {
    await api('client-offer/client/proposals/reject', {
      method: 'POST',
      body: {
        proposal_ids: [id]
      }
    })

    await listProposals(id)
  }

  const seedOffers = async () => {
    const offers = [
      {
        category_id: 2,
        sub_category_id: 1,
        title: 'تصميم ui/ux',
        description: 'مطلوب مصمم ui/ux للقيام بالعديد من التصاميم المختلفة',
        min_price: 2000,
        max_price: 10000,
        days: 15,
        skill_ids: [1, 2, 3, 4, 5, 6],
        file_ids: []
      },
      {
        category_id: 1,
        sub_category_id: 1,
        title: 'تصميم ووردبريس',
        description: 'تصميم الكثير من الأمور',
        min_price: 20,
        max_price: 1000,
        days: 10,
        skill_ids: [1, 2, 3, 4, 5, 6],
        file_ids: []
      },
      {
        category_id: 2,
        sub_category_id: 1,
        title: 'تصميم لوغو',
        description: 'يوجد العديد من الأمور الأساسية للقيام بهذه الوظائف',
        min_price: 15000,
        max_price: 35000,
        days: 4,
        skill_ids: [1, 2, 3, 4, 5, 6],
        file_ids: []
      },
      {
        category_id: 1,
        sub_category_id: 1,
        title: 'برمجة موقع landing page',
        description: 'تصميم صفحة هبوط لشركة أدوية قادرة على مواكبة السوق',
        min_price: 9000,
        max_price: 18000,
        days: 20,
        skill_ids: [1, 2, 4, 5, 6],
        file_ids: []
      }
    ]

    for (let i = 0; i < offers.length; i++) {
      await api('client-offer/client/store', {
        method: 'POST',
        body: offers[i]
      })
    }
  }



  const milestone = ref<Milestone>(initMilestone())

  const resetMilestone = () => milestone.value = initMilestone()

  const createMilestone = async () => {
    await api('')
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
    listProposals,
    acceptProposal,
    rejectProposal,


    milestone,
    resetMilestone,
    createMilestone,
    seedOffers
  }
})
