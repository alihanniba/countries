var fs = require('fs');
var countries = require('./countries.json');

var filteredCountries = countries
  .map(function(country) {
    var name = country.name.common;
    return {
      label: name,
      value: name + '-' + country.callingCode[0]};
  })
  // only return countries that have a calling code
  .filter(function(country) {
    return country.value !== undefined;
  })

fs.writeFileSync('country_calling_codes.json', JSON.stringify(filteredCountries));

