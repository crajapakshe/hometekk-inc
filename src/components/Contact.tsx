import { useState } from 'react';
import { CheckCircle2, Send, Loader2, AlertCircle } from 'lucide-react';
import { services } from '@/data';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const result = await response.json() as { error?: string; message?: string };

      if (!response.ok || !result.message) {
        throw new Error(result.error ?? 'We could not send your request right now. Please try again.');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'We could not send your request right now. Please try again.');
    }
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="section-label">Get Started</span>
            <h2 className="mt-4 text-4xl font-extrabold text-neutral-900 text-balance sm:text-5xl">
              Request Your Free Consultation
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Tell us about your project and we'll get back to you within 24 hours with next steps.
              No obligation, no pressure — just expert advice.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Free in-home consultation and design assessment',
                'Detailed 3D renderings of your proposed space',
                'Transparent, itemized quote with no hidden costs',
                'Flexible scheduling that works around your life',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                  <span className="text-base text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-primary-50 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-extrabold text-primary-700">24h</div>
                  <div className="text-xs font-medium text-neutral-500 mt-1">Response Time</div>
                </div>
                <div className="border-x border-primary-200">
                  <div className="text-2xl font-extrabold text-primary-700">Free</div>
                  <div className="text-xs font-medium text-neutral-500 mt-1">First Consultation</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-primary-700">2yr</div>
                  <div className="text-xs font-medium text-neutral-500 mt-1">Workmanship Warranty</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-neutral-50 p-8 shadow-sm border border-neutral-200 lg:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                  <CheckCircle2 className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Thank You!</h3>
                <p className="mt-3 text-neutral-500 max-w-sm">
                  Your request has been received. One of our renovation specialists will contact you
                  within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="(604) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Service Needed
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none"
                    placeholder="Tell us about your renovation vision, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full text-base disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Request
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-neutral-400">
                  By submitting, you agree to be contacted about your project. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
