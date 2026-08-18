import { CONTACT_CONFIG } from '../config/contact';

export type EnquiryContext = 
  | 'general'
  | 'health_individual'
  | 'health_family'
  | 'health_senior'
  | 'health_corporate'
  | 'motor_car'
  | 'motor_third_party'
  | 'motor_two_wheeler'
  | 'motor_fleet'
  | 'individual_general'
  | 'business_general';

const CONTEXT_MESSAGES: Record<EnquiryContext, string> = {
  general: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss my insurance requirements.`,
  health_individual: `Hi ${CONTACT_CONFIG.advisorName}, I'm interested in Individual Health Insurance. I'd like to know what options are available.`,
  health_family: `Hi ${CONTACT_CONFIG.advisorName}, I'm interested in Family Health Insurance. I'd like to know what options are available.`,
  health_senior: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss health insurance options for a senior family member.`,
  health_corporate: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss health insurance for my company/employees.`,
  motor_car: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Comprehensive Car Insurance.`,
  motor_third_party: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Third-Party Motor Insurance.`,
  motor_two_wheeler: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Two-Wheeler Insurance.`,
  motor_fleet: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Commercial/Fleet Motor Insurance for my business.`,
  individual_general: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to explore personal insurance options for myself/my family.`,
  business_general: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss business and employee insurance options.`,
};

/**
 * Gets the message text for a given context.
 */
export function getWhatsAppMessage(context: EnquiryContext = 'general'): string {
  return CONTEXT_MESSAGES[context] || CONTEXT_MESSAGES.general;
}

/**
 * Builds a direct WhatsApp link with a custom contextual message.
 */
export function getWhatsAppLink(context: EnquiryContext = 'general', customMsg?: string): string {
  const message = customMsg || getWhatsAppMessage(context);
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMsg}`;
}
