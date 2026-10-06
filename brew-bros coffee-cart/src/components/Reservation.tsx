import { useState } from "react";
import { BRAND_INFO } from "../data/brewBrosData";
import {
  MapPin,
  Clock,
  Sparkles,
  Navigation,
  Car,
  CheckCircle2,
  Send,
} from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    cups: "2",
    time: "6:30 PM",
    specialNote: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Brew Bros Quetta! My name is ${form.name || "Customer"}. I'd like to reserve/pre-order ${form.cups} cups for pickup around ${form.time}. Note: ${form.specialNote || "None"}`
  );

  return (
    <section id="location-section" className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border gold-border text-xs text-gold-light mb-4">
          <Sparkles size={13} className="text-gold" />
          <span className="font-semibold uppercase tracking-widest text-[11px]">
            Best & First Coffee Cart in Quetta
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream uppercase">
          VISIT & <span className="gold-gradient-text italic font-normal">PRE-ORDER</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-cream-muted leading-relaxed">
          Drive by our cart in Jinnah Town or send us your pre-order so your coffee is piping hot the moment you arrive.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Side: Cart Location Details & Schedule */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Main Location Glass Card */}
          <div className="p-8 rounded-3xl glass-panel border-2 gold-border shadow-2xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold-light text-[11px] font-bold uppercase tracking-wider">
                  Official Cart Spot
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream mt-3">
                  Opposite Jamia Masjid
                </h3>
                <p className="text-sm text-gold font-medium mt-1">
                  Jinnah Town, Quetta, Balochistan
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-gold/15 text-gold-light border gold-border">
                <MapPin size={28} />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-muted/90 mt-4 leading-relaxed">
              Park your car along the roadside or walk over after evening prayers.
              Our warm cart lights and outdoor seating are situated right opposite the iconic Jamia Masjid.
            </p>

            {/* Timings Strip */}
            <div className="mt-6 p-4 rounded-2xl bg-roast-900/90 border gold-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-gold" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-sand font-semibold">
                    Operating Hours
                  </p>
                  <p className="font-display text-lg font-bold text-cream">
                    {BRAND_INFO.timings}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
                Open Daily
              </span>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BRAND_INFO.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold text-roast-950 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-gold-light transition-colors"
              >
                <Navigation size={14} />
                <span>Open in Maps</span>
              </a>
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl glass-panel border gold-border text-gold-light font-bold text-xs uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                <InstagramIcon size={14} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Drive-by Convenience Pill */}
          <div className="p-6 rounded-2xl glass-panel border gold-border flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gold/10 text-gold-light shrink-0">
              <Car size={24} />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-cream">
                Drive-By Car Service
              </h4>
              <p className="text-xs text-cream-muted mt-0.5">
                Don't want to step out in the cold? Just slow down near our cart, flash your hazard lights, and our team will bring your order to your car window!
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Pre-Order / Table & Cup Reservation */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-3xl glass-panel border gold-border shadow-2xl relative">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream">
              Pre-Order for Swift Pickup
            </h3>
            <p className="text-xs sm:text-sm text-sand mt-1">
              Let the brothers know what time you are rolling by Jinnah Town.
            </p>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-display text-2xl font-bold text-cream">
                  Order Received, Bro!
                </h4>
                <p className="text-xs sm:text-sm text-cream-muted mt-2 max-w-sm">
                  We have noted your timing for {form.time} ({form.cups} cups). We look forward to serving you opposite Jamia Masjid!
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`https://wa.me/923337890123?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Confirm on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-full glass-panel border gold-border text-cream text-xs uppercase font-bold cursor-pointer"
                  >
                    New Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-sand mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asad Kakar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel border gold-border text-cream placeholder-sand/50 text-xs sm:text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-sand mb-1.5">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0333-XXXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel border gold-border text-cream placeholder-sand/50 text-xs sm:text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-sand mb-1.5">
                      Estimated Arrival Time
                    </label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel border gold-border text-cream text-xs sm:text-sm focus:outline-none focus:border-gold bg-roast-950"
                    >
                      <option value="5:45 PM">5:45 PM (Opening Brew)</option>
                      <option value="6:30 PM">6:30 PM (Maghrib Rush)</option>
                      <option value="7:30 PM">7:30 PM (Evening Chill)</option>
                      <option value="8:30 PM">8:30 PM (Isha Prime)</option>
                      <option value="9:30 PM">9:30 PM (Late Night Cup)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-sand mb-1.5">
                      Number of Cups
                    </label>
                    <select
                      value={form.cups}
                      onChange={(e) => setForm({ ...form, cups: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel border gold-border text-cream text-xs sm:text-sm focus:outline-none focus:border-gold bg-roast-950"
                    >
                      <option value="1">1 Cup Solo</option>
                      <option value="2">2 Cups (Brothers Duo)</option>
                      <option value="4">4 Cups (Squad Order)</option>
                      <option value="6+">6+ Cups (Gathering / Car)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-sand mb-1.5">
                    Coffee Preferences / Specific Drinks
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 2 Spanish Lattes extra hot, 1 Cortado with skim milk..."
                    value={form.specialNote}
                    onChange={(e) => setForm({ ...form, specialNote: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-panel border gold-border text-cream placeholder-sand/50 text-xs sm:text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-gold-light via-gold to-caramel text-roast-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Submit Pre-Order</span>
                  </button>

                  <a
                    href={`https://wa.me/923337890123?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
