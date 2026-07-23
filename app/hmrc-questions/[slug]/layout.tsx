import IndustryCrossLinks from '../../industries/IndustryCrossLinks';

export default async function QuestionLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  return <>{children}<IndustryCrossLinks type="question" slug={slug} /></>;
}
