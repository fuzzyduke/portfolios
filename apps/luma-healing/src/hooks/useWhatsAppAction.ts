import { useState } from 'react';
import { CONTACT_CONFIG } from '../config/contact';
import { getWhatsAppLink } from '../utils/whatsapp';
import type { EnquiryContext } from '../utils/whatsapp';

export const useWhatsAppAction = () => {
  const [modalContext, setModalContext] = useState<EnquiryContext | null>(null);

  const triggerWhatsApp = (context: EnquiryContext = 'general') => {
    if (CONTACT_CONFIG.isDemoNumber) {
      // In demo mode, ALWAYS open the informational modal; never navigate externally
      setModalContext(context);
    } else {
      const link = getWhatsAppLink(context);
      if (link) {
        window.open(link, '_blank');
      }
    }
  };

  const closeModal = () => setModalContext(null);

  return {
    triggerWhatsApp,
    modalContext,
    closeModal,
  };
};
