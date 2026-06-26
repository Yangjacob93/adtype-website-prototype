const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  });
  const url = 'http://127.0.0.1:8777/outputs/adtype-brand-offline-traffic.html';
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto(url, { waitUntil: 'domcontentloaded' });
  const desktopState = await desktop.evaluate(() => {
    const text = document.body.innerText;
    return {
      title: document.title,
      broken: text.includes('???') || text.includes('\uFFFD'),
      h1: document.querySelector('h1')?.innerText,
      actionColumns: getComputedStyle(document.querySelector('.action-lab')).gridTemplateColumns,
    };
  });
  await desktop.screenshot({ path: 'outputs/qa-traffic-desktop-1440.png', fullPage: false });
  await desktop.locator('#strategies').scrollIntoViewIfNeeded();
  await desktop.screenshot({ path: 'outputs/qa-traffic-strategies-1440.png', fullPage: false });
  await desktop.click('[data-modal-target="search"]');
  await desktop.screenshot({ path: 'outputs/qa-traffic-modal-1440.png', fullPage: false });
  const modalTitle = await desktop.locator('.modal.is-open .modal__title').innerText();

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobile.goto(url, { waitUntil: 'domcontentloaded' });
  const mobileState = await mobile.evaluate(() => {
    const text = document.body.innerText;
    return {
      broken: text.includes('???') || text.includes('\uFFFD'),
      navLinksDisplay: getComputedStyle(document.querySelector('.nav__links')).display,
      actionColumns: getComputedStyle(document.querySelector('.action-lab')).gridTemplateColumns,
      actionMapHeight: Math.round(document.querySelector('.action-map').getBoundingClientRect().height),
    };
  });
  await mobile.screenshot({ path: 'outputs/qa-traffic-mobile-390.png', fullPage: false });
  await mobile.locator('#strategies').scrollIntoViewIfNeeded();
  await mobile.screenshot({ path: 'outputs/qa-traffic-mobile-strategies-390.png', fullPage: false });
  await browser.close();
  console.log(JSON.stringify({ desktopState, modalTitle, mobileState }, null, 2));
})();
