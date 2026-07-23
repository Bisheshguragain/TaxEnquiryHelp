import type { MetadataRoute } from 'next';
import { guides } from './knowledge-base/guides';
import { enquiryServices } from './hmrc-enquiry-help/services';
import { questions } from './hmrc-questions/questions';
import { problems } from './hmrc-problems/problems';

export default function sitemap(): MetadataRoute.Sitemap {
  const base='https://www.taxenquiryhelp.co.uk';
  const updated=new Date('2026-07-23');
  return [
    {url:base,lastModified:updated,changeFrequency:'weekly',priority:1},
    {url:`${base}/knowledge-base`,lastModified:updated,changeFrequency:'weekly',priority:.9},
    {url:`${base}/faqs`,lastModified:updated,changeFrequency:'monthly',priority:.9},
    {url:`${base}/hmrc-questions`,lastModified:updated,changeFrequency:'weekly',priority:.9},
    {url:`${base}/hmrc-problems`,lastModified:updated,changeFrequency:'weekly',priority:.9},
    {url:`${base}/contact`,lastModified:updated,changeFrequency:'monthly',priority:.7},
    ...['privacy','cookies','terms'].map(slug=>({url:`${base}/${slug}`,lastModified:updated,changeFrequency:'yearly' as const,priority:.2})),
    ...guides.map(guide=>({url:`${base}/knowledge-base/${guide.slug}`,lastModified:new Date(guide.reviewed==='23 July 2026'?'2026-07-23':'2026-07-17'),changeFrequency:'monthly' as const,priority:.8})),
    ...enquiryServices.map(service=>({url:`${base}/hmrc-enquiry-help/${service.slug}`,lastModified:updated,changeFrequency:'monthly' as const,priority:.9})),
    ...questions.map(question=>({url:`${base}/hmrc-questions/${question.slug}`,lastModified:new Date('2026-07-23'),changeFrequency:'monthly' as const,priority:.75})),
    ...problems.map(problem=>({url:`${base}/hmrc-problems/${problem.slug}`,lastModified:updated,changeFrequency:'monthly' as const,priority:.82})),
  ];
}
