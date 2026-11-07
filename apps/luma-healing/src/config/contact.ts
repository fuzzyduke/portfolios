/**
 * Contact Configuration for Luma Healing Space (Reshma)
 * 
 * CENTRALIZED CONTACT CONFIGURATION:
 * Safe demo-contact placeholder mode is enabled until Reshma's verified details
 * are confirmed. All pricing, qualifications, and live booking channels remain
 * pending client review.
 */

export interface ContactConfig {
  practitionerName: string;
  brandName: string;
  tagline: string;
  subTagline: string;
  heroHeadline: string;
  heroLead: string;
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
  tagline: "A space to pause, listen and reconnect.",
  subTagline: "A journey back to yourself.",
  heroHeadline: "A journey back to yourself.",
  heroLead: "Somewhere between the roles you play and everything the world asks of you, it's easy to lose touch with your own voice. What if you could begin by simply listening?",
  whatsappNumber: "971000000000", // Safe demo-contact mode
  displayPhone: "Available via WhatsApp",
  email: "reshma@lumahealing.space",
  location: "Restorative Practice",
  isDemoNumber: true, // Enables prototype interactive modal
  disclaimer: "Luma Healing Space offers complementary wellbeing practices. Sessions are not a substitute for medical diagnosis, psychiatric care, or professional healthcare. Individual experiences may vary. Brand identity, services, credentials, and pricing are pending Reshma's review.",
};
