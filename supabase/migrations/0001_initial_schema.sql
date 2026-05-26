-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT CHECK (role IN ('buyer', 'advertiser', 'admin')) DEFAULT 'buyer',
  company TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Categories Table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon TEXT,
  count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SaaS Products Table
CREATE TABLE saas_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tag TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  cat TEXT REFERENCES categories(slug),
  price TEXT,
  score INTEGER DEFAULT 0,
  stars NUMERIC(3, 1) DEFAULT 0.0,
  reviews INTEGER DEFAULT 0,
  uptime TEXT,
  color TEXT,
  tags TEXT[] DEFAULT '{}',
  founded_year INTEGER,
  hq TEXT,
  employees_range TEXT,
  logo_url TEXT,
  website_url TEXT,
  trial_days INTEGER,
  owner_id UUID REFERENCES profiles(id),
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SaaS Features Table
CREATE TABLE saas_features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  saas_id UUID REFERENCES saas_products(id) ON DELETE CASCADE,
  feature_name TEXT NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SaaS Integrations Table
CREATE TABLE saas_integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  saas_id UUID REFERENCES saas_products(id) ON DELETE CASCADE,
  integration_name TEXT NOT NULL,
  integration_type TEXT CHECK (integration_type IN ('native', 'zapier', 'n8n', 'make', 'api')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. SaaS Plans Table
CREATE TABLE saas_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  saas_id UUID REFERENCES saas_products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price_brl NUMERIC(10, 2),
  billing TEXT CHECK (billing IN ('monthly', 'yearly', 'one-time', 'free')),
  features TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Reviews Table
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  saas_id UUID REFERENCES saas_products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  stars INTEGER CHECK (stars >= 1 AND stars <= 5),
  title TEXT,
  body TEXT NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. User Stacks Table
CREATE TABLE user_stacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  tools UUID[] DEFAULT '{}', -- references saas_products(id)
  shared BOOLEAN DEFAULT FALSE,
  copies_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Community Threads Table
CREATE TABLE community_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  body TEXT,
  cat TEXT NOT NULL,
  votes INTEGER DEFAULT 0,
  pinned BOOLEAN DEFAULT FALSE,
  official BOOLEAN DEFAULT FALSE,
  saas_ref UUID REFERENCES saas_products(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Community Replies Table
CREATE TABLE community_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID REFERENCES community_threads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  body TEXT NOT NULL,
  votes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. AI Agents Table
CREATE TABLE ai_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  tag TEXT NOT NULL,
  author TEXT NOT NULL,
  price TEXT NOT NULL,
  installs TEXT,
  stars NUMERIC(3, 1) DEFAULT 0.0,
  badge TEXT,
  cat TEXT NOT NULL,
  emoji_icon TEXT,
  col TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. SaaS Analytics Table
CREATE TABLE saas_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  saas_id UUID REFERENCES saas_products(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  leads INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER set_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER set_saas_products_updated_at BEFORE UPDATE ON saas_products FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER set_user_stacks_updated_at BEFORE UPDATE ON user_stacks FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER set_community_threads_updated_at BEFORE UPDATE ON community_threads FOR EACH ROW EXECUTE FUNCTION set_updated_at();
