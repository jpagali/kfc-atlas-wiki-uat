---
title: PLP (Product Listing Page)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# PLP (Product Listing Page)

The PLP is the product comparison surface after a customer selects a menu category. It is separate from Menu Landing because the customer is no longer deciding which category to enter. They are comparing products inside an active category and deciding what to open, customize, or add.

## Screen Capture Sequence

These captures show the PLP after images have loaded and after multiple scroll positions, so the page documents more than the first visible product row.

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/menu/plp-01-featured-top.png')} alt="PLP top with active category tabs and featured products" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>PLP top: selected category context, tab rail, and product cards.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/menu/plp-02-product-grid.png')} alt="PLP scrolled to loaded product grid" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Product grid: image, title, price, and product recognition are visible together.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/menu/plp-03-category-transition.png')} alt="PLP scrolled into the next category section" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Category transition: customers can keep browsing across categories without returning to Menu Landing.</p>
  </div>
</div>

## What This Feature Is

PLP stands for Product Listing Page. In this prototype, it shows customers a browsable set of products after they choose a category from Menu Landing or switch categories using the PLP tab rail.

The PLP should support:

- product comparison within one category
- quick category switching without losing browse context
- product recognition through loaded imagery
- clear movement into PDP customization
- continued browsing across adjacent categories

## Why It Is Designed This Way

The PLP is where the customer moves from category understanding into real product comparison. It needs to feel fast, scannable, and commercially effective without turning into visual noise.

The tab rail keeps the customer anchored in the menu structure, while product cards keep the commercial decision simple: what is it, what does it look like, and what is the entry price.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Category tabs | Category order, labels, active default, and visibility | WIP |
| Product cards | Product title, image, price, tags, calories or nutrition metadata | WIP |
| Product sorting | Default sort, category order, featured placement, and availability handling | WIP |
| Promotion treatment | Value labels, limited-time badges, campaign placement, and offer eligibility | WIP |
| Image fallback | Fallback assets when product images are missing or slow to load | WIP |
| Out-of-stock state | Disabled cards, substitution logic, and messaging | WIP |
| Localization | Category and product text in English, French, Spanish, and German | WIP |

## What This Screen Should Usually Communicate

- The customer is inside a specific category.
- The category can be changed quickly through top-level tab navigation.
- Products are arranged for comparison, not deep storytelling.
- The page should help customers move toward PDP, customization, or basket-building with minimal friction.

## Design Read On This Screen

- The top category bar keeps the customer anchored inside browse while still making cross-category switching fast.
- The product grid gives strong visual comparison without forcing the user into one-card-at-a-time browsing.
- The red active tab treatment makes the current category state easy to understand at a glance.
- Product cards are built around the commercial essentials first: image, title, price, and short supporting descriptor.
- The customer can scroll into additional category sections, which supports broad menu discovery without forcing a reset back to the category tile page.
