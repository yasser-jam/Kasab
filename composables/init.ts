import { type ClientOffer, type ClientOfferFilters, type Company, type OffersFilters } from '~/types'

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
  skills: [],
  status: 'pending',
  age_required: false,
  military_service_required: false,
  gender_required: false
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
  profile_image_url: ''
})

export const initCompanyOffersFilter = (): OffersFilters => ({
  location_type: undefined,
  attendence_type: undefined,
  status: undefined,
  job_role_id: undefined
})

export const initClientOfferFilter = () : ClientOfferFilters => ({
  status: 'active',
  skill_ids: []
})

export const initJob = (): Job => ({
  name: ''
})

export const initSkill = (): Skill => ({
  name: ''
})

export const initClient = (): Client => ({
  username: '',
  background_image_id: 0,
  background_image_url: '',
  city: '',
  created_at: '',
  date_of_birth: '',
  gender: 'male',
  profile_image_id: 0,
  profile_image_url: ''
})

export const initClientOffer = (): ClientOffer => ({
  category_id: 0,
  sub_category_id: 0,
  title: '',
  description: '',
  min_price: '',
  max_price: '',
  days: '',
  skill_ids: [],
  file_ids: []
})

export const initProposal = (): Proposal => ({
  client_offer_id: 0,
  days: 0,
  message: '',
  price: 0
})

export const initPortfolio = (): Portfolio => ({
  title: '',
  descreption: '',
  views_count: '',
  likes_count: '',
  url: '',
  date: '',
  file_ids: [],
  image_ids: [],
  section: '',
  updated_at: '',
  created_at: '',
})