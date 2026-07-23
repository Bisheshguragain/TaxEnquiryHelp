import type { Metadata } from 'next';
import FaqBrowser from '../knowledge-base/FaqBrowser';
import { faqGroups } from '../knowledge-base/faqs';
import '../knowledge-base/knowledge.css';

export const metadata:Metadata={
  title:'HMRC Tax Enquiry FAQs UK',
  description:'Find clear answers to common UK questions about HMRC enquiries, compliance checks, VAT, PAYE, COP8, COP9, disclosures, penalties and appeals.',
  alternates:{canonical:'/faqs'},
  openGraph:{title:'HMRC Tax Enquiry FAQs UK',description:'Clear answers to common HMRC enquiry, investigation, disclosure and appeal questions.',type:'website',locale:'en_GB',images:['/og-tax-enquiry-help.png']}
};

export default function FaqPage(){const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqGroups.flatMap(group=>group.questions.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}})))};return <main className="kb faq-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><section className="kb-hero"><div className="kb-wrap"><p className="kb-kicker">HMRC questions answered</p><h1>Frequently asked tax enquiry questions.</h1><p>Clear, practical answers covering the questions UK taxpayers and businesses commonly ask after HMRC gets in touch.</p></div></section><section className="kb-wrap kb-main"><FaqBrowser /></section></main>}
