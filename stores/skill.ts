export const useSkillStore = defineStore('skill', () => {
    
    const skill = ref<Skill>(initSkill())
    
    const skills = ref<Skill[]>([])
    
    const list = async (name: string | undefined = undefined) : Promise<Job[]> => {
        const res = await api('category/skill/search', {
            method: 'POST',
            body: {
                name
            }
        })

        return res?.data
    }


    return {
        skill,
        skills,
        list
    }
})