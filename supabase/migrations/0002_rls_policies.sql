-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE saas_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE saas_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE saas_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE saas_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE saas_analytics ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can view their own profile, and public profiles if needed (for now, everyone can view, but only owner can edit)
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

-- Categories: Public read-only
CREATE POLICY "Categories are viewable by everyone." ON categories FOR SELECT USING (true);
CREATE POLICY "Only admins can insert categories." ON categories FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Only admins can update categories." ON categories FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- SaaS Products: Public can read published products. Advertisers can read/write their own.
CREATE POLICY "Published SaaS products are viewable by everyone." ON saas_products FOR SELECT USING (is_published = true);
CREATE POLICY "Owners can view their own SaaS products." ON saas_products FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "Owners can insert SaaS products." ON saas_products FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Owners can update own SaaS products." ON saas_products FOR UPDATE USING (auth.uid() = owner_id);
CREATE POLICY "Owners can delete own SaaS products." ON saas_products FOR DELETE USING (auth.uid() = owner_id);

-- SaaS Features: Viewable by everyone if SaaS is published. Owner can edit.
CREATE POLICY "Features viewable by everyone." ON saas_features FOR SELECT USING (
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_features.saas_id AND is_published = true) OR
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_features.saas_id AND owner_id = auth.uid())
);
CREATE POLICY "Owners can edit features." ON saas_features FOR ALL USING (
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_features.saas_id AND owner_id = auth.uid())
);

-- SaaS Integrations: Viewable by everyone if SaaS is published. Owner can edit.
CREATE POLICY "Integrations viewable by everyone." ON saas_integrations FOR SELECT USING (
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_integrations.saas_id AND is_published = true) OR
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_integrations.saas_id AND owner_id = auth.uid())
);
CREATE POLICY "Owners can edit integrations." ON saas_integrations FOR ALL USING (
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_integrations.saas_id AND owner_id = auth.uid())
);

-- SaaS Plans: Viewable by everyone if SaaS is published. Owner can edit.
CREATE POLICY "Plans viewable by everyone." ON saas_plans FOR SELECT USING (
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_plans.saas_id AND is_published = true) OR
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_plans.saas_id AND owner_id = auth.uid())
);
CREATE POLICY "Owners can edit plans." ON saas_plans FOR ALL USING (
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_plans.saas_id AND owner_id = auth.uid())
);

-- Reviews: Viewable by everyone. Authenticated users can insert. Owners can update/delete own reviews.
CREATE POLICY "Reviews are viewable by everyone." ON reviews FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create reviews." ON reviews FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND auth.uid() = user_id);
CREATE POLICY "Users can update own reviews." ON reviews FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own reviews." ON reviews FOR DELETE USING (auth.uid() = user_id);

-- User Stacks: Viewable if shared=true. User can CRUD their own.
CREATE POLICY "Shared stacks are viewable by everyone." ON user_stacks FOR SELECT USING (shared = true);
CREATE POLICY "Users can view own stacks." ON user_stacks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own stacks." ON user_stacks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own stacks." ON user_stacks FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own stacks." ON user_stacks FOR DELETE USING (auth.uid() = user_id);

-- Community Threads: Public view. Auth insert. Owner update/delete.
CREATE POLICY "Threads are viewable by everyone." ON community_threads FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create threads." ON community_threads FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND auth.uid() = user_id);
CREATE POLICY "Users can update own threads." ON community_threads FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own threads." ON community_threads FOR DELETE USING (auth.uid() = user_id);

-- Community Replies: Public view. Auth insert. Owner update/delete.
CREATE POLICY "Replies are viewable by everyone." ON community_replies FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create replies." ON community_replies FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND auth.uid() = user_id);
CREATE POLICY "Users can update own replies." ON community_replies FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own replies." ON community_replies FOR DELETE USING (auth.uid() = user_id);

-- AI Agents: Public view.
CREATE POLICY "Agents are viewable by everyone." ON ai_agents FOR SELECT USING (true);
CREATE POLICY "Only admins can edit agents." ON ai_agents FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- SaaS Analytics: Only viewable by SaaS owner.
CREATE POLICY "Analytics viewable by owner." ON saas_analytics FOR SELECT USING (
  EXISTS (SELECT 1 FROM saas_products WHERE id = saas_analytics.saas_id AND owner_id = auth.uid())
);
-- Note: Insert/Update might be handled by service role (admin) securely bypassing RLS.
