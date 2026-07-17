import type { Guide } from './guides';

type Draft = Omit<Guide,'readingTime'|'updated'>;
const publish = (guide: Draft): Guide => ({...guide,readingTime:'10 min read',updated:'17 July 2026'});

export const extraGuides: Guide[] = [
  publish({
    slug:'hmrc-property-income-enquiry',category:'Individual',shortTitle:'Property income enquiries',keyword:'HMRC property income enquiry',
    title:'HMRC Property Income Enquiry: Landlord Records and Responses',
    description:'Facing an HMRC property income enquiry? Learn which rental records may be checked, how to reconcile income and expenses, and how disclosure may work.',
    intro:['An HMRC property income enquiry can compare a Self Assessment return with ownership data, letting-agent records and other information available to HMRC. The opening letter should identify the return, period or issue under review.','A difference does not automatically establish unpaid tax. Timing, joint ownership, void periods, deposits and the distinction between repairs and capital improvements can all affect the figures. The response should reconcile the return rather than send an unexplained bundle of statements.','This guide is general UK information. The correct treatment depends on the property, ownership, tax years and exact notice.'],
    sections:[
      {title:'Why HMRC may check rental income',paragraphs:['HMRC may open a compliance check where return figures appear inconsistent with information it holds or where it wants evidence for a claim. HMRC does not publish all risk criteria, so avoid assuming the reason and work from the questions in the letter.']},
      {title:'Records to assemble',paragraphs:['Start with the filed returns and computations, tenancy agreements, agent statements, bank entries, invoices and loan statements. Keep an index and distinguish documents that prove gross rent from those supporting deductions.'],bullets:['Tenancy and agent statements','Bank records showing rent','Repair and maintenance invoices','Ownership and completion documents','Tax computations and working papers']},
      {title:'Reconciling rent received',paragraphs:['Prepare a property-by-property schedule from gross rent to the figure reported. Explain deposits, arrears, refunds, jointly owned income and transfers between your own accounts so credits are not mistaken for rent.']},
      {title:'Repairs, improvements and finance costs',paragraphs:['An expense paid during the year is not automatically deductible. Repairs and capital improvements have different treatment, and finance-cost rules can depend on the ownership structure. Identify the work performed and retain invoices rather than relying on the supplier’s label.']},
      {title:'If rental income was omitted',paragraphs:['Do not conceal a known omission. Establish the years, tax and interest, then check the correct disclosure route. HMRC’s Let Property Campaign may be relevant to eligible residential landlords, while an open enquiry or offshore matter can require a different approach.']},
      {title:'Sending a proportionate response',paragraphs:['Answer each numbered question, explain the reconciliation and label estimates. Ask for clarification where a request is ambiguous, preserve originals and send personal information securely.']},
      {title:'Possible outcomes',paragraphs:['The check may close without change or lead to amendments, tax, interest and possibly penalties. Penalty treatment depends on the facts and behaviour; it is not automatic merely because HMRC opened a check.']}
    ],
    faqs:[['Can HMRC find undeclared rental income?','HMRC can use information from several sources. The relevant question is whether taxable income was correctly returned, not whether HMRC already holds a particular record.'],['Can I deduct all mortgage payments?','No. Capital repayments and finance costs are not treated in the same way, and the rules depend on the circumstances.'],['Should I use the Let Property Campaign?','It may be suitable for an eligible voluntary disclosure, but not every property issue or open enquiry fits that route.'],['How far back can HMRC check?','Time limits depend on the return, assessment power and alleged behaviour. Review the precise years and legal basis.']],
    sources:[['GOV.UK: Let Property Campaign','https://www.gov.uk/government/publications/let-property-campaign-your-guide-to-making-a-disclosure'],['GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks']]
  }),
  publish({
    slug:'hmrc-crypto-tax-enquiry',category:'Individual',shortTitle:'Cryptoasset tax enquiries',keyword:'HMRC crypto tax enquiry',
    title:'HMRC Crypto Tax Enquiry: Records, Gains and Disclosure',
    description:'A UK guide to HMRC crypto tax enquiries, transaction records, capital gains and income questions, missing histories and cryptoasset disclosures.',
    intro:['An HMRC crypto tax enquiry may examine disposals, income, records and the figures reported on a tax return. Cryptoassets are not tax-free merely because transactions occur through an overseas platform or between tokens.','The difficult part is often evidence: exchange exports, wallet addresses, fees, sterling values and transfers can span several platforms. Reconstruct the transaction history before drawing conclusions about tax.','This guide describes enquiry preparation, not the tax result for a particular token or activity.'],
    sections:[
      {title:'What HMRC may ask about',paragraphs:['Questions may cover acquisitions, sales, token-to-token exchanges, gifts, staking, mining, airdrops and business activity. The treatment depends on the facts, so label each transaction type before calculating figures.']},
      {title:'Build a complete transaction record',paragraphs:['Export data from every exchange and wallet before access changes. Record timestamps, quantities, fees, counterpart assets and sterling values, and reconcile transfers so moving an asset between your own wallets is not counted twice.']},
      {title:'Capital gains or income',paragraphs:['Many disposals are considered under Capital Gains Tax rules, while some rewards or trading activities may involve income. Do not choose the more favourable category without analysing what happened.']},
      {title:'Missing exchange records',paragraphs:['Document recovery attempts and use reliable third-party evidence where original exports are unavailable. Keep assumptions visible and reproducible; never manufacture a history to fill gaps.']},
      {title:'Responding to a platform-data mismatch',paragraphs:['A platform total may not equal taxable profit. Explain internal transfers, acquisition costs, pooling calculations, fees and transactions outside the period in a schedule tied to the return.']},
      {title:'Disclosing unpaid crypto tax',paragraphs:['HMRC provides a dedicated service for disclosing unpaid tax on cryptoassets. An existing enquiry, deliberate conduct or wider irregularities may require specialist advice before choosing a route.']},
      {title:'Enquiry checklist',paragraphs:['Preserve the letter deadline, retain raw exports, keep calculation versions, state valuation sources and answer only after reconciling the full population of relevant transactions.']}
    ],
    faqs:[['Does swapping one cryptoasset for another count?','A token-to-token exchange can be a disposal for UK tax purposes even without cash proceeds.'],['Can HMRC receive information from exchanges?','HMRC may obtain information through its powers and data arrangements. Tax reporting should be based on the rules, not assumed visibility.'],['What if I made an overall loss?','Individual disposals still need calculating and loss claims have rules and time limits.'],['Is a crypto disclosure anonymous?','A formal disclosure identifies the taxpayer and relevant liabilities; check the service requirements before submitting.']],
    sources:[['GOV.UK: Check if you need to pay tax on cryptoassets','https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-sell-cryptoassets'],['GOV.UK: Disclose unpaid tax on cryptoassets','https://www.gov.uk/guidance/tell-hmrc-about-unpaid-tax-on-cryptoassets']]
  }),
  publish({
    slug:'hmrc-foreign-income-enquiry',category:'Individual',shortTitle:'Foreign income enquiries',keyword:'HMRC foreign income enquiry',
    title:'HMRC Foreign Income Enquiry and Offshore Disclosure Guide',
    description:'Understand HMRC foreign income enquiries, offshore account evidence, UK residence questions, exchange rates and the Worldwide Disclosure Facility.',
    intro:['An HMRC foreign income enquiry can involve overseas interest, dividends, property, pensions, gains or assets. An overseas account is not itself evidence of an error; the issue is whether UK reporting and tax were correct.','Residence, domicile-related rules for relevant years, treaty relief, ownership and remittances can make apparently simple data difficult to interpret. Start with a year-by-year factual schedule.','Offshore penalties and assessment periods can differ from wholly domestic cases, so obtain advice where material omissions may exist.'],
    sections:[
      {title:'Why HMRC may hold offshore data',paragraphs:['The UK receives financial-account information through international arrangements. Data can identify an account but may not explain beneficial ownership, source, tax treatment or whether income was already reported.']},
      {title:'Map accounts, income and tax years',paragraphs:['List each jurisdiction, institution, account holder, currency, opening and closing dates, income type and relevant UK tax year. Separate balances and transfers from taxable income.']},
      {title:'Residence and treaty questions',paragraphs:['UK tax exposure can depend on residence and applicable treaty provisions. Preserve travel calendars, homes, work patterns and foreign tax certificates rather than relying on a single label used by a bank.']},
      {title:'Currency conversion and foreign tax',paragraphs:['Use a consistent, supportable exchange-rate method and retain the rate source. Foreign withholding tax does not always eliminate UK reporting, though relief may be available subject to conditions.']},
      {title:'Worldwide Disclosure Facility',paragraphs:['HMRC says the Worldwide Disclosure Facility is used for eligible offshore income and gains through the Digital Disclosure Service. Notification, calculation, formal offer and payment are distinct steps.']},
      {title:'Answering an offshore enquiry letter',paragraphs:['Reconcile HMRC’s data to your schedule, correct duplicated or non-beneficial accounts and explain relief claimed. Do not give false reassurance where records remain incomplete.']},
      {title:'Professional support',paragraphs:['Specialist help is sensible where residence is disputed, several jurisdictions are involved, conduct may be deliberate or the proposed look-back period is extensive.']}
    ],
    faqs:[['Is foreign income always taxable in the UK?','No. The answer depends on residence, the income, relevant rules and any treaty, but reporting may still be required.'],['Does paying foreign tax settle the UK position?','Not necessarily. Double-tax relief can be available but must be calculated under the applicable rules.'],['What is the Worldwide Disclosure Facility?','It is HMRC’s disclosure route for eligible offshore income and gains through the Digital Disclosure Service.'],['Should I respond if the account is not mine?','Yes. Explain and evidence the ownership issue rather than ignoring the letter.']],
    sources:[['GOV.UK: Offshore disclosure facilities','https://www.gov.uk/guidance/offshore-disclosure-facilities'],['GOV.UK: Tax on foreign income','https://www.gov.uk/tax-foreign-income']]
  }),
  publish({
    slug:'can-hmrc-ask-for-bank-statements',category:'Individual',shortTitle:'HMRC bank statement requests',keyword:'can HMRC ask for bank statements',
    title:'Can HMRC Ask for Bank Statements During a Tax Enquiry?',
    description:'Learn when HMRC may request bank statements, how Schedule 36 information powers work, and how to prepare a relevant, secure and explained response.',
    intro:['HMRC may ask for bank statements where they are reasonably required to check a tax position. The legal status of an informal request differs from a formal Schedule 36 information notice.','A request should be read in context: whose account, which period and what tax risk is being checked? Private-account entries can be relevant, but broad disclosure should not replace a defined enquiry scope.','Do not ignore a formal notice. Seek advice if the request is unclear, unusually wide or includes third-party material.'],
    sections:[
      {title:'Informal request or formal notice',paragraphs:['Identify the heading, legislation, deadline, appeal wording and consequences. A cooperative response can still ask HMRC to clarify relevance and scope.']},
      {title:'Why personal statements may be relevant',paragraphs:['HMRC may use statements to verify income, business receipts, capital introduced, expenditure or the source of funds. Explain transfers and non-taxable credits rather than leaving the officer to infer their nature.']},
      {title:'Schedule 36 safeguards',paragraphs:['HMRC information powers contain conditions, restrictions and appeal rights in some cases. Tribunal-approved notices and certain requirements can have different appeal treatment.']},
      {title:'Prepare a bank reconciliation',paragraphs:['Index accounts, mark business and private transfers, link receipts to invoices and provide a concise schedule. Keep unredacted originals even if a redacted copy is agreed for delivery.']},
      {title:'Redaction and third-party privacy',paragraphs:['Do not redact simply because an entry is inconvenient. Ask whether irrelevant third-party data can be protected and agree the approach before altering the copy sent.']},
      {title:'Secure delivery',paragraphs:['Use HMRC-approved or agreed secure channels, verify the recipient and keep proof of submission. Never email passwords in the same message as encrypted documents.']},
      {title:'If records are unavailable',paragraphs:['Request replacements promptly, document the reason for gaps and explain reconstruction methods. Missing evidence should be addressed openly, not replaced with invented records.']}
    ],
    faqs:[['Can HMRC ask for a private bank account?','Potentially, where information is reasonably required to check the tax position and the statutory conditions are met.'],['Can I appeal an information notice?','Some requirements can be appealed, but exceptions apply. Check the specific notice immediately.'],['May I redact transactions?','Only after considering relevance and preferably agreeing the treatment with HMRC; inappropriate redaction can obstruct the check.'],['Can HMRC contact my bank?','HMRC has third-party information powers subject to statutory procedures and safeguards.']],
    sources:[['GOV.UK: HMRC compliance checks factsheets','https://www.gov.uk/government/collections/hm-revenue-and-customs-compliance-checks-factsheets'],['HMRC manual: Information and inspection powers','https://www.gov.uk/hmrc-internal-manuals/compliance-handbook/ch20000']]
  }),
  publish({
    slug:'section-9a-enquiry-letter-response',category:'Individual',shortTitle:'Section 9A enquiry letters',keyword:'Section 9A enquiry letter',
    title:'Section 9A Enquiry Letter: How to Prepare Your Response',
    description:'Received a Section 9A enquiry letter? Understand the enquiry notice, response deadline, records, amendments, closure and practical response structure.',
    intro:['A Section 9A enquiry is HMRC’s formal enquiry into an individual Self Assessment return under the Taxes Management Act 1970. The notice should identify the return being checked.','HMRC does not need to prove an error before opening a valid enquiry within the applicable window. The practical task is to preserve the deadline and answer the actual questions with reconciled evidence.','This guide does not determine whether a particular notice is valid; filing and amendment dates can change the analysis.'],
    sections:[
      {title:'Check the notice and enquiry window',paragraphs:['Record the return, tax year, filing date, amendment history, date of notice and response deadline. Late returns and amendments can affect timing.']},
      {title:'Define the scope',paragraphs:['Separate the formal power to enquire from the current questions. HMRC may focus on an aspect or examine the return more widely as the enquiry develops.']},
      {title:'Create a response matrix',paragraphs:['For every question record the evidence holder, document, explanation and unresolved point. Use HMRC’s numbering so the officer can audit the response efficiently.']},
      {title:'Reconcile evidence to the return',paragraphs:['Schedules should end at the filed figures or explain every difference. Distinguish facts, estimates and later corrections.']},
      {title:'Meetings and further questions',paragraphs:['Ask for an agenda before a meeting, have an adviser present where useful and confirm material discussions in writing. Do not guess where records can answer later.']},
      {title:'Amendments and discovered errors',paragraphs:['The existence of an enquiry affects how corrections may be made. Obtain advice before attempting to fix the issue through an unrelated return or unexplained payment.']},
      {title:'How the enquiry ends',paragraphs:['A closure notice states HMRC’s conclusions and any amendments. Appeal rights and deadlines may follow, so check the calculations and decision immediately.']}
    ],
    faqs:[['Is a Section 9A letter an accusation of fraud?','No. It is a formal enquiry notice and does not by itself establish an inaccuracy or deliberate conduct.'],['Must I answer by the letter deadline?','Treat the deadline seriously. If more time is required, ask the officer before it expires and record any agreement.'],['Can my accountant reply?','An authorised agent can correspond, but you should verify the factual content.'],['Can I ask HMRC to close the enquiry?','A taxpayer may in some circumstances apply to the tribunal for a direction that HMRC issue a closure notice. Advice is recommended.']],
    sources:[['HMRC manual: power to enquire into returns','https://www.gov.uk/hmrc-internal-manuals/self-assessment-legal-framework/salf403'],['GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks']]
  }),
  publish({
    slug:'hmrc-vat-compliance-check',category:'Business',shortTitle:'VAT compliance checks',keyword:'HMRC VAT compliance check',
    title:'HMRC VAT Compliance Check: Records, Visits and Outcomes',
    description:'Prepare for an HMRC VAT compliance check or inspection: understand records, visit scope, reconciliations, errors, penalties and appeal deadlines.',
    intro:['An HMRC VAT compliance check may review returns, invoices, digital records, business activities and repayment claims. HMRC may conduct the check remotely or arrange a visit.','The strongest preparation reconciles VAT returns to accounting records and explains exceptions such as partial exemption, reverse charge, zero rating or unusual transactions.','VAT rules are transaction-specific. This guide is a procedural overview rather than a conclusion on liability.'],
    sections:[
      {title:'Before the VAT visit',paragraphs:['HMRC says it normally contacts a business to arrange a visit and usually gives notice, while unannounced visits are possible. Verify unexpected contact and request the scope and document list.']},
      {title:'Records HMRC may inspect',paragraphs:['Prepare VAT account workings, sales and purchase ledgers, invoices, bank records, import evidence and digital-system reports for the periods identified.']},
      {title:'Reconcile each VAT return',paragraphs:['Tie output and input tax totals to ledgers and explain manual journals, prior-period corrections and differences between turnover in accounts and VAT returns.']},
      {title:'Managing the inspection',paragraphs:['Nominate informed staff, keep an agenda and record questions and documents supplied. Do not allow casual explanations to substitute for checked facts.']},
      {title:'Correcting VAT errors',paragraphs:['The correction method depends on the error, value, period and whether HMRC has already opened a check. Do not make an uncoordinated adjustment that duplicates an amount under review.']},
      {title:'Penalties and cooperation',paragraphs:['Additional VAT, interest and penalties are separate issues. HMRC considers the circumstances and quality of disclosure; cooperation does not require accepting an incorrect technical analysis.']},
      {title:'After the decision',paragraphs:['Check written findings, calculations, periods and appeal rights. GOV.UK states that VAT inspection decisions can generally be appealed within the specified 30-day period.']}
    ],
    faqs:[['Does HMRC give notice of a VAT visit?','HMRC says it normally arranges a visit and usually gives seven days’ notice, though unannounced visits can occur.'],['Can HMRC inspect digital VAT records?','Yes, relevant VAT and accounting records may be examined.'],['Should I correct an error during a check?','Coordinate with the caseworker or adviser so the correction route is valid and not duplicated.'],['Can I appeal the outcome?','Many VAT decisions carry appeal rights; follow the decision notice and deadline.']],
    sources:[['GOV.UK: VAT visits and inspections','https://www.gov.uk/vat-visits-inspections'],['GOV.UK: Correct errors in VAT Returns','https://www.gov.uk/submit-vat-return/correct-errors-in-your-vat-return']]
  }),
  publish({
    slug:'hmrc-paye-employer-compliance-check',category:'Business',shortTitle:'PAYE employer checks',keyword:'HMRC PAYE compliance check',
    title:'HMRC PAYE Compliance Check: An Employer Preparation Guide',
    description:'A practical guide to HMRC PAYE employer compliance checks covering payroll, benefits, expenses, status, records, meetings and settlements.',
    intro:['An HMRC PAYE compliance check can examine whether Income Tax and National Insurance were operated correctly on pay, benefits and expenses. It may also examine worker status and payroll processes.','Prepare by reconciling payroll submissions, payments and accounts, then testing higher-risk categories such as directors, contractors, benefits and termination payments.','This guide focuses on managing the check. Employment tax outcomes depend on contracts and working practices.'],
    sections:[
      {title:'Scope of an employer compliance check',paragraphs:['Read the opening letter for periods and topics. Ask whether HMRC is reviewing PAYE, National Insurance, benefits, expenses, status or several areas.']},
      {title:'Core payroll records',paragraphs:['Gather Full Payment Submissions, Earlier Year Updates where relevant, payroll reports, P11D records, payment evidence, starter and leaver information and accounts reconciliations.']},
      {title:'Directors, benefits and expenses',paragraphs:['Review company cars, medical cover, loans, travel, entertaining and expenses paid personally or through director accounts. Explain policy and evidence, not just ledger labels.']},
      {title:'Employment status questions',paragraphs:['Status depends on the contractual terms and real working relationship. Collect contracts, substitution evidence, control arrangements, equipment and financial-risk information.']},
      {title:'Meetings and sampling',paragraphs:['Agree the population and sample where possible. If an error is found, do not extrapolate it across years or employees without testing whether the sample is representative.']},
      {title:'Quantifying irregularities',paragraphs:['Reconcile any proposed settlement by employee, category and year. Check grossing-up, National Insurance, interest and penalty assumptions separately.']},
      {title:'Preventing recurrence',paragraphs:['Document new approval controls, payroll reviews, expense coding and status reassessments. Remedial action supports future compliance but does not by itself decide past liability.']}
    ],
    faqs:[['Can HMRC inspect employee expense records?','Yes, relevant records supporting PAYE, benefits and National Insurance treatment may be checked.'],['Will every contractor be treated as an employee?','No. Status is fact-specific and must be analysed for each arrangement.'],['Can HMRC agree a settlement?','Liabilities may be resolved through applicable statutory or settlement processes; the calculation should be reviewed carefully.'],['Should staff attend the meeting?','Only informed people who can address agreed topics should attend, supported by records and advisers as needed.']],
    sources:[['GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks'],['HMRC Enquiry Manual: Employer Compliance','https://www.gov.uk/hmrc-internal-manuals/enquiry-manual/em8250']]
  }),
  publish({
    slug:'hmrc-corporation-tax-enquiry',category:'Business',shortTitle:'Corporation Tax enquiries',keyword:'HMRC Corporation Tax enquiry',
    title:'HMRC Corporation Tax Enquiry: Company Records and Response',
    description:'Understand an HMRC Corporation Tax enquiry, Company Tax Return records, director transactions, expenses, evidence, closure and appeals.',
    intro:['An HMRC Corporation Tax enquiry is a formal check into a Company Tax Return. It may focus on one claim or extend across accounts, computations and connected transactions.','Directors should coordinate the response through one evidence file and ensure explanations agree with statutory accounts, ledgers and board records.','The company remains responsible for accurate facts even where an accountant prepares the correspondence.'],
    sections:[
      {title:'Check the enquiry notice',paragraphs:['Identify the accounting period, return, notice date and questions. Filing and amendment dates can affect the ordinary enquiry window.']},
      {title:'Build the company evidence file',paragraphs:['Include accounts, computations, trial balance, ledgers, invoices, contracts, bank evidence and board minutes relevant to the selected issues.']},
      {title:'Director and connected-party transactions',paragraphs:['Reconcile director loan accounts, remuneration, dividends and connected-company entries. Explain commercial purpose and approvals with contemporaneous records.']},
      {title:'Expenses and capital items',paragraphs:['HMRC may test whether expenditure is revenue, capital, business-related or adequately evidenced. Describe what was acquired and why, rather than relying on the nominal-code name.']},
      {title:'Claims and reliefs',paragraphs:['For losses, capital allowances or other reliefs, show eligibility, calculations and supporting decisions. A claim should be reproducible from the evidence.']},
      {title:'Managing correspondence',paragraphs:['Use numbered answers, reconcile figures and ask HMRC to identify remaining issues after each response. Confirm calls and agreed extensions in writing.']},
      {title:'Closure, amendments and appeal',paragraphs:['Review the closure notice and any amendment against the evidence and law. Appeal deadlines may be short, so separate disagreement with tax from complaints about service.']}
    ],
    faqs:[['Does a company enquiry include directors personally?','Not automatically, although connected personal tax or PAYE issues may prompt separate action.'],['Can HMRC inspect company bank records?','Relevant records may be requested under applicable information powers.'],['How long can the enquiry take?','There is no single duration; scope, records and disputes influence timing.'],['Can the company ask for closure?','Statutory mechanisms may be available depending on the enquiry and circumstances.']],
    sources:[['GOV.UK: Corporation Tax enquiries','https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm95100'],['GOV.UK: Tax compliance checks','https://www.gov.uk/tax-compliance-checks']]
  }),
  publish({
    slug:'hmrc-cis-compliance-check',category:'Business',shortTitle:'CIS compliance checks',keyword:'HMRC CIS compliance check',
    title:'HMRC CIS Compliance Check: Contractor Records and Deductions',
    description:'Prepare for an HMRC Construction Industry Scheme compliance check covering verification, deductions, returns, status and subcontractor records.',
    intro:['An HMRC CIS compliance check may examine contractor registrations, subcontractor verification, deductions, monthly returns and payments. PAYE and employment-status questions can overlap.','A verification number or invoice does not settle every issue. The business must show who performed the work, the contractual arrangement and how deductions and returns were handled.','This guide is for enquiry preparation and does not determine worker status or CIS scope.'],
    sections:[
      {title:'Define the CIS periods and population',paragraphs:['List every subcontractor and payment for the checked periods, then reconcile the list to ledgers, bank records and submitted CIS returns.']},
      {title:'Verification and deduction evidence',paragraphs:['Retain verification results, deduction rates, payment statements and evidence of amounts paid to HMRC. Investigate missing or duplicate identifiers.']},
      {title:'Materials and payment calculations',paragraphs:['Separate labour, qualifying materials and other charges using contracts and invoices. Do not accept unsupported estimates merely because an invoice has one total.']},
      {title:'Employment status overlap',paragraphs:['CIS treatment does not itself prove self-employment. Review control, substitution, personal service, equipment and financial risk for the actual arrangement.']},
      {title:'Correcting CIS returns',paragraphs:['Establish the correct amendment route and coordinate changes with an open check. Keep a schedule of original, corrected and agreed figures.']},
      {title:'Penalties and liabilities',paragraphs:['Late or inaccurate returns, failed deductions and status errors can involve different liabilities. Check HMRC’s calculation by subcontractor and month.']},
      {title:'Response pack',paragraphs:['Provide a concise narrative, reconciliation, sample documents and exceptions log. Retain originals and answer follow-up questions through a single coordinator.']}
    ],
    faqs:[['Does CIS prove a worker is self-employed?','No. Employment status is a separate fact-specific question.'],['What records should contractors keep?','Verification, payment, deduction, return and supporting contract records should be retained under the applicable rules.'],['Can HMRC check PAYE at the same time?','Yes, related employer-compliance issues may be examined.'],['Should materials be excluded from deductions?','The CIS calculation rules must be applied to supported amounts; invoice wording alone is not conclusive.']],
    sources:[['GOV.UK: CIS contractor responsibilities','https://www.gov.uk/what-you-must-do-as-a-cis-contractor'],['GOV.UK: CIS records you must keep','https://www.gov.uk/what-you-must-do-as-a-cis-contractor/keep-records']]
  }),
  publish({
    slug:'hmrc-rd-tax-relief-enquiry',category:'Business',shortTitle:'R&D tax relief enquiries',keyword:'HMRC R&D tax relief enquiry',
    title:'HMRC R&D Tax Relief Enquiry: Evidence and Response Guide',
    description:'Respond to an HMRC R&D tax relief enquiry with clear project evidence, technical explanations, cost reconciliations and claim records.',
    intro:['An HMRC R&D tax relief enquiry may test whether claimed projects sought an advance in science or technology, involved qualifying uncertainty and included eligible costs.','A marketing description is rarely enough. The response should connect competent-professional evidence, project timelines and cost records to the statutory scheme for the claim period.','R&D regimes and rates have changed. Always apply the rules for the relevant accounting period.'],
    sections:[
      {title:'Identify the claim regime and period',paragraphs:['Confirm the accounting period, relief regime, amended-return history and documents submitted with the claim. Do not apply current rules retrospectively.']},
      {title:'Explain the advance and uncertainty',paragraphs:['For each project state the baseline knowledge, sought advance, technological uncertainty and work undertaken. Business novelty or commercial difficulty alone is insufficient.']},
      {title:'Evidence from competent professionals',paragraphs:['Identify the people with relevant expertise and preserve contemporaneous design notes, tests, failures, tickets and technical decisions.']},
      {title:'Reconcile qualifying expenditure',paragraphs:['Tie staff, software, consumables, subcontractor and other claimed categories to payroll and ledgers, applying the rules and restrictions for the period.']},
      {title:'Work with a claim adviser',paragraphs:['The company should verify technical and financial statements supplied by an adviser. Generic reports or percentage estimates require evidence and explanation.']},
      {title:'Answer HMRC questions',paragraphs:['Respond project by project, cite exhibits and disclose limitations. Avoid adding irrelevant scientific language that does not describe the actual work.']},
      {title:'Outcome and future controls',paragraphs:['Check any proposed reduction, interest and penalty separately. Improve project capture and cost coding for future claims regardless of the enquiry outcome.']}
    ],
    faqs:[['Does a successful new product automatically qualify?','No. The statutory tests concern an advance in science or technology and qualifying uncertainty, not commercial success alone.'],['Are all developer salaries eligible?','Only qualifying activity and cost rules for the relevant regime and period should be included.'],['Can HMRC reject an adviser-prepared claim?','The company is responsible for the return and must substantiate the claim.'],['What evidence is most useful?','Contemporaneous technical records, competent-professional explanations and reconciled cost evidence are important.']],
    sources:[['GOV.UK: Claim R&D tax relief','https://www.gov.uk/guidance/corporation-tax-research-and-development-rd-relief'],['HMRC manual: Corporate Intangibles R&D','https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual']]
  }),
  publish({
    slug:'hmrc-code-of-practice-8-investigation',category:'General',shortTitle:'Code of Practice 8',keyword:'HMRC Code of Practice 8',
    title:'HMRC Code of Practice 8 Investigation: What COP8 Means',
    description:'Received a Code of Practice 8 letter? Understand COP8 scope, meetings, records, disclosure, specialist investigation procedure and next steps.',
    intro:['Code of Practice 8 is HMRC guidance for certain investigations handled by Fraud Investigation Service where HMRC suspects a significant loss of tax involving complex arrangements or avoidance, but the investigation is not conducted under COP9.','The opening letter and accompanying factsheet should be read carefully. COP8 does not provide the contractual disclosure process available under COP9.','Because facts and potential exposure can be complex, independent specialist advice should be obtained before a substantive response.'],
    sections:[
      {title:'What a COP8 investigation covers',paragraphs:['COP8 may concern complex tax planning, structures, transactions or other significant risks. Do not infer the precise allegation beyond the letter; ask HMRC to clarify scope where needed.']},
      {title:'First actions after the letter',paragraphs:['Secure the deadline, preserve records, notify appropriate advisers and restrict internal discussion to people who need to know. Never alter or destroy documents.']},
      {title:'Reviewing transactions and advice',paragraphs:['Build a chronology of decisions, implementation, tax returns, legal documents and advice. Distinguish what occurred from what promoters or advisers expected.']},
      {title:'Meetings with HMRC',paragraphs:['Obtain an agenda, decide attendees and prepare against the records. Accurate follow-up is preferable to guessing during an interview.']},
      {title:'Disclosure and cooperation',paragraphs:['A complete factual disclosure can be important, but the scope and legal implications require careful handling. Cooperation does not mean adopting HMRC’s interpretation without analysis.']},
      {title:'Tax, interest and penalties',paragraphs:['Any settlement should separate the tax analysis, periods, interest and penalty behaviour. Check calculations and whether other entities or individuals are affected.']},
      {title:'How COP8 concludes',paragraphs:['HMRC may conclude no adjustment is needed or seek liabilities and penalties. Formal decisions may carry review or appeal rights; preserve deadlines even during discussions.']}
    ],
    faqs:[['Is COP8 a criminal investigation?','COP8 is a civil investigation code, but the facts can be serious and specialist advice is recommended.'],['Is COP8 the same as COP9?','No. COP9 concerns suspected tax fraud and includes the Contractual Disclosure Facility.'],['Should I attend an HMRC meeting alone?','Given the complexity, obtain specialist advice and consider representation before attending.'],['Can a COP8 case involve several taxes?','Yes, the scope can involve transactions, entities, taxes and periods identified by HMRC.']],
    sources:[['GOV.UK: Code of Practice 8','https://www.gov.uk/government/publications/code-of-practice-8-investigations'],['HMRC manual: COP8 cases','https://www.gov.uk/hmrc-internal-manuals/fraud-investigation-service-manual/fcim200000']]
  }),
  publish({
    slug:'hmrc-code-of-practice-9-cdf',category:'General',shortTitle:'Code of Practice 9 and CDF',keyword:'HMRC Code of Practice 9',
    title:'HMRC Code of Practice 9 and the Contractual Disclosure Facility',
    description:'A careful guide to COP9 letters, the Contractual Disclosure Facility, the 60-day outline deadline, disclosure reports and specialist representation.',
    intro:['Code of Practice 9 applies where HMRC suspects tax fraud and offers the Contractual Disclosure Facility. The process is serious and time-sensitive.','Under the CDF, HMRC offers a contract under which it will not pursue a criminal investigation into the disclosed tax fraud, subject to the terms and a complete, accurate disclosure. The offer and deadline must be read exactly as issued.','Do not submit an outline disclosure or denial without independent specialist legal and tax advice. This guide is general information only.'],
    sections:[
      {title:'Understanding the COP9 letter',paragraphs:['Record the issue date, response deadline and documents enclosed. HMRC’s published guidance describes a 60-day period for accepting the offer and providing the outline disclosure, but use the deadline in your letter.']},
      {title:'Acceptance or rejection',paragraphs:['Acceptance, rejection and denial have materially different consequences. The decision must be based on privileged, independent advice and a truthful review of the facts.']},
      {title:'The outline disclosure',paragraphs:['An outline must identify the tax fraud being disclosed with sufficient honesty and scope. Deliberate omissions can undermine the contractual protection.']},
      {title:'Scoping the disclosure report',paragraphs:['A report may cover entities, taxes, years, behaviour, calculations and supporting evidence. Agree scope and governance, but do not sacrifice completeness.']},
      {title:'Meetings and records',paragraphs:['Preserve all records and prepare carefully for meetings. Do not destroy evidence, coordinate stories or provide answers known to be false.']},
      {title:'Tax, interest and penalties',paragraphs:['Calculations must be supported by records and explicit assumptions. Penalties depend on statutory factors, disclosure quality and behaviour; payment and security issues may also arise.']},
      {title:'Why specialist representation matters',paragraphs:['COP9 combines tax, investigation and potential criminal-risk considerations. Use advisers with specific COP9 experience and clarify privilege, roles, fees and engagement terms.']}
    ],
    faqs:[['Does COP9 mean I have been convicted of fraud?','No. It means HMRC suspects tax fraud and has offered the CDF; it is not a conviction.'],['What is the CDF deadline?','HMRC’s published process refers to 60 days, but follow the exact date and instructions in your letter.'],['Can I make a partial disclosure?','The contractual protection depends on complete and accurate disclosure of admitted tax fraud under the terms; deliberate omissions are highly risky.'],['Can my usual accountant handle COP9?','They may contribute facts, but independent advisers with specific COP9 and legal-risk experience are normally important.']],
    sources:[['GOV.UK: Code of Practice 9','https://www.gov.uk/government/publications/code-of-practice-9-where-hmrc-suspects-fraud-cop-9'],['GOV.UK: Contractual Disclosure Facility guidance','https://www.gov.uk/government/publications/contractual-disclosure-facility']]
  }),
  publish({
    slug:'hmrc-schedule-36-information-notice',category:'General',shortTitle:'Schedule 36 notices',keyword:'HMRC Schedule 36 information notice',
    title:'HMRC Schedule 36 Information Notice: Rights and Response',
    description:'Understand an HMRC Schedule 36 information notice, reasonably required information, deadlines, restrictions, appeals and non-compliance penalties.',
    intro:['Schedule 36 Finance Act 2008 gives HMRC statutory information and inspection powers for checking tax positions. A formal notice is different from an informal request.','The notice should specify the information or documents, deadline and appeal position. Some notices or requirements have limited or no appeal rights, including where tribunal approval applies.','Do not ignore the notice or assume every requirement is automatically valid. Obtain advice quickly if scope, possession, privilege or appeal rights are in question.'],
    sections:[
      {title:'Identify the type of notice',paragraphs:['A notice may be addressed to the taxpayer or a third party. Record the legislation, issuing officer, tax position, period, deadline and approval wording.']},
      {title:'The reasonably required test',paragraphs:['Taxpayer notices generally concern information or documents reasonably required to check a tax position. Relevance depends on the identified risk and facts, not convenience alone.']},
      {title:'Restrictions and protected material',paragraphs:['Schedule 36 includes restrictions concerning certain documents and information, including legal professional privilege and other defined categories. Specialist analysis may be needed.']},
      {title:'Possession and power',paragraphs:['State promptly if a document does not exist or is not in your possession or power, explaining searches undertaken. Do not recreate a document and present it as original.']},
      {title:'Appeal rights and deadlines',paragraphs:['Some taxpayer-notice decisions and requirements can be appealed, but statutory exceptions apply. A request to vary scope does not automatically stop the compliance deadline.']},
      {title:'Penalties for non-compliance',paragraphs:['Failure to comply can lead to penalties, with further consequences in some cases. Reasonable excuse is fact-specific and should be evidenced; silence is not a strategy.']},
      {title:'Preparing the response',paragraphs:['Use a schedule matching every requirement to the document, explanation, objection or agreed extension. Deliver securely and keep an exact copy and proof of receipt.']}
    ],
    faqs:[['Is every HMRC letter a Schedule 36 notice?','No. Many requests are informal; identify the legal wording and consequences.'],['Can I appeal a Schedule 36 notice?','Some notices or requirements can be appealed, subject to important exceptions.'],['What if HMRC asks for a document I do not have?','Explain whether it exists, your possession or power, and the reasonable searches made.'],['Does asking HMRC to narrow the notice pause it?','Not automatically. Obtain written agreement or preserve formal rights before the deadline.']],
    sources:[['HMRC Compliance Handbook: Information powers','https://www.gov.uk/hmrc-internal-manuals/compliance-handbook/ch20000'],['GOV.UK: Compliance check factsheets','https://www.gov.uk/government/collections/hm-revenue-and-customs-compliance-checks-factsheets']]
  }),
  publish({
    slug:'hmrc-discovery-assessment',category:'General',shortTitle:'Discovery assessments',keyword:'HMRC discovery assessment',
    title:'HMRC Discovery Assessment: Time Limits, Evidence and Appeals',
    description:'Received an HMRC discovery assessment? Learn what the notice means, conditions, time limits, calculations, evidence and the appeal process.',
    intro:['A discovery assessment is a statutory route HMRC may use to assess tax outside an ordinary enquiry process where the legal conditions are met. Receiving one does not remove the right to examine validity and amount.','The relevant return, alleged loss of tax, discovery, taxpayer behaviour and statutory time limit must be analysed separately. The notice should be accompanied by enough information to understand the assessment, though HMRC manual guidance distinguishes making from notifying it.','Appeal deadlines are usually short. A protective appeal may be needed while evidence is assembled.'],
    sections:[
      {title:'What HMRC says it discovered',paragraphs:['Ask what new conclusion was reached, when, for which tax year and on what evidence. Separate the discovery condition from HMRC’s calculation of tax.']},
      {title:'Statutory conditions',paragraphs:['Validity can depend on return disclosures and whether the loss arose from careless or deliberate behaviour or other applicable conditions. The legislation and case law are fact-sensitive.']},
      {title:'Assessment time limits',paragraphs:['Different time limits can apply according to the tax and behaviour, with special rules in some offshore cases. Do not assume a single look-back period.']},
      {title:'Check the calculation',paragraphs:['Reconstruct the correct liability from primary records and identify duplicated income, wrong ownership, reliefs, payments and consequential effects.']},
      {title:'Preserving appeal rights',paragraphs:['Follow the notice instructions and deadline. State each known ground and reserve the ability to provide fuller evidence without using vague wording as a substitute for genuine grounds.']},
      {title:'Payment and postponement',paragraphs:['An appeal does not always suspend collection automatically. Review postponement, interest and payment arrangements separately from whether the assessment is correct.']},
      {title:'Review, ADR and tribunal',paragraphs:['Statutory review, negotiation, ADR and tribunal may be available depending on the case. Preserve deadlines while exploring resolution.']}
    ],
    faqs:[['Is a discovery assessment the same as an enquiry?','No. It is an assessment power with distinct conditions, though it may relate to information found during compliance work.'],['How far back can HMRC assess?','The time limit depends on the tax, facts, behaviour and any special rules.'],['Can I appeal?','Discovery assessments generally carry appeal rights; follow the notice promptly.'],['Does HMRC have to explain the discovery?','HMRC manual guidance describes an explanatory letter as best practice, though legal validity requires analysis of the legislation and facts.']],
    sources:[['HMRC Enquiry Manual: Discovery assessments','https://www.gov.uk/hmrc-internal-manuals/enquiry-manual/em3200'],['GOV.UK: Disagree with a tax decision','https://www.gov.uk/tax-appeals']]
  }),
  publish({
    slug:'hmrc-closure-notice-and-adr',category:'General',shortTitle:'Closure notices and ADR',keyword:'HMRC closure notice',
    title:'HMRC Closure Notice and Alternative Dispute Resolution Guide',
    description:'Understand HMRC closure notices, partial closure, amendments, appeal deadlines and when Alternative Dispute Resolution may help an enquiry.',
    intro:['A closure notice formally concludes an enquiry, or a specified part where the relevant partial-closure provisions apply, and states HMRC’s conclusions. It may amend the return.','Do not treat a final-sounding letter as a closure notice without checking its statutory wording. Conversely, once a valid notice is issued, appeal deadlines can begin even if discussions continue.','Alternative Dispute Resolution may help resolve factual or communication disputes, but it does not replace statutory appeals or pause deadlines automatically.'],
    sections:[
      {title:'What a closure notice should do',paragraphs:['Identify the return or issue, conclusions and amendments. Reconcile the notice to earlier proposals and check whether all open matters are actually covered.']},
      {title:'Partial and final closure',paragraphs:['The available mechanism depends on the tax regime and enquiry. A partial closure can determine a discrete matter while others remain open.']},
      {title:'Applying for closure',paragraphs:['In some circumstances a taxpayer can ask the tribunal to direct HMRC to close an enquiry. HMRC may resist if it has reasonable grounds to continue.']},
      {title:'Checking amendments',paragraphs:['Test figures, tax years, reliefs, interest and consequential effects. A correct procedural notice can still contain a disputed substantive conclusion.']},
      {title:'Appeal deadline',paragraphs:['Follow the notice; many tax appeals use a 30-day deadline. Continuing correspondence or an ADR application does not safely substitute for an appeal.']},
      {title:'When ADR may help',paragraphs:['HMRC ADR uses a facilitator and can help where facts are disputed, communications have stalled or the parties need to clarify issues. It is less suited to disputes turning solely on a point of law.']},
      {title:'Documenting resolution',paragraphs:['Record agreed facts, calculations, taxes, periods, penalties, payment terms and remaining rights. Check HMRC’s account after the case concludes.']}
    ],
    faqs:[['Does an HMRC letter always close an enquiry?','No. Look for the statutory closure wording and the return or issue identified.'],['Can I force HMRC to close a long enquiry?','An application for a tribunal direction may be available in some regimes, subject to HMRC showing reasonable grounds to continue.'],['Does ADR stop the appeal deadline?','Do not assume so. Preserve formal rights while pursuing ADR.'],['Can I appeal a closure notice amendment?','Conclusions and amendments in a closure notice can carry appeal rights; check the notice and legislation.']],
    sources:[['GOV.UK: HMRC Alternative Dispute Resolution','https://www.gov.uk/guidance/tax-disputes-alternative-dispute-resolution-adr'],['HMRC Enquiry Manual: Closure applications','https://www.gov.uk/hmrc-internal-manuals/enquiry-manual/em1975']]
  })
];
