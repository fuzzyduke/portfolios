import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { getWhatsAppLink } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mx-auto mb-4 border border-brand-100">
            <MessageSquare className="w-7 h-7 text-whatsapp-600" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Get in Touch with Sunil
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Ready to explore your insurance options or need assistance with your existing policy? Reach out directly over WhatsApp or email.
          </p>

          {/* Contact Details Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>Phone / WhatsApp</span>
              </div>
              <p className="text-sm font-bold text-slate-800 break-words">{CONTACT_CONFIG.displayPhone}</p>
              <span className="inline-block mt-1 text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-medium">
                Editable Placeholder
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <Mail className="w-3.5 h-3.5 text-brand-600" />
                <span>Email Address</span>
              </div>
              <p className="text-sm font-bold text-slate-800 break-all">{CONTACT_CONFIG.email}</p>
              <span className="inline-block mt-1 text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-medium">
                Editable Placeholder
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Location</span>
              </div>
              <p className="text-sm font-bold text-slate-800">{CONTACT_CONFIG.location}</p>
              <span className="inline-block mt-1 text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-medium">
                Editable Placeholder
              </span>
            </div>
          </div>

          <a
            href={getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
