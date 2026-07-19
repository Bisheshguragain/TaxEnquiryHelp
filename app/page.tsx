import HomeClient from './HomeClient';
import { featuredGuides, latestGuides } from './home-guide-cards';

export default function Page() {
  return <HomeClient featuredGuides={featuredGuides} latestGuides={latestGuides} />;
}
