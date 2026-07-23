'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories, guides } from './guides';

type Filter = 'All' | typeof categories[number];

const featuredSlugs = [
  'what-is-an-hmrc-compliance-check',
  'hmrc-self-assessment-enquiry-guide',
  'appeal-hmrc-tax-penalty',
] as const;
const featuredPosition = (slug:string) => featuredSlugs.indexOf(slug as typeof featuredSlugs[number]);
const guideDate = (date:string) => Date.parse(date) || 0;
const orderedGuides = [...guides].sort((a,b)=>{
  const aFeatured=featuredPosition(a.slug);
  const bFeatured=featuredPosition(b.slug);
  if(aFeatured!==-1||bFeatured!==-1){
    if(aFeatured===-1)return 1;
    if(bFeatured===-1)return -1;
    return aFeatured-bFeatured;
  }
  return guideDate(b.updated)-guideDate(a.updated);
});

const categoryDetails = {
  Individual: {
    number: '01',
    eyebrow: 'Personal tax guidance',
    description: 'Self Assessment, undeclared income, property, cryptoassets and HMRC enquiries affecting individuals.',
  },
  Business: {
    number: '02',
    eyebrow: 'Company and employer guidance',
    description: 'Corporation Tax, VAT, PAYE, director accounts and compliance checks involving UK businesses.',
  },
  General: {
    number: '03',
    eyebrow: 'HMRC process and resolution',
    description: 'Penalties, appeals, information powers and practical guidance that can apply to any taxpayer.',
  },
} as const;

const GuideCard = ({ guide, index }: { guide: typeof guides[number]; index: number }) => {
  const featured=featuredPosition(guide.slug)!==-1;
  return <article className={`kb-guide-card kb-guide-category-${guide.category.toLowerCase()}${featured?' kb-featured-card':''}`}>
    {featured&&<div className="kb-featured-badge" aria-label="Featured guide">★ Featured</div>}
    <div className="kb-card-meta"><span>{guide.category}</span></div>
    <div className="kb-card-number">{String(index+1).padStart(2,'0')}</div>
    <h3><Link href={`/knowledge-base/${guide.slug}`}>{guide.title}</Link></h3>
    <p>{guide.description}</p>
    <div className="kb-keyword">Covers: {guide.keyword}</div>
    <div className="kb-card-footer"><span>Updated {guide.updated}</span><Link className="kb-read" href={`/knowledge-base/${guide.slug}`}>Read guide <b>→</b></Link></div>
  </article>;
};

export default function KnowledgeBrowser(){
  const [filter,setFilter]=useState<Filter>('All');
  const visible=filter==='All'?orderedGuides:orderedGuides.filter(guide=>guide.category===filter);
  const visibleCategories=filter==='All'?categories:[filter];
  return <section className="kb-library" aria-labelledby="guide-library-title">
    <div className="kb-library-head">
      <div><p className="kb-kicker">Guide library</p><h2 id="guide-library-title">Explore all HMRC guides</h2></div>
      <p>Filter practical guidance by the type of tax enquiry you are dealing with.</p>
    </div>
    <div className="kb-filters kb-category-switcher" role="group" aria-label="Filter guides by category">
      {(['All',...categories] as Filter[]).map(item=><button key={item} type="button" className={filter===item?'active':''} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}<span>{item==='All'?guides.length:guides.filter(g=>g.category===item).length}</span></button>)}
    </div>
    <p className="kb-results" aria-live="polite">Showing {visible.length} {visible.length===1?'guide':'guides'}{filter!=='All'?` in ${filter}`:''}</p>
    <div className="kb-category-collections">
      {visibleCategories.map(category=>{const categoryGuides=orderedGuides.filter(guide=>guide.category===category);const details=categoryDetails[category];return <section className={`kb-collection kb-collection-${category.toLowerCase()}`} key={category} aria-labelledby={`kb-${category.toLowerCase()}-title`}>
        <header className="kb-collection-head">
          <div className="kb-collection-number">{details.number}</div>
          <div><span>{details.eyebrow}</span><h3 id={`kb-${category.toLowerCase()}-title`}>{category} guides</h3><p>{details.description}</p></div>
          <strong>{categoryGuides.length} {categoryGuides.length===1?'guide':'guides'}</strong>
        </header>
        <div className="kb-grid kb-all-grid">{categoryGuides.map((guide,index)=><GuideCard guide={guide} index={index} key={guide.slug}/>)}</div>
      </section>})}
    </div>
  </section>
}
