import { CONTACT_CONFIG } from '../config/contact';

export type EnquiryContext = 
  | 'general'
  | 'health_individual'
  | 'health_senior'
  | 'health_corporate'
  | 'motor_comprehensive'
  | 'motor_third_party'
  | 'motor_fleet'
  | 'business_general';

const CONTEXT_MESSAGES: Record<EnquiryContext, string> = {
  general: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss insurance.`,
  health_individual: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Individual & Family Health Insurance.`,
  health_senior: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Senior Citizen Health Insurance.`,
  health_corporate: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Corporate Group Health Insurance for my team.`,
  motor_comprehensive: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Comprehensive Motor Insurance.`,
  motor_third_party: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Third-Party Motor Insurance.`,
  motor_fleet: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss Commercial & Fleet Vehicle Insurance.`,
  business_general: `Hi ${CONTACT_CONFIG.advisorName}, I'd like to discuss insurance solutions for my business.`,
};

/**
 * Builds a direct WhatsApp link with a custom contextual message.
 */
export function getWhatsAppLink(context: EnquiryContext = 'general', customMsg?: string): string {
  const message = customMsg || CONTEXT_MESSAGES[context] || CONTEXT_MESSAGES.general;
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMsg}`;
}
