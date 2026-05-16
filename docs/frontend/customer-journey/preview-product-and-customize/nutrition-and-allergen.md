---
title: Nutrition and Allergen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Nutrition and Allergen

Nutrition and Allergen covers the PDP information sheet that gives customers product details close to the purchase decision.

## Screen Capture Sequence

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/pdp/nutrition-allergen-01-nutrition.png')} alt="PDP nutrition sheet with nutrient values per serve" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Nutrition tab: product-level data is shown inside a PDP bottom sheet.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/pdp/nutrition-allergen-02-allergen.png')} alt="PDP allergen sheet with allergen legend and product status" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Allergen tab: allergen status uses a structured legend and product-specific state.</p>
  </div>
</div>

## What This Feature Is

Nutrition and Allergen is the product information layer accessible from the PDP. It gives customers supporting product data without removing them from the ordering flow.

The prototype includes:

- a bottom-sheet presentation over the PDP
- product title and selected product context
- nutrition values per serve
- allergen tab and legend
- unavailable or market-dependent allergen state handling

## Why This Step Is Designed This Way

Customers need trustworthy product information close to the purchase decision, especially when health or dietary concerns affect selection.

Keeping this information in a bottom sheet allows the customer to inspect details and return to customization without losing their PDP context.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Nutrition values | Nutrient list, unit labels, per-serve values, and market data source | WIP |
| Allergen legend | Present, trace, not applicable, unavailable, and market-specific labels | WIP |
| Product scope | Base item, size-specific values, and modifier-adjusted values | WIP |
| Legal copy | Disclaimer language, data freshness notes, and regulatory requirements | WIP |
| Availability state | Missing data, unavailable data, or product not eligible for allergen display | WIP |
| Entry point | PDP info link, product card indicator, or footer/legal destination | WIP |
| Localization | Nutrition and allergen terminology across supported languages | WIP |

## What This Screen Should Communicate

- The customer is still inside the product decision.
- Nutrition and allergen data is available without losing PDP progress.
- The source and state of information should feel trustworthy.
- Missing or unavailable data must be explicit, not hidden.

## Design Read On This Screen

- The sheet pattern preserves PDP context while giving enough room for structured data.
- Tabs separate nutrition and allergen use cases without creating separate pages.
- Row-based values support scanning for specific nutrients.
- The allergen legend prepares the customer to interpret market data consistently.
