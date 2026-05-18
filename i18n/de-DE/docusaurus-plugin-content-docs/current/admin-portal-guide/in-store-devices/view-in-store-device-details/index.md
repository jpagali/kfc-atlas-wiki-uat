---
title: In-Store-Gerät Details anzeigen
sidebar_label: In-Store-Gerät Details anzeigen
---

# In-Store-Gerät Details anzeigen

## Was diese Anleitung deckt

Zeigt die vollständigen Informationen für ein POS-Terminal oder Kiosk an, einschließlich Gerätename, Typ, Status und Menü-Veröffentlichung Geschichte - für Geräte-Auditing und Fehlersuche verwendet.

:::note Byte POS Caveat
Diese Geräte-Detailansicht wird für **Byte POS** Geräteverwaltung in Admin Portal geschrieben.

Wenn der Markt nicht auf Byte POS ist, **Byte Connect** ist die Brücke zwischen Byte Commerce und dem Markt POS, und die Gerätesichtbarkeit oder Support Workflow kann von dem, was hier gezeigt wird, abweichen.
:::

## Schritte

**Step 1:** Navigieren Sie mit dem linken Navigationsmenü in den Bereich **In-Store Devices**.

**Step 2:** Finden Sie das Gerät, das Sie anzeigen möchten. Sie können nach Stationstyp, Speichernummer oder Gerätestatus suchen oder filtern.

**Step 3:** Klicken Sie auf die Schaltfläche **** (Dreipunktmenü) in der gleichen Zeile wie das Gerät, dann wählen Sie **View***.

![Schritt 2](./img/step-2.png)

**Step 4:** Das Gerätedetail-Panel öffnet und zeigt folgende Informationen an:

| Feld | Was es zeigt |
|-------|--------------|
| **Gerätename** | Name/Identifier des Geräts |
| **Station Typ** | Gerätetyp (z.B. POS Terminal, Kiosk) |
| **Beratungsstatus** | Aktiv oder inaktiv |
| **Menu Erscheinungsdatum* | Als das letzte Menü-Update an dieses Gerät gesendet wurde |
| ** Neueste Geräte-Check-in** | Wenn das Gerät zuletzt mit Atlas kommuniziert |

![Schritt 3](./img/step-3.png)

**Step 5:** Überprüfen Sie die Gerätedetails. Verwenden Sie diese Informationen, um zu überprüfen, ob das Gerät aktiv ist und das Menü korrekt aktualisiert wird. Wenn **Last Device Check-In* alt ist (mehr als ein Tag oder zwei), kann das Gerät Konnektivität Probleme haben.

:::tip
Überprüfen Sie den **Gerät Status*, um das Gerät aktiv zu bestätigen. Ein inaktives Gerät erhält keine Menü-Updates oder Prozessaufträge.
:::

## Ähnliche Anleitungen

- [Ein-Zeit-Passwort generieren](/docs/admin-portal-guide/in-store-devices/generate-one-time-password/)
- [In-Store deaktivieren](/docs/admin-portal-guide/in-store-devices/deactivate-in-store/)
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)

---

* Teil der[Admin Portal Guide](/docs/admin-portal-guide)· Abschnitt: In-Store Geräte*
