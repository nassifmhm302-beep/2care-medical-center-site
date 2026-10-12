export type Department = "dental" | "cosmetic";

export type Service = {
  slug: string;
  department: Department;
  name: string;
  shortDescription: string;
  description: string;
  expectations: string[];
  image: string;
  imageAlt: string;
  doctorSlugs: string[];
  relatedSlugs: string[];
};

export type Doctor = {
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  bio: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
};

export type AppointmentRequest = {
  fullName: string;
  phoneCountryCode: string;
  phone: string;
  email?: string;
  department: string;
  service: string;
  doctor?: string;
  preferredDate: string;
  preferredTime?: string;
  notes?: string;
  privacyAccepted: boolean;
  /** Honeypot field — should always stay empty. Used for basic bot filtering. */
  website?: string;
};
