-- =============================================
-- w260327a_users
-- =============================================
CREATE TABLE w260327a_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    organization TEXT,
    role TEXT DEFAULT 'user' NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- w260327a_events
-- =============================================
CREATE TABLE w260327a_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    date TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT DEFAULT 'upcoming' NOT NULL,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- w260327a_training
-- =============================================
CREATE TABLE w260327a_training (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    benefits TEXT[],
    requirements TEXT,
    start_date TEXT,
    end_date TEXT,
    location TEXT,
    mode TEXT DEFAULT 'hybrid' NOT NULL,
    price TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- w260327a_conferences
-- =============================================
CREATE TABLE w260327a_conferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    date TEXT NOT NULL,
    location TEXT NOT NULL,
    agenda JSONB DEFAULT '[]',
    venue_info JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- w260327a_training_applications
-- =============================================
CREATE TABLE w260327a_training_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES w260327a_users(id) ON DELETE SET NULL,
    training_id UUID REFERENCES w260327a_training(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL,
    organization TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    goals TEXT,
    status TEXT DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- w260327a_conference_registrations
-- =============================================
CREATE TABLE w260327a_conference_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES w260327a_users(id) ON DELETE SET NULL,
    conference_id UUID REFERENCES w260327a_conferences(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL,
    organization TEXT,
    email TEXT NOT NULL,
    pass_type TEXT DEFAULT 'full' NOT NULL,
    dietary_needs TEXT,
    agreed_to_terms BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- w260327a_news
-- =============================================
CREATE TABLE w260327a_news (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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

-- =============================================
-- w260327a_gallery
-- =============================================
CREATE TABLE w260327a_gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    image_url TEXT NOT NULL,
    tag TEXT,
    category TEXT DEFAULT 'events' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- Enable Row Level Security
-- =============================================

-- w260327a_users RLS
ALTER TABLE w260327a_users ENABLE ROW LEVEL SECURITY;

-- w260327a_events RLS
ALTER TABLE w260327a_events ENABLE ROW LEVEL SECURITY;

-- w260327a_training RLS
ALTER TABLE w260327a_training ENABLE ROW LEVEL SECURITY;

-- w260327a_conferences RLS
ALTER TABLE w260327a_conferences ENABLE ROW LEVEL SECURITY;

-- w260327a_training_applications RLS
ALTER TABLE w260327a_training_applications ENABLE ROW LEVEL SECURITY;

-- w260327a_conference_registrations RLS
ALTER TABLE w260327a_conference_registrations ENABLE ROW LEVEL SECURITY;

-- w260327a_news RLS
ALTER TABLE w260327a_news ENABLE ROW LEVEL SECURITY;

-- w260327a_gallery RLS
ALTER TABLE w260327a_gallery ENABLE ROW LEVEL SECURITY;

-- =============================================
-- RLS Policies
-- =============================================

-- Public read policy for events
CREATE POLICY "Public can read events"
ON w260327a_events FOR SELECT
USING (true);

-- Public read policy for training
CREATE POLICY "Public can read training"
ON w260327a_training FOR SELECT
USING (true);

-- Public read policy for conferences
CREATE POLICY "Public can read conferences"
ON w260327a_conferences FOR SELECT
USING (true);

-- Public read policy for news
CREATE POLICY "Public can read news"
ON w260327a_news FOR SELECT
USING (true);

-- Public read policy for gallery
CREATE POLICY "Public can read gallery"
ON w260327a_gallery FOR SELECT
USING (true);

-- Public insert policy for users
CREATE POLICY "Public can insert users"
ON w260327a_users FOR INSERT
WITH CHECK (true);

-- Public insert policy for training_applications
CREATE POLICY "Public can insert training_applications"
ON w260327a_training_applications FOR INSERT
WITH CHECK (true);

-- Public insert policy for conference_registrations
CREATE POLICY "Public can insert conference_registrations"
ON w260327a_conference_registrations FOR INSERT
WITH CHECK (true);

-- =============================================
-- Updated_at trigger function
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to all tables
CREATE TRIGGER update_w260327a_users_updated_at
    BEFORE UPDATE ON w260327a_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_w260327a_events_updated_at
    BEFORE UPDATE ON w260327a_events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_w260327a_training_updated_at
    BEFORE UPDATE ON w260327a_training
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_w260327a_conferences_updated_at
    BEFORE UPDATE ON w260327a_conferences
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_w260327a_training_applications_updated_at
    BEFORE UPDATE ON w260327a_training_applications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_w260327a_conference_registrations_updated_at
    BEFORE UPDATE ON w260327a_conference_registrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_w260327a_news_updated_at
    BEFORE UPDATE ON w260327a_news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_w260327a_gallery_updated_at
    BEFORE UPDATE ON w260327a_gallery
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
