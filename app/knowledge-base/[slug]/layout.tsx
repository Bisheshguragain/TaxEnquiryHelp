import IndustryCrossLinks from '../../industries/IndustryCrossLinks';

export default async function GuideLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  return <>{children}<IndustryCrossLinks type="guide" slug={slug} /></>;
}
