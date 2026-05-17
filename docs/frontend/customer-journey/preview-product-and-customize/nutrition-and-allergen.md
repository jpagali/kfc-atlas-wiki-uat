---
title: Nutrition and Allergen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Nutrition and Allergen

Nutrition and Allergen covers the PDP information sheet that gives customers product-level nutrition and allergen details close to the purchase decision.

## Screen Capture Sequence

These captures show the current PDP information pattern: the customer opens Nutrition & Allergens from PDP, reviews per-serve nutrition values, switches to allergen status, and sees an explicit unavailable state when market data is not present.

<style>{`
  .nutrition-state-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .nutrition-state-card img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 12px;
    background: #fff;
  }

  .nutrition-state-card p,
  .nutrition-note li {
    font-size: 0.92rem;
    line-height: 1.55;
  }
`}</style>

<div className="nutrition-state-grid">
  <div className="nutrition-state-card">
    <img src={useBaseUrl('/img/customer-journey/nutrition-allergen/nutrition-allergen-00-pdp-entry-point.png')} alt="PDP showing the Nutrition and Allergens entry point below product details" />
    <p><strong>PDP entry point:</strong> Nutrition & Allergens appears inside the product decision flow before customization continues.</p>
  </div>
  <div className="nutrition-state-card">
    <img src={useBaseUrl('/img/customer-journey/nutrition-allergen/nutrition-allergen-01-nutrition-tab.png')} alt="Nutrition tab with per-serve nutrient rows" />
    <p><strong>Nutrition tab:</strong> per-serve values are shown in a scannable table tied to the selected product and size.</p>
  </div>
  <div className="nutrition-state-card">
    <img src={useBaseUrl('/img/customer-journey/nutrition-allergen/nutrition-allergen-02-allergen-tab.png')} alt="Allergen tab with present trace not applicable and unavailable legend" />
    <p><strong>Allergen tab:</strong> a legend standardizes Present, Trace, N/A, and Unavailable states across markets.</p>
  </div>
  <div className="nutrition-state-card">
    <img src={useBaseUrl('/img/customer-journey/nutrition-allergen/nutrition-allergen-03-unavailable-state.png')} alt="Allergen tab showing unavailable allergen information state" />
    <p><strong>Unavailable state:</strong> missing allergen data is shown directly instead of being hidden or implied.</p>
  </div>
</div>

## What This Feature Is

Nutrition and Allergen is the product information layer accessible from the PDP. It gives customers supporting product data without taking them away from the product they are reviewing.

The prototype includes:

- PDP entry point for Nutrition & Allergens
- bottom-sheet presentation over the PDP
- product title and selected product context
- nutrition values per serve
- allergen tab with status legend
- explicit unavailable state for missing allergen data

## Why This Step Is Designed This Way

Customers need trustworthy product information close to the purchase decision, especially when dietary, allergen, or health considerations affect selection.

Keeping this information in a bottom sheet allows customers to inspect details and return to the same PDP without losing product, size, or customization context.

<div className="nutrition-note">
  <ul>
    <li><strong>Close to decision:</strong> the entry point sits on PDP where customers are already evaluating the item.</li>
    <li><strong>Structured data:</strong> nutrition rows and allergen status labels support quick scanning.</li>
    <li><strong>Market-ready fallback:</strong> unavailable data is visible, which avoids unsupported confidence in incomplete information.</li>
  </ul>
</div>

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Nutrition values | Nutrient list, unit labels, per-serve values, and market data source | WIP |
| Allergen legend | Present, trace, not applicable, unavailable, and market-specific labels | WIP |
| Product scope | Base item, size-specific values, and modifier-adjusted values | WIP |
| Legal copy | Disclaimer language, data freshness notes, and regulatory requirements | WIP |
| Availability state | Missing data, unavailable data, or product not eligible for allergen display | WIP |
| Entry point | PDP info link, product card indicator, or footer/legal destination | Prototype shows PDP entry |
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
- Explicit unavailable states help markets handle incomplete data responsibly.
