import type { Metadata } from 'next';
import './globals.css';
import './form-enhancements.css';
import './ticker.css';
import './issue-actions.css';
import './mobile-menu.css';
import './home-guides.css';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taxenquiryhelp.co.uk'),
  title: { default: 'HMRC Tax Enquiry Help UK | TaxEnquiryHelp', template: '%s | TaxEnquiryHelp' },
  description: 'Specialist help with HMRC tax enquiries, investigations, compliance checks, penalties and appeals across the UK. Understand your letter and next steps.',
  keywords: ['HMRC tax enquiry help','HMRC tax investigation help','HMRC compliance check','HMRC letter help','Self Assessment enquiry','appeal HMRC penalty','tax investigation specialist UK'],
  applicationName: 'TaxEnquiryHelp',
  authors: [{ name: 'TaxEnquiryHelp Editorial' }],
  creator: 'TaxEnquiryHelp',
  publisher: 'TaxEnquiryHelp',
  category: 'Tax enquiry information and specialist support',
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: '/' },
  openGraph: { title: 'HMRC tax enquiry help, made clear', description: 'Practical, specialist support for HMRC enquiries and compliance checks across the UK.', url: '/', siteName: 'TaxEnquiryHelp', locale: 'en_GB', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'HMRC tax enquiry help | TaxEnquiryHelp', description: 'Specialist support for HMRC enquiries across the UK.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteSchema = {'@context':'https://schema.org','@graph':[
    {'@type':'Organization','@id':'https://www.taxenquiryhelp.co.uk/#organization',name:'TaxEnquiryHelp',url:'https://www.taxenquiryhelp.co.uk',description:'UK information and specialist support for HMRC tax enquiries, compliance checks, penalties and appeals.',address:{'@type':'PostalAddress',streetAddress:'Devonshire House, Level 1, One Mayfair Place',addressLocality:'London',postalCode:'W1J 8AJ',addressCountry:'GB'}},
    {'@type':'WebSite','@id':'https://www.taxenquiryhelp.co.uk/#website',url:'https://www.taxenquiryhelp.co.uk',name:'TaxEnquiryHelp',inLanguage:'en-GB',publisher:{'@id':'https://www.taxenquiryhelp.co.uk/#organization'}},
  ]};
  return <html lang="en-GB"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteSchema)}}/><SiteHeader />{children}<SiteFooter /></body></html>;
}
