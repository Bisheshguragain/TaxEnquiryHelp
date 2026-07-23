export const faqGroups = [
  {category:'Self Assessment enquiry',guide:'hmrc-self-assessment-enquiry-guide',questions:[
    ['What is an HMRC Self Assessment enquiry?','It is a formal check into some or all of a submitted Self Assessment tax return. HMRC must give written notice when opening an enquiry under the ordinary enquiry provisions.'],
    ['How long does HMRC have to open a Self Assessment enquiry?','For an on-time return, the ordinary enquiry window is generally 12 months from delivery. Different rules can apply to late returns, amendments and discovery assessments, so check the dates and notice carefully.'],
    ['Why has HMRC selected my tax return for enquiry?','HMRC may act on risk indicators, third-party information, unusual figures or other compliance criteria. Receiving a letter does not by itself mean HMRC has proved that your return is wrong.'],
    ['How long does a Self Assessment enquiry take?','A focused enquiry may conclude within months, while cases involving missing records, several tax years or disputed technical issues can take longer. There is no single completion time for every case.'],
    ['What records can HMRC ask for during a Self Assessment enquiry?','HMRC may request records reasonably required to check the return, such as statements, invoices, receipts, computations and explanations. The relevance and legal basis of a broad request should be reviewed before responding.']
  ]},
  {category:'HMRC compliance check',guide:'what-is-an-hmrc-compliance-check',questions:[
    ['What triggers an HMRC compliance check?','Possible triggers include inconsistencies, third-party data, unusual claims, sector risks or random compliance activity. HMRC does not normally disclose its detailed risk criteria.'],
    ['Is an HMRC compliance check serious?','The scope ranges from a single factual question to a detailed review of several taxes. Treat every check seriously, protect the deadline and establish exactly what HMRC is checking.'],
    ['Can HMRC check my bank account?','HMRC can request relevant financial records and has statutory information powers in defined circumstances. The correct route and safeguards depend on the type of check and notice.'],
    ['How far back can an HMRC compliance check go?','Assessment time limits depend on the tax, filing history and whether HMRC alleges innocent error, carelessness or deliberate behaviour. The ordinary enquiry window and discovery rules are different.'],
    ['What happens if I ignore an HMRC information request?','Ignoring correspondence may lead to a formal information notice, delay and possible penalties. If the deadline is unrealistic or the request unclear, contact HMRC before it expires and seek advice.']
  ]},
  {category:'VAT or PAYE enquiry',guide:'what-is-an-hmrc-compliance-check',questions:[
    ['What does HMRC check during a VAT inspection?','HMRC may review VAT returns, sales and purchase invoices, digital records, VAT schemes, partial exemption, place-of-supply treatment and the supporting audit trail.'],
    ['How many years can HMRC investigate VAT records?','The applicable period depends on the issue and statutory assessment rules. Businesses should preserve VAT records for the required retention period and obtain advice where older periods are requested.'],
    ['What happens in a PAYE compliance check?','HMRC may examine payroll calculations, expenses, benefits, employment status, Real Time Information submissions and payments. It may request employee and contractor records.'],
    ['Can HMRC visit my business during a compliance check?','HMRC may propose an agreed visit and also has inspection powers in specified circumstances. Ask for the purpose, scope, attendees and document list before the visit.'],
    ['Can VAT or PAYE penalties be reduced?','Penalty outcomes depend on the legislation, behaviour and disclosure. Prompt, accurate disclosure and constructive cooperation can be relevant, but each alleged failure should be analysed separately.']
  ]},
  {category:'Code of Practice 8 or 9',guide:'what-is-an-hmrc-compliance-check',questions:[
    ['What is the difference between COP8 and COP9?','COP8 generally concerns complex tax arrangements or avoidance where fraud is not initially suspected. COP9 is HMRC’s civil investigation process where it suspects tax fraud and offers the Contractual Disclosure Facility.'],
    ['What should I do after receiving a COP9 letter?','Do not ignore it or send a rushed explanation. Preserve the deadline, avoid destroying or altering records and obtain specialist tax-investigation and legal advice immediately.'],
    ['Does a COP9 investigation mean I will be prosecuted?','COP9 is a civil investigation process, but its protections depend on a complete and accurate disclosure under the Contractual Disclosure Facility. False statements and undisclosed fraud create serious risk.'],
    ['How long does a COP8 or COP9 investigation take?','Complex cases can take many months or years because they may involve several entities, taxes and periods. The duration depends heavily on disclosure quality, records and disputed issues.'],
    ['Can my usual accountant handle a COP8 or COP9 case?','Your accountant may provide essential background, but these cases often require a specialist investigations adviser and sometimes independent legal advice. Confirm relevant experience before instruction.']
  ]},
  {category:'Undeclared income',guide:'hmrc-self-assessment-enquiry-guide',questions:[
    ['How do I declare previously undeclared income to HMRC?','The appropriate route depends on the tax and facts. Options may include amending a return, using a disclosure facility or contacting HMRC; choose the route before submitting a partial disclosure.'],
    ['What happens if I tell HMRC about undeclared rental income?','HMRC will normally calculate unpaid tax, interest and any applicable penalty across relevant years. A complete voluntary disclosure can be treated differently from an omission HMRC discovers first.'],
    ['Do I need to declare foreign income to HMRC?','UK residents may need to report foreign interest, dividends, property income, pensions or gains. Residence, reliefs and remittance rules can be complex, so overseas tax paid does not automatically end the UK analysis.'],
    ['Does HMRC know about undeclared bank interest or cryptoassets?','HMRC receives information from financial institutions, overseas authorities and some digital platforms. Third-party data can prompt questions even when it is incomplete or requires explanation.'],
    ['Will I be prosecuted for undeclared income?','Many cases are resolved through civil disclosure, tax, interest and penalties, but deliberate evasion can carry criminal risk. Obtain specialist advice before approaching HMRC if fraud may be involved.']
  ]},
  {category:'HMRC penalties or appeal',guide:'appeal-hmrc-tax-penalty',questions:[
    ['How do I appeal an HMRC penalty?','Follow the method stated in the decision letter and explain what you disagree with and why. Some penalties can be appealed online; others require a form or written appeal.'],
    ['How long do I have to appeal an HMRC decision?','The deadline is usually 30 days from the decision letter or review outcome, but the exact notice controls. Submit a protective appeal rather than allowing the deadline to expire while gathering evidence.'],
    ['What counts as a reasonable excuse for an HMRC penalty?','It depends on all the circumstances and how the event prevented compliance. Evidence of dates, attempts to comply and prompt action after the obstacle ended is usually important.'],
    ['Can HMRC cancel a late filing penalty if no tax was due?','A nil tax bill does not automatically cancel a filing penalty. You need valid appeal grounds under the applicable penalty rules, such as a reasonable excuse or an incorrect notice.'],
    ['What is an HMRC statutory review?','It is a review by an HMRC officer who was not involved in the original decision. The reviewer may uphold, vary or cancel the decision, and GOV.UK says reviews usually take 45 days.']
  ]}
] as const;

export const faqGroupAnchors:Record<string,string>={
  'Self Assessment enquiry':'self-assessment-enquiry-faqs',
  'HMRC compliance check':'hmrc-compliance-check-faqs',
  'VAT or PAYE enquiry':'vat-and-paye-enquiry-faqs',
  'Code of Practice 8 or 9':'cop8-and-cop9-faqs',
  'Undeclared income':'undeclared-income-faqs',
  'HMRC penalties or appeal':'hmrc-penalties-and-appeals-faqs'
};
