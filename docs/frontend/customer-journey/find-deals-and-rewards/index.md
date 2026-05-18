---
title: Step 3 - Rewards, Offers and Loyalty
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Step 3 - Rewards, Offers and Loyalty

## How This Journey Works

<div className="journey-gif-grid">

<div>

### A. Signed-In User

![Signed-in rewards hub journey](/img/customer-journey/gif-library/signed-in/S17-rewards-hub.gif)

**What this shows**

- Shows rewards and offers as an account-aware value hub.
- Connects localized rewards to order context and product actions.
- Lets the customer move from value discovery into menu ordering.

</div>

<div>

### B. Guest User

![Guest rewards gate journey](/img/customer-journey/gif-library/guest/G11-guest-rewards-gate.gif)

**What this shows**

- Shows that rewards access is gated for unauthenticated customers.
- Allows guests to understand the value proposition before sign-in.
- Keeps rewards redemption tied to account and localization requirements.

</div>

</div>

**Key difference:** Signed-in users see account-aware shortcuts and rewards access. Guests can browse and build intent, but authentication is required for account-specific actions such as checkout, rewards redemption, or saved details.

This step covers how customers discover value through rewards, offers, loyalty content, and localized deal surfaces.

## What This Step Covers

Rewards, Offers and Loyalty are documented as one value discovery step because the prototype presents them as connected surfaces. Customers should be able to understand value, eligibility, and orderability without needing to distinguish internal loyalty, offer, or promotion systems.

## Journey Map

| Sequence | Customer Decision |
|---|---|
| 1 | Enter the Rewards hub from bottom navigation or homepage placements |
| 2 | Browse localized rewards, offers, and value modules |
| 3 | Select an offer or reward that can lead into product ordering |

## Screenshots

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/rewards/rewards-hub-01-top.png')} alt="Rewards hub top with localized pickup context and rewards tab rail" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Hub top: localized order context, Rewards tab, and carousel entry.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/rewards/rewards-hub-02-offers.png')} alt="Rewards hub offers section with offer list and carousel" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Offers section: value items are displayed as orderable product rows.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/rewards/rewards-hub-03-amazing-value-loyalty.png')} alt="Rewards hub scrolled to Amazing Value and loyalty-style value discovery" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Value discovery: the same hub continues into reward and value sections.</p>
  </div>
</div>

## Pages in This Section

- [Rewards, Offers and Loyalty](/docs/frontend/customer-journey/find-deals-and-rewards)
