import React from 'react';
import { MessageCircle, Mail, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import type { EnquiryContext } from '../utils/whatsapp';

interface ContactSectionProps {
  onConnect: (ctx: EnquiryContext) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onConnect }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-luma-cream-100 border-t border-luma-lavender-200/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-luma-lavender-200/80 shadow-2xs text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-full bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mx-auto mb-5 border border-luma-lavender-200">
            <Sparkles className="w-6 h-6 text-luma-gold-500" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-luma-lavender-900 mb-3">
            Begin Your Conversation
          </h2>
          
          <p className="text-luma-lavender-800 text-sm sm:text-base mb-8 max-w-md mx-auto font-normal">
            Whether you have questions about Reiki or want to schedule a session, reach out directly to Reshma over WhatsApp.
          </p>

          {/* Details Grid */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-luma-cream-50 border border-luma-lavender-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-luma-sage-700 mb-1 uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5 text-luma-gold-500" />
                <span>WhatsApp</span>
              </div>
              <p className="text-sm font-bold text-luma-lavender-900">{CONTACT_CONFIG.displayPhone}</p>
            </div>

            <div className="p-4 rounded-2xl bg-luma-cream-50 border border-luma-lavender-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-luma-sage-700 mb-1 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5 text-luma-gold-500" />
                <span>Email</span>
              </div>
              <p className="text-sm font-bold text-luma-lavender-900 break-all">{CONTACT_CONFIG.email}</p>
            </div>

            <div className="p-4 rounded-2xl bg-luma-cream-50 border border-luma-lavender-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-luma-sage-700 mb-1 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-luma-gold-500" />
                <span>Practice</span>
              </div>
              <p className="text-sm font-bold text-luma-lavender-900">{CONTACT_CONFIG.location}</p>
            </div>
          </div>

          <button
            onClick={() => onConnect('general')}
            className="inline-flex items-center justify-center gap-2.5 bg-luma-lavender-800 hover:bg-luma-lavender-900 text-white font-semibold text-base px-9 py-4 rounded-full shadow-sm hover:shadow transition-transform hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-luma-gold-400" />
            <span>Message Reshma on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
