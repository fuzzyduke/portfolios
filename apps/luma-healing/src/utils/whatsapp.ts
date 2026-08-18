import { CONTACT_CONFIG } from '../config/contact';

export type EnquiryContext = 
  | 'general'
  | 'reiki_session'
  | 'distance_reiki'
  | 'energy_healing'
  | 'guided_relaxation'
  | 'find_session';

const CONTEXT_MESSAGES: Record<EnquiryContext, string> = {
  general: `Hi ${CONTACT_CONFIG.practitionerName}, I came across ${CONTACT_CONFIG.brandName} and would like to know more.`,
  reiki_session: `Hi ${CONTACT_CONFIG.practitionerName}, I'd like to know more about your Reiki sessions.`,
  distance_reiki: `Hi ${CONTACT_CONFIG.practitionerName}, I'm interested in a Distance Reiki session.`,
  energy_healing: `Hi ${CONTACT_CONFIG.practitionerName}, I'd like to understand more about your energy healing sessions.`,
  guided_relaxation: `Hi ${CONTACT_CONFIG.practitionerName}, I'm interested in a guided relaxation or meditation session.`,
  find_session: `Hi ${CONTACT_CONFIG.practitionerName}, I'd like to discuss which session might be right for me.`,
};

/**
 * Gets the exact text message for a given context.
 */
export function getWhatsAppMessage(context: EnquiryContext = 'general'): string {
  return CONTEXT_MESSAGES[context] || CONTEXT_MESSAGES.general;
}

/**
 * Builds a direct WhatsApp deep link with contextual message.
 */
export function getWhatsAppLink(context: EnquiryContext = 'general', customMsg?: string): string {
  const message = customMsg || getWhatsAppMessage(context);
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMsg}`;
}
