import type {Metadata} from 'next';
import Link from 'next/link';
import {problems} from './problems';
import '../knowledge-base/knowledge.css';

export const metadata:Metadata={
  title:'HMRC Problem Pages: Letters, Penalties and Tax Return Errors',
  description:'Focused, source-backed help with HMRC letters, evidence requests, penalties, disclosures, Corporation Tax, PAYE, CIS and VAT errors.',
  alternates:{canonical:'/hmrc-problems'}
};

const categories=[...new Set(problems.map(problem=>problem.category))];

export default function ProblemsHub(){return <main className="kb question-hub"><section className="kb-hero"><div className="kb-wrap"><p className="kb-kicker">HMRC problem pages</p><h1>Practical next steps for a specific HMRC problem.</h1><p>Choose from {problems.length} focused pages covering HMRC letters, evidence requests, inspections, penalties, disclosures and business-tax errors. Every page contains a direct answer, evidence checklist, worked example and official sources.</p></div></section><div className="kb-wrap question-clusters">{categories.map((category,index)=>{const items=problems.filter(problem=>problem.category===category);return <section className={`question-cluster-tone-${index%6+1}`} key={category}><header><span>{String(index+1).padStart(2,'0')}</span><div><p>Problem category</p><h2>{category}</h2></div><strong>{items.length} pages</strong></header><div>{items.map(item=><article key={item.slug}><h3><Link href={`/hmrc-problems/${item.slug}`}>{item.title}</Link></h3><p>{item.description}</p><Link href={`/hmrc-problems/${item.slug}`}>See what to do →</Link></article>)}</div></section>})}</div></main>}
