import { useState } from 'react';
import { CONTACT_CONFIG } from '../config/contact';
import { getWhatsAppLink } from '../utils/whatsapp';
import type { EnquiryContext } from '../utils/whatsapp';

export const useWhatsAppAction = () => {
  const [modalContext, setModalContext] = useState<EnquiryContext | null>(null);

  const triggerWhatsApp = (context: EnquiryContext = 'general') => {
    if (CONTACT_CONFIG.isDemoNumber) {
      setModalContext(context);
    } else {
      window.open(getWhatsAppLink(context), '_blank');
    }
  };

  const closeModal = () => setModalContext(null);

  return {
    triggerWhatsApp,
    modalContext,
    closeModal,
  };
};
