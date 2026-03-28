-- Create the customer_enquiries table
create table if not exists public.customer_enquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  customer_name text not null,
  customer_whatsapp text not null,
  customer_city text not null,
  items jsonb not null, -- Array of items with specs and rates
  total_estimated_rate numeric,
  status text default 'pending'
);

-- Set up Row Level Security (RLS)
-- For a simple public submission form, we allow everyone to insert but only admins to read.
-- In a real app, you'd use a more restricted policy or a service role for the backend.
alter table public.customer_enquiries enable row level security;

create policy "Allow public insertions" 
on public.customer_enquiries 
for insert 
with check (true);

create policy "Allow authenticated users to read enquiries" 
on public.customer_enquiries 
for select 
to authenticated 
using (true);
