---
title: Sign Up
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sign Up

## How This Journey Works

<div className="journey-gif-grid">

<div>

### A. Signed-In User

![Signed-in destination after account creation](/img/customer-journey/gif-library/signed-in/S01-signed-in-home.gif)

**What this shows**

- Shows the account-aware destination after account creation succeeds.
- Confirms that rewards, personalization, and saved context become available after sign-up.
- Provides the target state for the completed new-account journey.

</div>

<div>

### B. Guest User

![Guest sign-in and create-account journey](/img/customer-journey/gif-library/guest/G13-guest-sign-in-create-account.gif)

**What this shows**

- Shows the unauthenticated path into sign-in or account creation.
- Covers phone number, OTP, and account creation progression.
- Preserves the customer path so account creation can return to the intended experience.

</div>

</div>

**Key difference:** Signed-in users already have access to account-aware shortcuts and rewards. Guests use Sign Up to create that account context before account-specific actions can continue.

Sign Up covers account creation for a new customer. The flow starts with mobile number verification, continues through OTP, then asks the customer to complete the account profile before redirecting to the signed-in homepage.

## Screen Capture Sequence

<style>{`
  .account-state-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .account-state-card img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 12px;
    background: #fff;
  }

  .account-state-card p,
  .account-note li {
    font-size: 0.92rem;
    line-height: 1.55;
  }
`}</style>

<div className="account-state-grid">
  <div className="account-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-up-01-phone-number.png')} alt="Sign up phone number entry screen with mobile number entered" />
    <p><strong>Mobile number:</strong> the customer enters a phone number to start identity verification.</p>
  </div>
  <div className="account-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-up-02-otp-verification.png')} alt="Sign up OTP verification screen with code entered" />
    <p><strong>OTP verification:</strong> the customer enters the SMS code to prove access to the phone number.</p>
  </div>
  <div className="account-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-up-03-create-account-empty.png')} alt="Create account form before required fields are completed" />
    <p><strong>Create account:</strong> the customer is asked for required profile, consent, and contact preference details.</p>
  </div>
  <div className="account-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-up-04-create-account-complete.png')} alt="Completed create account form with required fields and consent selected" />
    <p><strong>Ready to submit:</strong> the CTA becomes available after required information and consent are complete.</p>
  </div>
  <div className="account-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-up-05-signed-in-home.png')} alt="Signed in homepage after account creation" />
    <p><strong>Signed-in home:</strong> successful account creation redirects the customer into the signed-in homepage state.</p>
  </div>
</div>

## What This Feature Is

Sign Up is the new-account path for customers who do not already have a recognized profile. It uses phone verification first, then collects the minimum account information needed to create the profile.

The prototype includes:

- mobile number entry
- SMS OTP verification
- create-account form
- required terms acceptance
- required contact preference selection
- signed-in homepage redirect

## Why This Step Is Designed This Way

Registration should feel lightweight, but it still needs clear consent, verified contact information, and enough profile data to support loyalty, offers, order history, and future account recovery.

<div className="account-note">
  <ul>
    <li><strong>OTP first:</strong> phone verification confirms the customer controls the mobile number before account creation continues.</li>
    <li><strong>Account form second:</strong> profile and consent are collected only after verification, which reduces wasted form completion.</li>
    <li><strong>Homepage redirect:</strong> the customer lands in a signed-in state and can continue browsing, ordering, or rewards discovery.</li>
  </ul>
</div>

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Phone number validation | Country format, minimum length, and accepted number types | WIP |
| OTP behavior | Code length, expiry timer, resend copy, attempt limits, and error handling | WIP |
| Social sign-in options | Enabled providers, market availability, and legal handling | Visual only in prototype |
| Profile fields | Required fields, optional date of birth, labels, and validation | WIP |
| Consent language | Terms, privacy copy, opt-in text, and market legal requirements | WIP |
| Contact preferences | Required channels, default selections, and channel labels | WIP |
| Post-sign-up destination | Homepage, rewards onboarding, checkout, or interrupted task return | Prototype shows homepage |
| Localization | Translation-ready labels for supported market languages | WIP |

## What This Screen Should Communicate

- The customer is creating a new account, not only logging in.
- The phone number must be verified before account setup continues.
- Required fields and required consent are clear.
- Successful completion moves the customer into the signed-in experience.

## Design Read On This Screen

- The first screen combines Log In / Sign Up because the phone number is the shared entry point.
- OTP keeps the flow short while still validating identity.
- The account form separates profile creation from verification, which makes the required fields easier to understand.
- Contact preference selection supports market consent requirements and later customer engagement.
