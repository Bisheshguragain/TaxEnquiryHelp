# Phase 4 topical-cluster map

Implemented 23 July 2026.

## Publication scope

The second problem-page batch adds 12 distinct reader situations:

1. Late filing penalty appeal
2. Late payment penalty appeal
3. HMRC asking for proof of income
4. HMRC mileage evidence request
5. HMRC questions about cash payments
6. Side-hustle income not declared
7. Let Property Campaign
8. HMRC questions about Airbnb income
9. Corporation Tax investigation
10. CIS compliance check
11. PAYE reporting error
12. Incorrect VAT rate charged

## Search-intent safeguards

- Penalty pages separate filing failure from payment failure.
- Proof-of-income covers general income substantiation; mileage covers journey evidence only.
- Cash-payments covers cash-record completeness rather than generic bank-statement requests.
- Side-hustle covers trading or miscellaneous income; Airbnb and Let Property Campaign cover distinct property-platform and campaign intents.
- Corporation Tax, CIS, PAYE and VAT pages own separate business-tax correction or check intents.
- Every page has a self-referencing canonical and appears once in the XML sitemap.

## Required user pathway

Each Phase 4 page follows:

`Knowledge Hub → HMRC Problems hub → problem page → related focused question → canonical guide → preselected three-step enquiry`

The CTA carries both the Step 1 category and a validated Step 2 option. The homepage form accepts the preselection only when it matches an existing option; invalid or older links fall back safely to Step 2.

## Measurement gate

Before creating location, industry, software or language variants:

1. Review Search Console impressions and queries by URL.
2. Compare problem pages with their related question and canonical guide.
3. Investigate query overlap where two URLs receive impressions for the same primary intent.
4. Improve titles, internal-link anchors or content ownership before considering consolidation.
5. Measure enquiry starts and successful submissions by category and subcategory.
