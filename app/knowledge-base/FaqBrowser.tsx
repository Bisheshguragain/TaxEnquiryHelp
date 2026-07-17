'use client';

import Link from 'next/link';
import { useState } from 'react';
import { faqGroups } from './faqs';

export default function FaqBrowser(){
  const [active,setActive]=useState('All');
  const groups=active==='All'?faqGroups:faqGroups.filter(group=>group.category===active);
  let count=0;
  for(const group of groups) count+=group.questions.length;
  return <section className="kb-faq-library" aria-labelledby="faq-library-title">
    <div className="kb-library-head"><div><p className="kb-kicker">HMRC questions answered</p><h2 id="faq-library-title">Frequently asked tax enquiry questions</h2></div><p>Browse clear answers by enquiry type. These general answers are a starting point; the exact notice and facts always matter.</p></div>
    <div className="faq-filter-row" role="group" aria-label="Filter frequently asked questions"><button className={active==='All'?'active':''} aria-pressed={active==='All'} onClick={()=>setActive('All')}>All questions</button>{faqGroups.map(group=><button key={group.category} className={active===group.category?'active':''} aria-pressed={active===group.category} onClick={()=>setActive(group.category)}>{group.category}</button>)}</div>
    <p className="kb-results" aria-live="polite">Showing {count} questions{active!=='All'?` about ${active}`:''}</p>
    <div className="faq-groups">{groups.map(group=><section className="faq-group" key={group.category}><div className="faq-group-title"><span>{group.category}</span><Link href={`/knowledge-base/${group.guide}`}>Read related guide →</Link></div>{group.questions.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</section>)}</div>
  </section>
}
