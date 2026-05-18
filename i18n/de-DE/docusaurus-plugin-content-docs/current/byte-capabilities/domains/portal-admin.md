---
title: Byte Portal — Admin & Konfiguration
description: Was Byte Portal tut — die volle Kontrollebene für Markt- und Ops-Teams, die Läden, Menüs, Werbeaktionen, Steuern, Zahlungen und mehr.
sidebar_label: Byte Portal — Admin & Config
---

# Byte Portal — Admin & Konfiguration

**What it does:** Byte Portal ist das Kontrollflugzeug für alle Märkte und Ops-Teams. Es ist, wo alles über die Plattform konfiguriert ist – von den Öffnungszeiten und Menüs bis hin zu Werbeaktionen, Steuern, Zahlungen und Erstattungen.

**Why it matters:** Ohne Byte Portal können die Märkte nicht leben. Jedes Feature in Byte Helium hängt davon ab, was im Byte Portal richtig konfiguriert ist. Misconfiguration in Byte Portal hat direkten Kundeneinfluss.

:::danger Byte Portal nicht Autorenmenüs
Menü-Autorisierung (Erstellung von Artikeln, Beschreibungen, Preisen, Optionen) geschieht in **Byte Menu** — ein separates Werkzeug außerhalb der Atlas-Plattform. Byte Portal ordnet bereits veröffentlichte Menüversionen an Märkte und Kanäle zu. Es kann Patches und Preisüberschreitungen anwenden, kann aber keine Menüinhalte von Grund auf erstellen.
:::

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **Verwender & Roles (RBAC)* | Marktteams benötigen umfangreichen Zugang | lädt Benutzer ein, teilt Rollen, erzwingt den umfangsbasierten Zugriff (Markt/Gruppe/Shop) | SSO + MFA für Login; RBAC mit Policy Engine; Schutzgitter Blocks außer-of-scope Zugriff | Identity Provider, RBAC Service, Audit Store | IdP konfiguriert pro Markt | Individuelle Rollen verwenden nur genehmigte Aktion Whitelist; alle geprüften Maßnahmen | Zugriffsverletzungsrate, Benutzer an Bord Zeit |
| **Store & Group Konfiguration** | Märkte müssen ihre Restaurants konfigurieren | Verwaltungen speichern Admin-Daten, Gruppenhierarchien, Handelszeiten, Echtzeit-Zustand und Drosselpolitik | Geschäfte, die mit POS verbunden sind; Gruppen definieren Erbschaft; Handelsstunden Zeitzone-Aware; Zustand (offen/paused/geschlossen) beeinflusst Kanäle | POS Integration, Geteilte Kataloge | Daten speichern gesägt | Keine Zyklen in Gruppenhierarchie; Staat ist Echtzeit-Quelle der Wahrheit für alle Kanäle | Datengenauigkeit speichern, Ausfallzeiten |
| **Menu Zuweisung und Aufnäher* | Märkte müssen kontrollieren, welches Menü angezeigt wird, wo | Vergibt publizierte Menü-Versionen zu Markt/Shop/Kanal; wendet Patches, Tagesparts und Overrides an | Byte Portal verbraucht Byte Menu veröffentlichte Versionen; Zuordnungen mit Gültigkeitsfenster; Patchvorlagen für Preis-/Verfügbarkeitsregeln; Dayparts für zeitbasierte Verfügbarkeit und Preisgestaltung | Byte Menu Service, Menüzuweisung | Menüversion veröffentlicht in Byte Menu | Byte Portal hat NICHT Autorenmenüs — das ist Byte Menu. Konflikte werden blockiert. Daypart-Verhalten hängt immer noch von der veröffentlichten Menüstruktur ab, die die Zieleinheiten unterstützt. | Menu Erfolgsquote veröffentlichen |
| **Promotionen Konfiguration** | Marketing-Teams müssen Angebote erstellen und verwalten | Erstellt Promotionen mit Förderfähigkeit, Nutzen, Zeitplan, Codes und Budgets | Promotion Definition → Bewertung von Commerce Backend beim Checkout | Commerce Backend, Promo Motor | Promotion Konfiguration komplett | Stapelung von Konflikten durch Politik gelöst; abgelaufene Budgets autoblock neue Rücknahmen | Förderung Erlösungsrate, Budget-Brennrate |
| **Tax Configuration** | Finanzteams müssen korrekte Steuersätze festlegen | Definiert Steuerprofile, Kategorien, Preise, Regeln und Rundungen pro Markt | Steuerprofile, die den Märkten zugeordnet sind; | Steuermotor, Pricing Service | Steuerprofil erstellt und zugewiesen | Überlappungsraten blockiert; muss sich mit dem lokalen Gesetz ausrichten | Steuergenauigkeit, Compliance Audit Pass Rate |
| **Payments Konfiguration** | Märkte müssen ihre Zahlungsmethoden einrichten | Konfiguriert PSP-Profile, Zahlungsmethoden, Routing-Regeln, Zuschlagsrichtlinien und Risikoregeln | PSP-Anmeldeinformationen im Tresor gespeichert (nicht in Byte Portal); Routing-Engine verwendet Kanal / Marktregeln | PSP, Vault, Routing Motor | PSP Vertrag an Ort und Stelle; Anmeldeinformationen im Tresor | Geheimnisse nie in Byte Portal ausgesetzt; Routing-Änderungen dürfen Zahlungsströme nicht unterbrechen | Zahlungsmethode Verfügbarkeit, Routing Fehlerrate |
| **Bestellungen und Rückerstattungen (Ops)** | Ops Teams müssen Kundenprobleme verwalten | Suchaufträge (PII-redacted), Prozessrückerstattungen, Verwaltung nichtmonetärer Anpassungen | Suche mit rollenbasiertem PII-Zugang bestellen; Rückerstattung validiert gegen Politik; optionale mehrstufige Genehmigung | Bestellungen Service, PSP, Audit Store | Refund Policy konfiguriert | Rückerstattungsbeschränkungen, Fristen und Genehmigungsregeln in der Richtlinie; dauerhafte Löschung nicht gestattet | Rückerstattung Bearbeitungszeit, Erstattung Ablehnungssatz |
| **Lokalisation & Content Management** | Märkte brauchen lokalisierte Inhalte | Lokale, Übersetzungsschlüssel, Inhaltsblöcke, Ankündigungen und rechtliche Hinweise verwalten | Übersetzungseinträge pro Ort; Inhaltsblöcke nach Umfang; gesetzliche Hinweise versioniert | CMS, Legal CMS, CMP | Lokale aktiviert für den Markt | Fehlende Übersetzungen fallen zurück zum Standard Locale | Übersetzungsdeckung, lokale Aktivierungsrate |
| **Feature Fahnen & Einstellungen* | Engineering und Produkt benötigen kontrollierte Rollouts | Erstellt Feature-Flags mit Zielregeln; verwaltet Systemeinstellungen Hierarchie | Fahnen bewertet zur Laufzeit von Markt/Kanal/Segment; Einstellungen erben globale → Umgebung → Markt | Einstellungen Service, Feature Flag Engine | Flagge erstellt und gezielt | Bad config Rollback über Versionsgeschichte oder Flag Kill-Switch | Flag Adoptionsrate, Konfigurationsfehlerrate |
| **Ausfuhren** | Teams benötigen Daten von der Plattform | Definiert Berichte, speichert Ansichten, exportiert Daten in Datei oder geplante Lieferung | Melden Sie sich an das Datenlager; die Ausfuhren sind asynchron; an S3/FTP/Email/Webhook geliefert | Datenlager, Exportmotor | Bericht definiert und Zugang gewährt | Große Exporte async mit Fortschrittsverfolgung; RBAC kontrolliert, was jede Rolle exportieren kann | Bericht Nutzung, Export Job Erfolg Rate |
| **Webhooks & Integrations* | Drittanbietersysteme benötigen Plattformveranstaltungen | Verwaltet Webhook-Abonnements für Plattformveranstaltungen; überwacht die Lieferung und DLQ | Zustellung am Tage; mit HMAC/OAuth signiert; DLQ für gescheiterte Ereignisse | Integration/Ereignisplattform | Ereignistyp abonniert; Endpunkt konfiguriert | Am-Least-once (nicht genau); Abonnenten müssen idempotency behandeln | Webhook Liefererfolgsrate, DLQ Größe |
| **Audit & Observability** | Compliance und Ops brauchen Sichtbarkeit | Erfasst alle Admin-Aktionen mit wem/what/when; überwacht Gesundheitskontrollen und SLOs | Strukturierte Audit-Ereignisse; Zugangsprotokolle; Gesundheitskontrollen und Alarmregeln; SLO-Tracking mit Fehlerbudget | Audit Store, Beobachtungsplattform | Funktionsfähigkeit | Audit logs tamper-resistent; Änderungen nicht erlaubt | SLO Compliance, Audit Vollständigkeit |

---

:::tip Sehen Sie es im Wiki
Byte Portal verfügt über eine Karte direkt zum Admin Portal Guide:

- [Geschäfte](/docs/admin-portal-guide/stores/)— Store & Group Konfiguration
- [Menüs](/docs/admin-portal-guide/menus/)und[Erzeugnisse](/docs/admin-portal-guide/products/)— Menüzuweisung und Patch
- [Promotionen](/docs/admin-portal-guide/promotions/)und[Store Groups](/docs/admin-portal-guide/store-groups/)— Promotionen Konfiguration
- [Bund](/docs/admin-portal-guide/bundles/)— Management von Bundle & Choice
- [Agenten](/docs/admin-portal-guide/agents/)— Automatisierungsmittel
- [Kundenbetreuung](/docs/admin-portal-guide/customer-support/)— Bestellungen und Rückerstattungen
- [In-Store Geräte](/docs/admin-portal-guide/in-store-devices/)— Verwaltung von POS-Geräten
:::
