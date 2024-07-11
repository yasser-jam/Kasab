import { type Company } from '~/types'

export const initUser = (): User => ({
  id: undefined,
  email: '',
  first_name: '',
  last_name: '',
  username: '',
  role: '',
  role_id: undefined
})

export const initCompany = (): Company => ({
  id: undefined,
  background_image_url: '',
  city: '',
  company_phones: [],
  contact_links: [],
  description: '',
  gallery_images: [],
  gallery_images_ids: [],
  industry_name: '',
  name: '',
  profile_image_url: '',
  region: '',
  size: '',
  street_address: '',
  verified_at: ''
})

export const initOffer = (): Offer => ({
  industry_name: '',
  job_role_id: 0,
  location_type: 'remotly',
  attendence_type: 'part-time',
  max_salary: 0,
  min_salary: 0,
  max_age: 0,
  min_age: 0,
  description: '',
  transportation: false,
  health_insurance: false,
  military_service: false,
  gender: null,
  skills: []
})

export const initEmployee = (): Employee => ({
  id: undefined,
  city: '',
  date_of_birth: '',
  description: '',
  gender: '',
  headline: '',
  skill_ids: [],
  job_role_id: undefined,
  background_image_url: '',
  profile_image_url: '',
})

export const initJob = (): Job => ({
  name: ''
})

export const initSkill = (): Skill => ({
  name: ''
})