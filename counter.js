const url = 'https://site--whatballer-be--cgbkzhc2qrj7.code.run/counter';
const data = JSON.stringify({ msg: 'true' });

navigator.sendBeacon(url, data);