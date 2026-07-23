import Link from 'next/link';

type IndustryLink = { href: string; label: string; context: string };

const industryLinks: Record<string, IndustryLink[]> = {
  'problem:undeclared-rental-income': [{ href: '/industries/hmrc-enquiries-for-landlords', label: 'HMRC enquiries for landlords', context: 'Rental-income records, property expenses and disclosure considerations.' }],
  'problem:let-property-campaign': [{ href: '/industries/hmrc-enquiries-for-landlords', label: 'HMRC enquiries for landlords', context: 'See the wider landlord enquiry process and records HMRC may check.' }],
  'problem:hmrc-cis-compliance-check': [{ href: '/industries/hmrc-compliance-checks-construction-cis', label: 'Construction and CIS compliance checks', context: 'Industry-specific guidance on verification, deductions, status and subcontractor records.' }],
  'problem:hmrc-questions-about-cash-payments': [{ href: '/industries/hmrc-enquiries-restaurants-hospitality', label: 'HMRC enquiries for restaurants and hospitality', context: 'Cash takings, tips, stock, VAT and payroll risks in hospitality businesses.' }],
  'problem:side-hustle-income-not-declared': [{ href: '/industries/hmrc-undeclared-income-online-sellers', label: 'HMRC questions for online sellers', context: 'Marketplace records, platform income, fees, stock and trading-allowance considerations.' }],
  'problem:hmrc-mileage-evidence-request': [{ href: '/industries/hmrc-enquiries-taxi-private-hire-delivery-drivers', label: 'HMRC enquiries for taxi and delivery drivers', context: 'Mileage evidence, platform statements, vehicle costs and cash receipts.' }],
  'problem:hmrc-asking-for-proof-of-income': [{ href: '/industries/hmrc-enquiries-doctors-dentists-healthcare-professionals', label: 'HMRC enquiries for healthcare professionals', context: 'NHS and private income, practice records, expenses, VAT and payroll considerations.' }],
  'question:forgot-declare-rental-income-hmrc': [{ href: '/industries/hmrc-enquiries-for-landlords', label: 'HMRC enquiries for landlords', context: 'A practical industry guide to rent, expenses, ownership and disclosure routes.' }],
  'question:hmrc-cis-paye-compliance-check': [{ href: '/industries/hmrc-compliance-checks-construction-cis', label: 'Construction and CIS compliance checks', context: 'Explore contractor, subcontractor, status, PAYE and CIS record risks together.' }],
  'question:how-hmrc-finds-undeclared-income': [{ href: '/industries/hmrc-undeclared-income-online-sellers', label: 'HMRC questions for online sellers', context: 'Platform data, payment processors, stock and multi-channel sales reconciliations.' }],
  'question:documents-hmrc-request-self-assessment-enquiry': [{ href: '/industries/hmrc-enquiries-taxi-private-hire-delivery-drivers', label: 'HMRC enquiries for taxi and delivery drivers', context: 'Typical platform, mileage, vehicle and Self Assessment records for drivers.' }],
  'question:can-hmrc-check-business-bank-account': [
    { href: '/industries/hmrc-enquiries-restaurants-hospitality', label: 'HMRC enquiries for restaurants and hospitality', context: 'How banking, cash takings, card settlements, VAT and payroll records connect.' },
    { href: '/industries/hmrc-enquiries-doctors-dentists-healthcare-professionals', label: 'HMRC enquiries for healthcare professionals', context: 'How practice income, private fees, expenses and business banking may be reviewed.' },
  ],
  'guide:hmrc-property-income-enquiry': [{ href: '/industries/hmrc-enquiries-for-landlords', label: 'HMRC enquiries for landlords', context: 'Apply the property-income guidance to common landlord records and risks.' }],
  'guide:hmrc-cis-compliance-check': [{ href: '/industries/hmrc-compliance-checks-construction-cis', label: 'Construction and CIS compliance checks', context: 'Industry-specific questions on verification, deductions, status and payments.' }],
  'guide:hmrc-paye-employer-compliance-check': [{ href: '/industries/hmrc-enquiries-restaurants-hospitality', label: 'HMRC enquiries for restaurants and hospitality', context: 'PAYE, tips, casual labour, benefits and employment-status considerations.' }],
  'guide:hmrc-self-assessment-enquiry-guide': [{ href: '/industries/hmrc-enquiries-taxi-private-hire-delivery-drivers', label: 'HMRC enquiries for taxi and delivery drivers', context: 'Apply the Self Assessment process to driver income, mileage and platform records.' }],
  'guide:what-is-an-hmrc-compliance-check': [
    { href: '/industries/hmrc-undeclared-income-online-sellers', label: 'HMRC questions for online sellers', context: 'Marketplace data, trading status, VAT and stock records in an online-sales check.' },
    { href: '/industries/hmrc-enquiries-doctors-dentists-healthcare-professionals', label: 'HMRC enquiries for healthcare professionals', context: 'NHS and private income, practice arrangements, expenses and payroll records.' },
  ],
};

export default function IndustryCrossLinks({ type, slug }: { type: 'problem' | 'question' | 'guide'; slug: string }) {
  const links = industryLinks[`${type}:${slug}`];
  if (!links?.length) return null;

  return (
    <aside className="industry-cross-links" aria-labelledby={`industry-links-${type}-${slug}`}>
      <div>
        <p>Industry-specific guidance</p>
        <h2 id={`industry-links-${type}-${slug}`}>How this issue can apply in practice</h2>
      </div>
      <div className="industry-cross-links-grid">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <strong>{link.label}</strong>
            <span>{link.context}</span>
            <b aria-hidden="true">Explore the industry guide →</b>
          </Link>
        ))}
      </div>
    </aside>
  );
}
