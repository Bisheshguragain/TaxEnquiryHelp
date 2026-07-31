import type{Metadata}from'next';
import Link from'next/link';
import VatCalculator from'./VatCalculator';
import'./vat-calculator.css';

export const metadata:Metadata={
  title:'UK VAT Calculator: Add or Remove VAT',
  description:'Free UK VAT calculator for adding or removing VAT at 20%, 5%, 0% or a custom rate. See the net amount, VAT element and gross total instantly.',
  alternates:{canonical:'/calculators/vat-calculator'},
  openGraph:{title:'UK VAT Calculator: Add or Remove VAT',description:'Calculate UK VAT at 20%, 5%, 0% or a custom rate.',url:'/calculators/vat-calculator',type:'website',locale:'en_GB',siteName:'TaxEnquiryHelp',images:['/og-tax-enquiry-help.png']},
  twitter:{card:'summary_large_image',title:'UK VAT Calculator',description:'Add or remove UK VAT and see the net, VAT and gross amounts.',images:['/og-tax-enquiry-help.png']}
};

export default function VatCalculatorPage(){
  const calculatorSchema={'@context':'https://schema.org','@type':'WebApplication',name:'UK VAT Calculator',url:'https://www.taxenquiryhelp.co.uk/calculators/vat-calculator',applicationCategory:'FinanceApplication',operatingSystem:'Any',browserRequirements:'Requires JavaScript',offers:{'@type':'Offer',price:'0',priceCurrency:'GBP'},description:'Calculate net, VAT and gross amounts using UK VAT rates.'};
  const crumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.taxenquiryhelp.co.uk/'},{'@type':'ListItem',position:2,name:'Calculators',item:'https://www.taxenquiryhelp.co.uk/calculators/vat-calculator'},{'@type':'ListItem',position:3,name:'VAT Calculator',item:'https://www.taxenquiryhelp.co.uk/calculators/vat-calculator'}]};
  return <main className="vat-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(calculatorSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(crumbs)}}/>
    <section className="vat-hero">
      <div className="vat-wrap">
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><span>Calculators</span><span>›</span><span>VAT Calculator</span></nav>
        <p className="vat-kicker">Free UK business calculator</p>
        <h1>UK VAT calculator</h1>
        <p>Add VAT to a net price or remove VAT from a VAT-inclusive total. Calculate the net value, VAT element and gross amount using the standard, reduced or zero rate.</p>
      </div>
    </section>

    <div className="vat-wrap vat-content">
      <VatCalculator/>

      <section className="vat-explainer">
        <div>
          <p className="vat-kicker dark">How it works</p>
          <h2>Adding and removing VAT correctly</h2>
          <p>To add 20% VAT, multiply the VAT-exclusive amount by 1.20. To remove 20% VAT from a VAT-inclusive price, divide the total by 1.20. Simply subtracting 20% from the gross price gives the wrong answer.</p>
        </div>
        <div className="vat-formulas">
          <article><span>Add 20% VAT</span><strong>£100 × 1.20 = £120</strong><p>Net £100 + VAT £20</p></article>
          <article><span>Remove 20% VAT</span><strong>£120 ÷ 1.20 = £100</strong><p>Gross £120 − VAT £20</p></article>
          <article><span>VAT within a 20% total</span><strong>£120 ÷ 6 = £20</strong><p>The standard-rate VAT fraction is one-sixth.</p></article>
        </div>
      </section>

      <section className="vat-rates-guide">
        <h2>Current UK VAT rates</h2>
        <div>
          <article><strong>20%</strong><h3>Standard rate</h3><p>Applies to most goods and services unless a different VAT treatment is specified.</p></article>
          <article><strong>5%</strong><h3>Reduced rate</h3><p>Applies only to qualifying goods and services under the relevant VAT rules.</p></article>
          <article><strong>0%</strong><h3>Zero rate</h3><p>No VAT is charged, but the supply remains taxable and is different from VAT exemption.</p></article>
        </div>
      </section>

      <aside className="vat-note"><strong>Important:</strong> This calculator provides arithmetic only. The correct VAT rate depends on the particular supply, customer, place and date. Zero-rated, exempt and outside-the-scope supplies are not interchangeable. Check <a href="https://www.gov.uk/vat-rates" rel="external">current GOV.UK VAT guidance ↗</a> or obtain professional advice where the treatment is uncertain.</aside>

      <section className="vat-cta"><div><p className="vat-kicker">HMRC checking your VAT?</p><h2>Get help responding to an HMRC VAT enquiry.</h2><p>Explain the letter, periods and response deadline so the right specialist can understand the issue.</p></div><Link href="/?category=vat-paye-enquiry#enquiry">Start a confidential enquiry →</Link></section>
    </div>
  </main>
}
