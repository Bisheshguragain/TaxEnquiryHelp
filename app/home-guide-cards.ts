import type { HomeGuideCard } from './HomeClient';

// Homepage summaries intentionally live apart from the full guide articles.
// This keeps thousands of words of article content out of the homepage module graph.
export const featuredGuides: HomeGuideCard[] = [
  { slug:'what-is-an-hmrc-compliance-check', category:'Business', title:'What Is an HMRC Compliance Check? A Complete UK Guide', description:'Received an HMRC compliance check letter? Learn what HMRC can check, what information it may request, your rights, likely timescales and how to respond.', updated:'17 July 2026' },
  { slug:'hmrc-self-assessment-enquiry-guide', category:'Individual', title:'HMRC Self Assessment Enquiry: What to Do After a Letter', description:'A practical guide to Section 9A enquiries, HMRC information requests, records, deadlines, penalties and professional representation.', updated:'17 July 2026' },
  { slug:'appeal-hmrc-tax-penalty', category:'General', title:'How to Appeal an HMRC Tax Decision or Penalty in the UK', description:'Understand HMRC appeal deadlines, statutory reviews, reasonable-excuse evidence and the route to the First-tier Tribunal.', updated:'17 July 2026' },
];

export const latestGuides: HomeGuideCard[] = [
  { slug:'dormant-company-companies-house-hmrc', category:'Business', title:'Dormant Company: Companies House and HMRC Rules Explained', description:'A 2026 guide to dormant-company status for Companies House and HMRC, filing duties, transactions that may end dormancy and enquiry evidence.', updated:'17 July 2026' },
  { slug:'companies-house-accounts-vs-hmrc-tax-return', category:'Business', title:'Companies House Accounts vs HMRC Tax Return: Enquiry Risks', description:'Understand the difference between Companies House accounts and an HMRC Company Tax Return, filing routes, deadlines and how to explain mismatches.', updated:'17 July 2026' },
  { slug:'hmrc-overdrawn-directors-loan-account-enquiry', category:'Business', title:'Overdrawn Director’s Loan Account: HMRC Enquiry Implications', description:'A guide to HMRC checks of overdrawn director loan accounts, section 455 tax, beneficial loans, repayments, write-offs and matching rules.', updated:'17 July 2026' },
];
