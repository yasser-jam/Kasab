import api from '~/composables/api'

export const useClientStore = defineStore('client', () => {
  const client = ref<Client>(initClient())

  const clients = ref<Client[]>([])

  const create = async () => {
    await api('freelancer/store', {
      method: 'POST',
      body: client.value
    })
  }

  const update = async (id: number) => {
    await api('freelancer/store', {
      method: 'PUT',
      body: client.value
    })
  }

  const get = async (id: number) : Promise<Client> => {
    const res = await api(`freelancer/show/${id}`)

    client.value = res?.data

    return client.value
  }

  return {
    client,
    create,
    update,
    get
  }
})
