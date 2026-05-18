---
title: Homepage
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Homepage

Die Homepage ist der Einstiegspunkt fur angemeldete Kunden nach dem App-Start oder bei einem erneuten Besuch. Sie hilft dem Kunden, schnell eine Bestellung zu starten, aktuelle Aktionen zu entdecken, Rewards zu sehen und zu vertrauten Bestellwegen zuruckzukehren.

## Screen Capture Sequence

Die Homepage sollte als Scroll-Sequenz dokumentiert werden, weil der Screen mehrere Aufgaben kombiniert: App-Einstieg, Erkennung angemeldeter Kunden, Kampagnen-Discovery, Rewards-Sichtbarkeit, lokale Merchandising-Inhalte und Reorder-Shortcuts.

### State Map

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', alignItems: 'start', marginBottom: '1.25rem' }}>
  <div style={{ display: 'grid', gap: '0.55rem' }}>
    <strong>Splash Screen</strong>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-00-splash-screen.png')} alt="KFC Atlas Splash Screen mit rotem Hintergrund und weissem KFC Bucket-Zeichen" style={{ width: '100%', maxHeight: '420px', objectFit: 'contain', borderRadius: '12px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.45 }}>Gebrandeter Ladezustand, wahrend App-Shell, Schriften, Kundenstatus und Laufzeitdaten initialisiert werden.</p>
  </div>
  <div style={{ display: 'grid', gap: '0.55rem' }}>
    <strong>Full Scroll Screenshot</strong>
    <div style={{ maxHeight: '720px', overflowY: 'auto', borderRadius: '12px', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
      <img src={useBaseUrl('/img/customer-journey/homepage/homepage-01-full-scroll.png')} alt="Full-Scroll-Screenshot der angemeldeten Homepage mit Bestellkontext, Begrussung, Hero-Kampagne, Angeboten und Rewards, Store-Merchandising, Reorder-Shortcuts, unterstutzenden Inhalten und Bottom Navigation" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
    <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.45 }}>Referenz fur die Modulreihenfolge: Kontext, Begrussung, Kampagne, Value, lokales Merchandising, Reorder, Support-Inhalte, Navigation.</p>
  </div>
</div>

### Zoomed Detail States

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '1.5rem' }}>
  <div style={{ display: 'grid', gap: '0.5rem', overflowWrap: 'anywhere' }}>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-detail-01-order-context.png')} alt="Homepage-Bestellkontext mit Pickup-Bestellmodus und geschatzter Zeit" style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.42 }}><strong>Order context:</strong> macht Fulfillment-Typ und Timing sichtbar, damit Verfugbarkeit, Preise und Checkout-Bereitschaft geklart sind.</p>
  </div>
  <div style={{ display: 'grid', gap: '0.5rem', overflowWrap: 'anywhere' }}>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-detail-02-personalized-greeting.png')} alt="Personalisierte Begrussung auf der Homepage fur einen angemeldeten Kunden" style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.42 }}><strong>Greeting:</strong> bestatigt den angemeldeten Zustand und positioniert die Seite als Surface fur wiederkehrende Kunden.</p>
  </div>
  <div style={{ display: 'grid', gap: '0.5rem', overflowWrap: 'anywhere' }}>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-detail-03-hero-campaign.png')} alt="Hero-Kampagnenkarussell mit Food-Visual und Order Now CTA" style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.42 }}><strong>Hero campaign:</strong> schafft Appetit und leitet Kunden in Bestellung oder Menubrowsing weiter.</p>
  </div>
  <div style={{ display: 'grid', gap: '0.5rem', overflowWrap: 'anywhere' }}>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-detail-04-offers-rewards.png')} alt="Offers and Rewards Bereich mit Angebotskarten und Reward-Preislogik" style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.42 }}><strong>Offers & Rewards:</strong> zeigt Value und Reward-Berechtigung, ohne Kunden von Home wegzuschicken.</p>
  </div>
  <div style={{ display: 'grid', gap: '0.5rem', overflowWrap: 'anywhere' }}>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-detail-05-store-led-merchandising.png')} alt="Store-gefuhrte Merchandising-Karte fur spate Pickup-Verfugbarkeit" style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.42 }}><strong>Store-led merchandising:</strong> unterstutzt lokale Botschaften wie spate Offnungszeiten, Pickup oder tageszeitbezogene Angebote.</p>
  </div>
  <div style={{ display: 'grid', gap: '0.5rem', overflowWrap: 'anywhere' }}>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-detail-06-reorder-shortcuts.png')} alt="Reorder-Shortcuts mit vorherigen Bestellkarten und Review-Order-Aktionen" style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.42 }}><strong>Reorder shortcuts:</strong> geben wiederkehrenden Kunden einen schnellen Weg zu bekannten Warenkorben.</p>
  </div>
  <div style={{ display: 'grid', gap: '0.5rem', overflowWrap: 'anywhere' }}>
    <img src={useBaseUrl('/img/customer-journey/homepage/homepage-detail-07-return-order-prompt.png')} alt="Prompt auf der Homepage, der fragt, ob die vorherige Bestelleinstellung behalten werden soll" style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.08)' }} />
    <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.42 }}><strong>Return prompt:</strong> bestatigt den vorherigen Fulfillment-Kontext, bevor der Kunde weiter bestellt.</p>
  </div>
</div>

## What This Feature Is

Die Homepage ist die zentrale Discovery- und Re-entry-Flache des Kunden. Sie kombiniert Personalisierung, kommerzielle Botschaften, Rewards-Sichtbarkeit und schnelle Bestellwege in einem Screen.

Im aktuellen Prototyp enthalt die angemeldete Homepage:

- einen KFC-gebrandeten Splash Screen, bevor die App-Shell erscheint,
- eine personalisierte Begrussung fur den Kunden,
- eine Order-Context-Leiste, damit lokales Menu, Preise, Timing und Deals aufgelost werden konnen,
- Promo-Hero-Karten,
- ein Offers-&-Rewards-Karussell,
- eine Open-Hours- oder Store-led-Merchandising-Karte,
- Reorder-Shortcuts basierend auf vorherigen Bestellungen,
- einen Returning-Order-Prompt fur Kunden mit vorherigem Bestellkontext,
- Bottom Navigation zu Home, Menu, Rewards und More,
- eine persistente Action Bar, die `Start Order` vor gesetztem Kontext und Cart Review nach gesetztem Kontext unterstutzt.

## Why It Is Designed This Way

Die Homepage reduziert den Aufwand, die nachste Aktion zu entscheiden. Ein wiederkehrender Kunde mochte moglicherweise schnell erneut bestellen, das Menu ansehen, Angebote prufen oder von einer aktuellen Kampagne starten. Die Seite bietet alle diese Wege, ohne den Kunden in eine starre Journey zu zwingen.

Dieses Design schafft auch einen starkeren globalen Commerce-Einstieg, weil Markets Brand Storytelling und transaktionale Shortcuts ausbalancieren konnen. Der Hero-Bereich schafft Appetit, der Rewards-Bereich verstarkt Value, und Reorder-Karten unterstutzen Geschwindigkeit fur haufige Kunden.

## WIP: What Can Be Configured On This Screen

Dieser Abschnitt sollte zur Market-Konfigurationsreferenz werden, wenn der Screen weiter reift.

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Splash screen | Brand Mark, Ladebehandlung und ob der Splash bei App-Start oder Web-Einstieg erscheint | WIP |
| Order context bar | Fulfillment-Label, Zeitschatzung, Store- oder Adressverhalten und ob der Kontext aus der Leiste geandert werden kann | WIP |
| Hero banners | Bild, Titel, Tag-Labels, CTA-Text, Reihenfolge, Berechtigung und Ziel | WIP |
| Promotional tiles | Angebotsbild, Preiskommunikation, Kampagnen-Tags und verknupfte Promotion | WIP |
| Carousel order | Welche Module zuerst erscheinen und wie viele Karten angezeigt werden | WIP |
| Signed-in greeting | Logik fur Kundennamen, Fallback-Copy und Guest-State-Verhalten | WIP |
| Reorder module | Ob vorherige Bestellungen erscheinen, wie viele angezeigt werden und welche Aktionen verfugbar sind | WIP |
| Return order prompt | Ob vorheriger Fulfillment-Kontext gezeigt wird, welche Aktionen angeboten werden und wann der Prompt unterdruckt wird | WIP |
| Rewards placement | Ob Rewards auf der Homepage erscheinen und welche Loyalty-Botschaften beworben werden | WIP |
| Local market content | Marketspezifische Copy, Bilder, Rechtstexte, Preissichtbarkeit und Angebotsverfugbarkeit | WIP |
| Visibility rules | Regeln nach angemeldetem Zustand, Market, Store, Fulfillment-Typ, Tageszeit oder Kampagnenberechtigung | WIP |

## What This Screen Should Communicate

- Der Kunde ist in einer personalisierten KFC Experience angekommen.
- Der Kunde kann eine Bestellung starten, ohne zuerst die gesamte App-Struktur verstehen zu mussen.
- Aktuelle Aktionen und Rewards sind fruh genug sichtbar, um Bestellentscheidungen zu beeinflussen.
- Wiederkehrende Kunden haben Shortcuts zu vertrauten Optionen.
- Lokales Menu und Deal-Verfugbarkeit hangen von Standort oder Bestellkontext ab.
- Vorheriger Fulfillment-Kontext sollte bestatigt werden, wenn er Menuverfugbarkeit, Timing oder Store-Auswahl beeinflussen kann.

## Design Read On This Screen

- Die personalisierte Begrussung macht den Screen zu einer Experience fur wiederkehrende Kunden statt zu einer generischen Landing Page.
- Die Order-Context-Leiste steht uber dem Merchandising Content, weil Verfugbarkeit, Preise und Angebote vom Market- und Store-Kontext abhangen.
- Grosse Hero-Karten priorisieren Appetit und Kampagnensichtbarkeit.
- Der Offers-&-Rewards-Bereich gibt Value Messaging eine eigene Flache, ohne die gesamte Homepage in eine Coupon-Liste zu verwandeln.
- Store-led Messaging erlaubt lokale kommerzielle Prioritaten, ohne die globale Seitenstruktur zu verandern.
- Reorder-Shortcuts unterstutzen Geschwindigkeit fur Kunden, die eine bekannte Bestellung erneut auslosen mochten.
