---
title: Ein-Zeit-Passwort generieren
sidebar_label: Ein-Zeit-Passwort generieren
---

# Ein-Zeit-Passwort generieren

## Was diese Anleitung deckt

Erzeugt einen temporären Authentifizierungscode für ein POS-Terminal oder einen Kiosk, der beim ersten Geräteaufbau oder beim erneuten Authentifizierung eines vorhandenen Gerätes verwendet wird.

:::note Byte POS Caveat
Dieser Workflow nimmt an, dass das Gerät Teil eines durch Admin Portal verwalteten **Byte POS*-Setups ist.

Wenn der Markt Byte POS nicht nutzt, setzt Byte Commerce auf **Byte Connect** als Brücke zum Markt POS, so dass der Authentifizierungs-/Setupfluss nicht den Schritten auf dieser Seite entsprechen kann.
:::

## Schritte

**Step 1:** Navigieren Sie mit dem linken Navigationsmenü in den Bereich **In-Store Devices**.

**Step 2:** Klicken Sie auf die **Generieren Sie ein-Zeit-Passwort** Taste.

![Schritt 2](./img/step-2.png)

**Step 3:** Ein Suchfeld erscheint. Geben Sie die **store number** oder **store name** ein, um den Ort zu finden, für den Sie ein Passwort generieren möchten.

![Schritt 3](./img/step-3.png)

**Step 4:** Wählen Sie den Speicher aus den Dropdown-Ergebnissen aus. Das Einmal-Passwort wird automatisch generiert und auf dem Bildschirm angezeigt.

![Schritt 4](./img/step-4.png)

**Step 5:** Kopieren Sie das einmalige Passwort (OTP) angezeigt. Geben Sie diesen Code an die Person, die das POS-Gerät einstellt oder neu authentisiert. Sie geben diesen Code auf dem Bildschirm des Gerätes ein, um die Authentifizierung abzuschließen.

:::caution
Das Einmal-Passwort ist vorübergehend und läuft nach einer bestimmten Zeit (typisch 15-30 Minuten). Wenn das Gerät den Code nicht akzeptiert, erzeugen Sie einen neuen.
:::

:::tip
Sie können Geräte nach Stationstyp, Speichernummer und Gerätestatus suchen und filtern, um den richtigen Standort schnell zu finden.
:::

## Ähnliche Anleitungen

- [In-Store-Gerät Details anzeigen](/docs/admin-portal-guide/in-store-devices/view-in-store-device-details/)
- [In-Store deaktivieren](/docs/admin-portal-guide/in-store-devices/deactivate-in-store/)
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)

---

* Teil der[Admin Portal Guide](/docs/admin-portal-guide)· Abschnitt: In-Store Geräte*
