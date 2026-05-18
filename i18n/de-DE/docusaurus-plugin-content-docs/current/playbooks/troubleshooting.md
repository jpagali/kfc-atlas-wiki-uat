---
title: Fehlerbehebung & Eskalation
sidebar_position: 2
---

# Fehlerbehebung & Eskalation

Dieses Spielbuch umfasst die häufigsten Themen Restaurant und regionale Teams auf der Atlas Plattform treffen, und den richtigen Eskalationsweg, wenn Self-Service nicht das Problem löst.

---

## Gemeinsame Themen & Fixes

### Restaurant nicht in der Kunden-App erscheint

| Überprüfung | Wie |
|---|---|
| Ist das Restaurant auf Live gesetzt? | Byte Portal → Profil → Status |
| Sind alle Kanäle deaktiviert? | Kanaleinstellungen — mindestens eine muss aktiv sein |
| Wurden GPS-Koordinaten korrekt eingestellt? | Profil → Standort – bestätigen Sie die Pinplatzierung |

Wenn alle Kontrollen passieren und das Restaurant nach 30 Minuten noch nicht sichtbar ist, eskalieren Sie Ihre BMU.

---

### Kunden können keine komplette Kasse abschließen

**Die meisten häufigsten Ursachen:**
1. Der ausgewählte Artikel wurde deaktiviert, da der Kunde ihn in den Warenkorb gelegt hat
2. Ein Promo-Code ist abgelaufen oder erreicht seine Nutzungslimit
3. Die Lieferadresse ist außerhalb des Lieferradius des Restaurants

**Franchisee action:** Check Menu → Artikel für alle kürzlich deaktivierten Artikel. Überprüfen Sie Kanaleinstellungen → Lieferradius, wenn Lieferaufträge ausfallen.

---

### Menüpunkt mit falschem Preis

1. Überprüfen Sie **Menu → Artikel → [Item] → Preise**, um den Preis in Byte Portal zu bestätigen
2. Wenn der Byte Portal Preis richtig ist, aber die App zeigt anders, warten Sie 15 Minuten auf Cache-Erfrischung
3. Wenn das Problem nach 15 Minuten anhält, heben Sie ein Ticket über den JIRA Service Desk

---

### Franchisee gesperrt aus Byte Portal

1. Gehen Sie auf die Login-Seite und verwenden Sie ** Passwort vergessen** - dies sendet einen Reset-Link an ihre registrierte E-Mail
2. Wenn die E-Mail nicht innerhalb von 5 Minuten empfangen wird, überprüfen Sie Spam-Ordner
3. Wenn das Konto deaktiviert wurde, muss ein Regional Admin es unter Einstellungen wieder eingeben → Benutzer

---

### Bestellungen nicht bei der Lieferung durchkommen

1. Bestätigen Sie den Lieferkanal ** in Kanaleinstellungen
2. Überprüfen Sie, ob die Betriebsstunden die aktuelle Zeit für den Lieferkanal beinhalten
3. Bestätigen Sie den Temporär geschlossenen Winkel **off**
4. Wenn mit einem Aggregator (Uber Eats / DoorDash) integriert, überprüfen Sie die Aggregatorplattform direkt — das Problem kann auf ihrer Seite sein

---

## Eskalationsweg

Verwenden Sie diesen Pfad, wenn Self-Service das Problem nicht löst:

```
Franchisee
    ↓  (cannot resolve in 15 mins)
Regional / BMU Admin
    ↓  (cannot resolve in 30 mins)
Atlas Platform Support (JIRA Service Desk)
    ↓  (P1 / production down)
Yum! Brands Tech — Emergency Line
```

### Schweregrade

| Ebene | Begriff | Antwort |
|---|---|---|
| **P1*** | Restaurant nicht in der Lage, Bestellungen zu nehmen | 30 Minuten |
| **P2** | Ein Kanal nach unten, andere arbeiten | 2 Stunden |
| **P3** | Einzelmerkmal Problem, Workaround verfügbar | Nächster Geschäftstag |
| **P4** | Anfrage oder Konfigurationsanfrage | 3 Werktage |

### JIRA Service Desk

Raise Tickets bei:`support.atlas.yum.com`

In jedem Ticket enthalten:
- Restaurant ID
- Markt
- Warenbezeichnung
- Schritte bereits gemacht
- Screenshot oder Bildschirmaufzeichnung, wenn möglich

:::tip
P1 Probleme können auch über den **Notruf-Slack-Kanal** angehoben werden —`#atlas-p1-support`Tag`@atlas-oncall`den On-Call-Ingenieur direkt aufrufen.
:::
