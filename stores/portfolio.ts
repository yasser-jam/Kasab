export const usePortfolioStore = defineStore('portfolio', () => {
    
    const portfolio = ref<Portfolio>(initPortfolio())
    
    const reset = () => portfolio.value = initPortfolio()

    const create = async () : Promise<void> => {
        await api('freelancer/portfolio/store', {
            method: 'POST',
            body: {
                ...portfolio.value
            }
        })
    }


    const get = async (id: number) : Promise<Portfolio> => {
        const res = await api(`freelancer/portfolio/${id}`)

        portfolio.value = res?.data

        return portfolio.value
    }

    return {
        portfolio,
        reset,
        get,
        create
    }
})