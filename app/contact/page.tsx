import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact TaxEnquiryHelp | HMRC Enquiry Support',
  description: 'Contact TaxEnquiryHelp for confidential support with an HMRC tax enquiry, compliance check, investigation, disclosure, penalty or appeal in the UK.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact TaxEnquiryHelp', description: 'Get in touch about an HMRC enquiry or tax investigation.', type: 'website', locale: 'en_GB' },
};

export default function ContactPage() {
  const urgentEmail = 'mailto:Hello@TaxEnquiryHelp.co.uk?subject=Urgent%20HMRC%20enquiry%20%E2%80%93%20response%20deadline&body=Hello%20TaxEnquiryHelp%2C%0D%0A%0D%0APlease%20review%20my%20urgent%20HMRC%20enquiry.%0D%0A%0D%0AFull%20name%3A%20%0D%0AContact%20number%3A%20%0D%0AType%20of%20HMRC%20enquiry%3A%20%0D%0ADate%20of%20HMRC%20letter%3A%20%0D%0AResponse%20deadline%3A%20%0D%0ABrief%20summary%3A%20%0D%0A%0D%0APlease%20do%20not%20include%20your%20UTR%2C%20National%20Insurance%20number%20or%20sensitive%20documents%20in%20this%20initial%20email.';
  const schema = {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'TaxEnquiryHelp',
    url: 'https://www.taxenquiryhelp.co.uk/contact', email: 'Hello@TaxEnquiryHelp.co.uk',
    address: { '@type': 'PostalAddress', streetAddress: 'Devonshire House, Level 1, One Mayfair Place', addressLocality: 'Mayfair, London', postalCode: 'W1J 8AJ', addressCountry: 'GB' },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };
  return <main className="contact-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="contact-hero"><div className="contact-wrap"><p className="contact-kicker">Contact TaxEnquiryHelp</p><h1>Let’s make your next step clear.</h1><p>Tell us what HMRC has contacted you about. We’ll use the information to understand your enquiry and identify the appropriate kind of specialist support.</p></div></section>
    <section className="contact-wrap contact-layout">
      <div className="contact-details">
        <p className="contact-kicker dark">Visit or write to us</p><h2>Our Mayfair office</h2>
        <address><strong>TaxEnquiryHelp</strong><br />Devonshire House<br />Level 1, One Mayfair Place<br />Mayfair, London<br />England, W1J 8AJ</address>
        <div className="contact-note"><b>Before visiting</b><p>Meetings are by appointment only. Please send an enquiry first so the right person can confirm availability and any documents required.</p></div>
        <div className="contact-email"><span>Urgent enquiries</span><a href={urgentEmail}>Hello@TaxEnquiryHelp.co.uk</a><p>Include any HMRC response deadline in your email, but do not send your UTR, National Insurance number or sensitive documents initially.</p></div>
        <div className="contact-options"><h3>We can help route enquiries about:</h3><ul><li>Self Assessment enquiries</li><li>Business, VAT and PAYE checks</li><li>COP8 and COP9 investigations</li><li>Undeclared income disclosures</li><li>HMRC penalties and appeals</li></ul></div>
      </div>
      <div className="contact-card"><div className="contact-card-head"><span>Private and secure</span><h2>Send us a message</h2><p>Complete the form and provide only the information needed for an initial conversation.</p></div><ContactForm /></div>
    </section>
    <section className="contact-emergency"><div className="contact-wrap"><h2>Do you have an HMRC deadline?</h2><p>For an urgent enquiry, include the deadline and date of the HMRC letter in your email. Do not delay an HMRC response solely because you are waiting for professional support.</p><a href={urgentEmail}>Email urgent enquiries →</a></div></section>
  </main>;
}
