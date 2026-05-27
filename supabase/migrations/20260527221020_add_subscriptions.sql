-- Migration to add subscriptions, customers and credits for monetization

-- 1. Create a table for Stripe Customers
CREATE TABLE IF NOT EXISTS public.customers (
  id uuid references auth.users not null primary key,
  stripe_customer_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own customer record" 
ON public.customers FOR SELECT 
USING (auth.uid() = id);

-- 2. Create a table for Subscriptions
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id text primary key,
  user_id uuid references auth.users not null,
  status text not null,
  price_id text,
  quantity integer,
  cancel_at_period_end boolean default false,
  created timestamp with time zone not null,
  current_period_start timestamp with time zone not null,
  current_period_end timestamp with time zone not null,
  ended_at timestamp with time zone,
  cancel_at timestamp with time zone,
  canceled_at timestamp with time zone,
  trial_start timestamp with time zone,
  trial_end timestamp with time zone
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own subscriptions" 
ON public.subscriptions FOR SELECT 
USING (auth.uid() = user_id);

-- 3. Create a table for Credits (for Freemium AI Consultant usage)
CREATE TABLE IF NOT EXISTS public.credits (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  consultations_used integer default 0,
  last_reset_date timestamp with time zone default timezone('utc'::text, now()) not null
);

ALTER TABLE public.credits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own credits" 
ON public.credits FOR SELECT 
USING (auth.uid() = user_id);

-- Provide a function to handle new user signups and give them a credits record
CREATE OR REPLACE FUNCTION public.handle_new_user_credits() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.credits (user_id, consultations_used)
  VALUES (new.id, 0);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create credits tracking for new users
DROP TRIGGER IF EXISTS on_auth_user_created_credits ON auth.users;
CREATE TRIGGER on_auth_user_created_credits
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user_credits();
