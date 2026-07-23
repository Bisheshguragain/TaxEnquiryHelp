'use client';

import Link from 'next/link';
import { useState } from 'react';
import { faqGroupAnchors, faqGroups } from './faqs';

const faqTone=(category:string)=>faqGroups.findIndex(group=>group.category===category)+1;

export default function FaqBrowser(){
  const [active,setActive]=useState('All');
  const groups=active==='All'?faqGroups:faqGroups.filter(group=>group.category===active);
  let count=0;
  for(const group of groups) count+=group.questions.length;
  return <section className="kb-faq-library" aria-labelledby="faq-library-title">
    <div className="kb-library-head"><div><p className="kb-kicker">HMRC questions answered</p><h2 id="faq-library-title">Frequently asked tax enquiry questions</h2></div><p>Browse clear answers by enquiry type. These general answers are a starting point; the exact notice and facts always matter.</p></div>
    <div className="faq-filter-row" role="group" aria-label="Filter frequently asked questions"><button className={active==='All'?'active':''} aria-pressed={active==='All'} onClick={()=>setActive('All')}>All questions</button>{faqGroups.map(group=><button key={group.category} className={active===group.category?'active':''} aria-pressed={active===group.category} onClick={()=>setActive(group.category)}>{group.category}</button>)}</div>
    <p className="kb-results" aria-live="polite">Showing {count} questions{active!=='All'?` about ${active}`:''}</p>
    <div className="faq-groups">{groups.map(group=>{const originalIndex=faqGroups.findIndex(item=>item.category===group.category);return <section className={`faq-group faq-group-tone-${faqTone(group.category)}`} id={faqGroupAnchors[group.category]} key={group.category}><span className="legacy-fragment-anchor" id={`faq-group-${originalIndex+1}`} aria-hidden="true"/><div className="faq-group-title"><span>{group.category}</span><Link href={`/knowledge-base/${group.guide}`}>Read related guide →</Link></div>{group.questions.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</section>})}</div>
  </section>
}
