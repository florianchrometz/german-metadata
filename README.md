# german-metadata

A js package for easy consumption of german metadata such as city names, postcodes, phone prefixes and states in german language with given special characters. This package uses data from OpenStreetMap and German GovData, please see chapter `Licensing Information` for more details.

---

## Usage

```
npm install german-metadata
```

### City objects

The german meta data package is based on an array that consists of single city objects and a set of functions that allows to query them. Here is a basic city object sample for Frankfurt am Main. If a functions states to return a city object, this is what you will get.

```json
{
  "name": "Düren",
  "postalCodes": ["52349", "52351", "52353", "52355"],
  "state": "Nordrhein-Westfalen",
  "phonePrefix": 2421,
  "identifiable": {
    "name": "dueren",
    "state": "nordrhein7westfalen"
  }
}
```

### Samples

```js
const germanMetadata = require('german-metadata');

// sample cityByName
const cityByName = germanMetadata.getCityByName('Düren');

// sample citiesByPostalCode
const citiesByPostalCode = germanMetadata.getCitiesByPostalCode('52349');

// sample citiesByState
const citiesByState = germanMetadata.getCitiesByState('Hessen');

// sample citiesByPhonePrefix
const citiesByPhonePrefix = germanMetadata.getCitiesByPhonePrefix(641);

// sample citiesByPhoneNumber
const citiesByPhoneNumber = germanMetadata.getCitiesByPhoneNumber('069123456');

// sample postalCodesByCityName
const postalCodesByCityName = germanMetadata.getPostalCodesByCityName('Düren');

// sample postalCodesByState
const postalCodesByState = germanMetadata.getPostalCodesByState('Hessen');

// sample postalCodesByPhonePrefix
const postalCodesByPhonePrefix = germanMetadata.getPostalCodesByPhonePrefix(641);

// sample postalCodesByPhoneNumber
const postalCodesByPhoneNumber = germanMetadata.getPostalCodesByPhoneNumber('069123456');

// sample stateByCityName
const stateByCityName = germanMetadata.getStateByCityName('München');

// sample stateByPostalCode
const stateByPostalCode = germanMetadata.getStateByPostalCode('80331');

// sample stateByPhonePrefix
const stateByPhonePrefix = germanMetadata.getStateByPhonePrefix(89);

// sample stateByPhoneNumber
const stateByPhoneNumber = germanMetadata.getStateByPhoneNumber('089123456');

// sample phonePrefixByCityName
const phonePrefixByCityName = germanMetadata.getPhonePrefixByCityName('Düren');

// sample phonePrefixesByPostalCode
const phonePrefixesByPostalCode = germanMetadata.getPhonePrefixesByPostalCode('52349');

// sample phonePrefixesByState
const phonePrefixesByState = germanMetadata.getPhonePrefixesByState('Hessen');

// sample phonePrefixByPhoneNumber
const phonePrefixByPhoneNumber = germanMetadata.getPhonePrefixByPhoneNumber('069123456');

// sample isCityNameValid
const isCityNameValid = germanMetadata.isCityNameValid('Düren');

// sample isPostalCodeValid
const isPostalCodeValid = germanMetadata.isPostalCodeValid('52349');

// sample isStateValid
const isStateValid = germanMetadata.isStateValid('Hessen');

// sample isPhonePrefixValid
const isPhonePrefixValid = germanMetadata.isPhonePrefixValid(641);

// sample ALL_CITIES
const ALL_CITIES = germanMetadata.ALL_CITIES;

// sample ALL_CITY_NAMES
const ALL_CITY_NAMES = germanMetadata.ALL_CITY_NAMES;

// sample ALL_POSTAL_CODES
const ALL_POSTAL_CODES = germanMetadata.ALL_POSTAL_CODES;

// sample ALL_STATES
const ALL_STATES = germanMetadata.ALL_STATES;

// sample ALL_PHONE_PREFIXES
const ALL_PHONE_PREFIXES = germanMetadata.ALL_PHONE_PREFIXES;
```

---

## Functions

### cityByName

This function returns a city object by a given city name.

### citiesByPostalCode

This function returns an array of city objects by a given postal code.

### citiesByState

This function returns an array of city objects by a given state.

### citiesByPhonePrefix

This function returns an array of city objects by a given phone prefix.

### citiesByPhoneNumber

This function returns an array of city objects by a given phone number.

### postalCodesByCityName

This function returns an array of postal codes by a given city name.

### postalCodesByState

This function returns an array of postal codes by a given state.

### postalCodesByPhonePrefix

This function returns an array of postal codes by a given phone prefix.

### postalCodesByPhoneNumber

This function returns an array of postal codes by a given phone number.

### stateByCityName

This function returns a state by a given city name.

### stateByPostalCode

This function returns a state by a given postal code.

### stateByPhonePrefix

This function returns a state by a given phone prefix.

### stateByPhoneNumber

This function returns a state by a given phone number.

### phonePrefixByCityName

This function returns a phone prefix by a given city name.

### phonePrefixesByPostalCode

This function returns an array of phone prefixes by a given postal code.

### phonePrefixesByState

This function returns an array of phone prefixes by a given state.

### phonePrefixByPhoneNumber

This function returns a phone prefix by a given phone number.

### isCityNameValid

This function returns true if a given city name is valid.

### isPostalCodeValid

This function returns true if a given postal code is valid.

### isStateValid

This function returns true if a given state is valid.

### isPhonePrefixValid

This function returns true if a given phone prefix is valid.

### ALL_CITIES

This constant contains an array of all cities in germany. Each city is represented by a city object.

### ALL_CITY_NAMES

This constant contains an array of all city names in germany.

### ALL_POSTAL_CODES

This constant contains an array of all postal codes in germany.

### ALL_STATES

This constant contains an array of all states in germany.

### ALL_PHONE_PREFIXES

This constant contains an array of all phone prefixes in germany.

---

## Licensing Information

Make sure to apply propper attribution when using this package in public facing projects. As this project is using data from OpenStreetMap and German GovData Portal, the following licensing information applies:

### Project Code License

As per the terms of this project's license, the project code is released under the MIT License. You can find the full text of the MIT License in the `LICENSE` file within this repository.

### Attribution to OpenStreetMap

This package is using data provided by OpenStreetMap based on the Open Database License (ODbL).

- OpenStreetMap: [https://www.openstreetmap.org](https://www.openstreetmap.org)

### Attribution to GovData

This package is using data provided by GovData based on the German Data License (dl-de-by-2.0).

- GovData: [https://www.govdata.de](https://www.govdata.de)
