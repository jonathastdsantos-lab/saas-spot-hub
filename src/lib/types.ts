export interface SaasProduct {
  id: string;
  slug: string;
  name: string;
  tag: string;
  desc: string;
  cat: string;
  price: string;
  score: number;
  stars: number;
  reviews: number;
  uptime?: string;
  integrations?: number;
  tags: string[];
  founded_year?: number;
  hq?: string;
  employees_range?: string;
  logo_url?: string;
  website_url?: string;
  trial_days?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  count: number;
}
