---
title: Frontend Übersicht
sidebar_position: 1
---

# Frontend Übersicht

**KFC Atlas** ist das globale Frontend von KFC für die digitale Bestellung – mit dem, was Ihre Gäste interagieren, wenn sie online bestellen, über die KFC App oder über einen Aggregator von Drittanbietern.

Atlas ist auf **Byte Helium**, Yum!s Enterprise Design System und Front-End-Stiftung gebaut. Im breiteren Atlas-Plattform-Bild arbeitet Atlas mit **Byte Commerce + Byte Portal* und mit **Byte Connect**, wenn ein Markt POS nicht Byte POS ist.

Dieser Leitfaden ist für **restaurant-Teams und BMUs**, die verstehen müssen, was die Plattform den Kunden liefert, wie sie sich in jedem Markt verhält und was konfigurierbar ist, ohne dass eine Produkteingabe erforderlich ist.

## Was die Frontend Abdeckungen

Das Atlas Frontend erstreckt sich über vier Bereiche:

- **Customer Journey** — der End-to-End-Flow von der Entdeckung zur Auftragsbestätigung
- **Orderkanäle** — wie Dine-in, Delivery und Takeaway pro Restaurant präsentiert und verwaltet werden
- **Customer Engagement Surveys* — wie KFC Listen-Stil Feedback-Programme post-order Stimmung sammeln
- **Market Configurations* — was pro Markt ein- oder ausgeschaltet werden kann (Lyalität, Promos, Schieduling)

## Design System

Das KFC Atlas Frontend ist auf **Byte Helium**, Yum!s Enterprise Design System und Frontend Foundation gebaut. Helium bietet die gemeinsamen Design-Token, UI-Komponenten und Strukturmuster; Atlas wendet die Marke KFC auf diese Grundlage an, so dass die Erfahrung KFC-native fühlt, während noch das gemeinsame Yum! System darunter verwendet wird.

### Design Philosophie

Atlas ist absichtlich um einen **fokussierten Kauffluss** gestaltet, nicht nur die wenigen möglichen Klicks. Einige Reisen können mehr Schritte verwenden, wenn das Kunden klarere Entscheidungen gibt, macht das Produkt leichter zu verstehen, und präsentiert relevante Trade-up-Optionen im Moment sie entscheiden, was zu kaufen.

Das heißt, das Frontend sollte beurteilt werden, ob die Reise klar, zuversichtlich und kommerziell nützlich ist – nicht nur, ob sie kurz ist. Ein Mahlzeitenfluss kann z.B. Größen-Upgrades, Add-ons oder Anpassungsoptionen Schritt für Schritt aussetzen, weil diese Entscheidungen im Kontext einfacher zu verstehen sind, als wenn jede Option in einen dichten Bildschirm eingebrochen ist.

Siehe[Design System](/docs/frontend/design-system)für eine vollständige Erklärung, wie die visuelle Identität von Figma den ganzen Weg zum Bildschirm fließt.

## Märkte in Scope

| Markt | App-Plattform |
|---|---|
| 🇦🇺 Australien | KFC Australia App + Web |

## Wer sollte das lesen

| Laufsohle | Warum es relevant ist |
|---|---|
| Restaurantbetreiber / Marktteam | Verstehen Sie, was Ihre Kunden erleben und was Sie konfigurieren können |
| BMU / Regionalbüro | Verstehen Sie Konfigurationsoptionen auf Marktebene und wie Sie Features aktivieren |
| Vorverkauf / Neumarkt Onboarding | Verstehen Sie die Basis-Plattform-Funktionen vor go-live |

:::tip
Das Frontend ist auf einer gemeinsamen Codebasis auf allen Märkten aufgebaut. Marktunterschiede werden durch Konfiguration gesteuert – nicht separate Builds.
:::
