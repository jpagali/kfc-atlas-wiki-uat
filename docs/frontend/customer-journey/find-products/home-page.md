---
title: Homepage
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Homepage

The homepage is the signed-in customer's entry point after app launch or return visit. It gives the customer a fast way to start an order, discover current promotions, review rewards, and jump back into familiar ordering behavior.

## Screen Capture Sequence

The homepage should be documented as a scroll sequence because the screen combines multiple jobs: signed-in entry, campaign discovery, rewards exposure, store-led merchandising, and reorder shortcuts.

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src={useBaseUrl('/img/customer-journey/homepage/signed-in-home-01-top.png')} alt="Signed-in homepage top state with greeting, location prompt, hero campaign, and Start Order CTA" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Top state: personalized greeting, location prompt, hero campaign, and primary order entry.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/homepage/signed-in-home-02-offers-rewards.png')} alt="Signed-in homepage scrolled to offers and rewards carousel" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Scrolled state: Offers & Rewards carousel appears as the first value-led discovery module.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/homepage/signed-in-home-03-open-late.png')} alt="Signed-in homepage scrolled to open late merchandising card" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Mid-scroll state: store or time-of-day merchandising gives the homepage local commercial relevance.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/homepage/signed-in-home-04-reorder.png')} alt="Signed-in homepage scrolled to reorder shortcuts" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Reorder state: previous-order shortcuts support speed for returning customers.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/customer-journey/homepage/signed-in-home-05-feature-bottom.png')} alt="Signed-in homepage lower content and bottom navigation" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Lower state: supporting feature content and bottom navigation complete the signed-in home surface.</p>
  </div>
</div>

## What This Feature Is

The homepage is the customer's main discovery and re-entry surface. It combines personalization, commercial messaging, rewards visibility, and quick ordering paths into one screen.

In the current prototype, the signed-in homepage includes:

- a personalized greeting for the customer,
- a location prompt so local menu and deals can be resolved,
- promotional hero cards,
- an Offers & Rewards carousel,
- an open-hours or store-led merchandising card,
- reorder shortcuts based on previous orders,
- bottom navigation into Home, Menu, Rewards, and More,
- a persistent `Start Order` CTA once the customer is ready to set order context or begin browsing.

## Why It Is Designed This Way

The homepage is designed to reduce the effort required to decide what to do next. A returning customer may want to reorder quickly, browse the menu, check offers, or start from a current promotion. The page gives all of those paths without forcing the customer into one rigid journey.

This design also creates a stronger global commerce entry point because markets can balance brand storytelling with transactional shortcuts. The hero area creates appetite appeal, the rewards area reinforces value, and the reorder cards support speed for high-frequency customers.

## WIP: What Can Be Configured On This Screen

This section should become the market configuration reference as the screen matures.

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Hero banners | Image, title, tag labels, CTA text, ordering, eligibility, and destination | WIP |
| Promotional tiles | Offer imagery, price messaging, campaign tags, and linked promotion | WIP |
| Carousel order | Which modules appear first and how many cards are shown | WIP |
| Signed-in greeting | Customer name logic, fallback copy, and guest-state behavior | WIP |
| Reorder module | Whether previous orders appear, how many are shown, and which actions are available | WIP |
| Rewards placement | Whether rewards appear on the homepage and which loyalty messages are promoted | WIP |
| Local market content | Market-specific copy, imagery, legal copy, price visibility, and offer availability | WIP |
| Visibility rules | Rules by signed-in state, market, store, fulfillment type, time of day, or campaign eligibility | WIP |

## What This Screen Should Communicate

- The customer has arrived in a personalized KFC experience.
- The customer can start an order without needing to understand the full app structure first.
- Current promotions and rewards are visible early enough to influence ordering decisions.
- Returning customers have shortcuts back to familiar choices.
- Local menu and deal availability depends on location or order context.

## Design Read On This Screen

- The personalized greeting makes the screen feel like a returning-customer experience rather than a generic landing page.
- The location prompt sits above the merchandising content because availability, pricing, and offers depend on market and store context.
- Large hero cards prioritize appetite appeal and campaign visibility.
- The Offers & Rewards section gives value messaging a dedicated surface without turning the whole homepage into a coupon list.
- Reorder cards support speed for repeat customers while still leaving room for discovery-led browsing.
- The persistent `Start Order` CTA gives the customer a clear next step even while they are browsing promotional content.
