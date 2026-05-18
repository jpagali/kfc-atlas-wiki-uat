---
title: Add-on and Cross-sell
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Add-on and Cross-sell

## How This Journey Works

<div className="journey-gif-grid">

<div>

### A. Signed-In User

![Signed-in add-on and upsell journey](/img/customer-journey/gif-library/signed-in/S13-add-to-cart-upsell-modal.gif)

**What this shows**

- Shows the add-to-cart confirmation and upsell modal moment.
- Makes add-ons visible while purchase intent is active.
- Supports basket growth without forcing the customer away from the product path.

</div>

<div>

### B. Guest User

![Guest add-on and upsell journey](/img/customer-journey/gif-library/guest/G09-guest-add-to-cart-upsell.gif)

**What this shows**

- Lets guests add products and see upsell prompts before authentication.
- Preserves selected add-ons in the cart-building path.
- Keeps checkout authentication separate from add-on discovery.

</div>

</div>

**Key difference:** Signed-in users see account-aware shortcuts and rewards access. Guests can browse and build intent, but authentication is required for account-specific actions such as checkout, rewards redemption, or saved details.

Add-on and Cross-sell covers the moments where Atlas recommends complementary items after the customer has made a primary product decision.

## Screen Capture Sequence

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/addons/add-on-cross-sell-01-upsell-modal.png')} alt="Post-PDP add-on modal with recommended sides and drinks" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Post-PDP upsell: optional recommendations appear after the main product is configured.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/addons/add-on-cross-sell-02-selected-add-on.png')} alt="Upsell modal with selected add-on quantity" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Selection state: the customer can add quantities without leaving the modal.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/addons/add-on-cross-sell-03-cart-recommendations.png')} alt="Cart page cross-sell recommendation section" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Cart recommendations: basket-building continues after the modal is dismissed.</p>
  </div>
</div>

## What This Feature Is

Add-on and Cross-sell is a merchandising pattern used to increase basket value without interrupting the core product decision. The prototype shows two surfaces:

- a post-PDP upsell modal after the main item is added or confirmed
- a cart recommendation area that remains available during basket review

## Why This Step Is Designed This Way

Add-on moments are most effective after the customer has shown purchase intent but before they leave the product decision flow.

The interaction should feel optional. The customer can add extras quickly, continue to order, or review recommendations later in the cart.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Recommendation source | Static rules, product affinity, campaign logic, or basket-based recommendations | WIP |
| Eligible products | Sides, drinks, desserts, dips, value add-ons, or market-specific items | WIP |
| Timing | Post-PDP, cart entry, checkout entry, or disabled for selected journeys | WIP |
| Quantity behavior | Stepper limits, default quantity, and add/remove behavior | WIP |
| Pricing | Add-on price, discount treatment, and multi-buy logic | WIP |
| Suppression rules | Out-of-stock, already-in-cart, fulfillment mode, loyalty eligibility | WIP |
| Localization | Add-on labels, CTA copy, and promo messaging across supported languages | WIP |

## What This Screen Should Communicate

- It waits until the main meal decision is largely complete.
- It presents optional extension items instead of blocking the core order path.
- It tries to increase basket value while the customer is still mentally inside the product decision.

## Design Read On This Screen

- The modal respects the primary product decision by appearing after the customer has already committed to the main item.
- The stepper pattern keeps add-ons fast and low effort.
- The cart recommendation section gives the business another merchandising surface without forcing a modal interaction.
- The pattern supports market-specific merchandising while keeping the purchase path clear.
