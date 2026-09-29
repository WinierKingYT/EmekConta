/**
 * Utility functions for Emek Conta web application
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}
