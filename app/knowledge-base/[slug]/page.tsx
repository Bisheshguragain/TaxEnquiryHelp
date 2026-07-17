import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '../guides';
import '../knowledge.css';

export function generateStaticParams(){return guides.map(g=>({slug:g.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const g=guides.find(x=>x.slug===slug);
  if(!g)return{};
  const seoTitle=`${g.keyword}: UK Guide | TaxEnquiryHelp`;
  return {
    title:{absolute:seoTitle},description:g.description,keywords:[g.keyword,...(g.secondaryKeywords??[])],
    alternates:{canonical:`/knowledge-base/${g.slug}`},
    openGraph:{title:seoTitle,description:g.description,url:`/knowledge-base/${g.slug}`,type:'article',locale:'en_GB',siteName:'TaxEnquiryHelp'},
    twitter:{card:'summary_large_image',title:seoTitle,description:g.description}
  };
}

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const g=guides.find(x=>x.slug===slug);
  if(!g)notFound();
  const url=`https://www.taxenquiryhelp.co.uk/knowledge-base/${g.slug}`;
  const articleSchema={'@context':'https://schema.org','@type':'Article',headline:g.title,description:g.description,datePublished:'2026-07-17',dateModified:'2026-07-17',author:{'@type':'Organization',name:'TaxEnquiryHelp'},publisher:{'@type':'Organization',name:'TaxEnquiryHelp'},mainEntityOfPage:url};
  const crumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.taxenquiryhelp.co.uk'},{'@type':'ListItem',position:2,name:'Knowledge Base',item:'https://www.taxenquiryhelp.co.uk/knowledge-base'},{'@type':'ListItem',position:3,name:g.shortTitle,item:url}]};
  const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:g.faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))};
  return <main className="kb article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(crumbSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <div className="kb-wrap">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/knowledge-base">Knowledge Base</Link><span>›</span><span>{g.category}</span></nav>
      <article className="guide-layout">
        <div className="guide-main">
          <header className="guide-header">
            <div className="guide-label">{g.category}</div>
            <h1>{g.title}</h1><p className="guide-dek">{g.description}</p>
            <div className="byline"><span>By TaxEnquiryHelp Editorial</span><span>Updated {g.updated}</span></div>
          </header>
          <aside className="guide-at-glance" aria-label="Guide at a glance">
            <div><span>Primary topic</span><strong>{g.keyword}</strong></div>
            <div><span>Guide type</span><strong>{g.category}</strong></div>
            <div><span>Last reviewed</span><strong>{g.updated}</strong></div>
          </aside>
          <div className="key-answer"><b>Quick answer</b><p>{g.intro[0]}</p></div>
          {g.intro.slice(1).map(p=><p className="lead-p" key={p}>{p}</p>)}
          <nav className="contents" aria-label="On this page"><b>On this page</b><ol>{g.sections.map((s,i)=><li key={s.title}><a href={`#section-${i+1}`}>{s.title}</a></li>)}</ol></nav>
          {g.sections.map((s,i)=><section className="guide-section" id={`section-${i+1}`} key={s.title}>
            <div className="guide-section-heading"><span>{String(i+1).padStart(2,'0')}</span><h2>{s.title}</h2></div>
            {s.paragraphs.map((p,paragraphIndex)=><p className={paragraphIndex===0?'section-key-paragraph':undefined} key={p}>{p}</p>)}
            {s.bullets&&<div className="guide-checklist"><b>Key points</b><ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul></div>}
          </section>)}
          <section className="guide-faq"><h2>Frequently asked questions</h2>{g.faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section>
          <section className="sources"><h2>Authoritative sources</h2><p>This guide draws on official UK government material. Check the latest version for changes.</p><ul>{g.sources.map(([name,sourceUrl])=><li key={sourceUrl}><a href={sourceUrl} rel="external">{name} ↗</a></li>)}</ul></section>
          <aside className="medical-note"><b>Important:</b> This article provides general information, not advice. Tax outcomes depend on the precise notice, tax, period and facts.</aside>
        </div>
        <aside className="guide-side">
          <div className="help-box"><span>Need specialist support?</span><h2>Received a letter from HMRC?</h2><p>Tell us what has happened and find the right next step.</p><Link href="/#enquiry">Start a confidential enquiry →</Link></div>
          <div className="related"><b>Related guides</b>{guides.filter(x=>x.slug!==g.slug&&x.category===g.category).slice(0,4).map(x=><Link key={x.slug} href={`/knowledge-base/${x.slug}`}>{x.shortTitle}<span>→</span></Link>)}</div>
        </aside>
      </article>
    </div>
  </main>;
}
