const url = 'https://site--whatballer-be--cgbkzhc2qrj7.code.run/counter';
// const data = JSON.stringify({ msg: 'true' });

// navigator.sendBeacon(url, data);

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ site: 'mortgageoverpay.com' }),
});