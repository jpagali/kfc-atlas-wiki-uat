---
title: Einführung Runbook
---

# Einführung Runbook

Diese Repo sollte`staging`zuerst,`main`zweites Werbemodell.

## Standardregel

- `staging`ist die erste Landezone für benutzerorientierte Änderungen.
- `main`nur Änderungen erhalten, die bereits überprüft wurden`staging`.
- Wenn eine Änderung noch nicht stabil ist in Staging oder Cloud-Validierung noch anhängig ist, fördern Sie sie nicht,`main`.

## Standard Workflow

1. Der Wechsel auf`staging`oder kirscht es zuerst.
2. Push`staging`.
3. Verifizieren Sie den Insassenzustand:
   - Laufen`npm run build`
   - Vorschau lokal, wenn die Änderung Auswirkungen auf Routing, Lokalisierung oder UI Zustand
   - bestätigen Sie, dass alle Cloud- oder umweltspezifischen Kontrollen grün sind
4. Nach der Inszenierung ist stabil, fördern die gleiche Verpflichtung,`main`
5. Release Notes aktualisieren während der`main`Förderungsschritt, es sei denn, die Notiz ist ausdrücklich für die Inszenierung der Sichtbarkeit bestimmt
6. Push`main`

## Ausschreibungen

- Bevor Sie die genaue verifizierte Verpflichtung von`staging`in`main`
- Vermeiden Sie eine neue Ad-hoc-Reparatur direkt auf`main`wenn die ursprüngliche Änderung nicht nachgewiesen wurde`staging`
- wenn`main`versehentlich bekommt ein lokal nur begehen zuerst, zurücksetzen lokal`main`zurück zu`origin/main`und fördern von`staging`anstatt

## Veröffentlichungshinweise

- Benutzersichtbare Release Notes gehören mit der`main`Förderung standardmäßig
- Wenn das Inszenieren eine eigene interne Brotkruste benötigt, halten Sie es kurz und stellen Sie es nicht wie eine Produktionsstart
- Wenn eine Änderung mehrere Lokale betrifft, aktualisieren oder pensionieren Sie diese Einheimischen zusammen vor der Förderung

## Schnelle Checkliste

- Veränderung`staging`
- `staging`Baujahr
- Staging-Verhalten wurde bei Bedarf erkannt
- Release Notes sind bereit
- Aktionsziel ist`main`
- Erst danach sollte der Produktionseinsatz ausgelöst werden
