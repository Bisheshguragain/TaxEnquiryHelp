import type { Guide } from './guides';

/**
 * Long-form editorial layer for the original 18 guides. The topic-specific source
 * material remains in each guide; these sections make the practical enquiry
 * workflow complete and consistent without changing the underlying tax analysis.
 */
export function expandGuide(guide: Guide): Guide {
  const topic = guide.keyword;
  const audience = guide.category === 'Business' ? 'the business, its directors and the person coordinating the response' : guide.category === 'Individual' ? 'the taxpayer and any appointed adviser' : 'the taxpayer, business or representative';
  return {
    ...guide,
    readingTime: '18–22 min read',
    sections: [...guide.sections,
      {
        title:`Start with the exact HMRC notice and legal process`,
        paragraphs:[
          `Before deciding how to respond to ${topic}, identify exactly what HMRC has sent. Record the issue date, response date, HMRC reference, officer or team, tax, accounting period or tax year, and every statutory provision named in the correspondence. Separate a general information request from a formal information notice, an enquiry notice, an assessment, a penalty determination or an invitation to make a disclosure. Those documents can create different obligations, safeguards and appeal rights. A familiar HMRC heading should never replace reading the operative paragraphs and enclosures.`,
          `Create a one-page case summary that another adviser could understand without reading the whole file. It should explain what HMRC says it is checking, which returns or transactions are involved, what has already been supplied, what deadlines are live and which facts remain uncertain. Keep the original envelope, electronic delivery record and every attachment. If the notice appears to use the wrong period, entity or taxpayer reference, raise that point promptly but do not assume the error cancels the deadline. Ask HMRC to confirm any correction in writing.`
        ]
      },
      {
        title:`Build a reliable chronology and evidence register`,
        paragraphs:[
          `A detailed chronology is one of the most useful tools in a ${topic} case. Begin before the first disputed transaction and continue through preparation of the return, HMRC contact and subsequent corrections. For each event record the date, people involved, document created, accounting entry, tax treatment and source of your knowledge. A chronology exposes missing evidence, inconsistent explanations and timing issues before they appear in correspondence. It also helps distinguish a genuine contemporaneous decision from an explanation reconstructed years later.`,
          `Maintain a separate evidence register. Give every document a stable reference and record its owner, date, source, period, relevance and whether it has been sent to HMRC. Preserve original digital files and metadata where available. Do not overwrite spreadsheets while preparing a response; save a working copy and retain the filed-return version. If evidence is unavailable, document the searches made, requests to banks or suppliers and the basis of any reconstruction. Never create, backdate or alter a document so that it appears contemporaneous.`
        ],
        bullets:['Opening letter and every enclosure','Filed returns, computations and submission receipts','Contemporaneous contracts, invoices and statements','Accounting ledgers and reconciliation schedules','Advice received and decisions taken','Call notes, meeting notes and delivery evidence']
      },
      {
        title:`Reconcile the figures before explaining them`,
        paragraphs:[
          `For ${topic}, narrative and numbers must agree. Start with the amount in the filed return or claim, then create a bridge to the underlying ledger, bank records, invoices or transaction data. Show additions, deductions, timing differences, estimates and tax adjustments separately. The final schedule should be capable of being recalculated by a reviewer who did not prepare it. If several entities, properties, accounts or tax years are involved, prepare individual schedules before a consolidated summary so that one error does not contaminate the whole response.`,
          `Test the reconciliation in both directions. Select entries from the return and trace them back to source evidence, then select source records and confirm that they appear in the correct return and period. Investigate round sums, manual journals, credits from connected parties, entries posted near the year end and changes made after the accounts were drafted. A difference is not automatically additional taxable income, but it should have a factual explanation supported by records rather than an assumption about what HMRC is likely to accept.`
        ]
      },
      {
        title:`Questions HMRC may ask during the check`,
        paragraphs:[
          `HMRC questions in a ${topic} enquiry commonly move from identifying the transaction to testing its tax treatment. The officer may ask who authorised it, who received the economic benefit, what commercial or personal purpose existed, how the value was calculated, which records were used for the return and whether the same treatment was applied in other periods. HMRC may also compare the answer with third-party information, earlier returns, Companies House filings, VAT data, payroll submissions or information supplied elsewhere in the enquiry.`,
          `Prepare answers from evidence rather than rehearsing a preferred story. Where a question contains an incorrect assumption, identify it politely and replace it with the supported fact. Where the answer is not known, say what has been checked and what further work is under way. Avoid absolute statements such as “this never happened” unless the available records justify them. ${audience} should agree who is responsible for correspondence so that HMRC does not receive competing versions from different people.`
        ],
        bullets:['What happened, when and under whose authority?','What was the business, investment or personal purpose?','How was the tax treatment selected and reviewed?','Which primary records support the amount?','Were connected parties or overseas elements involved?','Does the issue occur in another return or period?']
      },
      {
        title:`Drafting a complete and proportionate response`,
        paragraphs:[
          `Use the numbering and terminology in HMRC’s letter. For each question give a direct answer, a short explanation, the document references and any necessary calculation. Put extensive data in indexed schedules rather than embedding it in a long covering letter. Define abbreviations and identify whether figures are gross, net, inclusive of VAT, estimated or converted from another currency. If part of the request is unclear, explain the reasonable interpretation used or ask for clarification before producing material that may not address the actual risk.`,
          `Proportionate does not mean incomplete. Supply information that is relevant and required, but do not send an unstructured archive in the hope that HMRC will find the answer. Check personal data, privileged material and third-party confidentiality before disclosure and obtain advice where restrictions may apply. Use an agreed secure transfer method, retain an exact final copy and record the delivery date. Ask HMRC to acknowledge receipt and, after a substantial response, to identify which questions remain open.`
        ]
      },
      {
        title:`Meetings, interviews and site visits`,
        paragraphs:[
          `A meeting about ${topic} should have a defined purpose. Ask HMRC for an agenda, the names and roles of attendees, the taxes and periods to be discussed, the records expected and whether the meeting is voluntary or connected to a statutory inspection power. Decide who can answer factual, technical and accounting questions. A director or taxpayer should understand the key chronology, but there is no benefit in guessing about a detailed calculation that can be verified after the meeting.`,
          `During the meeting, listen to each question and answer only after understanding it. Distinguish personal recollection from information found in records. Keep a contemporaneous note of questions, answers, documents shown and actions agreed. Afterward, compare notes with attendees and correct any material misunderstanding promptly in writing. If HMRC produces a meeting note, review it carefully; silence may later be treated as agreement even where the note compresses or changes an important qualification.`
        ]
      },
      {
        title:`Errors, disclosure and taxpayer behaviour`,
        paragraphs:[
          `If the review identifies an error connected with ${topic}, quantify it before deciding how it should be reported. Determine the affected taxpayer, tax, period and return, whether the same cause affects other periods, and whether the error increases or decreases liability. An amendment, disclosure facility, correction on a later return or response within the existing enquiry are not interchangeable. Using the wrong route can duplicate a liability, omit a required period or create inconsistent explanations.`,
          `Tax, interest and penalties should be analysed separately. A penalty can depend on the particular statutory failure, the behaviour that caused it, whether disclosure was prompted, and the quality of disclosure. Evidence of systems, checks, professional advice and remedial action can be relevant, but appointing an adviser does not automatically establish reasonable care. Equally, an incorrect technical position is not automatically deliberate. Avoid adopting HMRC’s behaviour label until the facts and legal test have been examined.`
        ]
      },
      {
        title:`Review HMRC calculations and proposed conclusions`,
        paragraphs:[
          `When HMRC proposes an adjustment in a ${topic} case, request enough detail to reproduce it. Check the tax base, period, rate, ownership, source data, estimates, reliefs, payments on account and interaction with other taxes. Review interest dates and penalty assumptions independently. If HMRC extrapolates a sample or uses a business-economic model, test whether the sample is representative and whether seasonal changes, exceptional transactions, private funds or accounting differences explain the apparent gap.`,
          `Respond with a marked-up calculation or alternative schedule rather than saying only that the figure is excessive. Agree undisputed facts where possible and list the remaining issues in neutral language. This narrows the case and helps both sides see whether disagreement concerns evidence, accounting, valuation or law. Do not accept a figure merely to end a long enquiry without understanding its effect on other returns, losses, future periods, company accounts or connected taxpayers.`
        ]
      },
      {
        title:`Closure, review, appeal and dispute resolution`,
        paragraphs:[
          `An enquiry does not end simply because correspondence stops. Obtain the appropriate written closure, decision or confirmation. Read any closure notice, assessment or penalty notice for the conclusion, amendments, payment position and appeal instructions. Many tax decisions use a 30-day appeal period, but the exact right and deadline come from the notice and legislation. Continuing to negotiate, making a complaint or applying for Alternative Dispute Resolution should not be assumed to preserve an appeal deadline.`,
          `A statutory review can provide reconsideration by an HMRC officer not previously involved, while the First-tier Tribunal is independent of HMRC. Alternative Dispute Resolution may help where communication or factual understanding has stalled, but it may not resolve a dispute turning solely on law. Choose a route after comparing the issue, evidence, amount at stake, costs and wider consequences. If agreement is reached, record the taxes, periods, figures, interest, penalties, payment dates and whether every issue is resolved.`
        ]
      },
      {
        title:`Controls to put in place after the enquiry`,
        paragraphs:[
          `The end of a ${topic} enquiry should produce a practical control plan. Identify the root cause of every agreed error or evidence gap: unclear responsibility, weak bookkeeping, missing contracts, inconsistent coding, reliance on estimates, late adviser involvement or failure to review unusual transactions. Assign an owner and implementation date to each improvement. Update written procedures and make sure the control creates evidence that can be reviewed, not merely a statement that staff will take more care.`,
          `Set review points before return deadlines and before exceptional transactions are completed. Reconcile tax-sensitive accounts regularly, preserve digital records in accessible formats and document important judgements at the time. Where professional advice is used, provide complete facts and retain the final advice and implementation record. These steps cannot guarantee that HMRC will not open another check, but they reduce avoidable errors and make any future enquiry faster, clearer and better supported.`
        ]
      }
    ]
  };
}
