import type {Metadata} from 'next';
import Link from 'next/link';
import {industries} from './industries';
import '../knowledge-base/knowledge.css';

export const metadata:Metadata={
  title:'HMRC Enquiry Help by Industry UK',
  description:'Industry-specific HMRC enquiry guidance for landlords, construction, hospitality, online sellers, drivers and healthcare professionals.',
  alternates:{canonical:'/industries'},
  openGraph:{title:'HMRC enquiry guidance by industry',description:'Focused UK guidance for six industry-specific HMRC enquiry situations.',url:'/industries',type:'website',locale:'en_GB',siteName:'TaxEnquiryHelp',images:['/og-tax-enquiry-help.png']}
};

export default function IndustriesHub(){return <main className="kb question-hub"><section className="kb-hero"><div className="kb-wrap"><p className="kb-kicker">Industry-specific HMRC support</p><h1>HMRC enquiry guidance shaped around how your industry works.</h1><p>This limited pilot covers six sectors where income records, expenses and tax risks require genuinely different evidence. No generic location, software or severity variants.</p></div></section><div className="kb-wrap question-clusters"><section className="question-cluster-tone-2"><header><span>06</span><div><p>Phase 5 pilot</p><h2>Choose your industry</h2></div><strong>{industries.length} focused pages</strong></header><div>{industries.map(item=><article key={item.slug}><h3><Link href={`/industries/${item.slug}`}>{item.shortTitle}</Link></h3><p>{item.description}</p><Link href={`/industries/${item.slug}`}>Explore industry guidance →</Link></article>)}</div></section></div></main>}
