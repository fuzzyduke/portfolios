/**
 * Contact & Regulatory Configuration for Sunil Insurance Microsite
 * 
 * PLACEHOLDER / EDITABLE CONFIGURATION:
 * Replace these initial placeholders with Sunil's actual verified contact information.
 */

export interface ContactConfig {
  advisorName: string;
  tagline: string;
  subTagline: string;
  whatsappNumber: string; // E.164 format without '+' e.g. '919876543210'
  displayPhone: string;
  email: string;
  location: string;
  disclaimer: string;
}

export const CONTACT_CONFIG: ContactConfig = {
  advisorName: "Sunil",
  tagline: "Insurance made simpler.",
  subTagline: "Personal insurance guidance for individuals, families, and businesses.",
  whatsappNumber: "910000000000", // PLACEHOLDER — awaiting Sunil's verified WhatsApp number
  displayPhone: "+91 00000 00000", // PLACEHOLDER — awaiting Sunil's verified phone number
  email: "sunil@example.com", // PLACEHOLDER — awaiting Sunil's verified email
  location: "India", // PLACEHOLDER — awaiting Sunil's operating city/region
  disclaimer: "Disclaimer: Product terms, eligibility criteria, waiting periods, and coverage details depend on the relevant insurer and policy documentation. All options should be reviewed and verified prior to purchase. Information presented on this site is for guidance and educational purposes.",
};
