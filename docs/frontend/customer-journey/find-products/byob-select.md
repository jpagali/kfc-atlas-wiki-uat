---
title: Build Your Own Bucket
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Build Your Own Bucket

## How This Journey Works

<div className="journey-gif-grid">

<div>

### A. Signed-In User

![Signed-in Build Your Own Bucket journey](/img/customer-journey/gif-library/signed-in/S12-build-your-own-bucket.gif)

**What this shows**

- Shows the builder entry and slot-by-slot configuration path.
- Keeps selected choices organized as the customer builds the bucket.
- Supports deeper customization while preserving order context.

</div>

<div>

### B. Guest User

![Guest Build Your Own Bucket journey](/img/customer-journey/gif-library/guest/G08-guest-byob.gif)

**What this shows**

- Lets guests understand the builder and configure slots before sign-in.
- Preserves bundle intent through item selection and customization.
- Defers authentication until account-specific or checkout actions are required.

</div>

</div>

**Key difference:** Signed-in users see account-aware shortcuts and rewards access. Guests can browse and build intent, but authentication is required for account-specific actions such as checkout, rewards redemption, or saved details.

Build Your Own Bucket is the configurable bundle journey where customers assemble a bucket from guided slots instead of choosing a fixed bundle.

## Screen Capture Sequence

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/byob/byob-01-menu-entry.png')} alt="Menu Landing entry point for Build Your Own Bucket" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Menu entry: Build Your Own Bucket appears as a wide visual tile inside Menu Landing.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/byob/byob-02-builder-top.png')} alt="Build Your Own Bucket builder top with product hero and live total" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Builder top: the customer understands the bundle purpose and live price.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/byob/byob-03-builder-slots.png')} alt="Build Your Own Bucket configurable chicken slots and quantity controls" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Slots and quantity rules: each group communicates limits and selected quantities.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/byob/byob-04-sauce-customization.png')} alt="Build Your Own Bucket sauce customization screen" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Deeper customization: sauces and extras can be configured in a focused editing state.</p>
  </div>
</div>

## What This Feature Is

Build Your Own Bucket lets customers construct a shared meal by selecting quantities across configured component groups. In the prototype, the entry appears as a specialized tile on Menu Landing and opens directly into the guided builder. The builder supports chicken selections, dipping sauce, a live total, and add-to-cart once the rules are satisfied.

## Why This Step Is Designed This Way

Build-your-own flows can become overwhelming if every option is exposed as an unstructured product list. The Atlas pattern keeps the experience guided by grouping choices into slots, showing maximum quantities, and keeping the total visible.

The customer should feel like they are building a meal, not filling out a form.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Menu entry | Whether BYOB appears on Menu Landing, PLP, or campaign surfaces | WIP |
| Entry behavior | Whether the tile opens the builder directly, routes through PLP, or uses a campaign page first | WIP |
| Slot groups | Chicken, sides, drinks, sauces, desserts, or market-specific components | WIP |
| Quantity rules | Minimum and maximum quantities by group or total bucket | WIP |
| Defaults | Preselected items, default piece count, and starter bundle behavior | WIP |
| Pricing | Per-item pricing, bundle pricing, live total, and surcharge logic | WIP |
| Validation | Add-to-cart eligibility, missing selection messaging, and disabled states | WIP |
| Localization | Builder copy and component names in English, French, Spanish, and German | WIP |

## What This Screen Should Communicate

- The customer is entering a guided build-your-own meal journey from the menu.
- The customer understands this is not a standard category grid.
- Each slot has clear limits and selected quantities.
- The total price changes as the customer builds.
- Required selections are controlled by the builder rules.
- The customer can move from broad bucket configuration into focused component editing.

## Design Read On This Screen

- The wide tile entry makes BYOB feel like a deliberate menu feature, not an ordinary category.
- Slot sections reduce decision effort by grouping choices into familiar meal parts.
- Quantity steppers are appropriate because the core behavior is count-based selection.
- The persistent add-to-cart area keeps the customer aware of basket progression while editing.
