export type IndustryPage={
  slug:string;
  title:string;
  shortTitle:string;
  seoTitle:string;
  description:string;
  directAnswer:string;
  enquiryCategory:string;
  enquiryDetail:string;
  incomeSources:string[];
  records:string[];
  expenseRisks:string[];
  taxConsiderations:{title:string;detail:string}[];
  hmrcQuestions:string[];
  actions:string[];
  example:{title:string;paragraphs:string[]};
  faqs:[string,string][];
  pathway:{problem:{title:string;href:string};question:{title:string;href:string};guide:{title:string;href:string}};
  sources:[string,string][];
};

export const industries:IndustryPage[]=[
  {
    slug:'hmrc-enquiries-for-landlords',
    title:'HMRC Enquiries for Landlords: Rental Income, Expenses and Records',
    shortTitle:'Landlords',
    seoTitle:'HMRC Landlord Enquiries & Rental Income',
    description:'Industry-specific HMRC enquiry guidance for UK landlords covering rent, property expenses, finance costs, ownership, short-term lets and disclosure.',
    directAnswer:'A landlord enquiry usually tests whether all rent was declared, who beneficially owned the property, whether expenses were revenue or capital, and whether finance costs and private-use periods were treated correctly. Reconcile rent property by property and tax year, preserve agent and bank evidence, and distinguish repairs from improvements before answering HMRC.',
    enquiryCategory:'undeclared-income-disclosure',
    enquiryDetail:'Rental or property income',
    incomeSources:['Residential rent and service charges','Short-term and holiday-let receipts','Rent-a-room receipts','Insurance or tenant compensation','Deposits retained under the tenancy','Overseas property income'],
    records:['Tenancy and management agreements','Letting-agent annual statements','Bank and platform transaction reports','Completion statements and ownership documents','Mortgage-interest certificates','Repair, improvement and running-cost invoices','Occupancy and private-use calendars','Filed returns and property computations'],
    expenseRisks:['Treating capital improvements as repairs','Claiming the mortgage repayment rather than applying the relevant finance-cost rules','Claiming private, pre-letting or post-letting costs without analysis','Using net agent payouts instead of reconciling gross rent','Ignoring jointly owned income or assuming bank receipt determines beneficial ownership','Carrying losses forward incorrectly'],
    taxConsiderations:[
      {title:'Income Tax',detail:'Property profit is calculated by owner and tax year. Ownership, losses, allowances and the cash or accruals basis can affect the return.'},
      {title:'Capital Gains Tax',detail:'A sale, transfer or change of use can create separate reporting and payment obligations; enhancement expenditure must be distinguished from repairs.'},
      {title:'VAT',detail:'Ordinary residential letting is generally exempt, while holiday accommodation and some commercial-property activity require separate VAT analysis.'},
      {title:'PAYE',detail:'A landlord employing staff may have employer obligations; paying a cleaner or manager does not automatically determine employment status.'}
    ],
    hmrcQuestions:['Who owned the property and in what shares during each period?','What was the gross rent before agent or platform deductions?','How do bank deposits reconcile to tenancy and agent records?','Which costs were repairs and which improved the property?','How were mortgage interest and finance costs treated?','Were there vacant, private-use or owner-occupation periods?','Does the same issue affect another property or tax year?'],
    actions:['List every property, owner and letting period','Reconcile gross rent to agent, platform and bank records','Review expenses invoice by invoice','Separate repairs, capital work and private costs','Check each filed return and disclosure route','Prepare a property-by-property response schedule'],
    example:{title:'Example: renovation costs challenged by HMRC',paragraphs:['A landlord replaces a worn kitchen between tenants and also changes the layout and adds higher-specification fittings. The accounts deduct the whole project as repairs.','The response separates like-for-like replacement work from capital improvement using invoices, plans and contractor descriptions. It then corrects the tax computation where necessary instead of defending the entire invoice under one label.']},
    faqs:[['Can HMRC see rental income paid through an agent?','HMRC can receive and request third-party information. The landlord should reconcile gross rent to agent deductions and the return.'],['Does joint ownership always mean a 50:50 tax split?','Not in every situation. Legal and beneficial ownership, relationship and any valid declaration must be checked.'],['Can landlords use the Let Property Campaign?','Eligible individual residential landlords may be able to use it; companies, trusts and other exclusions require a different route.']],
    pathway:{
      problem:{title:'Undeclared rental income: how to tell HMRC',href:'/hmrc-problems/undeclared-rental-income'},
      question:{title:'How do I disclose undeclared rental income?',href:'/hmrc-questions/forgot-declare-rental-income-hmrc'},
      guide:{title:'HMRC property income enquiry guide',href:'/knowledge-base/hmrc-property-income-enquiry'}
    },
    sources:[['GOV.UK: Tax on rental income','https://www.gov.uk/renting-out-a-property/paying-tax'],['GOV.UK: Property income records','https://www.gov.uk/renting-out-a-property/paying-tax'],['GOV.UK: Let Property Campaign','https://www.gov.uk/government/publications/let-property-campaign-your-guide-to-making-a-disclosure/let-property-campaign-your-guide-to-making-a-disclosure']]
  },
  {
    slug:'hmrc-compliance-checks-construction-cis',
    title:'HMRC Compliance Checks for Construction and CIS Businesses',
    shortTitle:'Construction and CIS',
    seoTitle:'HMRC CIS Compliance Checks for Construction',
    description:'Prepare a construction business for an HMRC compliance check involving CIS verification, deductions, subcontractors, employment status, VAT and PAYE.',
    directAnswer:'A construction-sector compliance check can examine CIS registration, subcontractor verification, deduction rates, materials, monthly returns, worker status, payroll and VAT. Reconcile each payment from invoice and bank record to the CIS return, verify that materials were treated correctly, and assess employment status separately from CIS verification.',
    enquiryCategory:'vat-paye-enquiry',
    enquiryDetail:'Construction Industry Scheme (CIS)',
    incomeSources:['Main-contractor certificates and applications','Stage and retention payments','Labour-only subcontracting receipts','Design, project-management and surveying fees','Plant and equipment hire','Materials recharged to customers','Reverse-charge construction services'],
    records:['CIS verification confirmations','Monthly returns and deduction statements','Subcontractor invoices and contracts','Applications, valuations and retention schedules','Bank payments and ledgers','Worker-status evidence','VAT invoices and domestic reverse-charge records','Payroll, FPS and EPS reports'],
    expenseRisks:['Unsupported materials deductions before calculating CIS','Personal labour or cash payments omitted from returns','Subcontractors treated as self-employed solely because they have a UTR','Plant, travel and subsistence claimed without business-purpose evidence','Private vehicle or tool costs included in full','Duplicate costs across job costing and accounts'],
    taxConsiderations:[
      {title:'CIS',detail:'Verification, deduction rates, monthly returns and payment statements must reconcile. Verification does not decide employment status.'},
      {title:'PAYE',detail:'Workers who are employees must be operated through PAYE even if they work on construction sites or previously registered for CIS.'},
      {title:'VAT',detail:'The domestic reverse charge can apply to specified construction services, subject to the parties, supply and end-user rules.'},
      {title:'Corporation Tax',detail:'Job costs, retentions, work in progress, provisions and director transactions should reconcile to the company return and accounts.'}
    ],
    hmrcQuestions:['Were all subcontractors verified before payment?','How were labour and qualifying materials separated?','Do monthly CIS returns reconcile to bank payments and accounts?','Why were particular workers treated as self-employed?','Was the domestic VAT reverse charge applied correctly?','How were retentions and work in progress recognised?','Were any subcontractors or workers paid in cash?'],
    actions:['Reconcile all subcontractor payments','Match verification and deduction records','Test materials claimed by subcontractor and invoice','Review worker status using actual practices','Reconcile CIS, PAYE, VAT and accounts','Prepare a contractor-by-contractor evidence index'],
    example:{title:'Example: CIS materials and status reviewed together',paragraphs:['A contractor excluded materials from CIS deductions using round-sum amounts, while several subcontractors worked under close supervision using company equipment.','The business reconstructs materials from invoices and purchase evidence, corrects unsupported deductions and performs a separate worker-status review. It does not treat CIS verification as proof that PAYE cannot apply.']},
    faqs:[['Does CIS registration prove self-employment?','No. CIS treatment and employment status are separate legal questions.'],['Can HMRC check VAT during a CIS review?','Yes. Construction checks can span CIS, PAYE, VAT and the underlying accounts.'],['Are all materials excluded before CIS deductions?','No. The contractor must apply the CIS rules and support the allowable materials amount.']],
    pathway:{
      problem:{title:'HMRC CIS compliance check',href:'/hmrc-problems/hmrc-cis-compliance-check'},
      question:{title:'What does HMRC check in a CIS and PAYE review?',href:'/hmrc-questions/hmrc-cis-paye-compliance-check'},
      guide:{title:'PAYE employer compliance check guide',href:'/knowledge-base/hmrc-paye-employer-compliance-check'}
    },
    sources:[['GOV.UK: Construction Industry Scheme','https://www.gov.uk/what-is-the-construction-industry-scheme'],['GOV.UK: CIS contractor responsibilities','https://www.gov.uk/what-you-must-do-as-a-cis-contractor'],['GOV.UK: VAT domestic reverse charge for construction','https://www.gov.uk/guidance/vat-domestic-reverse-charge-for-building-and-construction-services']]
  },
  {
    slug:'hmrc-enquiries-restaurants-hospitality',
    title:'HMRC Enquiries for Restaurants and Hospitality Businesses',
    shortTitle:'Restaurants and hospitality',
    seoTitle:'HMRC Restaurant & Hospitality Enquiries',
    description:'HMRC enquiry preparation for restaurants, cafés, pubs and hospitality businesses covering cash takings, delivery platforms, tips, VAT, PAYE and stock.',
    directAnswer:'A hospitality enquiry commonly compares till and booking records, card and delivery-platform settlements, cash banking, purchases, stock, VAT returns and payroll. Preserve EPOS data, reconcile gross sales by channel and VAT rate, explain cash used before banking, and review tips, staff meals and worker payments before responding.',
    enquiryCategory:'compliance-check',
    enquiryDetail:'My company or business records',
    incomeSources:['EPOS cash and card sales','Delivery-platform orders','Deposits, service charges and cancellation fees','Tips, gratuities and troncs','Events, catering and room hire','Gift vouchers and advance payments','Bar, takeaway and merchandise sales'],
    records:['EPOS Z-reads and audit logs','Merchant and delivery-platform statements','Booking and reservation systems','Daily cash and banking sheets','Purchase invoices and stock counts','VAT account and rate reports','Payroll, rota and tronc records','Refund, void, discount and complimentary-meal reports'],
    expenseRisks:['Cash purchases without valid invoices','Personal food, entertainment or family costs in business accounts','Unrecorded staff meals, benefits or drawings','Delivery-platform net settlements treated as turnover','Stock wastage used to explain differences without contemporaneous evidence','Incorrect VAT treatment of eat-in, takeaway, alcohol, service charges or vouchers'],
    taxConsiderations:[
      {title:'VAT',detail:'Sales may require different treatment depending on the product, consumption, service and timing. Till tax codes must match the actual supply.'},
      {title:'PAYE',detail:'Payroll, casual staff, benefits and staff meals may be reviewed. Employment obligations apply regardless of whether wages are paid by cash or bank.'},
      {title:'Tips and troncs',detail:'Income Tax and National Insurance treatment depends on who controls and distributes tips and how arrangements operate in practice.'},
      {title:'Corporation or Income Tax',detail:'Recorded turnover, stock, gross margin, owner drawings and platform receipts should reconcile to accounts and tax returns.'}
    ],
    hmrcQuestions:['How do EPOS sales reconcile to VAT returns and accounts?','Why do delivery-platform gross sales differ from bank settlements?','How is cash used before banking recorded?','Who controls and distributes tips and service charges?','How are voids, discounts, refunds and complimentary items authorised?','Do rotas reconcile to payroll and cash wage records?','How were different VAT rates configured and reviewed?'],
    actions:['Secure EPOS and platform exports','Reconcile sales by channel and VAT rate','Prepare a daily cash bridge','Review tips, payroll and staff benefits','Test stock, margin and wastage explanations','Submit indexed records with channel-specific reconciliations'],
    example:{title:'Example: delivery-platform sales appear understated',paragraphs:['HMRC compares platform gross order values with the smaller deposits in the restaurant’s bank. The deposits are after commission, refunds and promotional contributions.','The restaurant prepares a gross-to-net platform reconciliation and confirms that accounts and VAT returns began with gross sales. It separately tests the VAT treatment of platform-funded discounts rather than treating commission as a reduction in turnover.']},
    faqs:[['Does every cash difference mean undeclared sales?','No. Cash used for documented expenses, refunds or banking timing may explain differences, but the reconciliation must be reliable.'],['Can HMRC inspect EPOS data?','HMRC may request relevant digital and accounting records during a compliance check.'],['Are tips always subject to National Insurance?','Treatment depends on how tips are paid, controlled and distributed; the precise arrangement must be reviewed.']],
    pathway:{
      problem:{title:'HMRC questions about cash payments',href:'/hmrc-problems/hmrc-questions-about-cash-payments'},
      question:{title:'What triggers an HMRC compliance check?',href:'/hmrc-questions/what-triggers-hmrc-compliance-check'},
      guide:{title:'Complete HMRC compliance check guide',href:'/knowledge-base/what-is-an-hmrc-compliance-check'}
    },
    sources:[['GOV.UK: Keeping business records','https://www.gov.uk/self-employed-records'],['GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks'],['GOV.UK: Tips at work and tax','https://www.gov.uk/tips-at-work/tips-and-tax']]
  },
  {
    slug:'hmrc-undeclared-income-online-sellers',
    title:'HMRC Undeclared-Income Questions for Online Sellers',
    shortTitle:'Online sellers',
    seoTitle:'HMRC Undeclared Income for Online Sellers',
    description:'HMRC enquiry and disclosure guidance for eBay, Etsy, Amazon, Vinted and other online sellers covering platform reports, trading, expenses and VAT.',
    directAnswer:'Platform receipts are not automatically taxable profit, but an online seller may need to report trading income or gains. Reconcile each platform’s gross transaction report to refunds, fees, personal-item disposals, stock purchases and bank payouts. Establish whether the activity is trading, casual disposal or another source before applying allowances or making a disclosure.',
    enquiryCategory:'undeclared-income-disclosure',
    enquiryDetail:'Self-employed or trading income',
    incomeSources:['Marketplace product sales','Handmade or customised goods','Reselling purchased stock','Digital products and downloads','Affiliate, referral and advertising receipts','Shipping charged to customers','Foreign-currency and overseas marketplace sales'],
    records:['Platform annual and transaction reports','Listings, order and refund histories','Bank and payment-processor statements','Stock purchase and import invoices','Postage, packaging and platform-fee records','Inventory and year-end stock counts','Evidence of original cost for personal possessions','Filed returns and disclosure calculations'],
    expenseRisks:['Treating gross sales as profit or reporting only net payouts','Claiming the original cost of personal possessions without establishing the correct tax regime','Mixing private purchases and resale stock','Unsupported home, phone, vehicle or travel claims','Failing to account for closing stock','Ignoring foreign-currency conversions, import VAT or customs charges'],
    taxConsiderations:[
      {title:'Income Tax',detail:'Repeated commercial activity may constitute a trade. Profit, allowances, registration and record keeping must be assessed by tax year.'},
      {title:'Capital Gains Tax',detail:'Disposals of personal possessions are not automatically trading income; chattel and gain rules may need consideration.'},
      {title:'VAT',detail:'Taxable turnover is tested using the applicable registration rules and can include more than one platform or sales channel.'},
      {title:'Platform reporting',detail:'Digital platforms may collect and report seller information. Their gross figures still require reconciliation and tax analysis.'}
    ],
    hmrcQuestions:['Which platforms and seller accounts were used?','Were items bought or made for resale?','What were gross sales before fees, refunds and postage?','How were personal-item disposals separated from trading stock?','Do platform reports reconcile to bank and payment-processor receipts?','Was the VAT registration position monitored across all channels?','Does undeclared activity affect more than one tax year?'],
    actions:['Export every platform report','Separate trading from personal disposals','Reconcile gross sales to refunds, fees and payouts','Calculate stock and allowable costs by year','Check Income Tax, CGT and VAT positions','Choose the correct amendment or disclosure route'],
    example:{title:'Example: mixed personal and resale activity',paragraphs:['A seller uses one marketplace account for clearing old household items and buying branded goods for resale. HMRC’s platform total includes both activities.','The seller classifies transactions using listings, purchase evidence and frequency, calculates trading profit only for the resale activity, considers any separate disposal rules and explains the reconciliation rather than claiming the whole account is private.']},
    faqs:[['Does receiving a platform report mean tax is due?','Not automatically. The activity, ownership, costs, allowances and applicable tax regime determine the result.'],['Is the bank payout my taxable turnover?','Usually it is necessary to start from gross transactions and reconcile platform fees, refunds and other adjustments.'],['Should I wait for HMRC to contact me?','No. If taxable income was omitted, establish the complete position and use the appropriate correction or disclosure route.']],
    pathway:{
      problem:{title:'Side-hustle income not declared',href:'/hmrc-problems/side-hustle-income-not-declared'},
      question:{title:'How does HMRC find undeclared income?',href:'/hmrc-questions/how-hmrc-finds-undeclared-income'},
      guide:{title:'Undeclared income and HMRC disclosure help',href:'/hmrc-enquiry-help/undeclared-income-disclosure'}
    },
    sources:[['GOV.UK: Selling goods or services on a digital platform','https://www.gov.uk/guidance/selling-goods-or-services-on-a-digital-platform'],['GOV.UK: Check additional income tax','https://www.gov.uk/check-additional-income-tax'],['GOV.UK: VAT registration','https://www.gov.uk/vat-registration']]
  },
  {
    slug:'hmrc-enquiries-taxi-private-hire-delivery-drivers',
    title:'HMRC Enquiries for Taxi, Private-Hire and Delivery Drivers',
    shortTitle:'Taxi, private-hire and delivery drivers',
    seoTitle:'HMRC Enquiries for Taxi & Delivery Drivers',
    description:'HMRC enquiry guidance for taxi, Uber, Bolt, courier and delivery drivers covering platform income, cash fares, mileage, vehicle costs and VAT.',
    directAnswer:'A driver enquiry commonly compares platform transaction reports, cash fares, bank receipts, declared turnover and vehicle expenses. Download gross platform activity—not only net payouts—reconcile cash and card income by tax year, and establish whether mileage rates or actual vehicle costs were used. Employment status and VAT treatment depend on the real contractual and operating arrangements, not the app label alone.',
    enquiryCategory:'self-assessment-enquiry',
    enquiryDetail:'HMRC has asked for records or information',
    incomeSources:['Passenger fares paid through apps','Cash and card fares collected directly','Delivery and courier fees','Tips, incentives, quests and referral bonuses','Cancellation and waiting-time payments','Account work and local-authority contracts','Vehicle advertising and other connected receipts'],
    records:['Complete platform transaction and annual reports','Driver, courier and bank-account statements','Cash-fare or job logs','Mileage logs and journey-purpose records','Vehicle purchase, lease or finance agreements','Fuel, insurance, licensing and repair invoices','Commission and platform-fee statements','Filed returns and year-by-year reconciliations'],
    expenseRisks:['Declaring only the net payout after platform commission','Omitting cash fares, tips, incentives or work from a second app','Claiming private and commuting mileage as business travel','Claiming both simplified mileage and incompatible actual vehicle costs','Treating vehicle finance repayments as a single deductible expense','Claiming phone, food or clothing costs without applying the business-purpose rules','Failing to adjust for private use'],
    taxConsiderations:[
      {title:'Income Tax',detail:'Turnover and allowable expenses must be calculated for the individual’s actual activity and tax year. Platform receipts are evidence, not a complete tax computation.'},
      {title:'Employment status',detail:'Employee, worker and self-employed status depends on the contract and working reality. A platform description or tax registration does not determine status by itself.'},
      {title:'VAT',detail:'VAT registration and liability require analysis of the supplier, taxable turnover and supplies made. Do not assume every platform model produces the same VAT result.'},
      {title:'Vehicle costs',detail:'Simplified mileage and actual-cost methods have different rules. Vehicle type, acquisition, private use and the method already adopted can affect the claim.'}
    ],
    hmrcQuestions:['Which platforms, operators and driver accounts were used?','What was the gross fare or delivery income before commissions and fees?','How were cash jobs and tips recorded?','How do platform totals reconcile to bank deposits and the return?','What evidence supports business mileage and journey purpose?','Which vehicle-expense method was used and was private use excluded?','Was VAT registration considered using the correct turnover and supply analysis?','Does the same issue affect another platform or tax year?'],
    actions:['Export reports from every platform and operator','Reconstruct cash, card, tips and incentives','Reconcile gross activity to net payouts and bank receipts','Review mileage and vehicle costs under one valid method','Check status and VAT using the actual arrangements','Prepare a year-by-year response or disclosure schedule'],
    example:{title:'Example: app payouts do not match declared turnover',paragraphs:['A private-hire driver used two apps and declared the amounts deposited after commission. HMRC’s data shows higher gross bookings and separate incentive payments.','The driver reconciles gross fares, cancellations, tips, incentives, platform commissions and payouts for each app. Vehicle expenses are then tested separately, with private mileage excluded, instead of treating the difference between gross bookings and bank deposits as either all profit or all commission.']},
    faqs:[['Is the amount paid into my bank my taxable turnover?','Not necessarily. Start with gross business receipts and separately analyse fees, refunds and allowable costs.'],['Can I claim every mile driven while logged into an app?','No automatic rule makes every logged-in mile allowable. Journey purpose, activity and the applicable expense method must be established.'],['Does working through an app always mean self-employment?','No. Status depends on the contractual terms and working reality.'],['Do platform reports replace my own records?','No. Drivers should retain records sufficient to support complete and accurate tax returns.']],
    pathway:{
      problem:{title:'HMRC mileage evidence request',href:'/hmrc-problems/hmrc-mileage-evidence-request'},
      question:{title:'What documents can HMRC request?',href:'/hmrc-questions/documents-hmrc-request-self-assessment-enquiry'},
      guide:{title:'HMRC Self Assessment enquiry guide',href:'/knowledge-base/hmrc-self-assessment-enquiry-guide'}
    },
    sources:[['GOV.UK: Check tax on additional income','https://www.gov.uk/check-additional-income-tax'],['GOV.UK: Simplified expenses for vehicles','https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles-'],['GOV.UK: Employment status','https://www.gov.uk/employment-status/selfemployed-contractor'],['GOV.UK: VAT registration','https://www.gov.uk/vat-registration']]
  },
  {
    slug:'hmrc-enquiries-doctors-dentists-healthcare-professionals',
    title:'HMRC Enquiries for Doctors, Dentists and Healthcare Professionals',
    shortTitle:'Doctors, dentists and healthcare professionals',
    seoTitle:'HMRC Enquiries for Doctors & Dentists',
    description:'HMRC enquiry guidance for doctors, dentists, locums and healthcare practices covering NHS and private income, status, expenses, VAT, PAYE and pensions.',
    directAnswer:'A healthcare-sector enquiry can compare NHS, practice, agency, locum and private-patient income with returns and accounts, while reviewing professional expenses, employment status, company or partnership transactions and pension information. Reconcile each income stream by payer and tax year. Do not assume all clinical income is VAT-exempt or that a locum is self-employed merely because the contract uses that label.',
    enquiryCategory:'compliance-check',
    enquiryDetail:'A specific transaction or tax relief',
    incomeSources:['NHS salary and taxable benefits','NHS or private-practice profit shares','Locum and agency assignments','Private-patient clinical fees','Medico-legal, report and expert-witness fees','Teaching, training, research and speaking income','Insurance, occupational-health and cosmetic-service income','Company dividends, salary and director transactions'],
    records:['P60s, payslips and benefits information','NHS, agency and practice remittance statements','Partnership accounts and allocation schedules','Private-patient invoices and merchant reports','Locum contracts, rotas and working-practice evidence','Professional subscription and indemnity invoices','Travel, course and equipment records','Pension savings and scheme statements','Company, payroll and director-loan records'],
    expenseRisks:['Claiming all professional subscriptions without checking whether the body and payment qualify','Treating ordinary commuting or dual-purpose travel as wholly allowable','Claiming training that creates new expertise without analysing its tax treatment','Deducting private clothing or general living costs','Putting personal costs through a practice company or partnership','Claiming equipment without considering capital treatment and private use','Using estimated indemnity, course or locum costs without primary evidence'],
    taxConsiderations:[
      {title:'Employment status and PAYE',detail:'Locum and sessional status depends on the full contractual and working arrangements. PAYE obligations cannot be decided from the invoice or job title alone.'},
      {title:'VAT',detail:'Certain qualifying medical-care services can be exempt, but exemption is not universal. Cosmetic, consultancy, report, training and other supplies may require separate purpose-and-supply analysis.'},
      {title:'Partnerships and companies',detail:'Profit allocations, drawings, management charges, dividends, benefits and director-loan movements should reconcile across the entity and individual returns.'},
      {title:'Pensions',detail:'Tax charges and relief can depend on scheme inputs, taxable income, elections and the relevant year. Pension statements should be reconciled rather than applying a single threshold from memory.'}
    ],
    hmrcQuestions:['Have all NHS, agency, practice and private income streams been included?','How do remittances and patient receipts reconcile to accounts and bank records?','Why was a particular locum engagement treated as self-employed?','Which professional fees and subscriptions were claimed, and who paid them?','What was the purpose and content of training or travel expenditure?','Which services were treated as VAT-exempt and why?','How were partnership profits, company payments or director balances reported?','Do pension scheme records reconcile to relief claimed or charges reported?'],
    actions:['Map every payer and professional role','Reconcile employment, partnership, company and self-employed income','Review locum status using contracts and actual practice','Test subscriptions, training, travel and equipment claims','Review VAT treatment service by service','Reconcile pension and entity records to filed returns'],
    example:{title:'Example: mixed locum and private-practice income',paragraphs:['A clinician works through an agency, invoices a private clinic through a company and receives separate report-writing fees. The original tax file groups all receipts as clinical income and assumes the same VAT and status treatment.','The response separates each engagement, reconciles gross receipts and applies status and VAT analysis to the actual contractual purpose and working arrangements. It also traces company payments to salary, expenses, dividends or director-loan entries rather than treating every withdrawal identically.']},
    faqs:[['Are all services provided by a doctor or dentist exempt from VAT?','No. Exemption depends on the nature and principal purpose of the supply and the conditions in the applicable rules.'],['Is every locum self-employed?','No. Status depends on the individual engagement and working reality.'],['Are professional subscriptions automatically deductible?','No. The payer, employment or business context and the relevant approved body or expense rules must be checked.'],['Can HMRC review pension information during an enquiry?','Yes, where pension relief or a tax charge is relevant to the return being checked.']],
    pathway:{
      problem:{title:'HMRC asking for proof of income',href:'/hmrc-problems/hmrc-asking-for-proof-of-income'},
      question:{title:'What triggers an HMRC compliance check?',href:'/hmrc-questions/what-triggers-hmrc-compliance-check'},
      guide:{title:'Complete HMRC compliance check guide',href:'/knowledge-base/what-is-an-hmrc-compliance-check'}
    },
    sources:[['GOV.UK: Employment status','https://www.gov.uk/employment-status/selfemployed-contractor'],['GOV.UK: Professional fees and subscriptions tax relief','https://www.gov.uk/tax-relief-for-employees/professional-fees-and-subscriptions'],['HMRC: Health professionals and VAT Notice 701/57','https://www.gov.uk/guidance/health-professionals-pharmaceutical-products-and-vat-notice-70157'],['GOV.UK: Tax on private pension contributions','https://www.gov.uk/tax-on-your-private-pension/pension-tax-relief']]
  }
];
