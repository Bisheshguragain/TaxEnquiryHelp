import type {ProblemPage} from './problems';

const gov=(name:string,href:string):[string,string]=>[name,href];

export const phase4Problems:ProblemPage[]=[
  {
    slug:'late-filing-penalty-appeal',
    category:'Penalties',
    title:'HMRC Late Filing Penalty Appeal: Grounds, Evidence and Deadlines',
    description:'Received an HMRC late filing penalty? Check the notice, protect the appeal deadline and build evidence for reasonable excuse or another valid appeal ground.',
    directAnswer:'A late filing penalty can be appealed if the decision or calculation is wrong, the filing obligation did not apply, or a reasonable excuse prevented filing on time. Follow the method and deadline on the notice—commonly 30 days—identify the exact penalty, explain the full chronology and attach evidence. File the outstanding return as soon as possible because an appeal does not remove the filing obligation.',
    enquiryCategory:'penalties-and-tax-appeals',
    enquiryDetail:'Late filing or payment penalty',
    relatedQuestion:{title:'How do I appeal an HMRC penalty?',href:'/hmrc-questions/how-to-appeal-hmrc-penalty'},
    canonicalGuide:{title:'How to appeal an HMRC tax decision or penalty',href:'/knowledge-base/appeal-hmrc-tax-penalty'},
    sections:[
      {title:'Check what HMRC has penalised',paragraphs:['Read the notice rather than assuming it relates only to the first fixed penalty. A continuing failure can generate daily, six-month and twelve-month penalties under the applicable regime. Record each notice date, tax period, amount and appeal instruction.','Confirm whether the return was required, when HMRC says it was due and when it was received. A penalty can be challenged because the factual basis or calculation is wrong even where reasonable excuse is not the main ground.']},
      {title:'Build a reasonable-excuse chronology',paragraphs:['A reasonable excuse is assessed in the taxpayer’s circumstances. Explain what happened, how it prevented filing, what reasonable steps were taken and when the obstacle ended. The return should then have been filed without unreasonable delay.','Evidence can include medical records, bereavement documents, service-status reports, correspondence with an adviser and submission receipts. A label such as “illness” or “computer problem” without dates and impact is rarely enough.']},
      {title:'Submit the appeal correctly',paragraphs:['Use the route stated on the penalty notice. Identify every appealed decision, the outcome sought and the supporting facts. Keep proof of online submission or delivery.','If evidence is still being collected, protect the deadline with clear initial grounds and say when the remaining material will follow. Informal calls and complaints do not necessarily constitute a statutory appeal.']},
      {title:'If the appeal is late or rejected',paragraphs:['Submit a late appeal immediately and explain the whole period of delay. Permission is not automatic. If HMRC rejects the substantive appeal, the decision should explain review or tribunal rights and the next deadline.','Treat payment, collection and appeal as separate issues. Check whether the notice requires payment while the dispute continues and obtain advice where hardship or enforcement is involved.']}
    ],
    actions:['List every penalty notice and deadline','File the outstanding return','Prepare a date-by-date chronology','Collect independent supporting evidence','Submit the appeal through the stated route','Diary review or tribunal deadlines'],
    records:['Penalty notices','Return and filing receipt','HMRC correspondence','Medical, system or delivery evidence','Adviser correspondence','Appeal acknowledgement'],
    example:{title:'Example: illness spans the filing deadline',paragraphs:['A taxpayer was unexpectedly hospitalised shortly before the deadline and remained unable to manage their affairs for several weeks. The return was filed promptly after recovery.','The appeal gives exact dates, explains why no reasonable alternative was available and includes supporting evidence. It addresses the period after discharge instead of relying only on the word “illness”.']},
    faqs:[['Is having no tax to pay enough to cancel a late filing penalty?','No. Filing penalties can apply even where no tax is due; valid grounds must address the penalty rules.'],['Does appealing extend the deadline for filing the return?','No. File the return as soon as possible.'],['Can I appeal more than one penalty notice together?','Identify every decision clearly and follow the instructions applying to each notice.']],
    sources:[gov('GOV.UK: Appeal a Self Assessment penalty','https://www.gov.uk/tax-appeals/penalty'),gov('GOV.UK: Reasonable excuses','https://www.gov.uk/tax-appeals/reasonable-excuses')]
  },
  {
    slug:'late-payment-penalty-appeal',
    category:'Penalties',
    title:'HMRC Late Payment Penalty Appeal: What to Check Before You Appeal',
    description:'How to challenge an HMRC late payment penalty, distinguish it from interest, evidence reasonable excuse and deal with an unpaid tax balance.',
    directAnswer:'Check whether the notice is a late payment penalty, interest charge or both. An appeal may be available where the penalty is factually or legally wrong or a reasonable excuse prevented payment, but inability to pay is not automatically a reasonable excuse. Appeal by the notice deadline, evidence the circumstances and address the underlying tax separately through payment or an agreed arrangement.',
    enquiryCategory:'penalties-and-tax-appeals',
    enquiryDetail:'Late filing or payment penalty',
    relatedQuestion:{title:'What counts as a reasonable excuse for an HMRC penalty?',href:'/hmrc-questions/what-counts-reasonable-excuse-hmrc'},
    canonicalGuide:{title:'How to appeal an HMRC tax decision or penalty',href:'/knowledge-base/appeal-hmrc-tax-penalty'},
    sections:[
      {title:'Separate penalty, interest and tax',paragraphs:['Reconcile the notice to the account. Interest compensates for late tax and is distinct from a behavioural penalty; appeal rights and arguments may differ. Check payment dates, allocations, amendments and whether HMRC credited a payment to another period.','Do not assume that appealing the underlying assessment automatically appeals a separate penalty. Each decision and deadline should be identified.']},
      {title:'Assess the grounds',paragraphs:['Possible issues include an incorrect due date, duplicated charge, payment made on time, incorrect allocation or a reasonable excuse. Financial difficulty alone is not automatically sufficient, although the event causing it and the taxpayer’s actions may be relevant.','Explain attempts to pay, contact with HMRC, access to funds and how promptly the position was remedied. Avoid generic wording that does not connect the event to the missed payment.']},
      {title:'Payment plans and appeals are different',paragraphs:['A Time to Pay arrangement concerns how a debt will be paid; it does not by itself establish that a penalty is wrong. Conversely, an appeal does not necessarily stop interest or collection.','Contact HMRC promptly if payment cannot be made. Preserve the appeal deadline while discussing affordability, and confirm any arrangement in writing.']},
      {title:'Prepare an evidence-led submission',paragraphs:['State the decision, amount, tax period, grounds and requested result. Attach bank evidence, payment confirmations, HMRC messages and a concise chronology.','Keep the argument proportionate. If the charge is a system or allocation error, lead with the transaction evidence rather than a long narrative about hardship.']}
    ],
    actions:['Reconcile the tax account','Identify each appealable decision','Check the deadline and appeal route','Collect payment and chronology evidence','Address the outstanding balance separately','Keep acknowledgement and follow-up dates'],
    records:['Penalty and interest notices','Tax-account statement','Bank payment confirmations','Time to Pay correspondence','Evidence supporting reasonable excuse','Appeal receipt'],
    example:{title:'Example: payment allocated to the wrong period',paragraphs:['A company paid before the due date but used a reference that caused allocation to another liability. The bank evidence matches the amount and date.','The appeal clearly distinguishes the allocation problem from inability to pay and asks HMRC to correct the account and resulting penalty calculation.']},
    faqs:[['Can I appeal late-payment interest?','Interest and penalties are different. Check the legal basis and notice; correcting the underlying dates or amount may change interest.'],['Does a Time to Pay arrangement cancel penalties?','Not automatically. Its effect depends on the applicable rules and timing.'],['Should I pay while appealing?','Follow the notice and obtain advice on payment, postponement or collection for the relevant tax.']],
    sources:[gov('GOV.UK: Appeal a tax penalty','https://www.gov.uk/tax-appeals/penalty'),gov('GOV.UK: If you cannot pay your tax bill on time','https://www.gov.uk/difficulties-paying-hmrc')]
  },
  {
    slug:'hmrc-asking-for-proof-of-income',
    category:'Income and evidence',
    title:'HMRC Asking for Proof of Income: Records to Provide and How to Respond',
    description:'HMRC asked for proof of income? Identify the legal context, reconcile declared income and provide a clear, proportionate evidence pack.',
    directAnswer:'HMRC may ask for records reasonably required to check taxable income, such as payslips, invoices, bank or platform statements, contracts and accounts. First confirm the tax, period and whether the request is informal or a formal information notice. Reconcile gross income to the return and explain non-taxable receipts, transfers and timing differences rather than sending unstructured records.',
    enquiryCategory:'self-assessment-enquiry',
    enquiryDetail:'HMRC has asked for records or information',
    relatedQuestion:{title:'What documents can HMRC request in a Self Assessment enquiry?',href:'/hmrc-questions/documents-hmrc-request-self-assessment-enquiry'},
    canonicalGuide:{title:'HMRC Self Assessment enquiry guide',href:'/knowledge-base/hmrc-self-assessment-enquiry-guide'},
    sections:[
      {title:'Understand the request',paragraphs:['Record the response deadline, tax years, income sources and exact documents requested. A Schedule 36 information notice can carry legal consequences and appeal rights that do not apply to an ordinary request.','Ask HMRC to clarify a vague scope before producing irrelevant personal material, but do not allow the deadline to pass while correspondence continues.']},
      {title:'Match evidence to each income source',paragraphs:['Employment income may be supported by payslips, P60s and benefits records; trading income by invoices, ledgers and bank receipts; property income by tenancy and agent statements; investment income by provider reports.','Third-party totals can be gross, duplicated or attributed to the wrong year. Build a bridge from source records to the return figure.']},
      {title:'Explain credits that are not income',paragraphs:['Bank credits may include loans, transfers, gifts, refunds, capital introduced or asset-sale proceeds. These are not automatically taxable income, but the explanation should be supported and consistent with other records.','Avoid unsupported labels. Trace significant credits to the originating account, agreement or transaction.']},
      {title:'Send a controlled evidence pack',paragraphs:['Answer HMRC’s questions in order, use an index and label documents consistently. State any missing records and how figures were reconstructed.','Use an agreed secure channel and retain an exact copy. Do not email sensitive records to the website’s general enquiry address.']}
    ],
    actions:['Confirm scope and legal basis','List income sources by year','Reconcile source totals to returns','Evidence non-income credits','Index the response pack','Submit securely before the deadline'],
    records:['HMRC request','Filed returns and computations','Payslips, invoices or statements','Bank and platform reports','Contracts and ownership evidence','Income reconciliation'],
    example:{title:'Example: platform receipts exceed declared turnover',paragraphs:['A platform report includes VAT, refunded orders and sales collected for another entity. The return shows net business turnover.','The taxpayer prepares a reconciliation showing gross report totals, deductions and ownership rather than asserting that the platform data is simply wrong.']},
    faqs:[['Can HMRC ask for bank statements as proof of income?','It may request relevant statements, subject to the scope and legal basis of the check.'],['What if a record is missing?','Explain why, obtain replacements and document any reasonable reconstruction.'],['Are all deposits taxable income?','No. The nature of each material receipt must be established.']],
    sources:[gov('GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks'),gov('HMRC compliance factsheets','https://www.gov.uk/government/collections/hm-revenue-and-customs-compliance-checks-factsheets')]
  },
  {
    slug:'hmrc-mileage-evidence-request',
    category:'Income and evidence',
    title:'HMRC Mileage Evidence Request: Proving Business Journeys and Claims',
    description:'HMRC checking a mileage claim? Reconstruct journeys, separate commuting and private travel, and reconcile mileage evidence to the tax return or payroll.',
    directAnswer:'HMRC may ask for mileage logs, journey purpose, dates, destinations, vehicle details and evidence that trips were business travel rather than ordinary commuting or private use. Reconcile the claim to the applicable method—mileage allowance, employee reimbursement or actual vehicle costs—and explain any reconstruction transparently.',
    enquiryCategory:'self-assessment-enquiry',
    enquiryDetail:'HMRC has asked for records or information',
    relatedQuestion:{title:'What documents can HMRC request in a Self Assessment enquiry?',href:'/hmrc-questions/documents-hmrc-request-self-assessment-enquiry'},
    canonicalGuide:{title:'HMRC Self Assessment enquiry guide',href:'/knowledge-base/hmrc-self-assessment-enquiry-guide'},
    sections:[
      {title:'Identify which mileage rule applies',paragraphs:['A sole trader using simplified mileage, an employee claiming tax relief, an employer reimbursing business travel and a company-car user may be subject to different rules. Start with the person, vehicle, journey and claim method.','Do not mix flat-rate mileage with actual vehicle running costs where the rules do not permit both. Confirm the treatment used in the filed return or payroll.']},
      {title:'Business travel versus commuting',paragraphs:['Record the commercial purpose, start and end points and workplace pattern. Ordinary travel between home and a permanent workplace is generally not business travel for employee-expense purposes. Temporary-workplace and itinerant-work rules require the facts.','For a trader, private use and travel with a dual purpose should be considered. A diary label alone does not determine deductibility.']},
      {title:'Reconstruct missing mileage carefully',paragraphs:['Use calendars, customer records, invoices, mapping records, fuel receipts and vehicle mileage histories to build a reproducible schedule. Mark estimates and assumptions.','Do not manufacture a contemporaneous log retrospectively. HMRC should be able to distinguish original records from a later reconstruction.']},
      {title:'Reconcile the claim',paragraphs:['Tie total business miles to the rate or cost calculation and then to the tax return, payroll or expense ledger. Explain reimbursements already received and avoid claiming the same cost twice.','Sample-check longer and repeated journeys for plausibility and retain the supporting schedule with the response.']}
    ],
    actions:['Identify the applicable mileage regime','Separate business, commuting and private journeys','Collect diaries and third-party evidence','Build a transparent journey schedule','Recalculate and reconcile the claim','Respond with indexed evidence'],
    records:['Mileage logs','Calendar and appointment records','Invoices and customer addresses','Vehicle and MOT mileage records','Expense claims and reimbursements','Return or payroll reconciliation'],
    example:{title:'Example: consultant works at several sites',paragraphs:['A consultant travels from home to client locations and also attends their employer’s permanent office. The original spreadsheet does not explain the destinations.','They reconstruct the journey purpose from calendars and invoices, separate ordinary commuting and reconcile allowable mileage to amounts already reimbursed.']},
    faqs:[['Are fuel receipts enough to prove business mileage?','Usually not by themselves; they do not show the journey purpose or business mileage.'],['Can I reconstruct a lost mileage log?','Yes, if the method and assumptions are transparent and supported by reliable evidence.'],['Can mileage and actual car costs both be claimed?','The answer depends on the taxpayer and chosen method; avoid double claims.']],
    sources:[gov('GOV.UK: Travel and mileage for employees','https://www.gov.uk/tax-relief-for-employees/vehicles-you-use-for-work'),gov('GOV.UK: Simplified expenses for vehicles','https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles-')]
  },
  {
    slug:'hmrc-questions-about-cash-payments',
    category:'Income and evidence',
    title:'HMRC Questions About Cash Payments: How to Reconcile Cash Takings',
    description:'HMRC asking about cash sales or payments? Reconcile till records, banking, expenses and drawings without assuming every cash difference is undeclared income.',
    directAnswer:'HMRC may test whether cash takings are complete by comparing tills, invoices, bookings, purchases, bankings and declared turnover. Preserve original records and build a cash reconciliation showing sales, petty cash, supplier payments, drawings and cash retained. Explain genuine differences with evidence; do not create backdated records or guess.',
    enquiryCategory:'compliance-check',
    enquiryDetail:'My company or business records',
    relatedQuestion:{title:'What triggers an HMRC compliance check?',href:'/hmrc-questions/what-triggers-hmrc-compliance-check'},
    canonicalGuide:{title:'What is an HMRC compliance check?',href:'/knowledge-base/what-is-an-hmrc-compliance-check'},
    sections:[
      {title:'Why HMRC focuses on cash',paragraphs:['Cash can move without a bank trail, so HMRC may compare recorded sales with sector patterns, bookings, stock, card receipts, purchases and personal drawings. A cash-heavy business is not automatically non-compliant.','Identify the precise periods and risks before answering. A sample week may not represent seasonal trading or exceptional closures.']},
      {title:'Reconcile takings and banking',paragraphs:['Start with till Z-reads, sales books or appointment systems. Show cash sales plus card and platform sales, then explain cash used for petty expenses, supplier payments, wages, drawings and amounts banked.','Transfers between tills or sites should not be counted twice. Preserve void and refund reports because unexplained gaps can create further questions.']},
      {title:'Check cash expenses and wages',paragraphs:['Cash expenditure still needs evidence of amount, business purpose and recipient. PAYE, National Minimum Wage, employment status and CIS issues can arise where workers are paid in cash.','Do not use cash payments to obscure payroll or supplier identity. Reconcile them to ledgers and applicable returns.']},
      {title:'Respond without speculation',paragraphs:['Provide the method and records used, state limitations and explain anomalies. If records are incomplete, use a reasonable reconstruction supported by independent evidence.','Avoid estimates presented as facts and do not alter electronic till data. Obtain advice promptly if the review identifies undeclared sales or deliberate conduct.']}
    ],
    actions:['Preserve till and booking data','Reconcile sales by payment method','Trace cash used before banking','Review cash wages and supplier payments','Document anomalies and estimates','Submit a period-by-period schedule'],
    records:['Till reports and sales books','Booking or order systems','Bank deposit records','Petty cash and supplier receipts','Payroll and CIS records','Cash reconciliation'],
    example:{title:'Example: bankings are lower than cash sales',paragraphs:['A restaurant uses some cash takings to pay approved petty expenses and deposits the balance. Its accounts recorded sales gross, but the response initially compared bank deposits only.','A daily cash reconciliation bridges recorded sales, refunds, petty cash and bankings, allowing HMRC to test completeness without treating every unbanked pound as omitted turnover.']},
    faqs:[['Does HMRC assume cash income is undeclared?','No, but cash records may receive close scrutiny because there is less third-party evidence.'],['Can HMRC estimate sales?','HMRC may consider alternative methods where records are unreliable; assumptions and evidence can be challenged.'],['What if cash records are incomplete?','Explain the gap and use a transparent, evidence-based reconstruction.']],
    sources:[gov('GOV.UK: Keeping business records','https://www.gov.uk/self-employed-records'),gov('GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks')]
  },
  {
    slug:'side-hustle-income-not-declared',
    category:'Property and disclosures',
    title:'Side-Hustle Income Not Declared: How to Tell HMRC',
    description:'Did not declare side-hustle income? Check the trading allowance, calculate profit by tax year and use the correct HMRC correction or disclosure route.',
    directAnswer:'Side-hustle receipts are not automatically taxable profit, but taxable trading or miscellaneous income may need reporting. Establish gross receipts, activity type, allowable costs, the trading allowance and affected tax years. Amend an in-time return or use the appropriate disclosure route; do not wait for platform data to trigger HMRC contact.',
    enquiryCategory:'undeclared-income-disclosure',
    enquiryDetail:'Self-employed or trading income',
    relatedQuestion:{title:'Which HMRC disclosure service should I use?',href:'/hmrc-questions/hmrc-digital-disclosure-service-which-route'},
    canonicalGuide:{title:'Undeclared income and HMRC disclosure help',href:'/hmrc-enquiry-help/undeclared-income-disclosure'},
    sections:[
      {title:'Decide what the activity is',paragraphs:['Selling personal possessions, carrying on a trade, providing services and making investment gains can have different tax treatment. Do not classify an activity solely by the app or platform used.','Identify ownership, frequency, profit motive, work performed and whether the receipts are turnover, sale proceeds or reimbursements.']},
      {title:'Check allowances and registration',paragraphs:['The trading allowance may apply to qualifying gross trading income, but it is not a universal tax-free amount for every type of receipt and cannot always be combined with actual expenses.','Check whether Self Assessment registration was required and whether National Insurance, VAT or other obligations arise. Thresholds and rules must be checked for each tax year.']},
      {title:'Calculate by tax year',paragraphs:['Obtain platform reports, invoices and bank statements, then reconcile gross receipts, refunds, fees and allowable expenses. Do not report only the net cash transferred by the platform.','Prepare each year separately and use the rules applying in that year. Include connected income sources discovered during the review.']},
      {title:'Choose the correction route',paragraphs:['A recent return may be amendable. Older omissions or people outside Self Assessment may need a disclosure service. If HMRC has already written, the response should be coordinated with that contact.','Calculate tax, interest and potential penalties accurately and correct current reporting at the same time.']}
    ],
    actions:['Classify each activity','Gather gross platform and bank records','Check allowances and registration','Calculate profit by tax year','Choose amendment or disclosure route','Correct ongoing reporting'],
    records:['Platform annual reports','Invoices and contracts','Bank statements','Refund and fee reports','Expense evidence','Year-by-year computations'],
    example:{title:'Example: employee earns through freelance design',paragraphs:['An employee receives platform payments after fees and assumes PAYE covers all tax. Gross client receipts exceed the amount transferred to the bank.','They reconstruct gross turnover and allowable business costs, check the trading allowance and correct each affected year rather than adding everything to the latest return.']},
    faqs:[['Does PAYE cover income from a side hustle?','No. PAYE on employment does not automatically settle tax on separate taxable income.'],['Is platform income automatically taxable?','No. The nature of the activity, receipts, costs and allowances must be established.'],['Will HMRC receive platform information?','Digital platforms may have reporting obligations; taxpayers should not wait for a data match before correcting tax.']],
    sources:[gov('GOV.UK: Check if you need to tell HMRC about additional income','https://www.gov.uk/check-additional-income-tax'),gov('GOV.UK: Tax-free trading allowance','https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income')]
  },
  {
    slug:'let-property-campaign',
    category:'Property and disclosures',
    title:'HMRC Let Property Campaign: Eligibility, Deadlines and Disclosure Steps',
    description:'Learn who can use HMRC’s Let Property Campaign, how to reconstruct rental income, calculate a disclosure and meet notification and payment deadlines.',
    directAnswer:'The Let Property Campaign is an HMRC disclosure route for eligible individual landlords who owe tax on residential property income. Check eligibility before notifying, reconstruct every affected year and be ready to submit the disclosure and payment within the deadline in HMRC’s acknowledgement. Companies, trusts and some property situations require another route.',
    enquiryCategory:'undeclared-income-disclosure',
    enquiryDetail:'Rental or property income',
    relatedQuestion:{title:'How do I disclose undeclared rental income to HMRC?',href:'/hmrc-questions/forgot-declare-rental-income-hmrc'},
    canonicalGuide:{title:'HMRC property income enquiry guide',href:'/knowledge-base/hmrc-property-income-enquiry'},
    sections:[
      {title:'Who may use the campaign',paragraphs:['The campaign is aimed at individual landlords with undisclosed tax from residential property, including certain UK and overseas lettings. Eligibility can include accidental landlords and people with multiple properties.','Companies, trusts and non-residential property are outside the ordinary campaign scope. An open enquiry or deliberate conduct may require careful route selection.']},
      {title:'Prepare before notifying',paragraphs:['List properties, owners, letting dates and affected tax years. Gather agent statements, tenancy agreements, bank receipts, mortgage-interest certificates and invoices.','Notification starts a formal timetable. HMRC’s current campaign guidance and the actual acknowledgement control the disclosure deadline, so do not notify before the figures can realistically be completed.']},
      {title:'Calculate the disclosure',paragraphs:['Reconstruct gross rent and separate allowable revenue expenses from capital expenditure and private costs. Apply finance-cost and loss rules for each year. Joint owners normally need their own tax calculations.','Calculate tax, interest and proposed penalties with documented assumptions. Best estimates should be reasonable, explained and distinguished from known figures.']},
      {title:'Submit, pay and remain compliant',paragraphs:['Complete the disclosure through the instructed service, make the formal offer where required and pay or arrange payment by the deadline. Retain proof of submission.','File outstanding or future returns correctly and include ongoing rental income. A campaign disclosure should not leave later years unresolved.']}
    ],
    actions:['Check campaign eligibility','List properties, owners and years','Reconstruct rent and expenses','Calculate tax, interest and penalties','Notify and diary HMRC’s deadline','Submit, pay and correct future returns'],
    records:['Tenancy agreements','Agent and platform statements','Bank receipts','Mortgage-interest certificates','Repair and management invoices','Annual property computations'],
    example:{title:'Example: accidental landlord',paragraphs:['A homeowner moved for work and let their former home through an agent. They did not realise the rent needed separate tax reporting.','They obtain annual agent statements, separate repairs from improvements, check campaign eligibility and prepare the complete disclosure before notifying HMRC.']},
    faqs:[['Can a company use the Let Property Campaign?','The campaign is for eligible individual landlords; companies and trusts generally need another route.'],['How long do I get after notification?','Follow the current campaign guide and the deadline in HMRC’s acknowledgement. Prepare before notifying.'],['Can overseas rental income be included?','Eligible individual landlords may be able to disclose certain overseas residential property income, but offshore rules require care.']],
    sources:[gov('GOV.UK: Let Property Campaign guide','https://www.gov.uk/government/publications/let-property-campaign-your-guide-to-making-a-disclosure/let-property-campaign-your-guide-to-making-a-disclosure'),gov('GOV.UK: Tax on rental income','https://www.gov.uk/renting-out-a-property/paying-tax')]
  },
  {
    slug:'hmrc-airbnb-income-questions',
    category:'Property and disclosures',
    title:'HMRC Questions About Airbnb Income: Records, Tax and Disclosure',
    description:'HMRC asked about Airbnb or short-term letting income? Reconcile gross bookings, fees, ownership, expenses and the correct property or trading tax treatment.',
    directAnswer:'HMRC may compare Airbnb or other platform information with tax returns. Reconcile gross booking receipts—not only payouts—to refunds, platform fees, ownership and declared income. Then establish whether the activity is property income or a trade, check applicable allowances and reliefs for the relevant year, and correct any omission through the right route.',
    enquiryCategory:'undeclared-income-disclosure',
    enquiryDetail:'Rental or property income',
    relatedQuestion:{title:'How does HMRC find undeclared income?',href:'/hmrc-questions/how-hmrc-finds-undeclared-income'},
    canonicalGuide:{title:'HMRC property income enquiry guide',href:'/knowledge-base/hmrc-property-income-enquiry'},
    sections:[
      {title:'Why platform totals can differ',paragraphs:['Platform reports may show gross booking value while bank statements show payouts after host fees, refunds and adjustments. Calendar and tax years can also differ from platform reporting periods.','Build a booking-level bridge rather than declaring the net payout or accepting HMRC’s gross figure without checking cancellations and ownership.']},
      {title:'Property income or trade',paragraphs:['Most letting receipts require property-income analysis, but extensive services and commercial organisation may affect classification. The label “Airbnb business” does not settle the tax treatment.','Check the property owner, beneficial entitlement and whether a management company merely collected funds. Joint ownership affects who reports the income.']},
      {title:'Expenses, allowances and reliefs',paragraphs:['Separate platform fees, cleaning, utilities, repairs and management costs from capital improvements and private use. The property allowance cannot always be combined with actual expenses.','Short-term letting relief rules have changed over time, so do not assume historic furnished holiday letting treatment continues for every period. Apply the law for each tax year.']},
      {title:'Respond or disclose accurately',paragraphs:['If the filed return is correct, provide a concise reconciliation. If income was omitted, identify every platform, property and year before selecting an amendment or disclosure route.','Platform reporting does not replace the taxpayer’s obligation to keep records and file accurate returns. Correct current and future reporting.']}
    ],
    actions:['Download gross booking reports','Reconcile payouts, fees and refunds','Confirm ownership and tax classification','Review expenses and private use','Compare figures with filed returns','Respond or disclose through the correct route'],
    records:['Platform transaction reports','Booking calendars','Bank payouts','Ownership documents','Expense invoices','Property-income computations'],
    example:{title:'Example: HMRC quotes gross platform receipts',paragraphs:['HMRC’s figure includes cancelled bookings and amounts collected for cleaning. The host’s return used net bank payouts.','A reconciliation establishes actual gross rent, separately allowable costs and the correct owner’s share, then quantifies any return correction without treating either headline total as taxable profit.']},
    faqs:[['Does Airbnb report information to HMRC?','Digital platforms can have reporting obligations; platform data still needs reconciliation and tax analysis.'],['Is the amount paid into my bank the taxable income?','Not necessarily. Start with gross receipts and calculate income under the applicable rules.'],['Can the property allowance be claimed as well as expenses?','Generally the allowance and actual-expense method are alternatives; check the relevant rules and year.']],
    sources:[gov('GOV.UK: Selling goods or services on a digital platform','https://www.gov.uk/guidance/selling-goods-or-services-on-a-digital-platform'),gov('GOV.UK: Tax on rental income','https://www.gov.uk/renting-out-a-property/paying-tax')]
  },
  {
    slug:'hmrc-corporation-tax-investigation',
    category:'Business tax checks',
    title:'HMRC Corporation Tax Investigation: What Companies Should Expect',
    description:'Received an HMRC Corporation Tax check letter? Define its scope, reconcile the CT600 to accounts and prepare evidence for reliefs and director balances.',
    directAnswer:'An HMRC Corporation Tax investigation usually begins as a compliance check into a company return, accounts, transaction or relief. Confirm the company, accounting periods and statutory basis, then reconcile the CT600 and computation to signed accounts, ledgers and source documents. Preserve the response deadline and separate company transactions from director or connected-party matters.',
    enquiryCategory:'compliance-check',
    enquiryDetail:'My company or business records',
    relatedQuestion:{title:'What triggers an HMRC compliance check?',href:'/hmrc-questions/what-triggers-hmrc-compliance-check'},
    canonicalGuide:{title:'What is an HMRC compliance check?',href:'/knowledge-base/what-is-an-hmrc-compliance-check'},
    sections:[
      {title:'Define the scope',paragraphs:['The letter may examine turnover, deductions, losses, R&D relief, capital allowances, loans, distributions or connected parties. It may cover one issue or the company’s wider tax position.','Record the return and accounting periods, questions, legal notices and deadlines. Notify the company’s accountant and authorised officer.']},
      {title:'Reconcile return, accounts and ledgers',paragraphs:['Bridge accounting profit to taxable profit and trace every material tax adjustment. Tie turnover and expenses to ledgers, bank records, VAT returns and contracts.','Explain prior-period adjustments, provisions, group entries and post-balance-sheet corrections rather than forcing reports to agree without context.']},
      {title:'Review directors and connected parties',paragraphs:['Director loan accounts, management charges, dividends, benefits and transactions with connected entities often require separate evidence and tax analysis. Company funds are not automatically the director’s personal funds.','Prepare agreements, board records, payment trails and commercial rationale. Check whether PAYE, benefits or close-company rules create connected issues.']},
      {title:'Manage findings and closure',paragraphs:['Respond in numbered form, keep an issue log and ask HMRC to identify unresolved points. Recalculate proposed tax and distinguish underlying tax, interest and penalties.','A closure notice or amendment can carry appeal rights. Continued discussion does not automatically extend the relevant deadline.']}
    ],
    actions:['Identify periods and issues','Reconcile CT600 to accounts','Trace material adjustments','Review director and connected-party transactions','Prepare indexed evidence','Track closure and appeal deadlines'],
    records:['HMRC opening letter','CT600s and computations','Signed accounts and trial balances','Bank and transaction evidence','Board and loan documents','Tax reconciliation'],
    example:{title:'Example: management charge under review',paragraphs:['A company deducted a charge from a connected company. HMRC asks what services were provided and how the amount was calculated.','The response includes the agreement, service evidence, allocation method, invoices and payment trail, and considers the corresponding treatment in both companies.']},
    faqs:[['Is a Corporation Tax check a fraud investigation?','Not necessarily. A compliance check does not itself establish deliberate conduct.'],['Can HMRC inspect company records?','HMRC has information and inspection powers subject to statutory conditions and safeguards.'],['Can the check expand to directors personally?','Connected personal issues may lead to separate questions or checks; keep company and individual positions clearly distinguished.']],
    sources:[gov('GOV.UK: Corporation Tax records','https://www.gov.uk/running-a-limited-company/company-and-accounting-records'),gov('GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks')]
  },
  {
    slug:'hmrc-cis-compliance-check',
    category:'Business tax checks',
    title:'HMRC CIS Compliance Check: Contractor and Subcontractor Records',
    description:'Prepare for an HMRC Construction Industry Scheme compliance check covering verification, deductions, monthly returns, status and subcontractor payments.',
    directAnswer:'A CIS compliance check can examine whether contractors registered, verified subcontractors, applied the correct deduction rate, submitted accurate monthly returns and issued payment statements. It may also test whether workers were genuinely self-employed. Reconcile every subcontractor payment to verification records, returns, accounts and bank evidence.',
    enquiryCategory:'vat-paye-enquiry',
    enquiryDetail:'Construction Industry Scheme (CIS)',
    relatedQuestion:{title:'What does HMRC check in a CIS and PAYE review?',href:'/hmrc-questions/hmrc-cis-paye-compliance-check'},
    canonicalGuide:{title:'Complete PAYE employer compliance guide',href:'/knowledge-base/hmrc-paye-employer-compliance-check'},
    sections:[
      {title:'What HMRC may check',paragraphs:['HMRC may review contractor registration, subcontractor verification, deduction rates, gross-payment status, monthly returns, payment statements and payments of deductions.','The review may overlap with PAYE, employment status, National Minimum Wage and company records. CIS registration does not by itself prove self-employment.']},
      {title:'Reconcile subcontractor payments',paragraphs:['List subcontractors and gross payments, then separate qualifying materials where the scheme permits. Tie deductions to monthly returns, statements, ledgers, invoices and bank payments.','Explain corrections, nil returns and payments reported in a different period. Do not net unrelated supplier credits into labour without a clear audit trail.']},
      {title:'Review employment status',paragraphs:['Consider personal service, control, substitution, financial risk, equipment and actual working practices. The written contract should match reality.','Group workers only where their facts are genuinely comparable. A verification record concerns deduction status, not the legal employment-status conclusion.']},
      {title:'Correcting CIS errors',paragraphs:['Identify affected months and workers before changing returns. Follow current HMRC correction procedures and reconcile the result to PAYE accounts.','If HMRC proposes liabilities or penalties, verify the calculation, behaviour analysis and appeal deadline separately.']}
    ],
    actions:['List contractors and subcontractors','Obtain verification records','Reconcile payments and materials','Tie deductions to monthly returns','Review worker status','Correct errors and protect deadlines'],
    records:['Verification confirmations','Subcontractor invoices','Payment and deduction statements','Monthly CIS returns','Bank and ledger records','Contracts and status evidence'],
    example:{title:'Example: materials reduce CIS deductions',paragraphs:['A contractor deducted CIS after excluding subcontractor-provided materials, but invoices do not separate labour and materials consistently.','The contractor obtains supporting invoices and purchase evidence, reconciles the allowable material element and corrects any unsupported exclusions.']},
    faqs:[['Does CIS verification prove a worker is self-employed?','No. Verification and employment status are separate questions.'],['Can HMRC check materials deducted before CIS?','Yes. Contractors should be able to support the qualifying materials element.'],['Can CIS and PAYE be checked together?','Yes. Worker status and employer obligations can overlap.']],
    sources:[gov('GOV.UK: Construction Industry Scheme','https://www.gov.uk/what-is-the-construction-industry-scheme'),gov('GOV.UK: CIS contractor responsibilities','https://www.gov.uk/what-you-must-do-as-a-cis-contractor')]
  },
  {
    slug:'paye-reporting-error',
    category:'Business tax checks',
    title:'PAYE Reporting Error: How to Correct Payroll Information',
    description:'Found an FPS, EPS or payroll reporting error? Identify the affected pay period, correct it through the appropriate route and reconcile HMRC’s account.',
    directAnswer:'Correct a PAYE reporting error using the method that applies to the error, tax year and payroll software. Establish what was paid, what was reported and what should have been reported before submitting a correction. Reconcile the revised FPS or EPS, payroll ledger, employee year-to-date figures and HMRC account, and tell affected employees where their records change.',
    enquiryCategory:'vat-paye-enquiry',
    enquiryDetail:'PAYE or employer compliance',
    relatedQuestion:{title:'What triggers an HMRC PAYE compliance check?',href:'/hmrc-questions/what-triggers-hmrc-paye-compliance-check'},
    canonicalGuide:{title:'Complete PAYE employer compliance guide',href:'/knowledge-base/hmrc-paye-employer-compliance-check'},
    sections:[
      {title:'Identify the reporting error',paragraphs:['Common errors include incorrect pay or deductions, duplicate employees, wrong leaving dates, late reporting, omitted statutory payments and EPS mistakes. Separate a payroll-calculation error from a submission or payment-allocation problem.','Record the employee, pay period, original submission identifiers, amount reported and correct amount. Preserve the original reports before changing software.']},
      {title:'Use the correct correction method',paragraphs:['HMRC procedures differ depending on whether the error concerns the current tax year, an earlier year, employee details, pay and deductions or an EPS. Follow current payroll-software and GOV.UK instructions.','Avoid cancelling or duplicating a submission merely to make the dashboard look right. The correction should preserve accurate year-to-date figures.']},
      {title:'Reconcile after correction',paragraphs:['Compare revised payroll totals with FPS and EPS records, the nominal ledger, employee payslips and payments to HMRC. Check whether the correction creates an overpayment or underpayment.','Confirm HMRC has processed the correction and deal with account discrepancies promptly. Retain submission receipts and an audit note.']},
      {title:'Consider employee and compliance effects',paragraphs:['A correction can affect tax codes, Universal Credit information, pension data, benefits or P60 figures. Provide corrected documents where required.','Repeated or material errors may prompt a PAYE compliance check. Review the root cause, access controls and payroll calendar rather than treating the correction as a one-off software task.']}
    ],
    actions:['Preserve original submissions','Identify employee and period impact','Use the current HMRC correction route','Reconcile revised year-to-date totals','Check HMRC’s account and employee records','Document the cause and control fix'],
    records:['FPS and EPS receipts','Payroll reports','Payslips and P60s','Ledger and bank payments','HMRC account screenshots','Correction audit note'],
    example:{title:'Example: employee reported twice',paragraphs:['A new starter was created under two payroll IDs, duplicating year-to-date pay in submissions although only one payment was made.','The employer follows the appropriate correction process, verifies employee identifiers and reconciles the corrected submission to actual payroll and HMRC’s account.']},
    faqs:[['Can I simply delete an incorrect FPS?','No. Follow the applicable correction process so year-to-date records remain accurate.'],['Will a correction update HMRC immediately?','Processing times vary; retain receipts and check the employer account.'],['Should the employee be told?','Provide corrected payroll documents and explanations where their records or pay are affected.']],
    sources:[gov('GOV.UK: Correcting payroll errors','https://www.gov.uk/payroll-errors/correcting-pay-or-deductions'),gov('GOV.UK: Reporting to HMRC through payroll','https://www.gov.uk/running-payroll/reporting-to-hmrc')]
  },
  {
    slug:'incorrect-vat-rate-charged',
    category:'Business tax checks',
    title:'Incorrect VAT Rate Charged: How to Correct the Invoice and VAT Return',
    description:'Charged the wrong VAT rate? Establish the correct liability, issue valid correction documents and amend the VAT return through the appropriate route.',
    directAnswer:'If the wrong VAT rate was charged, first establish the correct liability and tax point. Correct the customer documentation—often through a credit note and replacement invoice where appropriate—then quantify the net VAT error by period. Correct it on a later VAT return only if HMRC’s conditions are met; otherwise notify HMRC through the formal error-correction route.',
    enquiryCategory:'vat-paye-enquiry',
    enquiryDetail:'VAT returns or records',
    relatedQuestion:{title:'What records can HMRC request in a VAT enquiry?',href:'/hmrc-questions/hmrc-vat-records-request'},
    canonicalGuide:{title:'Complete HMRC VAT compliance check guide',href:'/knowledge-base/hmrc-vat-compliance-check'},
    sections:[
      {title:'Establish the correct VAT liability',paragraphs:['Decide whether the supply is standard-rated, reduced-rated, zero-rated, exempt or outside the scope. Product descriptions, customer status, place of supply, evidence and dates can affect the result.','Do not use a competitor’s invoice or customer request as the legal basis. Check current legislation and HMRC guidance for the exact supply.']},
      {title:'Correct invoices and customer accounts',paragraphs:['Preserve the original invoice and issue valid correction documentation. A credit note and replacement invoice may be required depending on the facts and accounting system.','Consider whether the customer has reclaimed input tax and communicate the correction clearly. Do not overwrite issued invoices in a way that destroys the audit trail.']},
      {title:'Calculate the VAT return error',paragraphs:['Prepare a transaction list by VAT period showing net value, VAT originally declared, correct VAT and difference. Include related credit notes and partial payments.','Check whether the error is isolated or reflects a product-code or tax-mapping problem affecting more transactions and periods.']},
      {title:'Choose the correction route',paragraphs:['HMRC permits certain errors to be adjusted on a later return within current limits and conditions; other errors must be separately notified. Check the live GOV.UK thresholds before acting.','Consider interest and penalty position, explain how the error occurred and document the control change. If HMRC has already opened a check, coordinate the correction with the officer.']}
    ],
    actions:['Confirm the correct VAT treatment','Preserve original invoices','Issue valid correction documents','Quantify errors by VAT period','Use the appropriate HMRC correction route','Fix tax codes and retain the audit trail'],
    records:['Original and corrected invoices','Contracts and product descriptions','VAT rate analysis','Transaction error schedule','VAT returns and VAT account','Customer correspondence'],
    example:{title:'Example: reduced rate used incorrectly',paragraphs:['A business configured a product as reduced-rated based on an incomplete description. A review shows the standard rate applies to the actual supply.','It identifies every affected invoice, corrects customer documents, calculates the VAT difference by period and uses the route required by HMRC rather than posting one unexplained journal.']},
    faqs:[['Can I correct every VAT error on the next return?','No. HMRC’s current size and timing conditions determine whether adjustment on a later return is permitted.'],['Should I delete the wrong invoice?','No. Preserve the audit trail and issue valid correction documentation.'],['What if the customer reclaimed the wrong VAT?','Coordinate corrected documents so both parties can correct their VAT records.']],
    sources:[gov('GOV.UK: Correct errors in VAT returns','https://www.gov.uk/submit-vat-return/correct-errors-in-vat-returns'),gov('GOV.UK: VAT rates','https://www.gov.uk/vat-rates')]
  }
];
