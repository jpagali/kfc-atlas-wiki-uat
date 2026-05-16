---
title: Pickup
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Pickup

Pickup is the order-mode path where the customer selects a store before browsing the menu. The store decision controls menu availability, service hours, fulfillment handoff options, and checkout rules.

## Screen Capture Sequence

Pickup should be documented in both map/list and expanded-store states because the customer needs location confidence before committing to a store.

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/setup-order/pickup-01-map-and-stores.png')} alt="Pickup map view with nearby store cards and store selection CTA" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Map and store list: the customer can compare nearby stores, distance, status, and selection actions.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/setup-order/pickup-02-store-details-expanded.png')} alt="Pickup store details expanded with hours and handoff information" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Expanded store detail: hours, address context, and fulfillment detail support the final store decision.</p>
  </div>
</div>

## What This Feature Is

Pickup lets the customer choose where the order will be prepared and collected. In the prototype, the customer sees a map, search field, current-location control, nearby stores, distance, opening status, and a `Select This Store` action.

## Why It Is Designed This Way

Pickup requires confidence in the selected store. The customer needs to know where the store is, whether it is open, how far away it is, and which handoff methods are supported before moving into the menu.

The map gives spatial confidence, while store cards keep the commercial decision simple. This avoids forcing customers to interpret a map only, while still giving enough location context for trust.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Pickup availability | Whether pickup is enabled by market, store, daypart, or channel | WIP |
| Store card fields | Store name, address, distance, hours, handoff options, and favorite store behavior | WIP |
| Handoff methods | Counter, drive-thru, curbside, lockers, or market-specific collection points | WIP |
| Map provider | Map styling, pins, geolocation behavior, and store clustering | WIP |
| Store ranking | Nearest, open now, favorite, available menu, or campaign-prioritized stores | WIP |
| Unavailable states | Closed store, out-of-service store, no pickup nearby, or future-order-only messaging | WIP |

## What This Screen Should Communicate

- The customer is choosing the physical store for pickup.
- Store availability and distance matter before menu browsing.
- The selected store will determine the menu and checkout context.
- The customer can search, use current location, or choose from nearby store cards.

## Design Read On This Screen

- The map anchors the customer geographically.
- Store cards make comparison easier than pin-only selection.
- Opening status and distance reduce uncertainty before commitment.
- The persistent confirmation CTA makes the next step clear once a store is selected.
