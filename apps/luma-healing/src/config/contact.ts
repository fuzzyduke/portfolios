/**
 * Contact Configuration for Luma Healing Space (Reshma)
 * 
 * CENTRALIZED CONTACT CONFIGURATION:
 * All contact numbers, email, location, and practitioner details are stored here.
 * Safe demo-contact placeholder mode is enabled until Reshma's verified WhatsApp
 * number is provided.
 */

export interface ContactConfig {
  practitionerName: string;
  brandName: string;
  tagline: string;
  subTagline: string;
  whatsappNumber: string; // E.164 format without '+'
  displayPhone: string;
  email: string;
  location: string;
  disclaimer: string;
  isDemoNumber: boolean;
}

export const CONTACT_CONFIG: ContactConfig = {
  practitionerName: "Reshma",
  brandName: "Luma Healing Space",
  tagline: "A gentle space for Reiki, energy healing and restorative wellbeing.",
  subTagline: "Slow down. Reconnect. Restore.",
  whatsappNumber: "971000000000", // Safe demo-contact mode
  displayPhone: "Available via WhatsApp",
  email: "reshma@lumahealing.space",
  location: "Restorative Practice",
  isDemoNumber: true, // Enables prototype interactive modal
  disclaimer: "Luma Healing Space offers complementary wellbeing practices. Sessions are not a substitute for medical diagnosis, treatment or professional healthcare. Individual experiences may vary.",
};
