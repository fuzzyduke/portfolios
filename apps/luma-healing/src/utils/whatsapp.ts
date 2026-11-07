import { CONTACT_CONFIG } from '../config/contact';

export type EnquiryContext = 
  | 'general'
  | 'reiki'
  | 'akashic'
  | 'first_step'
  | 'reflection'
  | 'dialog';

const CONTEXT_MESSAGES: Record<EnquiryContext, string> = {
  general: `Hi ${CONTACT_CONFIG.practitionerName}, I came across ${CONTACT_CONFIG.brandName} and would like to learn more about your practice.`,
  reiki: `Hi ${CONTACT_CONFIG.practitionerName}, I'd like to ask about your Reiki sessions and approach.`,
  akashic: `Hi ${CONTACT_CONFIG.practitionerName}, I'm curious about your Akashic Records readings and what an exploration involves.`,
  first_step: `Hi ${CONTACT_CONFIG.practitionerName}, I'm considering a first step with you and would love to ask a quick question.`,
  reflection: `Hi ${CONTACT_CONFIG.practitionerName}, your reflections resonated with me. I'd love to connect when you have time.`,
  dialog: `Hi ${CONTACT_CONFIG.practitionerName}, I'd like to start a gentle conversation about your practice.`,
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
