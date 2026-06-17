import { useEffect } from 'react';

interface AnalyticsConfig {
  // Google Analytics
  googleAnalyticsId?: string;
  
  // Plausible Analytics
  plausibleDomain?: string;
  
  // Simple Analytics
  simpleAnalytics?: boolean;
}

// Configuration - Replace these with your actual IDs
const config: AnalyticsConfig = {
  googleAnalyticsId: undefined, // e.g., 'G-XXXXXXXXXX'
  plausibleDomain: undefined, // e.g., 'yourdomain.com'
  simpleAnalytics: false,
};

export function Analytics() {
  useEffect(() => {
    // Initialize analytics scripts on mount
    initializeAnalytics();
  }, []);

  return null;
}

// Helper function to initialize analytics scripts
export function initializeAnalytics() {
  // Prevent duplicate initialization
  if (typeof window === 'undefined') return;
  
  // Google Analytics
  if (config.googleAnalyticsId && !document.querySelector(`script[src*="googletagmanager"]`)) {
    // Add GA script to head
    const gaScript1 = document.createElement('script');
    gaScript1.async = true;
    gaScript1.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`;
    document.head.appendChild(gaScript1);

    const gaScript2 = document.createElement('script');
    gaScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.googleAnalyticsId}', {
        page_path: window.location.pathname
      });
    `;
    document.head.appendChild(gaScript2);
  }

  // Plausible Analytics
  if (config.plausibleDomain && !document.querySelector(`script[src*="plausible"]`)) {
    const plausibleScript = document.createElement('script');
    plausibleScript.defer = true;
    plausibleScript.setAttribute('data-domain', config.plausibleDomain);
    plausibleScript.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(plausibleScript);
  }

  // Simple Analytics
  if (config.simpleAnalytics && !document.querySelector(`script[src*="simpleanalytics"]`)) {
    const simpleScript = document.createElement('script');
    simpleScript.async = true;
    simpleScript.defer = true;
    simpleScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
    document.head.appendChild(simpleScript);
  }
}

// Instructions comment for configuration
/*
ANALYTICS SETUP INSTRUCTIONS:

1. GOOGLE ANALYTICS:
   - Go to https://analytics.google.com/
   - Create a new property (GA4)
   - Copy your Measurement ID (format: G-XXXXXXXXXX)
   - Set googleAnalyticsId: 'G-XXXXXXXXXX' in the config above

2. PLAUSIBLE ANALYTICS (Privacy-friendly alternative):
   - Go to https://plausible.io/
   - Sign up and add your website
   - Set plausibleDomain: 'yourdomain.com' in the config above
   - No cookies, GDPR compliant by default

3. SIMPLE ANALYTICS (Another privacy-friendly option):
   - Go to https://simpleanalytics.com/
   - Sign up and add your website
   - Set simpleAnalytics: true in the config above
   - No cookies, very lightweight

To enable analytics, edit /components/Analytics.tsx and update the config object
with your chosen analytics provider's ID/domain.

NOTE: All these analytics services automatically track page navigation in 
single-page applications (SPAs). You don't need to do anything extra!
*/
