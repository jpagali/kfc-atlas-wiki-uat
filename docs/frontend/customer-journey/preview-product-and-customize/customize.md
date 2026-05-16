---
title: Product Customization
---

# Product Customization

Product Customization covers the PDP states where the customer changes size, bundled components, defaults, and deeper modifier options before adding a product to cart.

## Screen Capture Sequence

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src="/img/customer-journey/pdp/product-customization-01-size-selection.png" alt="PDP meal size and product details area" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Meal size and product context: customer confirms the base product before deeper editing.</p>
  </div>
  <div>
    <img src="/img/customer-journey/pdp/product-customization-02-component-groups.png" alt="PDP component groups for bundled meal customization" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Component groups: meal parts are exposed in a structured, editable order.</p>
  </div>
  <div>
    <img src="/img/customer-journey/pdp/product-customization-03-deep-customization.png" alt="Deep product customization screen with sectioned options" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Deep customization: the customer can edit nested choices without losing the product context.</p>
  </div>
  <div>
    <img src="/img/customer-journey/pdp/product-customization-04-add-remove-options.png" alt="Add and remove option controls in product customization" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Add/remove controls: defaults and optional modifiers can be adjusted with clear quantity behavior.</p>
  </div>
</div>

## What This Feature Is

Product Customization is the configuration layer inside PDP. It supports:

- meal size selection
- selected defaults
- component groups such as burger, chips, drink, and side
- deeper customization for nested modifiers
- price impact through the live add-to-cart total

## Why This Step Is Designed This Way

Customization needs to feel guided and predictable so customers can personalize items without second-guessing the order. The prototype separates high-level meal structure from deeper editing states so the PDP does not become one long unstructured modifier form.

Defaults reduce effort, while edit controls give customers a clear path to change the parts that matter.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Size options | Solo, combo, box, feast, or market-specific size formats | WIP |
| Component groups | Which components are included and whether each is required or optional | WIP |
| Defaults | Preselected burger, side, drink, sauce, and modifier defaults | WIP |
| Nested modifiers | Add/remove rules, maximum quantities, default ingredients, and surcharge items | WIP |
| Price behavior | Base price, upgrade price, add-on price, and live total calculation | WIP |
| Validation | Required choices, disabled add-to-cart states, and missing selection messages | WIP |
| Localization | Modifier labels, group descriptions, and legal copy in supported languages | WIP |

## What This Screen Should Communicate

- The customer is still configuring one selected product.
- Modifier groups should feel structured, not overwhelming.
- Price impact and selected options should stay understandable as the screen grows.
- The customer should feel like they are progressing toward confirmation, not starting over.

## Design Read On This Screen

- Grouping and spacing make option sets easier to scan.
- Defaults reduce effort without hiding choice.
- Nested editing keeps deeper customization available without making the main PDP feel overloaded.
- The live total keeps the customer aware of price impact before they add to cart.
- The structure supports market variation without requiring a bespoke PDP layout for every product type.
