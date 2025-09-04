-- Create tables for analytics tracking
CREATE TABLE public.visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  session_id TEXT NOT NULL,
  path TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  referrer_host TEXT,
  user_agent TEXT
);

CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  profession TEXT,
  sales_experience TEXT,
  investment_range TEXT,
  session_id TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  referrer_host TEXT
);

-- Enable Row Level Security
ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policies for visits table
CREATE POLICY "Anyone can insert visits" 
ON public.visits 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view visits" 
ON public.visits 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create policies for leads table
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_visits_created_at ON public.visits(created_at);
CREATE INDEX idx_visits_utm_source ON public.visits(utm_source);
CREATE INDEX idx_visits_session_id ON public.visits(session_id);
CREATE INDEX idx_leads_created_at ON public.leads(created_at);
CREATE INDEX idx_leads_utm_source ON public.leads(utm_source);
CREATE INDEX idx_leads_session_id ON public.leads(session_id);