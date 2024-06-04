export interface User {
  id?: number
  first_name: string
  last_name: string
  username: string
  email: string
  role: string
}

export interface Category {
  name: string
}

export interface Company {
  id?: number
  profile_image_url: string | null
  background_image_url: string | null
  verified_at: string | null
  username?: string | null
  name: string | null
  description: string | null
  size: string | null
  industry_name: string | null
  city: string
  region: string
  street_address: string
  gallery_images: string[]
  contact_links: string[]
  company_phones: string[]
}

export interface Offer {
  industry_name: string
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
}
