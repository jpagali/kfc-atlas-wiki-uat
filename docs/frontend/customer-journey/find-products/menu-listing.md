---
title: PLP (Product Listing Page)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# PLP (Product Listing Page)

## How This Journey Works

<div className="journey-gif-grid">

<div>

### A. Signed-In User

![Signed-in product listing journey](/img/customer-journey/gif-library/signed-in/S06-plp-browsing.gif)

**What this shows**

- Shows category tabs, loaded product imagery, and product cards together.
- Lets the customer move between categories without losing order context.
- Keeps account-aware navigation available while browsing products.

</div>

<div>

### B. Guest User

![Guest product listing journey](/img/customer-journey/gif-library/guest/G05-guest-plp-browsing.gif)

**What this shows**

- Supports product discovery and category movement before sign-in.
- Lets guests compare items, pricing, and product recognition in the grid.
- Preserves browse intent until an account-specific action is required.

</div>

</div>

**Key difference:** Signed-in users see account-aware shortcuts and rewards access. Guests can browse and build intent, but authentication is required for account-specific actions such as checkout, rewards redemption, or saved details.

The PLP is the product comparison surface after a customer selects a menu category. It is separate from Menu Landing because the customer is no longer deciding which category to enter. They are comparing products inside an active category and deciding what to open, customize, or add.

## Screen Capture Sequence

These captures show the PLP after product images have loaded. The full-scroll capture on the right documents the browse path from Featured Offers into Burgers, while the zoom crops explain the main interaction areas.

<style>{`
  .plp-journey-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
    gap: 1.25rem;
    align-items: start;
    margin-bottom: 1.5rem;
  }

  .plp-journey-copy {
    display: grid;
    gap: 1rem;
  }

  .plp-journey-copy p,
  .plp-journey-copy li,
  .plp-zoom-card p {
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .plp-journey-copy ul {
    margin-bottom: 0;
  }

  .plp-full-scroll-frame {
    max-height: 780px;
    overflow-y: auto;
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 12px;
    background: #fff;
  }

  .plp-full-scroll-frame img,
  .plp-zoom-card img {
    display: block;
    width: 100%;
    height: auto;
  }

  .plp-zoom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .plp-zoom-card img {
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 12px;
    background: #fff;
  }

  @media (max-width: 780px) {
    .plp-journey-wrap {
      grid-template-columns: 1fr;
    }
  }
`}</style>

<div className="plp-journey-wrap">
  <div className="plp-journey-copy">
    <div>
      <strong>What the full scroll shows</strong>
      <ul>
        <li>Order context stays visible at the top so customers know whether they are browsing pickup or delivery.</li>
        <li>The category rail keeps the customer anchored while they move through a long product list.</li>
        <li>Product cards combine image, tag, title, price, energy, and short descriptor for fast comparison.</li>
        <li>The scroll continues into the next category, reducing the need to return to Menu Landing.</li>
      </ul>
    </div>
    <div>
      <strong>Why this layout matters</strong>
      <p>The PLP supports high-volume menu browsing. Customers need to compare products quickly, keep category context, and move into PDP customization without losing their place.</p>
    </div>
  </div>
  <div>
    <div className="plp-full-scroll-frame">
      <img src={useBaseUrl('/img/customer-journey/menu/plp-00-full-scroll-featured-to-burgers.png')} alt="Full scroll PLP capture from Featured Offers into Burgers with loaded product images" />
    </div>
    <p style={{ fontSize: '0.86rem', lineHeight: 1.45, marginTop: '0.5rem' }}>Full-scroll reference: Featured Offers into Burgers.</p>
  </div>
</div>

<div className="plp-zoom-grid">
  <div className="plp-zoom-card">
    <img src={useBaseUrl('/img/customer-journey/menu/plp-detail-01-header.png')} alt="PLP header with back action, order context, filter, and search" />
    <p><strong>Header:</strong> keeps order context, back navigation, filter, and search within reach.</p>
  </div>
  <div className="plp-zoom-card">
    <img src={useBaseUrl('/img/customer-journey/menu/plp-detail-02-category-tabs.png')} alt="PLP category tab rail with Featured Offers active" />
    <p><strong>Category rail:</strong> shows the active category and supports quick switching across menu sections.</p>
  </div>
  <div className="plp-zoom-card">
    <img src={useBaseUrl('/img/customer-journey/menu/plp-detail-03-product-grid-top.png')} alt="PLP product grid with loaded product images and product card metadata" />
    <p><strong>Product grid:</strong> pairs image, title, price, energy, and short copy for comparison.</p>
  </div>
  <div className="plp-zoom-card">
    <img src={useBaseUrl('/img/customer-journey/menu/plp-detail-04-category-transition.png')} alt="PLP scroll transition from Featured Offers into Burgers" />
    <p><strong>Category transition:</strong> lets customers continue browsing into the next category without returning to Menu Landing.</p>
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
