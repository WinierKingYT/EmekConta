// Analytics helper utilities for Google Analytics 4 (GA4) & Microsoft Clarity

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "set" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
    clarity?: {
      (command: "set", key: string, value: string | string[]): void;
      (command: "event", eventName: string): void;
      (command: "identify", customId: string, customSessionId?: string, customPageId?: string, friendlyName?: string): void;
      (command: "consent", consent?: boolean): void;
      (...args: unknown[]): void;
    };
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

/**
 * Safely dispatches an event to Google Analytics 4
 */
export function trackGAEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics GA4 Event]: ${eventName}`, params);
  }
}

/**
 * Safely dispatches a custom event to Microsoft Clarity
 */
export function trackClarityEvent(eventName: string) {
  if (typeof window === "undefined") return;

  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  } else if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Clarity Event]: ${eventName}`);
  }
}

/**
 * Sets a custom tag/dimension in Microsoft Clarity
 */
export function setClarityTag(key: string, value: string | string[]) {
  if (typeof window === "undefined") return;

  if (typeof window.clarity === "function") {
    window.clarity("set", key, value);
  }
}

export type RfqFormType =
  | "rfq_detailed"
  | "rfq_quick"
  | "sample_request"
  | "rfq_cart"
  | "distributor_application";

interface RfqTrackPayload {
  formType: RfqFormType;
  referenceCode: string;
  category?: string;
  productName?: string;
  itemCount?: number;
  companyName?: string;
}

/**
 * Standard B2B RFQ Lead Conversion Tracking
 */
export function trackRfqSubmission({
  formType,
  referenceCode,
  category,
  productName,
  itemCount,
  companyName,
}: RfqTrackPayload) {
  // 1. GA4 Conversion Event: generate_lead
  trackGAEvent("generate_lead", {
    currency: "TRY",
    value: 1.0,
    lead_type: formType,
    lead_id: referenceCode,
    category: category || "general",
    product_name: productName,
    item_count: itemCount || 1,
    company_name: companyName ? "[provided]" : "[none]",
  });

  // 2. Microsoft Clarity Tagging & Custom Event
  setClarityTag("lead_type", formType);
  setClarityTag("lead_ref", referenceCode);
  trackClarityEvent("rfq_submitted");
}

/**
 * Tracks WhatsApp link click across the website
 */
export function trackWhatsAppClick(source: string, referenceCode?: string) {
  trackGAEvent("contact", {
    method: "WhatsApp",
    source,
    reference_code: referenceCode || "none",
  });
  setClarityTag("contact_channel", "whatsapp");
  trackClarityEvent("whatsapp_click");
}

/**
 * Tracks direct telephone call click
 */
export function trackPhoneClick(source: string) {
  trackGAEvent("contact", {
    method: "Phone",
    source,
  });
  setClarityTag("contact_channel", "phone");
  trackClarityEvent("phone_call_click");
}

/**
 * Tracks technical datasheet print / download view
 */
export function trackDatasheetPrint(productSlug: string, productName: string) {
  trackGAEvent("view_datasheet", {
    product_slug: productSlug,
    product_name: productName,
  });
  setClarityTag("last_datasheet", productSlug);
  trackClarityEvent("datasheet_printed");
}
