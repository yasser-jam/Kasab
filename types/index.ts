export interface ListResponse<T> {
  data: T[]
}
export interface User {
  id?: number
  first_name: string
  last_name: string
  username: string
  email: string
  role: string
  role_id?: number
}

export interface Category {
  id?: number
  name: string
}

export interface SubCategory {
  id?: number
  name: string
}
export interface Company {
  id?: number
  profile_image_url: string
  profile_image_id?: number
  background_image_url: string
  background_image_id?: number
  verified_at: string | null
  username?: string | null
  name: string | null
  description: string | null
  size: string | null
  industry_name: string | null
  city: string
  region: string
  street_address: string
  gallery_images: { id: number; url: string }[]
  gallery_images_ids: { id: number; url: string }[]
  contact_links: string[]
  company_phones: string[]
}

export interface Offer {
  industry_name: string
  job_role?: {
    id: number
    name: string
  }
  job_role_id: number
  location_type: 'remotly' | 'on-site'
  attendence_type: 'part-time' | 'full-time'
  max_salary: number
  min_salary: number
  max_age: number
  min_age: number
  description: string
  transportation: boolean
  health_insurance: boolean
  military_service: boolean
  gender: 'male' | 'female' | null
  skills: string[]
  age_required?: boolean
  military_service_required?: boolean
  gender_required?: boolean
  status: 'pending' | 'active' | 'cloused'
  created_at?: string
}

export interface Employee {
  id?: number
  headline: string
  description: string
  city: string
  gender: string
  date_of_birth: string
  job_role_id?: number
  job_role?: {
    id: number
    name: string
  }
  skill_ids: number[]
  profile_image_id?: number
  profile_image_url: string
  background_image_id?: number
  background_image_url: string
}

export interface Job {
  id?: number
  name: string
}

export interface Skill {
  id?: number
  name: string
}

export interface OffersFilters {
  location_type?: 'remotly' | 'on-site'
  attendence_type?: 'part-time' | 'full-time'
  status?: 'pending' | 'active' | 'cloused'
  job_role_id?: number
}

export interface Client {
  id?: number
  username: string
  gender: 'male' | 'female'
  city: string
  date_of_birth: string
  profile_image_id: number
  background_image_id: number
  profile_image_url: null | string
  background_image_url: null | string
  created_at: string
}

export interface ClientOffer {
  id?: number
  category_id: number
  sub_category_id: number
  title: string
  description: string
  min_price: string
  max_price: string
  days: string
  skill_ids: number[]
  file_ids: number[]
}
