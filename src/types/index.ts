export interface User {
  id: string
  email: string
  name: string
  phone?: string
  avatar?: string
  location?: string
  language: 'de' | 'en'
  role: 'customer' | 'provider' | 'admin'
  created_at: string
  updated_at: string
  verified?: boolean
}

export interface Service {
  id: string
  provider_id: string
  title: string
  description: string
  category: string
  price_type: 'hourly' | 'fixed'
  price: number
  location: string
  images: string[]
  availability: boolean
  created_at: string
  updated_at: string
  rating?: number
  reviews_count?: number
}

export interface Booking {
  id: string
  customer_id: string
  provider_id: string
  service_id: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  total_price: number
  commission: number
  created_at: string
  updated_at: string
  notes?: string
}

export interface Review {
  id: string
  booking_id: string
  customer_id: string
  provider_id: string
  rating: number
  comment: string
  created_at: string
}

export interface Category {
  id: string
  name: string
  name_de: string
  name_en: string
  icon: string
  active: boolean
}

export interface Message {
  id: string
  sender_id: string
  recipient_id: string
  content: string
  created_at: string
  read: boolean
}

export interface Availability {
  id: string
  provider_id: string
  day_of_week: number
  start_time: string
  end_time: string
  is_available: boolean
}