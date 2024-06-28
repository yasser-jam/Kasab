export const useJobStore = defineStore('job', () => {
    
    const job = ref<Job>(initJob())
    
    const jobs = ref<Job[]>([])
    
    const list = async (name: string | undefined = undefined) : Promise<Job[]> => {
        const res = await api('category/job_role/search', {
            method: 'POST',
            body: {
                name
            }
        })

        return res?.data
    }


    return {
        job,
        jobs,
        list
    }
})