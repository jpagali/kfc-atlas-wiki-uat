---
title: Identité & signe- Dans
description: Comment les clients créent des comptes, se connectent, gèrent leur profil et contrôlent les paramètres de confidentialité sur la plateforme Atlas.
sidebar_label: Identité & signe- Dans
---

# Identité & signe- Dans

**What it does:** Gère comment les clients créent des comptes, se connectent, gèrent leur profil et contrôlent les paramètres de confidentialité.

**Why it matters:** Chaque interaction de fidélité, historique de commande, adresse sauvegardée et offre personnalisée dépend de l'authentification d'un client. Sans s'inscrire, les clients ne peuvent utiliser que le paiement des clients — ils n'ont pas accès aux récompenses, à l'historique des commandes ou aux préférences enregistrées.

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Créer un compte avec courriel** | Les nouveaux clients ont besoin d'un moyen de s'enregistrer | Permet aux clients de s'inscrire avec une adresse e-mail et un PIN unique | Le client entre email → reçoit OTP → vérifie → compte créé; jeton de session émis | Service identité/OSP, Envoi par courriel | Service de courrier électronique actif pour le marché | Limité au taux OTP par appareil (prévient l'abus) | Taux de conversion des inscriptions |
| **Signature Avec Email + OTP** | Les clients de retour doivent accéder à leur compte | Connexion sans mot de passe par email OTP | Le client entre par e-mail → reçoit OTP → vérifie la reprise de la session → | Service identité/OSP, Envoi par courriel | Le compte doit exister | Limite de tentative OTP avec recul | Taux de réussite de la session, durée de la session |
| **S'inscrire avec Google** | Les clients préfèrent la connexion sociale à l'email | Lien de compte Google pour l'inscription ou l'enregistrement | Google OAuth2 flux → Service d'identité échange jeton → compte créé ou lié | Google OAuth, Identité/OSP | Google OAuth activé pour le marché | Nécessite un compte Google; décision d'activation du marché | Taux d'adoption de la connexion sociale |
| **Signature Dans / Enregistrer avec Apple ID** | Les utilisateurs iOS s'attendent à une connexion Apple native | Connectez-vous avec Apple pour les clients iOS/macOS | Apple OAuth flow → jeton échangé → compte créé ou lié | Connexion Apple, Identité/OSP | Config de développeur Apple par marché | Apple seulement; nécessite un compte Apple | Taux d'inscription iOS |
| **Modifier le profil** | Les clients doivent mettre à jour leurs détails | Permet aux clients connectés de mettre à jour leur nom, DOB, et les coordonnées | Mise à jour de profil appel à service d'identité; changements persistants dans CRM | Identité/OSP, CRM | Le client doit être | Les champs varient selon la configuration du marché | Taux d'achèvement du profil |
| **Voir et modifier les préférences de communication** | Les clients doivent contrôler comment ils sont contactés | Affiche et met à jour le statut d'opt-in par canal | Lectures de CRM; les mises à jour client déclenchent CMP synchronisation et piste d'audit | CRM, CMP, fournisseur Push | Signé; cadre de consentement actif pour le marché | piste de vérification obligatoire; changements enregistrés | Courriel/push opt-in taux |
| **Supprimer le compte** | Les clients ont droit à l'effacement (RGPD) | Lance la demande de suppression de compte dans tous les systèmes connectés | Envoie une demande de suppression à Identité; cascades à CRM, Fidélité | Identité/SSO, CRM, Service de fidélité | Le client doit être connecté; aucune commande en cours | La suppression peut prendre du temps pour propager; données de fidélité supprimées | Taux de demande de suppression |
| **Signaler** | Les clients doivent terminer leur session en toute sécurité | Termine la session, efface les jetons, désenregistre la poussée | Session invalidée dans Identity; pousser jeton non enregistré | Identité/SSO, fournisseur Push | Séance active | Aucune | Sans objet |
| **Voir les termes et conditions / Politique de confidentialité** | Les clients doivent être en mesure de voir ce qu'ils ont accepté de | Rendu les derniers documents juridiques pour le marché local | Fetches version du document du CMS juridique; CDN-cached | CMS juridique, CMP | Aucun (disponible pour les invités) | Contenu géré par l'équipe juridique, pas Byte Helium | Conformité juridique |
| **Consentement des témoins** | Exigences réglementaires sur de nombreux marchés | Affiche les catégories de cookies; permet aux clients d'accepter/rejeter | CMP fournit un widget de consentement; préférences stockées avec horodatage | CMP | Aucun (disponible pour les invités) | Le marché doit configurer les catégories CMP | Taux d'acceptation du consentement |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Create Account with Email</summary>

- **FRD References:** [FRD-HEL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-001)
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** Auth Email, OTP Verify, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OTP verified via Identity service; rate-limited per device (429 backoff)
  - Session token stored in device secure keystore (iOS/Android)
  - Auth endpoints SLO: 99.95% monthly availability
  - Backward compatible SemVer; 90-day deprecation window
  - PII masking applied in all logs

</details>

<details>
<summary>📎 Technical Source: Sign In with Google / Apple</summary>

- **FRD References:** [FRD-HEL-003](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-003), [FRD-HEL-004](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-004), [FRD-HEL-027](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-027), [FRD-HEL-028](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-028), [FRD-HEL-029](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-029), [FRD-HEL-030](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-030)
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** OAuth Google Callback, OAuth Apple Callback, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OAuth2 flow: IdP → Identity service → session token
  - Existing account: linked; new account: created in same flow
  - No PAN or sensitive data in OAuth payload
  - Market enablement: both providers configurable per market
  - 90-day API deprecation window

</details>

<details>
<summary>📎 Technical Source: Delete Account</summary>

- **FRD References:** [FRD-HEL-067](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-067)
- **TRD Domain:** Identity & Sign-In + CRM + Loyalty
- **Key Interfaces / APIs:** Account Delete Request/Status
- **Data Contracts:** Account erasure request (userId, timestamp, status)
- **Source Summary:**
  - GDPR-compliant erasure flow; cascades to CRM and Loyalty
  - Deletion is asynchronous; status available via polling
  - Loyalty balance and history permanently deleted
  - Audit log retained for compliance (anonymised)
  - Blocks re-use of same email for configurable period

</details>

---

:::tip See it in the wiki
The Identity domain maps to the customer-facing sign-in and account flows documented in the Front-end Guide: [Access Account & Manage Profile](/docs/frontend/customer-journey/access-account-and-manage-profile/)
:::
