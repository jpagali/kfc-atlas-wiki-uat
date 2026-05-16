---
title: Rewards, Offers and Loyalty
---

# Rewards, Offers and Loyalty

Rewards, Offers and Loyalty are documented as one customer hub because the prototype presents them as connected value discovery surfaces rather than separate journeys.

## Screen Capture Sequence

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
  <div>
    <img src="/img/customer-journey/rewards/rewards-hub-01-top.png" alt="Rewards hub top with localized pickup context and rewards tab rail" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Hub top: localized order context, Rewards tab, and carousel entry.</p>
  </div>
  <div>
    <img src="/img/customer-journey/rewards/rewards-hub-02-offers.png" alt="Rewards hub offers section with offer list and carousel" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Offers section: value items are displayed as orderable product rows.</p>
  </div>
  <div>
    <img src="/img/customer-journey/rewards/rewards-hub-03-amazing-value-loyalty.png" alt="Rewards hub scrolled to Amazing Value and loyalty-style value discovery" style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Loyalty and value discovery: the same hub continues into additional reward and value sections.</p>
  </div>
</div>

## What This Feature Is

This hub gives signed-in customers a consolidated place to discover rewards, offers, and loyalty-driven value. It can be accessed from:

- the bottom navigation Rewards tab
- homepage reward or offer placements
- value-focused promotional modules
- localized order context once pickup or delivery is set

The prototype combines carousel cards, offer rows, value sections, and direct product entry so the customer can move from deal discovery into ordering.

## Why It Is Designed This Way

Rewards, offers, and loyalty are all value-led behaviors. Splitting them too early can create navigation overhead for customers and duplicated documentation for markets.

The hub model keeps customer intent simple: find value, understand eligibility, and move into an orderable product or basket action.

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Tab structure | Rewards, Offers, Amazing Value, or market-specific value groupings | WIP |
| Carousel content | Reward cards, deal cards, saved offers, and campaign ordering | WIP |
| Offer rows | Product mapping, eligibility, dates, price display, and discount labels | WIP |
| Loyalty access | Whether loyalty state appears here, on homepage, or both | WIP |
| Localization rules | Localized rewards after store/order context is set | WIP |
| User-state rules | Guest, signed-in unlocalized, signed-in localized, and loyalty member states | WIP |
| Challenge flow | Not active in this pilot until a prototype-backed challenge journey exists | WIP |
| Translation | Reward and offer terms in English, French, Spanish, and German | WIP |

## What This Screen Should Communicate

- The customer is in a value discovery area, not a generic menu page.
- Rewards and offers are tied to user state and local order context.
- The customer can browse value, then move directly into an orderable product.
- Loyalty access should be visible from the Rewards hub without requiring a separate mental model.

## Design Read On This Screen

- The tab rail organizes value content without making Rewards, Offers, and Loyalty feel disconnected.
- Carousel cards create a strong merchandising surface for high-priority rewards.
- Product rows make offers actionable instead of purely informational.
- Localized pickup context clarifies that some value may depend on store or fulfillment availability.
- The combined hub reduces duplicated market configuration and supports global enablement.
