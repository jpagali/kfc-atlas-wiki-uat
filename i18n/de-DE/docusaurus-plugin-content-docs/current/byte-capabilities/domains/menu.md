---
title: Menü durchsuchen &amp; PDP
description: Wie die Atlas-Plattform Kunden das lokalisierte Menü, Produktdetails, Modifikatoren und Nährinformationen zeigt.
sidebar_label: Menü durchsuchen &amp; PDP
---

# Menü durchsuchen &amp; PDP

**What it does:** Zeigt den Kunden das lokalisierte Menü für ihren Markt und ausgewählten Store, mit vollständigen Produktdetails, Modifikatoren und Nährinformationen.

**Why it matters:** Das Menü ist die Spitze des Trichters – jede Bestellung beginnt hier. Menügenauigkeit, Geschwindigkeit und Relevanz direkt treiben Add-to-cart-Raten und durchschnittlichen Bestellwert.

:::caution Byte Helium besitzt nicht das Menü
Byte Helium stellt das Menü, das es vom Menu Service erhält, dar. Preise, Artikelbeschreibungen, Verfügbarkeit und Modifikatoren werden alle in **Byte Menu** verwaltet und über das **Byte Portal** zugewiesen. Wenn etwas mit dem Menü falsch ist, ist die Fixierung nicht in Byte Helium.
:::

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| ** Lokalisiertes Menü (PLP)* | Kunden müssen sehen, was verfügbar ist | Zeigt die Produktlisteseite mit Kategorien und Artikeln für den ausgewählten Speicher/Kanal an | Byte Helium ruft Menu Service mit Store-Kontext → erhält Kategorie/Eitem-Liste → Render | Menüservice, Kontextservice | Lokalisierung muss zuerst abgeschlossen werden | Pricing ist marktspezifisch; Byte Helium hat keine eigenen Preise; PLP p95 ≤200ms | Menüeindruckrate, Scrolltiefe |
| **Detailansicht (PDP)** | Kunden benötigen komplette Produktinfo vor der Bestellung | Zeigt Artikelname, Beschreibung, Bild, Preis, Modifikatoren und Nährinformationen | Byte Helium ruft Menu Service mit item ID + Kontext → erhält vollständige Produktdetails | Service | PLP angesehen; Menüpunkt | Optionen gefiltert nach Kontext (z.B. Liefer-only-Elemente für die Sammlung versteckt) | PDP Ansichtsrate, Modifier Auswahlrate |
| **Modify Ausgewählter Menüpunkt** | Kunden wollen ihre Bestellung anpassen | Lassen Sie den Kunden Größe, Add-ons wählen, Zutaten entfernen und Menge anpassen | Modifier-Optionen, die von Menu Service abgeholt werden; Auswahlen, die vor Add-to-cart erfasst werden | Service | Artikel muss Modifier im Menü konfiguriert haben | Nicht alle Artikel sind anpassbar; modifier config ist ein Byte Menu / Marktverantwortung | Anpassungsrate |
| **Nutrition & Allergene Guide* | Kunden benötigen Nahrungsinformationen | Zeigt vollständige Nährwerte und Allergeninformationen für Menüpunkte | Nährwertdaten aus dediziertem Nährwertindex/detail Endpunkte | Ernährungsservice (via Menü) | Menü muss Nährwertdaten enthalten (in Byte Menu konfiguriert) | Die Daten müssen in Byte Menu autorisiert und gepflegt werden — keine Byte Helium Verantwortung | Leitzins |
| **FAQ** | Kunden haben Fragen, die keine Bestellungen sind | Rendert eine suchbare FAQ-Seite | CMS API gibt FAQ-Einträge für den Markt Locale zurück; Suche ist client-side | CMS Service | FAQ-Inhalte im CMS (Byte Portal) | Inhaltsqualität hängt davon ab, welche Märkte CMS veröffentlichen | FAQ-Seitenbesuche, Suchanfragen |
| **Ansicht Stellenanzeige** | KFC nutzt seine App/Web als Rekrutierungskanal | Listen offene Rollen im Markt | Ziehungen von ATS (Applicant Tracking System) über CMS-Proxy | ATS Integration, CMS | ATS Integration aktiv für den Markt | Stellendaten extern verwaltet — nicht in Atlas | Karriereseitenansichten |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: View Localised Menu (PLP)</summary>

- **FRD References:** [FRD-HEL-008](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-008)
- **TRD Domain:** Menu Browse & PDP
- **Key Interfaces / APIs:** PLP Menu Feed (App → Menu), PDP Item Detail (App → Menu)
- **Data Contracts:** MenuItem (id, name, price, options[] — market-specific pricing)
- **Source Summary:**
  - PLP filtered by store context and channel (delivery vs. collection items differ)
  - Soft-refresh triggered on cache age detection; no hard reload
  - PLP p95: ≤200ms; cache telemetry monitored
  - Pricing is market-specific and owned by Commerce Backend — Byte Helium renders only
  - Menu APIs: SemVer backward compatible minor, 120-day deprecation (markets need stage rollout time)

</details>

---

:::tip See it in the wiki
- How customers browse the menu front-end → [Find Products](/docs/frontend/customer-journey/find-products/)
- Managing menu items and modifiers in Byte Portal → [Admin Portal Guide: Products](/docs/admin-portal-guide/products/) and [Menus](/docs/admin-portal-guide/menus/)
:::
