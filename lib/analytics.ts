/**
 * Google Analytics Utility Functions
 * Provides type-safe event tracking and conversion tracking
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Event Categories
export const EventCategory = {
  ENGAGEMENT: "engagement",
  CONTACT: "contact",
  NAVIGATION: "navigation",
  CONVERSION: "conversion",
  DOWNLOAD: "download",
  VIDEO: "video",
} as const;

// Event Names
export const EventName = {
  // Contact Events
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  CONTACT_FORM_START: "contact_form_start",
  EMAIL_CLICK: "email_click",
  PHONE_CLICK: "phone_click",
  
  // Navigation Events
  CTA_CLICK: "cta_click",
  SERVICE_CLICK: "service_click",
  SOCIAL_CLICK: "social_click",
  
  // Engagement Events
  VIDEO_PLAY: "video_play",
  VIDEO_COMPLETE: "video_complete",
  SCROLL_DEPTH: "scroll_depth",
  
  // Conversion Events
  GET_STARTED: "get_started",
  REQUEST_DEMO: "request_demo",
  VIEW_SERVICES: "view_services",
} as const;

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: eventParams?.category,
      event_label: eventParams?.label,
      value: eventParams?.value,
      ...eventParams,
    });
    
    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Analytics Event:", eventName, eventParams);
    }
  }
};

/**
 * Track page view (automatic in Next.js, but useful for custom tracking)
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-X3XE5PWWHZ", {
      page_path: url,
      page_title: title,
    });
  }
};

/**
 * Track contact form submission (conversion)
 */
export const trackContactFormSubmit = (formType: string) => {
  trackEvent(EventName.CONTACT_FORM_SUBMIT, {
    category: EventCategory.CONVERSION,
    label: formType,
    value: 1,
  });
};

/**
 * Track contact form start (user begins filling)
 */
export const trackContactFormStart = () => {
  trackEvent(EventName.CONTACT_FORM_START, {
    category: EventCategory.ENGAGEMENT,
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (buttonText: string, location: string) => {
  trackEvent(EventName.CTA_CLICK, {
    category: EventCategory.NAVIGATION,
    label: buttonText,
    button_location: location,
  });
};

/**
 * Track service card clicks
 */
export const trackServiceClick = (serviceName: string) => {
  trackEvent(EventName.SERVICE_CLICK, {
    category: EventCategory.NAVIGATION,
    label: serviceName,
  });
};

/**
 * Track email clicks
 */
export const trackEmailClick = () => {
  trackEvent(EventName.EMAIL_CLICK, {
    category: EventCategory.CONTACT,
    label: "admin@worksthal.com",
  });
};

/**
 * Track phone clicks
 */
export const trackPhoneClick = () => {
  trackEvent(EventName.PHONE_CLICK, {
    category: EventCategory.CONTACT,
    label: "+91 6309821905",
  });
};

/**
 * Track video interactions
 */
export const trackVideoPlay = (videoName: string) => {
  trackEvent(EventName.VIDEO_PLAY, {
    category: EventCategory.VIDEO,
    label: videoName,
  });
};

export const trackVideoComplete = (videoName: string) => {
  trackEvent(EventName.VIDEO_COMPLETE, {
    category: EventCategory.VIDEO,
    label: videoName,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent(EventName.SCROLL_DEPTH, {
    category: EventCategory.ENGAGEMENT,
    label: `${percentage}%`,
    value: percentage,
  });
};

/**
 * Track social media clicks
 */
export const trackSocialClick = (platform: string) => {
  trackEvent(EventName.SOCIAL_CLICK, {
    category: EventCategory.ENGAGEMENT,
    label: platform,
  });
};

/**
 * Track conversion events (high-value actions)
 */
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent(conversionType, {
    category: EventCategory.CONVERSION,
    value: value || 1,
  });
};
