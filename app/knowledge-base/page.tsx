import type { Metadata } from 'next';
import KnowledgeBrowser from './KnowledgeBrowser';
import Link from 'next/link';
import './knowledge.css';

export const metadata: Metadata={
  title:'HMRC Tax Enquiry Knowledge Base UK',
  description:'Practical, source-backed guides to HMRC tax enquiries, compliance checks, Self Assessment investigations, penalties and appeals for UK individuals and businesses.',
  alternates:{canonical:'/knowledge-base'}
};

export default function KnowledgeBase(){return <main className="kb">
  <section className="kb-hero"><div className="kb-wrap"><p className="kb-kicker">Knowledge Base</p><h1>Clear answers for difficult HMRC questions.</h1><p>Practical, source-backed guidance for UK individuals and businesses dealing with tax enquiries, compliance checks, penalties and appeals.</p></div></section>
  <section className="kb-wrap kb-main"><aside className="question-library-banner"><div><p className="kb-kicker">New: HMRC questions answered</p><h2>Find a focused answer to the exact question you are facing.</h2><p>Browse 36 concise, source-backed pages covering Self Assessment, compliance checks, VAT, PAYE, COP8, COP9, disclosures, penalties and appeals.</p></div><Link href="/hmrc-questions">Explore all 36 answers →</Link></aside><KnowledgeBrowser /></section>
</main>}
