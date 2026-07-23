# TaxEnquiryHelp editorial and publication standard

Every new guide, focused answer and problem page must pass this checklist before publication. A target word count is never a substitute for a distinct user need.

## Publication gate

1. Search the existing guide, question and service inventories before creating a URL.
2. Write a one-sentence search intent that is materially different from every existing page.
3. Choose one canonical owner for the topic. Supporting pages must answer a narrower question and link back to that owner.
4. Do not publish location, industry, software, language or severity variants unless the page contains materially different evidence and advice.
5. Keep drafts and near-duplicates out of the sitemap and set them to `noindex` until the publication gate is complete.
6. Record the author, competent reviewer, source-check date and next review date.
7. Never change a review date unless the content and cited sources have actually been checked.

## Evidence and editorial controls

1. Define one HMRC-enquiry search intent and one primary keyword.
2. Check every time-sensitive proposition against current GOV.UK, HMRC manuals, legislation or tribunal material.
3. Record at least two authoritative sources and the review date.
4. Separate HMRC guidance, legislation, professional judgement and examples. Never imply that an HMRC manual is legislation.
5. State important exceptions, applicable periods and differences between tax regimes.
6. Avoid outcome guarantees, invented statistics and unsupported claims about HMRC risk criteria.
7. Explain that content is general information and that the notice and facts control the result.
8. Add an original scenario, decision point, worked example or evidence checklist that is specific to the page.
9. Do not pad copy, synonymise another article or repeat generic paragraphs to reach a word count.
10. Use measured language. Do not manufacture urgency, promise outcomes or imply that every HMRC contact is an investigation.

## Required article structure

1. Unique URL slug and concise search title.
2. One H1 containing the primary topic naturally.
3. Meta description answering the search intent without duplication.
4. Three-paragraph introduction: definition, practical issue, scope limitation.
5. Descriptive H2 sections covering rules, evidence, likely HMRC questions, response steps, risks and outcome.
6. Scannable evidence checklist where useful.
7. Article-specific FAQs only where they add information not already answered in the body.
8. Named authoritative sources linking directly to the relevant GOV.UK pages.
9. Three to six contextual internal links: parent hub, canonical guide and genuinely related supporting answers.
10. A contextual confidential-enquiry call to action mapped to the correct Step 1 category.
11. A visible statement of author, reviewer and genuine review date.

## Problem-page structure

1. Direct answer in the first 80 words.
2. Deadline or urgency guidance only where the actual notice makes it relevant.
3. What the letter, request or error means.
4. Why HMRC may be asking and what cannot be inferred from the contact alone.
5. Numbered actions to take now.
6. Records and evidence checklist.
7. What not to send or assume.
8. A realistic worked scenario.
9. Possible outcomes and the limits of general guidance.
10. Contextual CTA that opens the relevant enquiry category.

## Technical SEO supplied by the template

- Static generation and inclusion in `generateStaticParams`.
- Canonical URL, unique metadata, keyword metadata and social metadata.
- Article and breadcrumb JSON-LD. FAQ markup may be used only when the visible page contains the same questions and answers; it must not be presented as a guaranteed rich-result tactic.
- XML sitemap inclusion and `llms.txt` discovery entry.
- Semantic H1/H2 hierarchy, breadcrumb navigation and related-guide links.
- Mobile-first shared layout with no article-specific JavaScript.

## Post-publication review

Review the page after it has had enough time to be discovered. Use Search Console impressions, queries, click-through rate and cannibalisation—not URL count—as the expansion signal. Merge or redirect pages that satisfy the same intent. Improve pages with useful impressions but weak engagement, and remove unsupported claims when guidance changes.
