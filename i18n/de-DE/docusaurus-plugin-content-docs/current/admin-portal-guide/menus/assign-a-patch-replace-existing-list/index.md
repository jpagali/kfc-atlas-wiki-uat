---
title: Zuordnen eines Patches (Ersetzen vorhandene Liste)
sidebar_label: Zuordnen eines Patches (Ersetzen vorhandene Liste)
---

# Zuordnen eines Patches (Ersetzen vorhandene Liste)

## Was diese Anleitung deckt

Ersetzt die gesamte Patchliste eines Speichers mit einem neuen Single-Patch, entfernt alle zuvor zugewiesenen Patches. Verwenden Sie dies, wenn Sie eine vollständige Rückstellung von Patches für einen Speicher oder Kanal benötigen.

## Schritte

**Step 1:** Navigieren Sie mit dem linken Navigationsmenü zum Abschnitt **Menus***.

**Step 2:** Klicken Sie auf die Registerkarte **Patches*, um alle Patches anzuzeigen.

![Schritt 2](./img/step-2.png)

**Step 3:** Klicken Sie auf die **Neue** Schaltfläche, um eine neue Patch-Zuordnung zu starten.

![Schritt 3](./img/step-3.png)

**Step 4:** Wählen Sie ** Ersetzen Sie die bestehende Liste**, um die Patchliste des Stores vollständig zu ersetzen.

![Schritt 4](./img/step-4.png)

**Step 5:** Wählen Sie die **Patch** aus, die Sie aus dem Dropdown zuordnen möchten. Dieses Patch wird alle aktuell zugewiesenen Patches ersetzen.

| Feld | Eingeben | Anmerkungen |
|-------|--------------|-------|
| **Patch*** | Wählen Sie aus der Liste der verfügbaren Patches | Wählen Sie das Patch, das der einzige Patch auf den ausgewählten Stores sein wird. Alle vorherigen Patches werden entfernt. |

![Schritt 5](./img/step-5.png)

**Step 6:** Wählen Sie die **Stores** aus, die diese neue Patchliste erhalten wird. Mit dem Dropdown-Filter können Sie den Namen speichern oder nach Speichergruppe auswählen.

| Feld | Eingeben | Anmerkungen |
|-------|--------------|-------|
| **Stores*** | Wählen Sie einen oder mehrere Speicher | Verwenden Sie die Suche, um Geschäfte zu finden, oder klicken Sie auf den Dropdown, um ganze Speichergruppen auszuwählen. Nur ausgewählte Läden werden ihre Patchliste ersetzen. |

![Schritt 6](./img/step-6.png)

**Step 7:** Wählen Sie den **Channel**, wo dieser Patch-Ersatz gilt.

| Feld | Eingeben | Anmerkungen |
|-------|--------------|-------|
| **Channel*** | Wählen Sie den Bestellkanal | z.B. "Web", "Mobil", "Delivery Platform". Das Patch wird nur auf dem ausgewählten Kanal zugewiesen. |

![Schritt 7](./img/step-7.png)

**Step 8:** Überprüfen Sie Ihre Auswahlen auf der **Summary* Seite, um die Läden und Patch zu bestätigen, klicken Sie dann auf **Save**, um die Patchlisten zu ersetzen.

![Schritt 8](./img/step-8.png)

:::caution
Beim Wiederholen einer Patchliste werden alle zuvor zugewiesenen Patches aus den ausgewählten Speichern auf diesem Kanal entfernt. Überschreitungen aus den alten Patches gelten nicht mehr. Diese Aktion kann nicht aufgelöst werden — wenn Sie die alten Patches zurück benötigen, müssen Sie sie manuell zurückweisen.
:::

## Ähnliche Anleitungen

- [Einen Patch zuordnen (Zu Patch hinzufügen)](/docs/admin-portal-guide/menus/assign-a-patch-add-to-patch-list/)— Fügen Sie ein Patch hinzu, ohne bestehende zu entfernen
- [Einen Patch bearbeiten](/docs/admin-portal-guide/menus/edit-a-patch/)— Aktualisieren Sie einen Patch, bevor Sie ihn zuweisen
- [Einen Patch erstellen](/docs/admin-portal-guide/menus/create-a-patch/)— Erstellen Sie einen neuen Patch zum Zuordnen

---

* Teil der[Admin Portal Guide](/docs/admin-portal-guide)· Abschnitt: Menüs*