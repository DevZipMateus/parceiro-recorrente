-- Create table for chart annotations
CREATE TABLE public.chart_annotations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  date DATE NOT NULL,
  note TEXT NOT NULL,
  user_id UUID NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.chart_annotations ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Authenticated users can view annotations" 
ON public.chart_annotations 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Authenticated users can create annotations" 
ON public.chart_annotations 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated'::text AND auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own annotations" 
ON public.chart_annotations 
FOR UPDATE 
USING (auth.role() = 'authenticated'::text AND auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their own annotations" 
ON public.chart_annotations 
FOR DELETE 
USING (auth.role() = 'authenticated'::text AND auth.uid() = user_id);

-- Create index for better query performance
CREATE INDEX idx_chart_annotations_date ON public.chart_annotations(date);
CREATE INDEX idx_chart_annotations_user_id ON public.chart_annotations(user_id);