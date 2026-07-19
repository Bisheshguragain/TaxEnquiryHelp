'use client';

import { FormEvent, useState } from 'react';

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>;
const Check = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
const Shield = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.6 2.9 8.3 7 10 4.1-1.7 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>;

const issues = [
  ['Self Assessment enquiry','Questions about a tax return, income, expenses or declared gains.','self-assessment-enquiry'],
  ['HMRC compliance check','Support responding to information requests and keeping the scope clear.','compliance-check'],
  ['VAT or PAYE enquiry','Help for businesses facing VAT, payroll or employer compliance questions.','vat-paye-enquiry'],
  ['Code of Practice 8 or 9','Specialist support for complex tax avoidance or suspected fraud cases.','cop8-cop9-investigation'],
  ['Undeclared income','A careful route to making a voluntary disclosure and correcting past returns.','undeclared-income-disclosure'],
  ['HMRC penalties or appeal','Review the decision, deadlines and whether there may be grounds to appeal.','penalties-and-tax-appeals'],
] as const;

const enquiryPaths: Record<string, { question: string; hint: string; options: string[] }> = {
  'Self Assessment enquiry': { question: 'What stage is the Self Assessment enquiry at?', hint: 'Choose the option that best matches the latest HMRC letter.', options: ['HMRC has opened an enquiry','HMRC has asked for records or information','A meeting or interview has been requested','HMRC has issued a closure notice','I need help understanding the letter'] },
  'HMRC compliance check': { question: 'What is HMRC checking?', hint: 'Choose the closest description from the opening letter or information request.', options: ['My personal tax affairs','My company or business records','A specific transaction or tax relief','HMRC has requested a meeting or visit','The scope is unclear'] },
  'VAT or PAYE enquiry': { question: 'Which business tax is HMRC checking?', hint: 'This helps us identify the right business tax specialist.', options: ['VAT returns or records','PAYE or employer compliance','Employment status or IR35','Construction Industry Scheme (CIS)','Both VAT and PAYE'] },
  'Code of Practice 8 or 9': { question: 'Which HMRC process is mentioned in the letter?', hint: 'These cases can be sensitive. Choose the wording shown on HMRC’s correspondence.', options: ['Code of Practice 8 (COP8)','Code of Practice 9 (COP9)','Contractual Disclosure Facility (CDF)','Suspected tax avoidance','I need help identifying the process'] },
  'Undeclared income': { question: 'What do you need help disclosing?', hint: 'An approximate category is enough at this stage.', options: ['Rental or property income','Overseas income or assets','Cryptoassets or investments','Self-employed or trading income','Something else or more than one source'] },
  'HMRC penalties or appeal': { question: 'What has HMRC issued?', hint: 'Deadlines can be short, so tell us what is on the latest notice.', options: ['Late filing or payment penalty','Inaccuracy penalty','Discovery assessment','Statutory review decision','Tax tribunal appeal deadline'] },
};

const faqs = [
  ['What is an HMRC tax enquiry?','An HMRC tax enquiry is a formal check into a tax return or tax position. HMRC may ask for records, explanations or calculations to confirm that the right amount of tax has been paid.'],
  ['How long do I have to reply to an HMRC letter?','The deadline should be shown on the letter. It is important not to ignore it. If you need more time, a specialist may be able to help you contact HMRC and request it before the deadline.'],
  ['Should I speak to HMRC myself?','You can, but complex or sensitive enquiries benefit from a considered response. A tax enquiry specialist can review what HMRC is asking, help avoid unnecessary disclosure and communicate on your behalf.'],
  ['How much does tax enquiry help cost?','Fees depend on the complexity and stage of the enquiry. Your initial conversation is used to understand the issue and explain likely options before you decide whether to proceed.'],
  ['Can you guarantee the outcome?','No reputable specialist can guarantee an HMRC outcome. Good representation can, however, help make your position clear, keep the enquiry focused and ensure deadlines and evidence are handled properly.'],
];

export type HomeGuideCard = {
  slug: string;
  category: string;
  title: string;
  description: string;
  updated: string;
};

type HomeProps = {
  featuredGuides: HomeGuideCard[];
  latestGuides: HomeGuideCard[];
};

const GuideCards = ({ guides, featured = false }: { guides: HomeGuideCard[]; featured?: boolean }) => (
  <div className="guide-grid">
    {guides.map((guide, i) => <article className={featured ? 'featured-guide-card' : undefined} key={guide.slug}>
      <div className={`guide-art art-${(i % 3) + 1}`}><span>{featured ? 'Featured · ' : ''}{guide.category}</span><b>TEH</b></div>
      <div className="guide-body">
        <small>{guide.category}</small>
        <h3>{guide.title}</h3><p>{guide.description}</p>
        <div className="guide-card-meta"><time>{guide.updated}</time></div>
        <a href={`/knowledge-base/${guide.slug}`}>Read the guide <Arrow /></a>
      </div>
    </article>)}
  </div>
);

export default function Home({ featuredGuides, latestGuides }: HomeProps) {
  const [enquiryStep, setEnquiryStep] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const chooseIssue = (issue: string) => { setSelectedIssue(issue); setSelectedDetail(null); setEnquiryStep(2); };
  const startSpecialistFlow = (issue: string) => { chooseIssue(issue); window.setTimeout(()=>document.getElementById('enquiry')?.scrollIntoView({behavior:'smooth',block:'start'}),0); };
  const chooseDetail = (detail: string) => { setSelectedDetail(detail); setEnquiryStep(3); };
  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setSubmitting(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          category:selectedIssue,
          subcategory:selectedDetail,
          name:data.get('name'),
          email:data.get('email'),
          phone:data.get('phone'),
          details:data.get('details'),
          consent:data.get('consent')==='on',
          website:data.get('website'),
          source:'Homepage guided enquiry',
        }),
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(result.error||'We could not send your enquiry. Please try again.');
      setSubmitted(true);
      form.reset();
    } catch(error) {
      setSubmitError(error instanceof Error?error.message:'We could not send your enquiry. Please try again.');
    } finally { setSubmitting(false); }
  };
  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) };
  const orgSchema = { '@context':'https://schema.org','@type':'ProfessionalService',name:'TaxEnquiryHelp',url:'https://www.taxenquiryhelp.co.uk',areaServed:{'@type':'Country',name:'United Kingdom'},description:'Specialist support for HMRC tax enquiries, investigations and compliance checks.' };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(orgSchema)}} />
    <main id="top">
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> UK-wide HMRC enquiry support</div>
          <h1>HMRC tax enquiry?<br/><em>You don’t have to face it alone.</em></h1>
          <p className="hero-lead">Clear, confidential support from tax enquiry specialists who understand HMRC procedure—so you can respond with confidence.</p>
          <div className="hero-actions"><a className="button primary" href="#enquiry">Tell us what’s happened <Arrow /></a><a className="text-link" href="#process">See how it works</a></div>
          <div className="trust-row"><span><Check /> Confidential</span><span><Check /> UK specialists</span><span><Check /> No-obligation first conversation</span></div>
        </div>
        <aside className="enquiry-card" id="enquiry" aria-labelledby="enquiry-title">
          <div className="card-head"><div className="card-top"><span className="status-dot"/> Private & secure</div><span className="step-count">Step {enquiryStep} of 3</span></div>
          <div className="progress" role="progressbar" aria-label="Enquiry progress" aria-valuemin={1} aria-valuemax={3} aria-valuenow={enquiryStep} aria-valuetext={`Step ${enquiryStep} of 3`}><span style={{width:`${enquiryStep*33.333}%`}} /></div>
          {enquiryStep===1 && <>
            <h2 id="enquiry-title">What has HMRC contacted you about?</h2>
            <p>Choose the closest option. It takes less than a minute.</p>
            <div className="option-list">{Object.keys(enquiryPaths).map((x,i)=><button key={x} className="option" onClick={()=>chooseIssue(x)}><span>{i+1}</span>{x}<Arrow /></button>)}</div>
          </>}
          {enquiryStep===2 && selectedIssue && <>
            <button className="back-button" onClick={()=>setEnquiryStep(1)}>← Back</button>
            <div className="selected-summary"><small>Your enquiry</small><strong>{selectedIssue}</strong></div>
            <h2 id="enquiry-title">{enquiryPaths[selectedIssue].question}</h2>
            <p>{enquiryPaths[selectedIssue].hint}</p>
            <div className="option-list detail-options">{enquiryPaths[selectedIssue].options.map((x,i)=><button key={x} className="option" onClick={()=>chooseDetail(x)}><span>{String.fromCharCode(65+i)}</span>{x}<Arrow /></button>)}</div>
          </>}
          {enquiryStep===3 && !submitted && <>
            <button className="back-button" onClick={()=>setEnquiryStep(2)}>← Back</button>
            <h2 id="enquiry-title">How can we contact you?</h2>
            <p>Share a few details so the right specialist can understand your situation before getting in touch.</p>
            <div className="selection-review" aria-label="Your enquiry selections">
              <div><span>Step 1 · Category</span><strong>{selectedIssue}</strong></div>
              <div><span>Step 2 · Subcategory</span><strong>{selectedDetail}</strong></div>
            </div>
            <form className="enquiry-form" onSubmit={submitEnquiry}>
              <label>Full name<input name="name" type="text" autoComplete="name" placeholder="e.g. Alex Morgan" required /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.co.uk" required /></label>
              <label>Contact number<input name="phone" type="tel" autoComplete="tel" placeholder="e.g. 07123 456 789" required /></label>
              <label>Tell us a little more<textarea name="details" rows={3} placeholder="Include the date of HMRC’s letter and any response deadline. Please don’t include your UTR or National Insurance number." required /></label>
              <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="case-summary"><Check /><span><small>Step 1</small><b>{selectedIssue}</b><small>Step 2</small>{selectedDetail}</span></div>
              <label className="consent"><input name="consent" type="checkbox" required /><span>I agree to be contacted about this enquiry and have read the <a href="/privacy" target="_blank">privacy notice</a>.</span></label>
              {submitError&&<p className="form-error" role="alert">{submitError}</p>}
              <button className="submit-button" type="submit" disabled={submitting}>{submitting?'Sending securely…':'Request a confidential call'} {!submitting&&<Arrow />}</button>
            </form>
          </>}
          {submitted && <div className="success-state" role="status"><span><Check /></span><h2 id="enquiry-title">Thank you. Your enquiry has been sent.</h2><p>We have received your category, enquiry details and contact information. A suitable specialist can now review your request before getting in touch.</p><button onClick={()=>{setSubmitted(false);setEnquiryStep(1);setSelectedIssue(null);setSelectedDetail(null)}}>Start another enquiry</button></div>}
          <small><Shield /> Your details are treated confidentially and never sold.</small>
        </aside>
      </section>

      <section className="reassurance reassurance-ticker" aria-label="Help with enquiries involving Self Assessment, VAT, PAYE, Corporation Tax and Capital Gains Tax"><p>Help with enquiries involving</p><div className="ticker-window"><div className="ticker-track">{[0,1].map(group=><div className="ticker-group" aria-hidden={group===1} key={group}><span>Self Assessment</span><span>VAT</span><span>PAYE</span><span>Corporation Tax</span><span>Capital Gains Tax</span></div>)}</div></div></section>

      <section className="section intro" id="support">
        <div><div className="eyebrow dark">Specialist support</div><h2>The right help, from the first response to the final letter.</h2></div>
        <p>An HMRC letter can feel urgent and unclear. We help you understand what HMRC is asking, what information matters, and the practical route forward.</p>
      </section>
      <section className="issue-grid section tight">
        {issues.map(([title,body,slug],i)=><article className={`issue-card issue-color-${i+1}`} key={title}><div className="issue-num">0{i+1}</div><h3><a href={`/hmrc-enquiry-help/${slug}`}>{title}</a></h3><p>{body}</p><div className="issue-actions"><a href={`/hmrc-enquiry-help/${slug}`}>Explore {title.toLowerCase()} issues</a><button className="issue-link" onClick={()=>startSpecialistFlow(title)} aria-label={`Get specialist help with ${title}`}>Get specialist help <Arrow /></button></div></article>)}
      </section>

      <section className="process" id="process"><div className="section">
        <div className="process-head"><div><div className="eyebrow">A calmer way forward</div><h2>From HMRC letter to a clear plan in three steps.</h2></div><p>You stay informed and in control throughout. No jargon, no judgement, and no pressure to proceed.</p></div>
        <div className="steps">
          {[
            ['01','Tell us what happened','Share the type of letter you received and any deadline. Don’t send sensitive documents at this stage.'],
            ['02','Speak to a specialist','We’ll help clarify the issue, explain your options and identify the right expertise for your case.'],
            ['03','Move forward with confidence','If you choose to proceed, your specialist can prepare responses, liaise with HMRC and guide the enquiry.']
          ].map(([n,t,b])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div></article>)}
        </div><a className="button light" href="#enquiry">Start your enquiry <Arrow /></a>
      </div></section>

      <section className="section expertise"><div className="quote-card"><span className="quote-mark">“</span><blockquote>The first reply can shape the whole enquiry. Take a breath, check the deadline, and get clear on what HMRC has actually asked for.</blockquote><p>TaxEnquiryHelp specialist guidance</p></div><div className="expert-copy"><div className="eyebrow dark">Why specialist advice matters</div><h2>Tax knowledge is only half the story.</h2><p>HMRC enquiries have their own rules, deadlines and tactics. A specialist considers both the tax position and the enquiry process—helping to keep requests proportionate and responses accurate.</p><ul><li><Check /> A clear view of risks and next steps</li><li><Check /> Carefully prepared HMRC correspondence</li><li><Check /> Support with meetings, records and negotiations</li><li><Check /> A strategy focused on resolving the enquiry</li></ul><a className="text-link ink" href="/knowledge-base">Discuss your situation <Arrow /></a></div></section>

      <section className="guides section" id="guides">
        <div className="section-title"><div><div className="eyebrow dark">HMRC enquiry guides</div><h2>Featured advice and the latest guides.</h2></div><a href="/knowledge-base">View all guides <Arrow /></a></div>
        <div className="home-guide-group"><div className="home-guide-heading"><div><span>01</span><h3>Featured guides</h3></div><p>Essential HMRC enquiry guidance, selected by our editorial team.</p></div><GuideCards guides={featuredGuides} featured /></div>
        <div className="home-guide-group"><div className="home-guide-heading"><div><span>02</span><h3>Newest guides</h3></div><p>The three most recently added articles from our knowledge base.</p></div><GuideCards guides={latestGuides} /></div>
      </section>

      <section className="faq section" id="faqs"><div><div className="eyebrow dark">Frequently asked questions</div><h2>Questions people ask after an HMRC letter.</h2><p>Every case is different. These answers are general information, not tax or legal advice.</p></div><div className="accordion">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="final-cta"><div><div className="eyebrow">Take the next step</div><h2>Don’t let an HMRC letter sit unanswered.</h2><p>Tell us what’s happened and find out what kind of specialist support may be right for you.</p><a className="button light" href="#enquiry">Get HMRC enquiry help <Arrow /></a></div><div className="cta-shield"><Shield /></div></section>
    </main>
  </>;
}
