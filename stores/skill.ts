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

        skills.value = res?.data

        return skills.value
    }


    return {
        skill,
        skills,
        list
    }
})