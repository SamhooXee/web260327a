export interface User {
  id: string
  name: string
  email: string
  phone?: string
  organization?: string
  role?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  description?: string
  date: string
  location: string
  status?: string
  image_url?: string
  created_at: string
  updated_at: string
}

export interface Training {
  id: string
  title: string
  description?: string
  benefits?: string[]
  requirements?: string
  start_date?: string
  end_date?: string
  location?: string
  mode?: string
  price?: number
  created_at: string
  updated_at: string
}

export interface AgendaItem {
  time: string
  period: string
  title: string
  description: string
  location: string
}

export interface VenueInfo {
  name: string
  address: string
  amenities?: string[]
}

export interface Conference {
  id: string
  title: string
  description?: string
  date: string
  location: string
  agenda?: AgendaItem[]
  venue_info?: VenueInfo
  created_at: string
  updated_at: string
}

export interface TrainingApplication {
  id: string
  user_id?: string
  training_id?: string
  full_name: string
  organization?: string
  email: string
  phone?: string
  goals?: string
  status?: string
  created_at: string
  updated_at: string
}

export interface ConferenceRegistration {
  id: string
  user_id?: string
  conference_id?: string
  full_name: string
  organization?: string
  email: string
  pass_type?: string
  dietary_needs?: string
  agreed_to_terms?: boolean
  status?: string
  created_at: string
  updated_at: string
}

export interface News {
  id: string
  title: string
  excerpt?: string
  content?: string
  date?: string
  image_url?: string
  category?: string
  tags?: string[]
  author_name?: string
  read_time?: number
  created_at: string
  updated_at: string
}

export interface Gallery {
  id: string
  title: string
  image_url: string
  tag?: string
  category?: string
  created_at: string
  updated_at: string
}
