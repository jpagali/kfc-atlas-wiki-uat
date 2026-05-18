---
title: Step 1 - Setup Order
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Step 1 - Setup Order

This step covers the decisions a customer must make before Atlas can show the right menu, pricing, availability, and fulfillment path.

## What This Step Covers

Setup Order defines the customer's order context. The prototype focuses on order mode selection, pickup store selection, and delivery address or store assignment. These choices determine which products, promotions, hours, fees, and checkout rules are available.

## Journey Map

| Sequence | Customer Decision |
|---|---|
| 1 | Choose pickup or delivery |
| 2 | Select a pickup store or confirm delivery address |
| 3 | Review serviceability, store availability, and fulfillment details |

## Screenshots

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/setup-order/set-order-mode-01-sheet.png')} alt="Set order mode selector with pickup and delivery options" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Set Order Mode: the customer chooses the fulfillment path before browsing.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/setup-order/pickup-01-map-and-stores.png')} alt="Pickup map and nearby store cards" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Pickup: map and store cards give location confidence before menu entry.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/setup-order/delivery-01-address-selection.png')} alt="Delivery address selection screen" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Delivery: address entry starts serviceability and store assignment.</p>
  </div>
</div>

## Pages in This Section

- [Set Order Mode](/docs/frontend/customer-journey/setup-order/set-order-mode)
- [Pickup](/docs/frontend/customer-journey/setup-order/pickup)
- [Delivery](/docs/frontend/customer-journey/setup-order/delivery)
