import type { Metadata } from 'next';
import KnowledgeBrowser from './KnowledgeBrowser';
import Link from 'next/link';
import {problems} from '../hmrc-problems/problems';
import {questionClusterAnchors,questionClusters,questions} from '../hmrc-questions/questions';
import {faqGroupAnchors,faqGroups} from './faqs';
import {guides} from './guides';
import './knowledge.css';

export const metadata: Metadata={
  title:'HMRC Tax Enquiry Knowledge Hub UK',
  description:'Explore source-backed HMRC guides, problem pages, focused questions and FAQs for UK tax enquiries, compliance checks, penalties, appeals and disclosures.',
  alternates:{canonical:'/knowledge-base'}
};

export default function KnowledgeBase(){return <main className="kb">
  <section className="kb-hero"><div className="kb-wrap"><p className="kb-kicker">TaxEnquiryHelp Knowledge Hub</p><h1>Clear guidance for difficult HMRC situations.</h1><p>Explore comprehensive guides, focused problem pages and direct answers for UK individuals and businesses dealing with tax enquiries, compliance checks, penalties and appeals.</p></div></section>
  <section className="kb-wrap kb-main">
    <nav className="hub-choices" aria-label="Choose a Knowledge Hub library">
      <a className="hub-choice hub-choice-guides" href="#guides-and-problems"><span>01 · In-depth resources</span><h2>Guides &amp; HMRC Problems</h2><p>Browse comprehensive guides and immediate-action pages for letters, checks, penalties and return errors.</p><strong>Explore {guides.length+problems.length} resources →</strong></a>
      <a className="hub-choice hub-choice-answers" href="#questions-and-faqs"><span>02 · Direct answers</span><h2>Questions &amp; FAQs</h2><p>Find focused explanations and shorter answers organised around the six main HMRC enquiry categories.</p><strong>Explore answers →</strong></a>
      <a className="hub-choice hub-choice-industries" href="/industries"><span>03 · Industry pilot</span><h2>Industry-specific guidance</h2><p>Focused HMRC enquiry pathways for six distinct sectors, including landlords, construction, hospitality, drivers and healthcare.</p><strong>Explore six industries →</strong></a>
    </nav>

    <section className="hub-library-section" id="guides-and-problems" aria-labelledby="guides-problems-title">
      <header className="hub-section-heading"><div><p className="kb-kicker">Guides &amp; HMRC Problems</p><h2 id="guides-problems-title">Start with the depth you need.</h2></div><p>Use a comprehensive guide to understand the full process, or choose a problem page for the immediate steps after a particular letter, request or return error.</p></header>
      <KnowledgeBrowser />
      <section className="hub-problems" aria-labelledby="problem-library-title">
        <header><div><p className="kb-kicker">Problem-page library</p><h2 id="problem-library-title">What has happened?</h2></div><Link href="/hmrc-problems">Open the HMRC Problems hub →</Link></header>
        <div className="hub-problem-grid">{problems.map((problem,index)=><article key={problem.slug}><span>{String(index+1).padStart(2,'0')} · {problem.category}</span><h3><Link href={`/hmrc-problems/${problem.slug}`}>{problem.title}</Link></h3><p>{problem.description}</p><Link href={`/hmrc-problems/${problem.slug}`}>See what to do →</Link></article>)}</div>
      </section>
    </section>

    <section className="hub-library-section hub-answer-section" id="questions-and-faqs" aria-labelledby="questions-faqs-title">
      <header className="hub-section-heading"><div><p className="kb-kicker">Questions &amp; FAQs</p><h2 id="questions-faqs-title">Find a direct answer by enquiry type.</h2></div><p>The focused question pages include decision points and worked examples. The FAQ library provides shorter answers and links to the relevant comprehensive guide.</p></header>
      <div className="hub-answer-columns">
        <section aria-labelledby="focused-questions-title"><header><h3 id="focused-questions-title">Focused HMRC questions</h3><Link href="/hmrc-questions">Explore all 36 →</Link></header><div className="hub-answer-grid">{questionClusters.map((cluster,index)=>{const items=questions.filter(question=>question.cluster===cluster);return <article className={`hub-answer-tone-${index+1}`} key={cluster}><span>{String(index+1).padStart(2,'0')}</span><h4>{cluster}</h4><p>{items.length} detailed answers with action steps, evidence and examples.</p><Link href={`/hmrc-questions#${questionClusterAnchors[cluster]}`}>Browse this topic →</Link></article>})}</div></section>
        <section aria-labelledby="faq-library-title"><header><h3 id="faq-library-title">Quick FAQ library</h3><Link href="/faqs">Explore all FAQs →</Link></header><div className="hub-answer-grid">{faqGroups.map((group,index)=><article className={`hub-answer-tone-${index+1}`} key={group.category}><span>{String(index+1).padStart(2,'0')}</span><h4>{group.category}</h4><p>{group.questions.length} concise answers, including “{group.questions[0][0]}”</p><Link href={`/faqs#${faqGroupAnchors[group.category]}`}>Browse FAQs →</Link></article>)}</div></section>
      </div>
    </section>
  </section>
</main>}
