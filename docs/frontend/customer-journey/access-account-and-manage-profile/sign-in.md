---
title: Sign In
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sign In

## How This Journey Works

<div className="journey-gif-grid">

<div>

### A. Signed-In User

![Signed-in destination after returning-user authentication](/img/customer-journey/gif-library/signed-in/S01-signed-in-home.gif)

**What this shows**

- Shows the account-aware state the returning customer reaches after OTP success.
- Restores rewards, personalization, and saved context after authentication.
- Provides the fallback destination when there is no interrupted checkout or rewards task.

</div>

<div>

### B. Guest User

![Guest sign-in and create-account journey](/img/customer-journey/gif-library/guest/G13-guest-sign-in-create-account.gif)

**What this shows**

- Shows the unauthenticated entry into phone number and OTP authentication.
- Supports returning-user sign-in without forcing account creation.
- Preserves the original task so the customer can continue after authentication.

</div>

</div>

**Key difference:** Signed-in users are already in the account-aware experience. Guests or signed-out returning customers authenticate through OTP, then return to the homepage or the task they started.

Sign In covers the returning-customer path. For an existing user, the flow should only require phone number entry, OTP verification, and redirect back into the signed-in homepage or interrupted task.

## Screen Capture Sequence

<style>{`
  .signin-state-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .signin-state-card img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 12px;
    background: #fff;
  }

  .signin-state-card p,
  .signin-note li {
    font-size: 0.92rem;
    line-height: 1.55;
  }
`}</style>

<div className="signin-state-grid">
  <div className="signin-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-in-01-phone-number.png')} alt="Sign in phone number entry screen with phone number entered" />
    <p><strong>Mobile number:</strong> the returning customer enters the phone number linked to their account.</p>
  </div>
  <div className="signin-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-in-02-otp-verification.png')} alt="Sign in OTP verification screen with code entered" />
    <p><strong>OTP verification:</strong> the customer enters the SMS code to authenticate the existing account.</p>
  </div>
  <div className="signin-state-card">
    <img src={useBaseUrl('/img/customer-journey/account/sign-in-03-homepage-redirect.png')} alt="Signed in homepage after returning customer OTP verification" />
    <p><strong>Homepage redirect:</strong> after OTP success, the returning customer lands in the signed-in homepage state.</p>
  </div>
</div>

## What This Feature Is

Sign In is the returning-user authentication flow. It should not ask the customer to create an account when the phone number is already associated with an existing profile.

The intended returning-user flow is:

1. Enter mobile number.
2. Submit OTP.
3. Redirect to signed-in homepage or the task the customer was trying to complete.

## Why This Step Is Designed This Way

Returning customers value speed and reliability. Sign In should confirm identity and return the customer to the product experience without unnecessary account setup.

<div className="signin-note">
  <ul>
    <li><strong>No create-account form:</strong> existing users should bypass profile creation after OTP success.</li>
    <li><strong>Task continuity:</strong> if Sign In was triggered from cart, checkout, rewards, or account access, the customer should return to that context.</li>
    <li><strong>Homepage fallback:</strong> if there is no interrupted task, redirect to the signed-in homepage.</li>
  </ul>
</div>

## WIP: What Can Be Configured On This Screen

| Configurable Area | What Markets Should Be Able To Control | Current Documentation Status |
|---|---|---|
| Phone number recognition | Existing account lookup, country format, and validation rules | WIP |
| OTP behavior | Code length, expiry timer, resend behavior, attempt limits, and lockout handling | WIP |
| Existing-user redirect | Homepage, rewards, cart, checkout, or original return screen | WIP |
| New-user branch | When an unrecognized number should continue into Sign Up | WIP |
| Social sign-in options | Enabled providers, market availability, and provider labels | Visual only in prototype |
| Error states | Invalid phone, incorrect OTP, expired OTP, blocked account, and service unavailable | WIP |
| Localization | Translation-ready labels for supported market languages | WIP |

## What This Screen Should Communicate

- The customer is authenticating an existing account.
- OTP is the only required verification step for a recognized returning user.
- The customer should not be asked to recreate profile details.
- Successful verification returns the customer to a signed-in state.

## Design Read On This Screen

- The shared Log In / Sign Up entry keeps the first step simple.
- OTP is optimized for fast re-entry rather than full onboarding.
- The homepage redirect confirms that the customer is now recognized and signed in.
- Existing-user branching should remain distinct from the new-account Sign Up path.
