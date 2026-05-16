import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const wikiRoot = path.resolve(new URL('..', import.meta.url).pathname);
const outputRoot = path.join(wikiRoot, 'static', 'img', 'customer-journey');
const prototypeUrl =
  process.env.ATLAS_PROTOTYPE_URL ??
  'http://127.0.0.1:4173/rna-sneak-peek-prototype.html?resetState=1&noSw=1';

const viewport = { width: 402, height: 874 };

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function ensureDirFor(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function activeScreen(page) {
  return page.locator('.screen.active').first();
}

async function waitForUi(page, extra = 350) {
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(extra);
}

async function scrollActive(page, top) {
  await page.evaluate((scrollTop) => {
    const screen = document.querySelector('.screen.active');
    if (screen) screen.scrollTop = scrollTop;
    const nested =
      document.querySelector('.screen.active .menu-landing-body') ||
      document.querySelector('.screen.active .checkout-scroll');
    if (nested) nested.scrollTop = scrollTop;
  }, top);
  await waitForUi(page, 250);
}

async function capture(page, relativePath, options = {}) {
  if (options.scroll != null) {
    await scrollActive(page, options.scroll);
  } else {
    await waitForUi(page, options.wait ?? 350);
  }

  const outputPath = path.join(outputRoot, relativePath);
  await ensureDirFor(outputPath);
  await page.screenshot({ path: outputPath, fullPage: false });
  console.log(`captured ${relativePath}`);
}

async function reset(page) {
  await page.context().clearCookies();
  await page.goto(prototypeUrl, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('rna-sneak-peek-shell-mode-v1', 'fullscreen');
  });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.phone');
  await page.evaluate(async () => {
    if (typeof loadMenuData === 'function') await loadMenuData();
    state.isAuthenticated = true;
    state.accountFirstName = 'Justin';
    state.accountProfileName = 'Justin P';
    state.rewardsOptedIn = true;
    state.rewardsIntroSeen = true;
    state.fulfillmentType = 'pickup';
    state.activeStoreId = 'elizabeth';
    state.confirmedStoreId = 'elizabeth';
    state.draftStoreId = 'elizabeth';
    state.selectedStoreName = stores.elizabeth.name;
    state.confirmedTimeOption = 'asap';
    state.draftTimeOption = 'asap';
    state.timeLabel = '35-40 min';
    state.cartItems = [];
    state.nextCartItemId = 1;
    syncCartCount();
    goHome();
  });
  await waitForUi(page, 700);
}

async function openOrderSheet(page) {
  await page.evaluate(() => {
    goHome();
    openSheet('order');
  });
  await waitForUi(page);
}

async function setPickupContext(page) {
  await page.evaluate(() => {
    state.isAuthenticated = true;
    state.fulfillmentType = 'pickup';
    state.activeStoreId = 'elizabeth';
    state.confirmedStoreId = 'elizabeth';
    state.draftStoreId = 'elizabeth';
    state.selectedStoreName = stores.elizabeth.name;
    state.confirmedTimeOption = 'asap';
    state.draftTimeOption = 'asap';
    state.timeLabel = '35-40 min';
    state.activeSheet = null;
    state.homeReturnPromptArmed = false;
    goToMenuLanding();
  });
  await waitForUi(page, 900);
}

async function seedCart(page) {
  await setPickupContext(page);
  await page.evaluate(() => {
    openProductDetail('mega-fill-up', { returnScreen: 'menu' });
    state.pdpQuantity = 1;
    addCurrentMenuItemToCart();
    closeSheet();
    goToCart();
    state.expandedCartItemIds = state.cartItems.length ? [state.cartItems[0].id] : [];
    render();
  });
  await waitForUi(page, 700);
}

async function openPdp(page, itemId = 'mega-fill-up', options = {}) {
  await setPickupContext(page);
  await page.evaluate(
    ({ id, returnScreen }) => {
      openProductDetail(id, { returnScreen });
    },
    { id: itemId, returnScreen: options.returnScreen ?? 'menu' },
  );
  await waitForUi(page, 900);
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  await reset(page);
  await capture(page, 'homepage/signed-in-home-01-top.png', { scroll: 0 });
  await capture(page, 'homepage/signed-in-home-02-offers-rewards.png', { scroll: 470 });
  await capture(page, 'homepage/signed-in-home-03-open-late.png', { scroll: 850 });
  await capture(page, 'homepage/signed-in-home-04-reorder.png', { scroll: 1240 });
  await capture(page, 'homepage/signed-in-home-05-feature-bottom.png', { scroll: 1660 });

  await openOrderSheet(page);
  await capture(page, 'setup-order/set-order-mode-01-sheet.png');

  await page.evaluate(() => startPickupFlow('initial'));
  await waitForUi(page, 600);
  await capture(page, 'setup-order/pickup-01-map-and-stores.png');
  await page.evaluate(() => {
    state.expandedStoreId = 'elizabeth';
    state.activeStoreId = 'elizabeth';
    render();
  });
  await waitForUi(page, 350);
  await capture(page, 'setup-order/pickup-02-store-details-expanded.png');

  await reset(page);
  await page.evaluate(() => startDeliveryFlow('initial'));
  await waitForUi(page, 600);
  await capture(page, 'setup-order/delivery-01-address-selection.png');
  await page.locator('[data-delivery-address-id]').first().click();
  await page.locator('#start-order-btn').click();
  await page.waitForSelector('[data-screen="delivery-results"].active');
  await capture(page, 'setup-order/delivery-02-results.png');
  await page.locator('#delivery-result-card').click();
  await page.waitForSelector('[data-screen="delivery-map"].active');
  await capture(page, 'setup-order/delivery-03-map-confirmation.png');
  await page.locator('#start-order-btn').click();
  await page.waitForSelector('[data-screen="delivery-store"].active');
  await capture(page, 'setup-order/delivery-04-store-selection.png');

  await reset(page);
  await setPickupContext(page);
  await capture(page, 'menu/menu-landing-01-category-top.png', { scroll: 0, wait: 900 });
  await capture(page, 'menu/menu-landing-02-category-more.png', { scroll: 720 });
  await capture(page, 'menu/menu-landing-03-footer.png', { scroll: 1240 });
  await capture(page, 'menu/secret-menu-00-unlock-clue.png', { scroll: 0 });
  await page.evaluate(() => {
    state.secretMenuStage = 'countdown';
    state.secretMenuCountdown = 5;
    render();
  });
  await waitForUi(page, 350);
  await capture(page, 'menu/secret-menu-01-unlock-countdown.png');
  await page.evaluate(() => {
    state.secretMenuUnlocked = true;
    state.secretMenuFullyUnlocked = true;
    state.secretMenuStage = 'idle';
    goToSecretMenu(secretMenuCampaign.entryItemId);
  });
  await waitForUi(page, 600);
  await capture(page, 'menu/secret-menu-02-reveal-plp.png');

  await page.evaluate(() => goToMenu());
  await page.waitForSelector('[data-screen="menu"].active');
  await capture(page, 'menu/plp-01-featured-top.png', { scroll: 0, wait: 900 });
  await capture(page, 'menu/plp-02-product-grid.png', { scroll: 760 });
  await capture(page, 'menu/plp-03-category-transition.png', { scroll: 1500 });

  await openPdp(page, 'mega-fill-up');
  await capture(page, 'pdp/pdp-01-top.png', { scroll: 0 });
  await capture(page, 'pdp/pdp-02-size-and-info.png', { scroll: 620 });
  await capture(page, 'pdp/pdp-03-components.png', { scroll: 1040 });
  await capture(page, 'pdp/pdp-04-bundle-customization.png', { scroll: 1420 });
  await capture(page, 'pdp/product-customization-01-size-selection.png', { scroll: 620 });
  await capture(page, 'pdp/product-customization-02-component-groups.png', { scroll: 1040 });
  await page.locator('[data-bundle-customize="primary"]').first().click();
  await page.waitForSelector('[data-screen="bundle-customize"].active');
  await capture(page, 'pdp/product-customization-03-deep-customization.png', { scroll: 0 });
  await capture(page, 'pdp/product-customization-04-add-remove-options.png', { scroll: 640 });

  await openPdp(page, 'mega-fill-up');
  await page.evaluate(() => openNutritionSheet('mega-fill-up', 'nutrition'));
  await waitForUi(page, 350);
  await capture(page, 'pdp/nutrition-allergen-01-nutrition.png');
  await page.locator('#allergen-tab-btn').click();
  await waitForUi(page, 250);
  await capture(page, 'pdp/nutrition-allergen-02-allergen.png');

  await page.evaluate(() => {
    state.secretMenuUnlocked = true;
    state.secretMenuFullyUnlocked = true;
    openProductDetail(secretMenuCampaign.entryItemId, { returnScreen: 'secret-menu' });
  });
  await waitForUi(page, 600);
  await capture(page, 'pdp/secret-menu-pdp-01-top.png', { scroll: 0 });
  await capture(page, 'pdp/secret-menu-pdp-02-customization-groups.png', { scroll: 620 });
  await capture(page, 'pdp/secret-menu-pdp-03-extra-options.png', { scroll: 1060 });

  await reset(page);
  await setPickupContext(page);
  await capture(page, 'byob/byob-01-menu-entry.png', { scroll: 760 });
  await page.evaluate(() => {
    state.activeSheet = null;
    openProductDetail('build-your-own-bucket', { returnScreen: 'menu-landing' });
  });
  await page.waitForSelector('[data-screen="product-detail"].active');
  await capture(page, 'byob/byob-02-builder-top.png', { scroll: 0 });
  await capture(page, 'byob/byob-03-builder-slots.png', { scroll: 680 });
  await capture(page, 'byob/byob-04-sauce-customization.png', { scroll: 1280 });

  await seedCart(page);
  await capture(page, 'cart/cart-01-review-top.png', { scroll: 0 });
  await capture(page, 'cart/cart-02-add-ons.png', { scroll: 880 });
  await capture(page, 'cart/cart-03-summary-checkout.png', { scroll: 1510 });

  await page.evaluate(() => openUpsellSheet('offer'));
  await waitForUi(page, 350);
  await capture(page, 'addons/add-on-cross-sell-01-upsell-modal.png');
  await page.locator('[data-upsell-open-id]').first().click();
  await waitForUi(page, 250);
  await capture(page, 'addons/add-on-cross-sell-02-selected-add-on.png');
  await page.evaluate(() => {
    closeSheet();
    goToCart();
  });
  await waitForUi(page, 350);
  await capture(page, 'addons/add-on-cross-sell-03-cart-recommendations.png', { scroll: 880 });

  await page.locator('[data-cart-proceed-checkout]').click();
  await page.waitForSelector('[data-screen="checkout"].active');
  await capture(page, 'checkout/checkout-01-fulfillment-details.png', { scroll: 0 });
  await page.locator('[data-checkout-confirm-fulfillment]').click();
  await waitForUi(page, 350);
  await capture(page, 'checkout/checkout-02-order-review.png', { scroll: 620 });
  await capture(page, 'checkout/checkout-03-promo-payment-submit.png', { scroll: 1180 });
  await page.locator('#checkout-pay-btn').click();
  await waitForUi(page, 350);
  await capture(page, 'checkout/checkout-04-payment-sheet.png');

  await reset(page);
  await setPickupContext(page);
  await page.evaluate(() => goToRewards());
  await page.waitForSelector('[data-screen="rewards"].active');
  await capture(page, 'rewards/rewards-hub-01-top.png', { scroll: 0, wait: 700 });
  await capture(page, 'rewards/rewards-hub-02-offers.png', { scroll: 620 });
  await capture(page, 'rewards/rewards-hub-03-amazing-value-loyalty.png', { scroll: 1180 });

  await context.close();
  await browser.close();
}

run().catch(async (error) => {
  console.error(error);
  process.exitCode = 1;
});
