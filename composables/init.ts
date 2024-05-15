import { type Company } from "~/types"

export const initCompany = () : Company => ({
    id: undefined,
    background_image_url: '',
    city: '',
    company_phones: [],
    contact_links: [],
    description: '',
    gallery_images: [],
    industry_name: '',
    name: '',
    profile_image_url: '',
    region: '',
    size: '',
    street_address: '',
    verified_at: ''
})