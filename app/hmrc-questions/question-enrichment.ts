export type QuestionEnrichment = {
  analysis: string[];
  decisionPoints: { title: string; description: string }[];
  example: { title: string; paragraphs: string[] };
  specialistHelp: string[];
};

const focused = (
  analysis: string[],
  decisions: [string, string][],
  title: string,
  example: string[],
  specialistHelp: string[]
): QuestionEnrichment => ({
  analysis,
  decisionPoints: decisions.map(([decisionTitle, description]) => ({ title: decisionTitle, description })),
  example: { title, paragraphs: example },
  specialistHelp
});

export const questionEnrichment: Record<string, QuestionEnrichment> = {
  'why-hmrc-opened-self-assessment-enquiry': {
    analysis: [
      'Start by identifying the legal document rather than trying to reverse-engineer HMRC’s risk system. A notice opening an enquiry into a return, a request for information, a discovery assessment and a nudge letter can require different responses. Record the heading, statutory references, tax year, issue date and response date before drawing conclusions.',
      'Selection may follow a discrepancy, but the discrepancy may have an innocent explanation. An employer may have corrected a payroll submission, a bank return may relate to a joint account, or a property entry may appear unusual because ownership changed during the year. The useful exercise is a source-by-source reconciliation, not an unsupported explanation of why HMRC selected the return.',
      'Check the whole return for consistency before responding to the isolated question. This does not mean volunteering unrelated personal information. It means making sure the explanation given for one entry does not conflict with another schedule, an earlier return or a document HMRC is likely to hold.'
    ],
    decisionPoints: [
      { title: 'Formal enquiry or informal question?', description: 'A formal Section 9A notice has procedural consequences. An informal request should not automatically be described as a formal enquiry.' },
      { title: 'Mismatch or underlying error?', description: 'Reconcile third-party data to the filed return and distinguish timing, ownership and classification differences from genuine omissions.' },
      { title: 'One year or a wider issue?', description: 'If the same calculation method was used in another year, establish whether it also needs review before giving HMRC an incomplete explanation.' }
    ],
    example: {
      title: 'Example: bank interest does not match the return',
      paragraphs: [
        'HMRC asks why interest information is higher than the amount on a Self Assessment return. The taxpayer first obtains the bank’s annual certificates and discovers that one account is jointly held, while another certificate covers a period that overlaps two tax years.',
        'The response reconciles each certificate, explains ownership and dates, and identifies whether an amendment is actually required. It does not claim that HMRC opened the enquiry “at random” or send every bank statement without explaining the totals.'
      ]
    },
    specialistHelp: ['The notice may have been issued outside the expected enquiry window', 'The discrepancy affects several years or taxes', 'The explanation involves beneficial ownership, offshore income or suspected deliberate conduct']
  },
  'what-is-section-9a-enquiry': {
    analysis: [
      'Section 9A of the Taxes Management Act 1970 is the principal statutory route for HMRC to enquire into an individual Self Assessment return. The notice should identify the return under enquiry. HMRC does not need to prove that an entry is wrong before opening a valid enquiry within the applicable window.',
      'The opening notice and the later information requests perform different functions. The notice opens the enquiry; it does not give HMRC unrestricted access to every document. Requests should still be considered by reference to the tax position being checked, and formal information notices have their own rules and possible appeal rights.',
      'A Section 9A enquiry normally ends through a closure notice. A caseworker saying that no further information is currently required is useful, but it should not automatically be treated as formal closure. Keep the enquiry open/closed status clear because it affects procedure and appeal deadlines.'
    ],
    decisionPoints: [
      { title: 'Was the correct return identified?', description: 'Check the taxpayer, tax year and any amendment named in the notice.' },
      { title: 'Was notice given in time?', description: 'Use actual filing, amendment and receipt dates. Do not apply a remembered twelve-month rule without checking late-return provisions.' },
      { title: 'Has the enquiry formally ended?', description: 'Look for a closure notice stating HMRC’s conclusions and any resulting amendment.' }
    ],
    example: {
      title: 'Example: an enquiry into an amended return',
      paragraphs: [
        'A taxpayer filed on time and later amended a property expense figure. HMRC writes about the amendment. The taxpayer should retain the original filing receipt, the amendment receipt and both computations because the timing and scope of an enquiry into an amendment require the exact chronology.',
        'The response separates the amended entry from unrelated return items, while checking whether HMRC’s wording indicates a broader enquiry. If the validity or scope is disputed, the deadline is still protected while the procedural point is raised.'
      ]
    },
    specialistHelp: ['The notice appears late or names the wrong return', 'HMRC is seeking material outside the apparent scope', 'A closure notice contains an amendment that may need appealing']
  },
  'hmrc-self-assessment-enquiry-time-limit': {
    analysis: [
      'For tax years 2007–08 and later, HMRC’s manual states that an on-time return generally has an enquiry window running for twelve months after the date the return was received. A late return generally uses a quarter-date calculation after the first anniversary. Amendments can create a separate opportunity to enquire into the amendment.',
      'The date a letter was written is not always the only date that matters. HMRC’s manual states that a valid opening letter must be received by the taxpayer or nominated partner by the end of the enquiry window. Evidence of receipt, filing acknowledgements and amendment confirmations can therefore matter in a boundary case.',
      'The ordinary enquiry window is not a universal limit on every later HMRC action. Discovery assessments have separate statutory conditions and time limits. A response should first identify which power HMRC says it is using and then apply the relevant rules.'
    ],
    decisionPoints: [
      { title: 'Was the return on time?', description: 'Compare the actual filing date with the filing deadline and keep the electronic receipt.' },
      { title: 'Was the return amended?', description: 'Record each amendment date and the entries changed; the relevant window may differ for the amendment.' },
      { title: 'Enquiry or discovery?', description: 'Do not use the enquiry-window calculation to answer a discovery assessment without checking its separate conditions.' }
    ],
    example: {
      title: 'Example: a late online return',
      paragraphs: [
        'An online return is submitted after its filing deadline. The taxpayer assumes HMRC has exactly twelve months from submission. For a late return, however, the enquiry window may run to the next relevant quarter date following the first anniversary.',
        'The correct review uses the filing deadline, actual receipt date, relevant quarter date and the date the opening notice was received. The taxpayer preserves the response deadline even if they intend to challenge validity.'
      ]
    },
    specialistHelp: ['The notice arrives close to the calculated end date', 'There are amended or replacement returns', 'HMRC relies on discovery after the ordinary window']
  },
  'documents-hmrc-request-self-assessment-enquiry': {
    analysis: [
      'The right starting point is a request schedule. List each question, the period covered, the document requested, who holds it and how it connects to the entry under enquiry. This prevents both accidental omission and the unstructured disclosure of irrelevant personal material.',
      'An informal request and a formal information notice should not be treated as identical. A formal notice can carry penalties for non-compliance and may include appeal rights or statutory restrictions. Check the heading and accompanying factsheet rather than relying on the caseworker’s description alone.',
      'Where records are missing, state that transparently. Seek replacements from banks, platforms, letting agents, employers or suppliers and document any reconstruction. A schedule that distinguishes source figures, assumptions and estimates is more useful than newly created paperwork made to resemble an original record.'
    ],
    decisionPoints: [
      { title: 'Is the document relevant?', description: 'Map it to the return entry, tax period and question HMRC is checking.' },
      { title: 'Does the document exist?', description: 'If not, record why and identify reliable third-party replacements or reconstruction evidence.' },
      { title: 'Does it contain unrelated personal data?', description: 'Consider secure handling and obtain agreement or advice before redacting or withholding information.' }
    ],
    example: {
      title: 'Example: HMRC requests property and bank records',
      paragraphs: [
        'A landlord receives a request for tenancy agreements, agent statements, mortgage information and bank statements. The taxpayer creates an index linking rent receipts to the property schedule and identifies transfers between personal accounts so they are not mistaken for additional rent.',
        'Private transactions unrelated to the letting are not silently removed. The taxpayer first clarifies the scope and secure delivery method, then supplies the relevant evidence with an explanation of any agreed redactions.'
      ]
    },
    specialistHelp: ['The request covers personal or third-party information', 'A Schedule 36 notice has been issued', 'HMRC requests records outside the stated tax or period']
  },
  'aspect-vs-full-hmrc-enquiry': {
    analysis: [
      '“Aspect” and “full” are practical descriptions rather than separate statutory enquiry regimes. An aspect enquiry concentrates on one or more entries; a full enquiry examines the return more broadly. The legal power and the wording of HMRC’s correspondence remain more important than the label.',
      'A narrow enquiry can expand where an answer reveals another discrepancy. That does not make every new question automatically proportionate. Keep a scope log showing the original issue, later questions, HMRC’s explanation for expansion and the documents supplied.',
      'Responding narrowly does not mean concealing a known error. If a review identifies a separate omission, obtain advice on whether it should be corrected or disclosed and how that should be coordinated with the open enquiry.'
    ],
    decisionPoints: [
      { title: 'What is the current scope?', description: 'Summarise the taxes, years and entries expressly identified in the latest correspondence.' },
      { title: 'Why is HMRC expanding it?', description: 'Ask how a new request relates to checking the return and record the explanation.' },
      { title: 'Is a separate disclosure required?', description: 'A newly identified error may need a managed correction even if it was outside the opening question.' }
    ],
    example: {
      title: 'Example: property expenses lead to turnover questions',
      paragraphs: [
        'An enquiry begins with repairs claimed on a rental property. A bank statement supplied for the expense also contains credits that HMRC believes may be undeclared self-employment income.',
        'The taxpayer should not assume the original “aspect” label prevents further questions. Equally, HMRC should be asked to define the new issue and period. Separate reconciliations are prepared for the property expenses and the disputed credits so the two issues do not become confused.'
      ]
    },
    specialistHelp: ['The enquiry expands across taxes or years', 'A separate error is discovered', 'HMRC requests a meeting without defining the proposed subjects']
  },
  'hmrc-self-assessment-closure-notice': {
    analysis: [
      'A closure notice formally states HMRC’s conclusions and ends the enquiry. It may confirm no amendment or amend the return. Read the notice together with its computation and appeal instructions; a short covering letter is not a substitute for checking the operative document.',
      'Recalculate the result independently. Confirm the income, deductions, tax rates, payments on account, interest and periods. Penalties may be issued separately and can have their own grounds and deadline, so closing the enquiry does not necessarily conclude every associated dispute.',
      'If HMRC has not progressed the enquiry, it may be possible in appropriate circumstances to ask the tribunal to direct HMRC to close it. That is a procedural step requiring careful assessment; it is not the same as simply asking the caseworker for an update.'
    ],
    decisionPoints: [
      { title: 'Is this formal closure?', description: 'Identify an actual closure notice and its statutory conclusions, not just an informal statement.' },
      { title: 'Does the computation follow the conclusions?', description: 'Recalculate each adjustment, interest effect and payment consequence.' },
      { title: 'What must be appealed?', description: 'The tax amendment and any later penalty may require separate challenges.' }
    ],
    example: {
      title: 'Example: closure with a property-expense adjustment',
      paragraphs: [
        'HMRC disallows part of a repairs claim and amends the return. The taxpayer compares the closure computation with the filed return and discovers that HMRC also removed an unrelated expense that had previously been accepted.',
        'The appeal identifies the exact amendment disputed, explains the evidence and protects the deadline. It does not rely on continued informal correspondence to keep appeal rights open.'
      ]
    },
    specialistHelp: ['The closure calculation contains unexpected adjustments', 'The appeal deadline is close or has passed', 'The enquiry remains open despite all requested information being supplied']
  },
  'what-triggers-hmrc-compliance-check': {
    analysis: [
      'HMRC does not normally publish the risk rule that selected a particular return. Possible indicators include differences from third-party data, changes between years, repayment claims, unusual ratios, sector risks and information arising from another check. None establishes that the filed position is wrong.',
      'A useful pre-response review compares the return with accounts, bank records, payroll submissions, VAT returns and other information HMRC may already hold. Explain genuine differences such as timing, gross-versus-net reporting, transfers, loans or corrected submissions using a reconciliation.',
      'Avoid writing a speculative narrative about the trigger. It can distract from the questions and create statements that later conflict with evidence. Respond to the defined scope and separately disclose any genuine error found during the review.'
    ],
    decisionPoints: [
      { title: 'What has HMRC actually identified?', description: 'Separate the possible selection trigger from the tax, return and entries named in the letter.' },
      { title: 'Can the difference be reconciled?', description: 'Trace it to source records and distinguish classification or timing from an error.' },
      { title: 'Does another period use the same treatment?', description: 'Check consistency before describing the matter as isolated.' }
    ],
    example: {
      title: 'Example: turnover differs from payment-platform data',
      paragraphs: [
        'HMRC compares a platform report with business turnover. The gross platform figure includes VAT, refunds and amounts received on behalf of another seller, while the accounts record net sales.',
        'The business prepares a bridge from the platform total to the accounts and return, supported by statements and refund records. Any real shortfall is identified separately rather than hidden inside the reconciliation.'
      ]
    },
    specialistHelp: ['The mismatch affects multiple taxes', 'HMRC suggests careless or deliberate behaviour', 'Records cannot be reconciled without estimates']
  },
  'can-hmrc-check-business-bank-account': {
    analysis: [
      'Business bank statements can be relevant to testing sales, expenses, loans, capital introduced and transfers. They are most useful when supplied with a bank-to-turnover reconciliation; sending statements alone can leave ordinary transfers or non-trading credits unexplained.',
      'Reconcile every material credit category to the accounts. Separate sales receipts, merchant settlements, owner funding, loans, tax refunds, inter-account transfers and reversals. For cash businesses, connect till or booking records, cash sheets and banking patterns rather than assuming deposits equal daily sales.',
      'Also reconcile outgoings where HMRC is checking deductions. A bank payment proves that money moved, but not necessarily that the expense was incurred wholly and exclusively for the business or that VAT was recoverable.'
    ],
    decisionPoints: [
      { title: 'Which accounts are in scope?', description: 'Identify all business accounts used during the period, including savings and payment-processor balances.' },
      { title: 'What does each credit represent?', description: 'Use evidence rather than generic labels such as transfer, loan or refund.' },
      { title: 'Does the reconciliation reach the return?', description: 'Bridge statements to ledgers, accounts, VAT returns and the final tax return.' }
    ],
    example: {
      title: 'Example: director funding mistaken for sales',
      paragraphs: [
        'A company’s bank credits exceed turnover because a director transferred funds to cover payroll. The company produces the director loan account, transfer evidence and board or accounting records showing how the funding was recorded.',
        'The reconciliation removes only evidenced funding and transfers. Unexplained cash credits remain separately listed for investigation rather than being labelled as director loans after the event.'
      ]
    },
    specialistHelp: ['Business and personal transactions are mixed', 'Cash records are incomplete', 'HMRC extrapolates unexplained credits across other years']
  },
  'can-hmrc-request-personal-bank-statements': {
    analysis: [
      'A personal account may become relevant where business receipts were paid into it, business expenses were paid from it, or drawings, capital introduced and director-loan movements cannot otherwise be reconciled. Relevance depends on the taxpayer, business structure, issue and period.',
      'A limited company is legally separate from its directors, but transactions crossing that boundary can still make personal records relevant. Sole traders have no equivalent company separation, although wholly private transactions may still fall outside a properly defined request.',
      'Do not automatically refuse or disclose every account. Ask HMRC to explain the connection, identify the accounts actually used for business and prepare a reconciliation. Redaction should not be done unilaterally where it could conceal relevant context; agree handling or obtain advice.'
    ],
    decisionPoints: [
      { title: 'Why is the personal account relevant?', description: 'Connect the request to identified business receipts, expenses, drawings or funding.' },
      { title: 'Informal request or formal notice?', description: 'A formal information notice may have appeal rights, restrictions and penalties.' },
      { title: 'How should private data be handled?', description: 'Agree scope, redaction and secure transfer before altering copies supplied.' }
    ],
    example: {
      title: 'Example: business receipts paid into a personal account',
      paragraphs: [
        'A sole trader used a personal current account for several customer payments while changing banks. HMRC requests the relevant statements. The trader identifies the affected months and reconciles business receipts to invoices and declared turnover.',
        'Unrelated household transactions are handled according to an agreed scope. The response explains why the account was used and demonstrates when business banking resumed, instead of denying relevance.'
      ]
    },
    specialistHelp: ['The request covers family or joint accounts', 'HMRC seeks periods beyond the identified issue', 'A formal notice is broad or difficult to comply with']
  },
  'can-hmrc-visit-business-premises': {
    analysis: [
      'HMRC may propose an agreed meeting or visit and also has statutory inspection powers in defined circumstances. Before the visit, establish whether it is voluntary or based on a notice, which premises and taxes are involved, who will attend and which records or systems HMRC expects to see.',
      'Prepare access carefully. Give relevant read-only reports or supervised system access where appropriate rather than unrestricted credentials. Staff should answer factual questions within their knowledge and say when records must be checked. They should never be coached to guess or conceal information.',
      'Private dwellings, mixed-use premises and third-party data require particular care. Keep a contemporaneous note of questions, documents viewed, copies taken and follow-up actions, then correct any material misunderstanding in writing.'
    ],
    decisionPoints: [
      { title: 'Agreed visit or statutory inspection?', description: 'Read the notice and factsheet to identify the legal basis and any rights or restrictions.' },
      { title: 'What access is actually required?', description: 'Define people, premises, systems, records and period before the visit.' },
      { title: 'Does the site include private areas?', description: 'Obtain advice before agreeing access to a home or mixed-use area.' }
    ],
    example: {
      title: 'Example: VAT visit to a restaurant',
      paragraphs: [
        'HMRC asks to review till records, card settlements, cash procedures and VAT returns at a restaurant. The business requests an agenda and prepares reconciliations from daily till totals to banking and VAT submissions.',
        'The visit is supervised by people who understand the till and accounting process. HMRC receives relevant reports rather than an administrator password, and disputed observations are addressed in a written follow-up.'
      ]
    },
    specialistHelp: ['The visit is unannounced or compulsory', 'The premises include a private dwelling', 'HMRC requests unrestricted systems or material outside the agreed agenda']
  },
  'how-far-back-hmrc-compliance-check': {
    analysis: [
      'There is no single answer to how far back HMRC can check. The ordinary enquiry window for a filed return is different from the time limits for assessments where tax is believed to have been lost. The relevant period can depend on the tax, filing history, conduct alleged and whether offshore rules apply.',
      'Begin with a year-by-year chronology showing return dates, amendments, payments and previous enquiries. Then identify the legal document HMRC has issued. A request for background information does not by itself settle whether HMRC can assess an older year.',
      'Keep evidence even where a year appears old. The immediate task may be to test HMRC’s statutory basis and time limit, but destroying or ignoring records makes it harder to establish the correct position if the year is lawfully in scope.'
    ],
    decisionPoints: [
      { title: 'What statutory route is HMRC using?', description: 'Distinguish an open enquiry, discovery assessment, determination and other compliance powers.' },
      { title: 'What behaviour does HMRC allege?', description: 'Assessment periods may differ where HMRC alleges carelessness, deliberate conduct or offshore matters.' },
      { title: 'Has the issue already been examined?', description: 'Prior enquiries, disclosures and settlements may affect the procedural analysis.' }
    ],
    example: {
      title: 'Example: older rental income',
      paragraphs: [
        'HMRC asks about rental receipts from several years earlier after receiving third-party information. The landlord should not answer solely that the years are “out of time.” They assemble ownership, return and disclosure dates and identify the assessment basis HMRC proposes.',
        'Rental calculations are reconstructed in parallel so the factual tax position and the statutory time-limit argument can be evaluated separately.'
      ]
    },
    specialistHelp: ['HMRC seeks records outside ordinary retention periods', 'Deliberate or offshore conduct is alleged', 'The validity or time limit of an assessment is disputed']
  },
  'how-hmrc-compliance-check-ends': {
    analysis: [
      'HMRC should write with the result of a compliance check. The outcome may be no change, repayment, additional tax, interest or a separate penalty process. Confirm which taxes, periods and issues have actually been concluded rather than assuming that silence means closure.',
      'Where HMRC proposes adjustments, reconcile them to the return and source records. Check tax rates, periods, interest dates and whether one adjustment has been counted twice across different taxes. Penalty behaviour and mitigation should be addressed separately from the underlying tax calculation.',
      'If agreement cannot be reached, the next route may involve an appeal, statutory review, alternative dispute resolution or tribunal proceedings, depending on the decision. Informal discussions do not automatically extend statutory deadlines.'
    ],
    decisionPoints: [
      { title: 'No change, agreement or formal decision?', description: 'Identify whether the document merely proposes a result or creates an appealable decision.' },
      { title: 'Are all issues closed?', description: 'Ask HMRC to confirm the remaining open points, taxes and periods in writing.' },
      { title: 'Is there a separate penalty?', description: 'Review the alleged behaviour, disclosure quality and appeal route independently.' }
    ],
    example: {
      title: 'Example: check closes with VAT and penalty adjustments',
      paragraphs: [
        'HMRC concludes that output VAT was understated and separately proposes an inaccuracy penalty. The business verifies the VAT calculation, ensures input tax and corrected periods are treated consistently, and then reviews the behaviour and mitigation analysis.',
        'If the tax is accepted but the penalty is disputed, correspondence makes that distinction explicit and protects the penalty appeal deadline.'
      ]
    },
    specialistHelp: ['The final computation does not reconcile', 'A penalty alleges careless or deliberate behaviour', 'Review, ADR or tribunal deadlines need coordinating']
  },
  'hmrc-vat-enquiry-what-to-expect': focused(
    [
      'A VAT check may examine sales, purchases, VAT rates, input-tax evidence, partial exemption, digital records and the connection between VAT returns and the accounts. HMRC usually explains the proposed scope and may arrange a visit, but it can also make telephone enquiries or visit without an appointment.',
      'Prepare a return-by-return reconciliation before the meeting. Tie box totals to the VAT account, nominal ledger, sales systems, purchase records and submitted returns. Record known errors separately and check the current correction route rather than quietly changing source records.'
    ],
    [['Scope and periods', 'Confirm the VAT periods, issues and records HMRC intends to inspect.'], ['Error or timing difference?', 'Separate genuine VAT errors from invoice timing, credit notes and accounting cut-off differences.'], ['Visit arrangements', 'Confirm notice, attendees, premises, systems and secure access before the visit.']],
    'Example: a repayment return is selected',
    ['A business claims a large VAT repayment after buying equipment. It prepares purchase invoices, payment evidence, business-use analysis and the fixed-asset ledger, then reconciles the claim to the submitted return.', 'The response explains the commercial reason for the exceptional repayment and isolates any private-use restriction instead of sending an unexplained invoice bundle.'],
    ['The check covers several VAT treatments or entities', 'Input-tax evidence is incomplete', 'HMRC proposes penalties or extrapolation']
  ),
  'what-triggers-hmrc-paye-compliance-check': focused(
    [
      'PAYE checks can arise from differences between payroll submissions, accounts, expenses, benefits and payments reported by workers or other businesses. A check may also focus on employment status, off-payroll working, termination payments, National Insurance or the Construction Industry Scheme.',
      'Build a payroll control reconciliation for each tax year. Connect gross pay, tax, National Insurance, benefits and ledger balances to Full Payment Submissions and Employer Payment Summaries, noting corrected or late submissions.'
    ],
    [['Tax and workforce scope', 'Identify whether HMRC is checking payroll accuracy, benefits, status, CIS or several areas.'], ['Submission history', 'List original and corrected RTI submissions and explain differences from the accounts.'], ['Worker classification', 'Keep contractual terms separate from evidence of how the work operated in practice.']],
    'Example: payroll differs from the accounts',
    ['The payroll reports a lower annual staff cost than the accounts because the ledger also includes employer pension contributions and agency workers. The employer prepares a bridge showing each category.', 'Any payments made outside payroll are investigated individually rather than described collectively as contractors.'],
    ['Workers may have been incorrectly classified', 'Benefits or expenses were not reported consistently', 'Several years or group companies are involved']
  ),
  'hmrc-vat-records-request': focused(
    [
      'VAT records commonly include the VAT account, sales and purchase invoices, import and export evidence, credit notes, digital accounting records and calculations supporting special VAT treatments. The exact request should be matched to the periods and issues under review.',
      'An invoice alone may not establish entitlement to input tax if the supply, business purpose or payment trail is unclear. Conversely, absence of one document does not justify creating a replacement that appears original. Obtain duplicates and explain reconstruction openly.'
    ],
    [['Required record', 'Identify the legal and factual purpose of every requested item.'], ['Digital trail', 'Preserve exports and audit logs from accounting or point-of-sale software.'], ['Missing evidence', 'Seek supplier copies and alternative evidence without altering originals.']],
    'Example: missing supplier invoices',
    ['A company has bank payments and ledger entries but several supplier invoices are missing. It requests duplicates from suppliers and builds a schedule linking each payment, purchase and VAT amount.', 'The response distinguishes complete invoice evidence from alternative evidence and does not assume that payment alone guarantees recovery.'],
    ['HMRC rejects input tax for missing evidence', 'Records were migrated between systems', 'Transactions involve imports, exports or complex VAT treatments']
  ),
  'hmrc-employment-status-enquiry-questions': focused(
    [
      'Employment status is determined from the full relationship, not the contract label alone. HMRC may ask about personal service, substitution, control, financial risk, equipment, integration, mutual obligations and how both parties actually behaved.',
      'Prepare evidence worker by worker or by genuinely comparable group. Written terms, invoices and company status matter, but they should be tested against rotas, instructions, substitution history, payment arrangements and responsibility for correcting defective work.'
    ],
    [['Contract versus reality', 'Identify any difference between written terms and day-to-day working practices.'], ['Grouping workers', 'Do not assume every contractor has identical facts.'], ['Relevant regime', 'Clarify whether the issue is ordinary status, agency rules, CIS or off-payroll working.']],
    'Example: a substitute clause was never used',
    ['A contract permits substitution, but the engager approves every worker and no substitution has occurred. The response should describe both the written right and the practical restrictions accurately.', 'It should not claim that the clause settles status by itself or conceal evidence about supervision and control.'],
    ['The enquiry involves many workers', 'Contracts do not reflect actual practices', 'PAYE liabilities and penalties could be material']
  ),
  'hmrc-benefits-expenses-paye-enquiry': focused(
    [
      'HMRC may compare payroll, P11D reporting, PAYE Settlement Agreements, expense claims, company-card transactions and general-ledger accounts. Common areas include vehicles, travel, accommodation, entertaining, loans and private use of company assets.',
      'Separate reimbursement of a qualifying business expense from provision of a taxable benefit. The tax treatment can depend on the underlying expense, exemption conditions, evidence, employee contribution and reporting method.'
    ],
    [['Benefit or reimbursement?', 'Classify the payment before deciding how it should have been taxed or reported.'], ['Business and private use', 'Gather policies, logs and employee contributions where use is mixed.'], ['Reporting route', 'Check payroll, P11D and PAYE Settlement Agreement treatment for each item.']],
    'Example: company-card travel costs',
    ['A director uses a company card for rail, hotels and occasional personal purchases. The company reconciles each transaction to business travel evidence, repayments and the director loan account.', 'Private items are not relabelled as travel; they are traced to repayment or the correct benefit and tax treatment.'],
    ['Director or employee loans are involved', 'Records do not distinguish private use', 'HMRC proposes grossing-up or multi-year adjustments']
  ),
  'hmrc-cis-paye-compliance-check': focused(
    [
      'A combined CIS and PAYE check may examine subcontractor verification, deduction rates, monthly returns, payment-and-deduction statements, employment status and the reconciliation between contracts, payroll and the accounts.',
      'Being registered under CIS does not decide employment status. Review the working relationship separately, then confirm that genuinely self-employed subcontractors were verified and deductions and returns were handled correctly.'
    ],
    [['Worker status', 'Assess employment status before relying on CIS registration or invoices.'], ['Verification and deductions', 'Match verification records, rates, gross payments and deductions.'], ['Return reconciliation', 'Tie CIS and payroll submissions to ledgers, bank payments and year-end accounts.']],
    'Example: labour-only subcontractors',
    ['A contractor pays a group of labour-only workers under CIS. HMRC asks whether they should have been employees. The contractor gathers contracts, site-control evidence, substitution practices, equipment and payment records.', 'The status analysis is completed before calculating any CIS or PAYE correction, preventing registration from being treated as decisive.'],
    ['Employment status is disputed', 'Verification or monthly returns are incomplete', 'HMRC seeks liabilities across multiple sites or years']
  ),
  'what-is-cop8-hmrc-investigation': focused(
    [
      'Code of Practice 8 is used for civil investigations into arrangements or transactions where HMRC suspects a significant tax loss, often involving complex technical issues. It is distinct from COP9, which is used where HMRC suspects tax fraud.',
      'Read the opening letter and COP8 booklet together. Identify the entities, taxes, transactions and years in scope, then preserve advice, implementation records and factual evidence. Questions about legal professional privilege require specialist handling.'
    ],
    [['COP8 or another process?', 'Use the exact code and accompanying publication rather than assuming every serious letter is COP8.'], ['Technical or factual dispute?', 'Separate interpretation of law from disputed transaction facts.'], ['Wider implications', 'Check connected entities, users and later years without assuming they are automatically in scope.']],
    'Example: a marketed tax arrangement',
    ['HMRC opens COP8 into a company transaction implemented following professional advice. The company gathers advice, board papers, contracts, computations and evidence of the commercial steps actually taken.', 'The response distinguishes privileged material, factual documents and technical submissions rather than sending the entire adviser file unreviewed.'],
    ['The arrangement involves several parties', 'Privilege or disclosure obligations arise', 'HMRC suggests moving to a fraud-focused process']
  ),
  'what-is-cop9-contractual-disclosure-facility': focused(
    [
      'COP9 is HMRC’s civil investigation process where it suspects tax fraud. The Contractual Disclosure Facility offers defined treatment in relation to conduct fully disclosed under its terms, so the offer, acceptance window and scope require urgent specialist legal and tax advice.',
      'A person should not submit a speculative or partial admission. The response must be based on a privileged review of conduct, entities, taxes and years. Innocent errors and technical disagreements should be distinguished from deliberate conduct.'
    ],
    [['Offer and deadline', 'Record when the CDF offer was received and the precise response deadline.'], ['Fraud or non-fraud issues', 'Separate deliberate conduct from careless, innocent or technical matters.'], ['Complete scope', 'Review all connected taxes, entities and periods before making an outline disclosure.']],
    'Example: incomplete sales records',
    ['A business owner receives a CDF offer referring to suppressed sales. Before responding, advisers preserve till, bank and accounting data and establish who knew what and when.', 'The outline disclosure is not drafted from HMRC’s allegation alone; it reflects the verified conduct and identifies non-deliberate issues separately.'],
    ['A CDF offer has arrived', 'Criminal exposure or legal privilege may be relevant', 'Several people or companies are involved']
  ),
  'cop8-vs-cop9-difference': focused(
    [
      'The central distinction is HMRC’s suspected conduct: COP8 addresses serious or complex tax issues through a civil investigation, while COP9 is used where HMRC suspects tax fraud and includes the Contractual Disclosure Facility framework.',
      'Do not infer the code from the size of the tax or the seniority of the officer. Use the opening letter and attached code. Strategy differs materially because a COP9 response may involve admissions about deliberate conduct and potential criminal implications.'
    ],
    [['Which code was issued?', 'Check the document title, publication and response requirements.'], ['What conduct is alleged?', 'Distinguish complex avoidance or technical issues from suspected deliberate wrongdoing.'], ['What response is required?', 'A COP8 information response is not interchangeable with a CDF acceptance or rejection.']],
    'Example: a letter mentions avoidance and offshore entities',
    ['The facts sound serious, but seriousness alone does not identify COP8 or COP9. The recipient checks whether HMRC enclosed a COP8 booklet or made a CDF offer.', 'Only then is the response plan selected, with urgent specialist advice if suspected fraud or admissions are involved.'],
    ['The letter is unclear about the process', 'HMRC changes or expands the investigation', 'Any admission of deliberate conduct is being considered']
  ),
  'what-questions-hmrc-ask-cop9': focused(
    [
      'COP9 questions can cover business activities, personal finances, entities, assets, bank accounts, advisers, record systems and the conduct underlying suspected fraud. The exact scope depends on HMRC’s concerns and the disclosure made.',
      'Answers should be accurate, verified and coordinated with the outline disclosure and later report. Guessing, minimising or giving inconsistent accounts can damage credibility. A subject should say when a fact requires checking.'
    ],
    [['Fact or recollection?', 'Distinguish documents, verified facts, estimates and memory.'], ['Within disclosed scope?', 'Check whether the answer reveals another tax, entity or period requiring coordinated disclosure.'], ['Privileged advice?', 'Obtain legal advice before handling material that may be privileged.']],
    'Example: questions about cash and personal expenditure',
    ['HMRC asks how household spending was funded when declared drawings were low. The taxpayer reconstructs cash flows from bank records, loans, asset sales and business takings.', 'The explanation identifies evidence and gaps; it does not invent loans or provide an unsupported round-number estimate.'],
    ['An interview or meeting is requested', 'Records are incomplete', 'Answers may involve admissions or third parties']
  ),
  'cop9-outline-disclosure-what-include': focused(
    [
      'An outline disclosure should identify the deliberate conduct being disclosed with enough information for HMRC to understand its nature, entities, taxes, periods and method. It is not normally the final quantified report, but it must not conceal a material part of the fraud.',
      'Draft from a verified conduct chronology. Distinguish deliberate issues from non-deliberate errors and identify areas still being quantified. The wording should be consistent with the CDF acceptance and supported by preserved evidence.'
    ],
    [['Conduct', 'Describe what was deliberately done or omitted, not merely the tax result.'], ['Scope', 'Identify affected people, entities, taxes and periods.'], ['Known and outstanding figures', 'Explain what is quantified and what work remains without creating false precision.']],
    'Example: omitted online sales',
    ['A trader deliberately excluded one platform from the accounts. The outline identifies the platform, relevant years, how receipts were omitted and who was involved.', 'It states that bank and platform data are being reconciled for the final tax calculation and separately lists any accidental bookkeeping errors.'],
    ['The acceptance deadline is close', 'The conduct spans multiple entities or offshore matters', 'There is uncertainty about what amounts to deliberate conduct']
  ),
  'can-cop9-lead-criminal-prosecution': focused(
    [
      'COP9 is a civil investigation process, but it should never be treated as a blanket guarantee against prosecution. The precise protection associated with the CDF depends on its terms and full disclosure of the conduct covered.',
      'False statements, incomplete disclosure, destruction of evidence or separate criminal conduct can materially change risk. Obtain advice before accepting or rejecting an offer and preserve all records immediately.'
    ],
    [['What does the offer say?', 'Read the current CDF terms rather than relying on general summaries.'], ['Is disclosure complete?', 'Identify every connected deliberate issue before assuming protection applies.'], ['Is separate criminal conduct involved?', 'Tax, document, money-laundering and other risks may require legal advice.']],
    'Example: omitted income and false invoices',
    ['The CDF offer mentions undeclared sales, but the internal review also finds false purchase invoices. The second issue cannot be ignored because HMRC did not mention it expressly.', 'Specialist advisers assess the complete conduct and ensure the response does not misrepresent the scope.'],
    ['A CDF decision must be made', 'Documents may be false or destroyed', 'Criminal-law advice is needed alongside tax advice']
  ),
  'how-hmrc-finds-undeclared-income': focused(
    [
      'HMRC may compare returns with information from employers, banks, property records, digital platforms, businesses, other government bodies and overseas exchanges. A data match is an indicator requiring reconciliation, not automatic proof of the taxable amount.',
      'Review every source by tax year and ownership. Gross platform receipts, joint accounts, transfers and asset-sale proceeds may not equal taxable profit, but each difference needs evidence and a defensible calculation.'
    ],
    [['Whose income is it?', 'Establish legal and beneficial ownership rather than relying on the account name alone.'], ['Receipt or taxable profit?', 'Separate proceeds, allowable costs, capital items and tax already withheld.'], ['Which disclosure route?', 'Choose amendment, campaign, disclosure service or open-enquiry response according to the facts.']],
    'Example: online-platform reporting',
    ['A platform reports gross receipts that exceed self-employed turnover. The seller reconciles refunds, personal-item sales, fees and actual trading sales by tax year.', 'Any taxable omission is disclosed through the proper route instead of assuming that a lower profit figure will explain itself.'],
    ['Several income sources or years are involved', 'Offshore or cryptoasset data is included', 'HMRC has already contacted the taxpayer']
  ),
  'forgot-declare-rental-income-hmrc': focused(
    [
      'A rental-income disclosure should reconstruct gross rent, ownership, letting periods, allowable expenses, finance costs and tax already paid for every affected year. The Let Property Campaign may be relevant for eligible residential landlords, but eligibility and current terms must be checked.',
      'Do not calculate tax from bank deposits alone. Agent deductions, joint ownership, void periods, capital improvements and private use can alter the computation. Preserve a clear audit trail for estimates and replacement evidence.'
    ],
    [['Eligibility and route', 'Check whether return amendment, the Let Property Campaign or another disclosure route applies.'], ['Ownership', 'Confirm legal and beneficial shares for every property and period.'], ['Repairs or capital?', 'Classify costs accurately and apply current finance-cost rules.']],
    'Example: jointly owned property',
    ['A couple omitted rent from a jointly owned property. They collect tenancy, agent and mortgage records and establish the applicable ownership split for each year.', 'Each person’s disclosure is calculated consistently, with capital improvements separated from repairs and finance costs treated under the rules for the relevant period.'],
    ['Ownership or finance-cost treatment is unclear', 'Several properties or historic years are involved', 'HMRC has already issued a nudge letter or opened an enquiry']
  ),
  'disclose-undeclared-foreign-income-hmrc': focused(
    [
      'Foreign income disclosure begins with UK residence, ownership, source, tax year, foreign tax and currency conversion. Overseas tax deducted does not automatically remove UK reporting; treaty relief and foreign-tax credit calculations may be required.',
      'Offshore matters can have different assessment and penalty consequences. Inventory all accounts, property, pensions, investments and gains before notifying HMRC so the chosen facility covers the complete position.'
    ],
    [['UK tax status', 'Determine residence and any relevant transitional or treaty position for each year.'], ['Foreign tax', 'Record gross income, tax withheld and the basis of any UK relief.'], ['Complete offshore scope', 'Check income, gains, assets and connected entities rather than one account alone.']],
    'Example: overseas property and bank interest',
    ['A UK resident omitted rent from an overseas property and interest from the local bank account. Statements are translated, converted using a consistent methodology and reconciled with foreign returns.', 'The disclosure claims supported foreign-tax relief and explains expenses and ownership rather than reporting only net cash transferred to the UK.'],
    ['Residence or treaty treatment is uncertain', 'Older offshore years may be assessable', 'Records require translation or reconstruction']
  ),
  'prompted-vs-unprompted-hmrc-disclosure': focused(
    [
      'The classification depends on whether the taxpayer had reason to believe HMRC had discovered or was about to discover the issue when disclosure was made. Calling a disclosure voluntary does not make it legally unprompted.',
      'Preserve the chronology: when the error was found, what HMRC communications had arrived, what data-match or enquiry was known and when notification occurred. Prompted disclosures can still receive mitigation through complete and cooperative conduct.'
    ],
    [['Awareness date', 'Record when the taxpayer or adviser first identified the issue.'], ['HMRC contact', 'Review nudge letters, enquiries and other indications that discovery may be imminent.'], ['Disclosure quality', 'Document telling, helping and access regardless of classification.']],
    'Example: disclosure after a nudge letter',
    ['A landlord begins calculating omitted rent only after receiving an HMRC letter referring to property income. The chronology makes that contact central to whether the disclosure is prompted.', 'The disclosure is still prepared fully and promptly; it is not backdated or described inaccurately to seek a lower penalty range.'],
    ['The classification materially affects penalties', 'HMRC contact is ambiguous', 'The issue was known internally before an adviser became involved']
  ),
  'hmrc-digital-disclosure-service-which-route': focused(
    [
      'The route depends on the tax, source, years, offshore connection, deliberate conduct and whether a return can still be amended or an enquiry is already open. A campaign or disclosure service may exclude particular taxes or situations.',
      'Create a tax-and-year matrix before choosing. Coordinating several routes may be necessary, but totals and narratives must reconcile. COP9 is not an ordinary portal selected by a taxpayer; the CDF is offered by HMRC where it suspects fraud.'
    ],
    [['Amendment still available?', 'Check the statutory amendment window for recent returns.'], ['Campaign eligibility', 'Read current conditions for property, offshore, cryptoasset or other facilities.'], ['Open enquiry or serious conduct?', 'Coordinate disclosure with HMRC contact and obtain specialist advice where fraud is suspected.']],
    'Example: rental and overseas income',
    ['A taxpayer omitted UK rent and foreign interest across several years. They map taxes and years, then check whether the property campaign and offshore disclosure route can cover the respective liabilities.', 'Notifications, calculations and narratives are coordinated so income is neither omitted nor counted twice.'],
    ['More than one disclosure route may apply', 'A notification deadline has started', 'Deliberate conduct or an open enquiry complicates the route']
  ),
  'can-voluntary-disclosure-prevent-prosecution': focused(
    [
      'An ordinary voluntary disclosure does not give a general guarantee against criminal investigation or prosecution. Early, accurate and complete disclosure may be highly relevant to HMRC’s response and penalties, but the conduct, evidence and applicable policy still matter.',
      'Do not make a partial disclosure merely to test HMRC’s reaction. Preserve evidence, establish the full conduct and obtain confidential tax and legal advice where deliberate behaviour or false documents may be involved.'
    ],
    [['Civil disclosure or CDF?', 'Understand the different terms and protections of the route being considered.'], ['Complete conduct', 'Identify all taxes, people, entities and methods before making assurances.'], ['Evidence preservation', 'Stop routine destruction and do not alter, backdate or recreate records.']],
    'Example: deliberate omission disclosed voluntarily',
    ['A business owner wishes to disclose deliberately omitted cash sales before HMRC contacts them. Advisers reconstruct the sales, tax and behaviour across all affected years.', 'The owner is told that disclosure may improve the position but cannot be presented as an automatic immunity from prosecution.'],
    ['Deliberate omissions or false records exist', 'Criminal exposure needs legal advice', 'The proposed disclosure may be incomplete']
  ),
  'how-to-appeal-hmrc-penalty': focused(
    [
      'An appeal should identify the exact penalty, statutory route, deadline, grounds and result requested. A complaint about service and an appeal against the legal decision are different; sending one does not necessarily preserve the other.',
      'Use the instructions on the notice. Explain facts in date order, connect evidence to the statutory ground and keep proof of submission. If evidence is incomplete near the deadline, consider a concise protective appeal and supplement it responsibly.'
    ],
    [['Which decision?', 'Appeal the correct notice, tax, period and amount.'], ['What legal ground?', 'Identify reasonable excuse, incorrect facts, calculation, behaviour or another applicable basis.'], ['How and when?', 'Follow the stated channel and protect the deadline.']],
    'Example: late filing after serious illness',
    ['A taxpayer appeals a late-filing penalty after hospital treatment. The appeal sets out the filing obligation, illness dates, practical effect, attempts to comply and prompt filing after recovery.', 'Medical evidence supports the chronology; the appeal does not rely on the words “serious illness” without showing causation and remedy.'],
    ['The deadline is imminent or missed', 'Several penalties require separate appeals', 'The dispute concerns behaviour or tax as well as the penalty']
  ),
  'hmrc-appeal-30-day-deadline': focused(
    [
      'Thirty days is common for HMRC appeals, reviews and tribunal notifications, but it is not a universal rule. The governing notice, tax regime and procedural stage determine the date and required action.',
      'Record issue and receipt dates, calculate conservatively and do not assume a phone call, complaint, ADR request or continuing negotiation stops time. New deadlines can arise after a statutory review conclusion.'
    ],
    [['Starting event', 'Identify whether time runs from the decision, notification, review offer or review conclusion.'], ['Correct recipient', 'Send the appeal or tribunal notice through the specified route.'], ['Second deadline', 'Diary review and tribunal stages independently.']],
    'Example: review conclusion received',
    ['HMRC upholds a decision after statutory review. The taxpayer continues discussing settlement but also records the separate tribunal-notification deadline.', 'A protective tribunal notification is considered before informal correspondence can cause the deadline to expire.'],
    ['The notice arrived late', 'The deadline calculation is disputed', 'Several decisions or procedural stages overlap']
  ),
  'what-counts-reasonable-excuse-hmrc': focused(
    [
      'Reasonable excuse is assessed against the obligation, circumstances and actions of the particular taxpayer. A label such as illness, bereavement or system failure is not enough without showing timing, impact, available alternatives and prompt remedy.',
      'Build a complete chronology from before the deadline until compliance. Independent evidence, support contacts, attempted submissions and delegation arrangements can help explain why the failure occurred and why the response was reasonable.'
    ],
    [['Direct effect', 'Explain how the event prevented the specific filing or payment obligation.'], ['Reasonable alternatives', 'Address steps that could realistically have been taken in the circumstances.'], ['Prompt remedy', 'Show action without unreasonable delay after the obstacle ended.']],
    'Example: accounting software failure',
    ['A business says its software failed on the filing day. The appeal includes provider status reports, support tickets, attempted workarounds and the time the return was eventually submitted.', 'It also explains why earlier preparation or an alternative filing method was not reasonably available, rather than relying on a screenshot alone.'],
    ['The excuse lasted for only part of the delay', 'Reliance on another person is central', 'Evidence is incomplete or contradictory']
  ),
  'hmrc-statutory-review-vs-tribunal': focused(
    [
      'A statutory review is conducted within HMRC by an officer not previously involved; the First-tier Tribunal is independent. A review may be quicker and less formal, while tribunal proceedings require disciplined pleadings, evidence and compliance with directions.',
      'The right choice depends on the dispute, evidence, cost, urgency and prospect of resolution. Accepting or completing a review changes the timetable for tribunal notification, so every deadline must be recorded.'
    ],
    [['Nature of dispute', 'Technical-law issues and factual-evidence disputes may benefit from different routes.'], ['Evidence readiness', 'Prepare a coherent case file even if choosing review first.'], ['Deadline effect', 'Understand how the review offer and conclusion affect tribunal rights.']],
    'Example: valuation dispute',
    ['HMRC and a taxpayer disagree over a property valuation. The taxpayer considers whether a review could resolve factual misunderstandings or whether independent tribunal determination is needed.', 'A valuation report and statement of issues are prepared before choosing, and tribunal rights are protected throughout.'],
    ['The review deadline is close', 'The case involves complex evidence or precedent', 'ADR, review and tribunal options need coordinating']
  ),
  'late-hmrc-appeal-what-to-do': focused(
    [
      'A late appeal should be submitted promptly with the underlying grounds and a complete explanation for the delay. Permission is not automatic, and continued delay while perfecting the application can weaken the position.',
      'Explain the entire period from the original deadline to submission. Include when the obstacle ended, what happened next and supporting evidence. Do not blame an adviser generically without documents and a chronology.'
    ],
    [['Length of delay', 'Calculate the missed deadline and every later period accurately.'], ['Reason for each period', 'Avoid leaving unexplained gaps after the original obstacle ended.'], ['Substantive appeal', 'Include the actual challenge, not only a request to be admitted late.']],
    'Example: decision sent to an old address',
    ['A taxpayer learns of a decision after enforcement correspondence arrives. The late appeal includes address-change evidence, the date of discovery and immediate steps taken.', 'It also sets out why the underlying assessment is disputed rather than treating non-receipt as the whole appeal.'],
    ['The delay is substantial', 'HMRC disputes receipt or notification', 'Tribunal permission may be required']
  ),
  'hmrc-rejected-appeal-next-steps': focused(
    [
      'After HMRC rejects an appeal, the decision should explain available review or tribunal routes and their deadlines. ADR may help some disputes but does not itself preserve statutory appeal rights.',
      'Separate correctness from collection. Depending on the tax and procedure, payment, postponement, hardship or Time to Pay may need attention while the substantive dispute continues.'
    ],
    [['Review or tribunal?', 'Compare independence, evidence, timing and cost for the available routes.'], ['Protect the deadline', 'Do not let continuing HMRC correspondence replace formal notification.'], ['Payment position', 'Address collection and interest separately from the merits.']],
    'Example: penalty appeal rejected',
    ['HMRC rejects a reasonable-excuse appeal and offers a statutory review. The taxpayer updates the chronology and evidence, then decides whether review or tribunal is more appropriate.', 'Any payment or collection issue is handled separately, and the next statutory deadline is not left to informal negotiation.'],
    ['The rejection gives unclear options', 'Tribunal proceedings are being considered', 'Collection action is continuing during the dispute']
  )
};
