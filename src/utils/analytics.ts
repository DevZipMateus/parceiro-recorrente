import { supabase } from '@/integrations/supabase/client';

// Generate or get session ID from localStorage
export const getSessionId = (): string => {
  let sessionId = localStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Extract UTM parameters from URL
export const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
  };
};

// Get referrer host
export const getReferrerHost = (): string | null => {
  try {
    if (document.referrer) {
      return new URL(document.referrer).hostname;
    }
  } catch (e) {
    console.warn('Error parsing referrer:', e);
  }
  return null;
};

// Track a visit
export const trackVisit = async () => {
  try {
    const sessionId = getSessionId();
    const utmParams = getUtmParams();
    const referrerHost = getReferrerHost();

    await supabase.from('visits').insert({
      session_id: sessionId,
      path: window.location.pathname,
      ...utmParams,
      referrer_host: referrerHost,
      user_agent: navigator.userAgent,
    });
  } catch (error) {
    console.warn('Error tracking visit:', error);
  }
};

// Track a lead
export const trackLead = async (leadData: {
  name: string;
  email: string;
  phone?: string;
  profession?: string;
  sales_experience?: string;
  investment_range?: string;
}) => {
  try {
    const sessionId = getSessionId();
    const utmParams = getUtmParams();
    const referrerHost = getReferrerHost();

    await supabase.from('leads').insert({
      ...leadData,
      session_id: sessionId,
      ...utmParams,
      referrer_host: referrerHost,
    });
  } catch (error) {
    console.warn('Error tracking lead:', error);
  }
};