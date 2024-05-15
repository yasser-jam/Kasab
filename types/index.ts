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
