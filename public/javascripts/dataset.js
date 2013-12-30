String.prototype.count = function(str) {
  return this.split(str).length
}

var currencies = JSON.stringify({
  USD: { name: "US Dollar", symbol: "$", rate_usd: 1 },
  EUR: { name: "Euro", symbol: "€", rate_usd: 1 },
  MMK: { name: "Myanmar Kyan", symbol: "M", rate_usd: 1 }
});

if (!localStorage.currencies || localStorage.currencies.count(':') !== currencies.count(':')) {
  localStorage.currencies = currencies;
  localStorage.from_to = '{ "from": "EUR", "to": "MMK" }';
}

window.currencies = JSON.parse(localStorage.currencies);
window.from_to = JSON.parse(localStorage.from_to);
