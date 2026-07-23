# TaxEnquiryHelp Phase 1 content audit

Audit date: 23 July 2026

## Executive finding

The site already has broad topical coverage: 23 long-form Knowledge Base guides, 36 focused HMRC Questions pages and 6 enquiry service hubs. The immediate SEO priority is consolidation and editorial differentiation, not a large increase in URL count.

The long-form guides generally contain about 2,000–3,400 words of article-specific material and form a strong canonical layer. The focused-question layer is the principal risk: each of its 36 entries contributes only about 150–210 words of unique data to a shared page template. Although the rendered pages include action lists, record lists and sources, their structure and repeated connective copy are highly uniform. These pages need phased enrichment, consolidation or temporary exclusion from indexing before more short pages are created.

## Current indexable inventory

| Content type | Count | Intended role | Audit status |
| --- | ---: | --- | --- |
| Knowledge Base guides | 23 | Canonical, comprehensive resources | Retain; refresh and improve internal ownership |
| HMRC Questions | 36 | Narrow supporting answers | Improve or merge before expanding |
| Enquiry service hubs | 6 | Commercial/category landing pages | Retain; use as parent hubs |
| Main utility and legal pages | 8 | Home, hubs, contact and legal information | Retain |

The sitemap currently contains the main pages, all guides, all six service pages and all 36 focused questions. All content types therefore receive the same presumption of publication and indexability.

## Strong canonical guides

Retain these as the principal owners of their broad topics:

| Canonical guide | Primary ownership |
| --- | --- |
| `/knowledge-base/what-is-an-hmrc-compliance-check` | General HMRC compliance-check process |
| `/knowledge-base/hmrc-self-assessment-enquiry-guide` | Self Assessment enquiry process |
| `/knowledge-base/appeal-hmrc-tax-penalty` | Penalty and tax-decision appeals |
| `/knowledge-base/can-hmrc-ask-for-bank-statements` | Bank-statement request overview |
| `/knowledge-base/section-9a-enquiry-letter-response` | Section 9A response preparation |
| `/knowledge-base/hmrc-vat-compliance-check` | VAT compliance checks |
| `/knowledge-base/hmrc-paye-employer-compliance-check` | PAYE employer checks |
| `/knowledge-base/hmrc-corporation-tax-enquiry` | Corporation Tax enquiries |
| `/knowledge-base/hmrc-cis-compliance-check` | CIS compliance checks |
| `/knowledge-base/hmrc-property-income-enquiry` | Property-income enquiries |
| `/knowledge-base/hmrc-code-of-practice-8-investigation` | COP8 |
| `/knowledge-base/hmrc-code-of-practice-9-cdf` | COP9 and CDF |
| `/knowledge-base/hmrc-schedule-36-information-notice` | Schedule 36 notices |
| `/knowledge-base/hmrc-discovery-assessment` | Discovery assessments |
| `/knowledge-base/hmrc-closure-notice-and-adr` | Closure and ADR |

## High-priority overlap decisions

| Proposed or existing topic | Existing competing URLs | Decision |
| --- | --- | --- |
| HMRC asking for bank statements | Long guide plus two focused business/personal bank questions | Keep the long guide canonical; retain supporting questions only after each is made materially scenario-specific |
| Section 9A enquiry | Self Assessment guide, Section 9A response guide and focused definition question | Broad process belongs to the Self Assessment guide; response mechanics belong to the Section 9A guide; definition page should be enriched or merged |
| HMRC compliance-check triggers | Compliance guide, service hub and focused trigger question | Service hub handles help intent; guide owns informational intent; question remains only as a narrow trigger answer |
| VAT enquiry or inspection | VAT guide, VAT/PAYE hub and focused VAT enquiry question | Guide owns the full process; hub owns service intent; supporting answer must target immediate expectations |
| PAYE compliance check | PAYE guide, VAT/PAYE hub and focused trigger page | Guide owns the process; trigger page must remain narrow |
| CIS compliance check | CIS guide, VAT/PAYE service hub and CIS/PAYE question | Keep CIS guide canonical; reconsider the combined CIS/PAYE answer if it cannot add a distinct use case |
| Property/rental income | Property guide and forgotten-rental-income question | Keep both: enquiry response and voluntary disclosure are different intents; cross-link explicitly |
| Penalty appeal | Appeal guide and `how-to-appeal-hmrc-penalty` question | Guide owns the complete process; focused page should answer the immediate first action or be merged |
| Closure notice | Closure/ADR guide plus Self Assessment closure question | Keep only if the question is explicitly Self Assessment-specific |
| COP8 and COP9 | Two long guides, service hub and six questions | Preserve the two guides and hub; individually review all six questions for unique procedural value |

## First 12 proposed problem pages: disposition

| Proposed page | Phase 1 decision | Reason |
| --- | --- | --- |
| HMRC Compliance Check Letter | Improve existing compliance-check guide; do not create a new URL yet | Same broad intent |
| HMRC Asking for Bank Statements | Improve existing bank-statements guide | Existing canonical match |
| HMRC Nudge Letter | New candidate | Clear gap and distinct immediate intent |
| HMRC Asking for Receipts or Expense Evidence | New candidate after checking the Self Assessment documents page | Potentially distinct, but must focus on receipts and reconstruction |
| HMRC Asking for Business Records | New candidate | Distinct business-record response intent |
| HMRC Penalty Notice | New candidate supporting the appeal guide | Immediate notice-reading intent differs from full appeal procedure |
| HMRC VAT Inspection | Improve/retitle existing VAT content before creating another URL | High overlap |
| HMRC PAYE Compliance Check | Improve existing PAYE guide | Existing canonical match |
| Incorrect Self Assessment Return | New candidate | Clear correction intent |
| Forgot to Declare Income | New candidate, with disclosure-route boundaries | Distinct disclosure intent |
| Undeclared Rental Income | Enrich existing focused rental-disclosure page | Existing intent match |
| VAT Return Error | New candidate | Correction intent differs from inspection |

This reduces the first truly new batch to six strong candidates: HMRC nudge letter, receipts/expense evidence, business records, penalty notice, incorrect Self Assessment return and VAT return error. “Forgot to declare income” should follow only after the existing disclosure hub and focused disclosure pages have been consolidated.

## Technical and conversion findings

### Fixed during Phase 1

- Category-aware article CTAs already supplied a `category` query parameter, but the homepage did not read it. The homepage now opens Step 2 with the correct Step 1 category selected.
- The service-page hero constructed the query after the URL fragment (`/#enquiry?category=...`), which made it part of the fragment rather than a query parameter. All service CTAs now use `/?category=...#enquiry`.
- Scenario and final service CTAs now preserve the same category context.
- The editorial standard now includes a duplicate-intent publication gate, evidence requirements, genuine review-date controls and a problem-page template.

### Next technical actions

1. Replace hard-coded site-wide publication and modification dates with item-level ISO dates.
2. Add a real reviewer identity and credentials only after the responsible person or firm is confirmed.
3. Review whether `ProfessionalService` and `Service` structured data accurately describe TaxEnquiryHelp’s role as an enquiry-routing website. Do not imply that TaxEnquiryHelp itself provides regulated services if independent firms do so.
4. Use page-specific CTA mappings down to Step 2 where the subcategory exactly matches an available form option.
5. Include only publication-ready canonical URLs in the sitemap.
6. Treat FAQ structured data as semantic markup, not as a promised Google rich-result feature.
7. Update `llms.txt` when canonical ownership changes; do not list every supporting answer merely to increase discovery.

## Editorial foundation

Every future problem page needs:

1. A single, distinct user situation.
2. A direct answer in the first 80 words.
3. An explanation of what the contact does and does not imply.
4. Immediate numbered actions.
5. A tailored evidence checklist.
6. A realistic worked scenario or decision point.
7. Page-specific mistakes and limitations.
8. Current authoritative sources.
9. A named author and competent reviewer.
10. A CTA routed to the relevant enquiry category.

Pages must not be approved solely because they reach a word count. Location, industry, software, language and severity variants remain out of scope until performance data and real service differentiation support them.

## Phase 2 queue

Phase 2 completed on 23 July 2026:

1. The three featured canonical guides now have explicit search intent, secondary query coverage, genuine review dates and category-aware enquiry CTAs.
2. The six compliance-check questions now contain page-specific analysis, decision points, a worked example and specialist-help indicators.
3. The six Self Assessment questions now contain the same differentiated editorial modules.
4. The bank-statement supporting pages remain separate only for distinct business-account and personal-account scenarios, with the comprehensive bank-statements guide retained as canonical owner.
5. Item-level modification dates are now reflected in article structured data and the sitemap.

The remaining 24 focused answers were differentiated on 23 July 2026. All 36 HMRC Questions pages now contain topic-specific analysis, decision points, worked examples and specialist-help indicators. The next controlled phase is to create the six approved gap pages using the problem-page publication brief, followed by query-overlap and conversion measurement.
