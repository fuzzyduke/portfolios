/**
 * Contact & Regulatory Configuration for Sunil Insurance Microsite
 * 
 * CENTRALIZED CONTACT CONFIGURATION:
 * All contact numbers, email, location, and advisor details are stored here.
 * For the prototype, we use a safe non-contact placeholder for WhatsApp/Phone
 * with the UAE country code (+971).
 */

export interface ContactConfig {
  advisorName: string;
  tagline: string;
  subTagline: string;
  whatsappNumber: string; // E.164 format without '+' (UAE country code 971)
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
  whatsappNumber: "971000000000", // UAE country code (971) placeholder
  displayPhone: "+971 (Sunil's Mobile)", // UAE country code format
  email: "sunil@example.com",
  location: "United Arab Emirates (UAE)", // Updated location
  isDemoNumber: true, // Indicates prototype mode
  disclaimer: "Information displayed on this prototype is illustrative. Actual insurance products, premiums, eligibility, benefits, exclusions and terms depend on the relevant insurer and policy documentation in the UAE.",
};
