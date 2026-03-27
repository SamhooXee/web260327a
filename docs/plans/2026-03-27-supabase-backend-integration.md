# Supabase Backend Integration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 为 Astra Global 前端创建 Supabase 后端集成，实现完整 CRUD 操作

**Architecture:** 使用 @supabase/supabase-js 直接连接 Supabase，所有操作通过 POST 实现（SELECT/INSERT/UPDATE/DELETE）

**Tech Stack:** Supabase, @supabase/supabase-js, React, TypeScript

---

## Task 1: Create Supabase Database Schema

**Files:**
- Create: `supabase/migrations/001_initial_schema.sql`

**Step 1: Write SQL migration**

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE w260327a_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  organization TEXT,
  role TEXT DEFAULT 'user',
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events table
CREATE TABLE w260327a_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  date TEXT NOT NULL,
  location TEXT NOT NULL,
  status TEXT DEFAULT 'upcoming',
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Training table
CREATE TABLE w260327a_training (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  benefits TEXT[],
  requirements TEXT,
  start_date TEXT,
  end_date TEXT,
  location TEXT,
  mode TEXT DEFAULT 'hybrid',
  price TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Conferences table
CREATE TABLE w260327a_conferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  date TEXT NOT NULL,
  location TEXT NOT NULL,
  agenda JSONB,
  venue_info JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Training Applications table
CREATE TABLE w260327a_training_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES w260327a_users(id),
  training_id UUID REFERENCES w260327a_training(id),
  full_name TEXT NOT NULL,
  organization TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  goals TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Conference Registrations table
CREATE TABLE w260327a_conference_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES w260327a_users(id),
  conference_id UUID REFERENCES w260327a_conferences(id),
  full_name TEXT NOT NULL,
  organization TEXT,
  email TEXT NOT NULL,
  pass_type TEXT DEFAULT 'full',
  dietary_needs TEXT,
  agreed_to_terms BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- News table
CREATE TABLE w260327a_news (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  date TEXT,
  image_url TEXT,
  category TEXT,
  tags TEXT[],
  author_name TEXT,
  read_time TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery table
CREATE TABLE w260327a_gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  tag TEXT,
  category TEXT DEFAULT 'events',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE w260327a_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE w260327a_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE w260327a_training ENABLE ROW LEVEL SECURITY;
ALTER TABLE w260327a_conferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE w260327a_training_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE w260327a_conference_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE w260327a_news ENABLE ROW LEVEL SECURITY;
ALTER TABLE w260327a_gallery ENABLE ROW LEVEL SECURITY;

-- Public read policies (for authenticated users)
CREATE POLICY "Public read all" ON w260327a_events FOR SELECT TO anon USING (true);
CREATE POLICY "Public read all" ON w260327a_training FOR SELECT TO anon USING (true);
CREATE POLICY "Public read all" ON w260327a_conferences FOR SELECT TO anon USING (true);
CREATE POLICY "Public read all" ON w260327a_news FOR SELECT TO anon USING (true);
CREATE POLICY "Public read all" ON w260327a_gallery FOR SELECT TO anon USING (true);

-- Insert policies (for authenticated users)
CREATE POLICY "Public insert" ON w260327a_training_applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Public insert" ON w260327a_conference_registrations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Public insert" ON w260327a_users FOR INSERT TO anon WITH CHECK (true);
```

---

## Task 2: Create Supabase Client Configuration

**Files:**
- Create: `src/lib/supabase.ts`
- Create: `src/lib/types.ts`

**Step 1: Create Supabase client**

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**Step 2: Create TypeScript types**

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  role?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  status?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Training {
  id: string;
  title: string;
  description?: string;
  benefits?: string[];
  requirements?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  mode?: string;
  price?: string;
  created_at: string;
  updated_at: string;
}

export interface Conference {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  agenda?: AgendaItem[];
  venue_info?: VenueInfo;
  created_at: string;
  updated_at: string;
}

export interface AgendaItem {
  time: string;
  period: string;
  title: string;
  description: string;
  location: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  amenities?: string[];
}

export interface TrainingApplication {
  id: string;
  user_id?: string;
  training_id?: string;
  full_name: string;
  organization?: string;
  email: string;
  phone?: string;
  goals?: string;
  status?: string;
  created_at: string;
  updated_at: string;
}

export interface ConferenceRegistration {
  id: string;
  user_id?: string;
  conference_id?: string;
  full_name: string;
  organization?: string;
  email: string;
  pass_type?: string;
  dietary_needs?: string;
  agreed_to_terms?: boolean;
  status?: string;
  created_at: string;
  updated_at: string;
}

export interface News {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  date?: string;
  image_url?: string;
  category?: string;
  tags?: string[];
  author_name?: string;
  read_time?: string;
  created_at: string;
  updated_at: string;
}

export interface Gallery {
  id: string;
  title: string;
  image_url: string;
  tag?: string;
  category?: string;
  created_at: string;
  updated_at: string;
}
```

---

## Task 3: Create API Service Layer

**Files:**
- Create: `src/lib/api/events.ts`
- Create: `src/lib/api/training.ts`
- Create: `src/lib/api/conferences.ts`
- Create: `src/lib/api/users.ts`
- Create: `src/lib/api/news.ts`
- Create: `src/lib/api/gallery.ts`
- Create: `src/lib/api/applications.ts`

**Step 1: Create events API**

```typescript
import { supabase } from '../supabase';
import type { Event } from '../types';

export const eventsApi = {
  async getAll(): Promise<Event[]> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Event | null> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(event: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .insert(event)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, event: Partial<Event>): Promise<Event> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .update({ ...event, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_events')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
```

**Step 2: Create training API (similar pattern)**

```typescript
import { supabase } from '../supabase';
import type { Training } from '../types';

export const trainingApi = {
  async getAll(): Promise<Training[]> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Training | null> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(training: Omit<Training, 'id' | 'created_at' | 'updated_at'>): Promise<Training> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .insert(training)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, training: Partial<Training>): Promise<Training> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .update({ ...training, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_training')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
```

**Step 3: Create conferences API (similar pattern)**

```typescript
import { supabase } from '../supabase';
import type { Conference } from '../types';

export const conferencesApi = {
  async getAll(): Promise<Conference[]> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Conference | null> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(conference: Omit<Conference, 'id' | 'created_at' | 'updated_at'>): Promise<Conference> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .insert(conference)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, conference: Partial<Conference>): Promise<Conference> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .update({ ...conference, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_conferences')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
```

**Step 4: Create users API**

```typescript
import { supabase } from '../supabase';
import type { User } from '../types';

export const usersApi = {
  async getAll(): Promise<User[]> {
    const { data, error } = await supabase
      .from('w260327a_users')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('w260327a_users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User> {
    const { data, error } = await supabase
      .from('w260327a_users')
      .insert(user)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, user: Partial<User>): Promise<User> {
    const { data, error } = await supabase
      .from('w260327a_users')
      .update({ ...user, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_users')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
```

**Step 5: Create news API (similar pattern)**

```typescript
import { supabase } from '../supabase';
import type { News } from '../types';

export const newsApi = {
  async getAll(): Promise<News[]> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<News | null> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(news: Omit<News, 'id' | 'created_at' | 'updated_at'>): Promise<News> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .insert(news)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, news: Partial<News>): Promise<News> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .update({ ...news, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_news')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
```

**Step 6: Create gallery API (similar pattern)**

```typescript
import { supabase } from '../supabase';
import type { Gallery } from '../types';

export const galleryApi = {
  async getAll(): Promise<Gallery[]> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Gallery | null> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(gallery: Omit<Gallery, 'id' | 'created_at' | 'updated_at'>): Promise<Gallery> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .insert(gallery)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, gallery: Partial<Gallery>): Promise<Gallery> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .update({ ...gallery, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_gallery')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
```

**Step 7: Create applications API (for training applications and conference registrations)**

```typescript
import { supabase } from '../supabase';
import type { TrainingApplication, ConferenceRegistration } from '../types';

export const applicationsApi = {
  // Training Applications
  async createTrainingApplication(
    app: Omit<TrainingApplication, 'id' | 'created_at' | 'updated_at'>
  ): Promise<TrainingApplication> {
    const { data, error } = await supabase
      .from('w260327a_training_applications')
      .insert(app)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getTrainingApplications(): Promise<TrainingApplication[]> {
    const { data, error } = await supabase
      .from('w260327a_training_applications')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  // Conference Registrations
  async createConferenceRegistration(
    reg: Omit<ConferenceRegistration, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ConferenceRegistration> {
    const { data, error } = await supabase
      .from('w260327a_conference_registrations')
      .insert(reg)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getConferenceRegistrations(): Promise<ConferenceRegistration[]> {
    const { data, error } = await supabase
      .from('w260327a_conference_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  }
};
```

---

## Task 4: Update Home Page to Use Supabase

**Files:**
- Modify: `src/pages/Home.tsx`

**Step 1: Add Supabase data fetching**

```typescript
import { useEffect, useState } from 'react';
import { eventsApi } from '../lib/api/events';
import type { Event } from '../lib/types';

// Replace static events array with:
const [events, setEvents] = useState<Event[]>([]);

useEffect(() => {
  eventsApi.getAll().then(setEvents).catch(console.error);
}, []);

// Update events.map to use event.date, event.location, event.title, event.status, event.image_url
```

---

## Task 5: Update Training Page with Supabase

**Files:**
- Modify: `src/pages/Training.tsx`

**Step 1: Connect form to Supabase**

```typescript
import { trainingApi } from '../lib/api/training';
import { applicationsApi } from '../lib/api/applications';

// Add state and handlers
const handleTrainingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  await applicationsApi.createTrainingApplication({
    full_name: formData.get('fullName') as string,
    organization: formData.get('organization') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    goals: formData.get('goals') as string,
  });
  alert('Application submitted successfully!');
};
```

---

## Task 6: Update Conferences Page with Supabase

**Files:**
- Modify: `src/pages/Conferences.tsx`

**Step 1: Connect form to Supabase**

```typescript
import { conferencesApi } from '../lib/api/conferences';
import { applicationsApi } from '../lib/api/applications';

// Add state and handlers
const handleConferenceSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  await applicationsApi.createConferenceRegistration({
    full_name: formData.get('fullName') as string,
    organization: formData.get('organization') as string,
    email: formData.get('email') as string,
    pass_type: formData.get('passType') as string,
    dietary_needs: formData.get('dietaryNeeds') as string,
    agreed_to_terms: formData.get('terms') === 'on',
  });
  alert('Registration submitted successfully!');
};
```

---

## Task 7: Update News Page with Supabase

**Files:**
- Modify: `src/pages/News.tsx`

**Step 1: Connect to Supabase**

```typescript
import { useEffect, useState } from 'react';
import { newsApi } from '../lib/api/news';
import type { News } from '../lib/types';

const [articles, setArticles] = useState<News[]>([]);

useEffect(() => {
  newsApi.getAll().then(setArticles).catch(console.error);
}, []);
```

---

## Task 8: Update Gallery Page with Supabase

**Files:**
- Modify: `src/pages/Gallery.tsx`

**Step 1: Connect to Supabase**

```typescript
import { useEffect, useState } from 'react';
import { galleryApi } from '../lib/api/gallery';
import type { Gallery } from '../lib/types';

const [photos, setPhotos] = useState<Gallery[]>([]);

useEffect(() => {
  galleryApi.getAll().then(setPhotos).catch(console.error);
}, []);
```

---

## Task 9: Update Environment Configuration

**Files:**
- Modify: `.env.example`
- Create: `.env`

**Step 1: Update .env.example**

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Task 10: Install Supabase Client

**Files:**
- Modify: `package.json`

**Step 1: Add Supabase dependency**

```bash
pnpm add @supabase/supabase-js
```

---

## Task 11: Create Seed Data Script

**Files:**
- Create: `supabase/seed.sql`

**Step 1: Add seed data for development**

```sql
-- Seed Events
INSERT INTO w260327a_events (title, description, date, location, status, image_url) VALUES
('亚太贸易纽带', '亚太地区贸易合作盛会', '2024年10月14-16日', '新加坡', '已确认', 'https://example.com/event1.jpg'),
('战略外交研讨会', '全球外交战略研讨', '2024年11月02-05日', '伦敦', '精英准入', 'https://example.com/event2.jpg'),
('全球政策论坛', '国际政策制定者峰会', '2024年12月12-14日', '巴黎', '报名开放中', 'https://example.com/event3.jpg');

-- Seed Training
INSERT INTO w260327a_training (title, description, benefits, requirements, start_date, end_date, location, mode) VALUES
('全球领导力培训', '国际外交官和企业愿景家量身定制的权威高管之旅', ARRAY['获得认证的国际领导力证书', '直接对接财富500强全球导师', '专属战略部署框架'], '8年以上专业经验，3年管理经验', '2024年10月12日', '2024年11月15日', '日内瓦', 'hybrid');

-- Seed Conferences
INSERT INTO w260327a_conferences (title, description, date, location, agenda, venue_info) VALUES
('2024年国际峰会', '星际未来的建筑师', '2024年11月12-14日', '日内瓦，猎户座展馆', '[{"time":"09:00","period":"AM EST","title":"主题演讲：主权银河","description":"国际法范式转变","location":"全体会议大厅"}]', '{"name":"猎户座展馆","address":"瑞士日内瓦，罗纳大街 42 号，1204","amenities":["千兆连接","实时翻译","餐饮服务"]}');

-- Seed News
INSERT INTO w260327a_news (title, excerpt, content, date, image_url, category, tags, author_name, read_time) VALUES
('New Orbital Transit Corridor Established over Pacific', 'Pacific transit corridor milestone', 'Full article content...', '2024年10月20日', 'https://example.com/news1.jpg', '空间探索', ARRAY['#OrbitalPolicy', '#SpaceEthics'], 'Dr. Elena Thorne', '12分钟');

-- Seed Gallery
INSERT INTO w260327a_gallery (title, image_url, tag, category) VALUES
('数字外交论坛', 'https://example.com/gallery1.jpg', '2023年全球峰会', 'events'),
('精英领导力项目', 'https://example.com/gallery2.jpg', 'Alpha 届毕业典礼', 'training');
```
