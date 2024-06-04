import { type Company } from "~/types";

export const initCompany = (): Company => ({
  id: undefined,
  background_image_url: "",
  city: "",
  company_phones: [],
  contact_links: [],
  description: "",
  gallery_images: [],
  industry_name: "",
  name: "",
  profile_image_url: "",
  region: "",
  size: "",
  street_address: "",
  verified_at: "",
});

export const initOffer = (): Offer => ({
  industry_name: "",
  job_role_id: 0,
  location_type: "remotly",
  attendence_type: "part-time",
  max_salary: 0,
  min_salary: 0,
  max_age: 0,
  min_age: 0,
  description: "",
  transportation: false,
  health_insurance: false,
  military_service: false,
  gender: null,
  skills: [],
});
