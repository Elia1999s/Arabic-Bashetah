create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key,
  full_name text not null,
  email text not null unique,
  role text not null default 'student' check (role in ('student','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  billing_type text not null check (billing_type in ('one_time','commitment')),
  price_ils integer not null,
  commitment_months integer,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.modules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.modules(id) on delete cascade,
  title text not null,
  slug text not null unique,
  description text,
  bunny_video_guid text,
  duration_seconds integer,
  is_preview boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid not null references public.products(id),
  stripe_session_id text unique,
  status text not null default 'pending' check (status in ('pending','paid','failed','refunded')),
  amount_ils integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid not null references public.products(id),
  stripe_subscription_id text unique,
  status text not null default 'active' check (status in ('active','canceled','past_due','ended')),
  started_at timestamptz not null default now(),
  commitment_ends_at timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed boolean not null default false,
  progress_percent integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (profile_id, lesson_id)
);

insert into public.products (slug, name, billing_type, price_ils, commitment_months)
values
  ('premium-full', 'מסלול פרימיום מלא', 'one_time', 279900, null),
  ('monthly-commitment', 'תוכנית תשלומים חודשית', 'commitment', 49900, 6)
on conflict (slug) do nothing;
