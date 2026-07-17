'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: data.get('subject'),
          subcategory: 'Contact page enquiry',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          details: data.get('message'),
          consent: data.get('consent') === 'on',
          website: data.get('website'),
          source: 'Contact page',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'We could not send your message. Please try again.');
      form.reset();
      setSent(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'We could not send your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) return <div className="contact-success" role="status"><span>✓</span><h2>Thank you for getting in touch.</h2><p>Your message has been delivered securely. A suitable specialist can review the information before contacting you.</p><button onClick={() => setSent(false)}>Send another message</button></div>;

  return <form className="contact-form" onSubmit={submit}>
    <div className="field-row"><label>Full name<input name="name" autoComplete="name" required maxLength={120} placeholder="Your full name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.co.uk" /></label></div>
    <div className="field-row"><label>Contact number<input name="phone" type="tel" autoComplete="tel" required maxLength={40} placeholder="e.g. 07123 456 789" /></label><label>What do you need help with?<select name="subject" required defaultValue=""><option value="" disabled>Select an enquiry type</option><option>Self Assessment enquiry</option><option>HMRC compliance check</option><option>VAT or PAYE enquiry</option><option>Code of Practice 8 or 9</option><option>Undeclared income</option><option>HMRC penalty or appeal</option><option>General question</option></select></label></div>
    <label>Your message<textarea name="message" rows={6} required maxLength={4000} placeholder="Briefly explain what HMRC has contacted you about and include any response deadline. Please do not include your UTR or National Insurance number." /></label>
    <input className="contact-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <label className="contact-consent"><input name="consent" type="checkbox" required /><span>I agree to be contacted about my enquiry and have read the <a href="/privacy" target="_blank" rel="noopener noreferrer">privacy notice</a>.</span></label>
    {error && <p className="contact-form-error" role="alert">{error}</p>}
    <button className="contact-submit" type="submit" disabled={submitting}>{submitting ? 'Sending securely…' : 'Send confidential message'} {!submitting && <span>→</span>}</button>
    <p className="form-security">Your details are treated confidentially. Do not send sensitive identification numbers or financial documents through this initial form.</p>
  </form>;
}
