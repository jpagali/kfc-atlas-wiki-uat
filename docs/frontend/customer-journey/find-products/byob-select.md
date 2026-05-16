---
title: Build Your Own Bucket
---

# Build Your Own Bucket

Build Your Own Bucket is the configurable bundle journey where customers assemble a bucket from guided slots instead of choosing a fixed bundle.

## Screen Capture Sequence

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src="/img/customer-journey/byob/byob-01-menu-entry.png" alt="Menu Landing entry point for Build Your Own Bucket" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Menu entry: Build Your Own Bucket appears as a specialized menu tile.</p>
  </div>
  <div>
    <img src="/img/customer-journey/byob/byob-02-builder-top.png" alt="Build Your Own Bucket builder top with product hero and live total" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Builder top: the customer understands the bundle purpose and live price.</p>
  </div>
  <div>
    <img src="/img/customer-journey/byob/byob-03-builder-slots.png" alt="Build Your Own Bucket configurable chicken slots and quantity controls" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Slots and quantity rules: each group communicates limits and selected quantities.</p>
  </div>
  <div>
    <img src="/img/customer-journey/byob/byob-04-sauce-customization.png" alt="Build Your Own Bucket sauce customization screen" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Deeper customization: sauces and extras can be configured in a focused editing state.</p>
  </div>
</div>

## What This Feature Is

Build Your Own Bucket lets customers construct a shared meal by selecting quantities across configured component groups. In the prototype, the builder supports chicken selections, dipping sauce, a live total, and add-to-cart once the rules are satisfied.

## Why This Step Is Designed This Way

Build-your-own flows can become overwhelming if every option is exposed as an unstructured product list. The Atlas pattern keeps the experience guided by grouping choices into slots, showing maximum quantities, and keeping the total visible.

The customer should feel like they are building a meal, not filling out a form.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Menu entry | Whether BYOB appears on Menu Landing, PLP, or campaign surfaces | WIP |
| Slot groups | Chicken, sides, drinks, sauces, desserts, or market-specific components | WIP |
| Quantity rules | Minimum and maximum quantities by group or total bucket | WIP |
| Defaults | Preselected items, default piece count, and starter bundle behavior | WIP |
| Pricing | Per-item pricing, bundle pricing, live total, and surcharge logic | WIP |
| Validation | Add-to-cart eligibility, missing selection messaging, and disabled states | WIP |
| Localization | Builder copy and component names in English, French, Spanish, and German | WIP |

## What This Screen Should Communicate

- The customer is creating a custom shared meal.
- Each slot has clear limits and selected quantities.
- The total price changes as the customer builds.
- Required selections are controlled by the builder rules.
- The customer can move from broad bucket configuration into focused component editing.

## Design Read On This Screen

- The tile entry makes BYOB feel like a deliberate menu feature, not an ordinary category.
- Slot sections reduce decision effort by grouping choices into familiar meal parts.
- Quantity steppers are appropriate because the core behavior is count-based selection.
- The persistent add-to-cart area keeps the customer aware of basket progression while editing.
