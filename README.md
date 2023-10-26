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

// sample postalCodesByState
const postalCodesByState = germanMetadata.getPostalCodesByState('Hessen');

// sample isPostalCodeValid
const isPostalCodeValid = germanMetadata.isPostalCodeValid('52349');
```

Samples for each function are provided in the chapter `All functions with samples`

## All functions with samples

Jump to function:

- [cityByName](#citybyname)
- [citiesByPostalCode](#citiesbypostalcode)
- [citiesByState](#citiesbystate)
- [citiesByPhonePrefix](#citiesbyphoneprefix)
- [citiesByPhoneNumber](#citiesbyphonenumber)
- [postalCodesByCityName](#postalcodesbycityname)
- [postalCodesByState](#postalcodesbystate)
- [postalCodesByPhonePrefix](#postalcodesbyphoneprefix)
- [postalCodesByPhoneNumber](#postalcodesbyphonenumber)
- [stateByCityName](#statebycityname)
- [stateByPostalCode](#statebypostalcode)
- [stateByPhonePrefix](#statebyphoneprefix)
- [stateByPhoneNumber](#statebyphonenumber)
- [phonePrefixByCityName](#phoneprefixbycityname)
- [phonePrefixesByPostalCode](#phoneprefixesbypostalcode)
- [phonePrefixesByState](#phoneprefixesbystate)
- [phonePrefixByPhoneNumber](#phoneprefixbyphonenumber)
- [isCityNameValid](#iscitynamevalid)
- [isPostalCodeValid](#ispostalcodevalid)
- [isStateValid](#isstatevalid)
- [isPhonePrefixValid](#isphoneprefixvalid)
- [ALL_CITIES](#all_cities)
- [ALL_CITY_NAMES](#all_city_names)
- [ALL_POSTAL_CODES](#all_postal_codes)
- [ALL_STATES](#all_states)
- [ALL_PHONE_PREFIXES](#all_phone_prefixes)

### cityByName

Returns a city object by a given city name.

```js
const cityByName = germanMetadata.getCityByName('Düren');
// -> {"name":"Düren",postalCodes[...],...}
```

### citiesByPostalCode

Returns an array of city objects by a given postal code.

```js
const citiesByPostalCode = germanMetadata.getCitiesByPostalCode('52349');
// -> [{"name":"Düren",postalCodes[...],...},...]
```

### citiesByState

Returns an array of city objects by a given state.

```js
const citiesByState = germanMetadata.getCitiesByState('Hessen');
// -> [{"name":"Frankfurt am Main",postalCodes[...],...},...]
```

### citiesByPhonePrefix

Returns an array of city objects by a given phone prefix.

```js
const citiesByPhonePrefix = germanMetadata.getCitiesByPhonePrefix(641);
// -> [{"name":"Gießen",postalCodes[...],...},...]
```

### citiesByPhoneNumber

Returns an array of city objects by a given phone number.

```js
const citiesByPhoneNumber = germanMetadata.getCitiesByPhoneNumber('069123456');
// -> [{"name":"Frankfurt am Main",postalCodes[...],...},...]
```

### postalCodesByCityName

Returns an array of postal codes by a given city name.

```js
const postalCodesByCityName = germanMetadata.getPostalCodesByCityName('Düren');
// -> ["52349","52351","52353","52355"]
```

### postalCodesByState

Returns an array of postal codes by a given state.

```js
const postalCodesByState = germanMetadata.getPostalCodesByState('Hessen');
// -> ["60306","60308","60310","60311","60313",...]
```

### postalCodesByPhonePrefix

Returns an array of postal codes by a given phone prefix.

```js
const postalCodesByPhonePrefix = germanMetadata.getPostalCodesByPhonePrefix(641);
// -> ["35390","35392","35394","35396","35398"]
```

### postalCodesByPhoneNumber

Returns an array of postal codes by a given phone number.

```js
const postalCodesByPhoneNumber = germanMetadata.getPostalCodesByPhoneNumber('069123456');
// -> ["60306","60308","60310","60311","60313",...]
```

### stateByCityName

Returns a state by a given city name.

```js
const stateByCityName = germanMetadata.getStateByCityName('München');
// -> "Bayern"
```

### stateByPostalCode

Returns a state by a given postal code.

```js
const stateByPostalCode = germanMetadata.getStateByPostalCode('80331');
// -> "Bayern"
```

### stateByPhonePrefix

Returns a state by a given phone prefix.

```js
const stateByPhonePrefix = germanMetadata.getStateByPhonePrefix(89);
// -> "Bayern"
```

### stateByPhoneNumber

Returns a state by a given phone number.

```js
const stateByPhoneNumber = germanMetadata.getStateByPhoneNumber('069123456');
// -> "Hessen"
```

### phonePrefixByCityName

Returns a phone prefix by a given city name.

```js
const phonePrefixByCityName = germanMetadata.getPhonePrefixByCityName('Düren');
// -> 2421
```

### phonePrefixesByPostalCode

Returns an array of phone prefixes by a given postal code.

```js
const phonePrefixesByPostalCode = germanMetadata.getPhonePrefixesByPostalCode('52349');
// -> [2421,2422,2423,2424,2425,2426,2427,2428,2429]
```

### phonePrefixesByState

Returns an array of phone prefixes by a given state.

```js
const phonePrefixesByState = germanMetadata.getPhonePrefixesByState('Hessen');
// -> [69,641,...]
```

### phonePrefixByPhoneNumber

Returns a phone prefix by a given phone number.

```js
const phonePrefixByPhoneNumber = germanMetadata.getPhonePrefixByPhoneNumber('069123456');
// -> 69
```

### isCityNameValid

Returns true if a given city name is valid.

```js
const isCityNameValid = germanMetadata.isCityNameValid('Düren');
// -> true
```

### isPostalCodeValid

Returns true if a given postal code is valid.

```js
const isPostalCodeValid = germanMetadata.isPostalCodeValid('52349');
// -> true
```

### isStateValid

Returns true if a given state is valid.

```js
const isStateValid = germanMetadata.isStateValid('Hessen');
// -> true
```

### isPhonePrefixValid

Returns true if a given phone prefix is valid.

```js
const isPhonePrefixValid = germanMetadata.isPhonePrefixValid(641);
// -> true
```

### ALL_CITIES

This constant contains an array of all cities in germany. Each city is represented by a city object.

```js
const ALL_CITIES = germanMetadata.ALL_CITIES;
// -> [{"name":"Düren",postalCodes[...],...},...]
```

### ALL_CITY_NAMES

This constant contains an array of all city names in germany.

```js
const ALL_CITY_NAMES = germanMetadata.ALL_CITY_NAMES;
// -> ["Düren","Aachen",...]
```

### ALL_POSTAL_CODES

This constant contains an array of all postal codes in germany.

```js
const ALL_POSTAL_CODES = germanMetadata.ALL_POSTAL_CODES;
// -> ["52349","52351","52353","52355",...]
```

### ALL_STATES

This constant contains an array of all states in germany.

```js
const ALL_STATES = germanMetadata.ALL_STATES;
// -> ["Baden-Württemberg","Bayern","Berlin","Brandenburg",...]
```

### ALL_PHONE_PREFIXES

This constant contains an array of all phone prefixes in germany.

```js
const ALL_PHONE_PREFIXES = germanMetadata.ALL_PHONE_PREFIXES;
// -> [2421,2422,2423,2424,2425,2426,2427,2428,2429,...]
```

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
