import HomeClient, { type HomeGuideCard } from './HomeClient';
import { guides } from './knowledge-base/guides';

const featuredSlugs = [
  'what-is-an-hmrc-compliance-check',
  'hmrc-self-assessment-enquiry-guide',
  'appeal-hmrc-tax-penalty',
] as const;

const toHomeCard = ({ slug, category, title, description, updated }: (typeof guides)[number]): HomeGuideCard => ({
  slug, category, title, description, updated,
});

export default function Page() {
  const featuredGuides = featuredSlugs
    .map(slug => guides.find(guide => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide))
    .map(toHomeCard);

  const latestGuides = [...guides]
    .reverse()
    .filter(guide => !featuredSlugs.includes(guide.slug as (typeof featuredSlugs)[number]))
    .slice(0, 3)
    .map(toHomeCard);

  return <HomeClient featuredGuides={featuredGuides} latestGuides={latestGuides} />;
}
