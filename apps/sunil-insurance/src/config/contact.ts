/**
 * Contact & Regulatory Configuration for Sunil Insurance Microsite
 * 
 * CENTRALIZED CONTACT CONFIGURATION:
 * All contact numbers, email, location, and advisor details are stored here.
 * For the prototype, we use a safe non-contact placeholder for WhatsApp/Phone
 * to prevent messaging unrelated real numbers.
 */

export interface ContactConfig {
  advisorName: string;
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
  advisorName: "Sunil",
  tagline: "Insurance made simpler.",
  subTagline: "Health & Motor Insurance for individuals, families and businesses.",
  whatsappNumber: "910000000000", // Safe demo placeholder
  displayPhone: "+91 (Sunil's Mobile)",
  email: "sunil@example.com",
  location: "India",
  isDemoNumber: true, // Indicates prototype mode
  disclaimer: "Information displayed on this prototype is illustrative. Actual insurance products, premiums, eligibility, benefits, exclusions and terms depend on the relevant insurer and policy documentation.",
};
