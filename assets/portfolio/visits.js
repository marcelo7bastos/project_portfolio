const counter = document.querySelector('.visit-counter');
const output = document.querySelector('#visit-total');

async function showVisitCount() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch('https://marcelo-portfolio.goatcounter.com/counter/TOTAL.json', {
      credentials: 'omit',
      signal: controller.signal,
    });
    if (!response.ok) return;
    const data = await response.json();
    const count = String(data.count ?? '').trim();
    if (!/^\d[\d\s.,]*$/.test(count)) return;
    output.textContent = count;
    counter.hidden = false;
  } catch {
    // Analytics may be blocked or unavailable. Keep the footer usable.
  } finally {
    clearTimeout(timeout);
  }
}

if (counter && output) showVisitCount();
