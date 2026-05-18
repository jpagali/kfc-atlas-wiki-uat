---
title: Step 4 - Order and Get
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Step 4 - Order and Get

This step covers the conversion stage where the customer reviews the basket, confirms fulfillment details, applies value, chooses payment, and submits the order.

## What This Step Covers

Order and Get begins after the customer has selected products and moves into basket confidence. The prototype focuses on cart review, add-on recommendations, checkout detail, order review, payment, and final submission.

## Journey Map

| Sequence | Customer Decision |
|---|---|
| 1 | Review cart contents and customization summaries |
| 2 | Consider add-ons or recommendations |
| 3 | Confirm fulfillment detail and order review |
| 4 | Apply promo or payment method |
| 5 | Submit the order |

## Screenshots

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/cart/cart-01-review-top.png')} alt="Cart review top with products and order context" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Cart review: customers confirm items, quantities, and context before checkout.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/cart/cart-02-add-ons.png')} alt="Cart recommendations and add-on section" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Add-ons: recommendations support incremental basket value without leaving cart.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/checkout/checkout-03-promo-payment-submit.png')} alt="Checkout promo payment and final submit screen" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Checkout: promo, payment, and submit actions complete conversion.</p>
  </div>
</div>

## Pages in This Section

- [Cart](/docs/frontend/customer-journey/order-and-get/cart)
- [Checkout](/docs/frontend/customer-journey/order-and-get/checkout)
