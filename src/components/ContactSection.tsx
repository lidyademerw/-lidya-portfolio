import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    // Simulate real database or API post
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submission message after a few seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0077C0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-82 h-82 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-sm font-bold uppercase tracking-widest font-mono text-[#0077C0] mb-2">
            contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-slate-500">
            Let's collaborate on your next design or full-stack software project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Card Column (Left) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left" id="contact-info-panel">
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl flex flex-col space-y-8">
              <h3 className="text-2xl font-extrabold text-slate-950">
                Contact Information
              </h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0077C0]/10 flex items-center justify-center text-[#0077C0] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Email Me</h4>
                  <a href="mailto:lidya.demerw@example.com" className="text-slate-800 font-bold hover:text-[#0077C0] transition-colors">
                    lidyademerw@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFC107]/20 flex items-center justify-center text-slate-900 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Call Me</h4>
                  <p className="text-slate-800 font-bold">
                    +251 993944654
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0077C0]/10 flex items-center justify-center text-[#0077C0] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Location</h4>
                  <p className="text-slate-800 font-bold">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Greeting */}
            <div className="p-4 text-slate-500 text-xs font-mono">
              ⚡ Available worldwide for contract remote engagements and design workshops.
            </div>
          </div>

          {/* Contact Form Column (Right) */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C0] focus:ring-2 focus:ring-[#0077C0]/10 transition-all font-medium"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C0] focus:ring-2 focus:ring-[#0077C0]/10 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col space-y-2 text-left">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">
                    How can I help you?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, ideas or inquiry here..."
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C0] focus:ring-2 focus:ring-[#0077C0]/10 transition-all font-medium resize-none"
                  />
                </div>

                {/* Status messages */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 p-4 rounded-2xl border border-emerald-100 text-sm font-semibold"
                    id="contact-success-msg"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-[#0077C0] hover:bg-[#005c94] text-white font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-70"
                    id="contact-submit-btn"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
