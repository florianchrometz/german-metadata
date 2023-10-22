# german-metadata

A js package for easy consumption of german metadata such as phone prefixes and city names in german language with given special characters.

# Usage

```
npm install german-metadata
```

## City objects

The german meta data package is based on an array that consists of single city objects and a set of functions that allows to query them. Here is a basic city object sample for Frankfurt am Main. If a functions states to return a city object, this is what you will get.

```json
{
  "name": "Frankfurt am Main",
  "prefix": 69,
  "normalized": {
    "name": "frankfurt_am_main"
  }
}
```

## Samples

```js
const germanMetadata = require('german-metadata');

// get city by phone number, phone number does not need to be prepared
// output will be a city object for Frankfurt am Main
const cityForNumber = germanMetadata.getCityByPhoneNumber('069472111');

// get city by phone prefix, prefix must be a number without leading 0
// output will be a city object for Munich
const cityForPrefix = germanMetadata.getCityByPhonePrefix(89);

// get the specific number only prefix for a non cleaned phone number
// output will be 69 as number
const prefixForPhoneNumber = germanMetadata.getPrefixOfPhoneNumber('069472111');

// validate if a city name is valid
// output will be true
const isValidCityName = germanMetadata.doesCityExistWithName('Frankfurt am Main');
```

# Functions

## find entries in data

### `getCityByPhoneNumber(phonenumber)` -> `Object:City`

This function takes a phone number as input and returns the corresponding city object. The input phone number is normalized before the lookup.

### `getCityByPhonePrefix(prefix)` -> `Object:City`

This function takes a phone prefix (area code) as input and returns the corresponding city object.

### `getPhonePrefixByCityName(cityname)` -> `Number:Prefix`

This function takes a city name as input and returns the phone prefix (area code) associated with that city. The input city name is normalized before the lookup.

### `getPrefixOfPhoneNumber(phonenumber)` -> `Number:Prefix`

This function takes a phone number as input and returns the phone prefix (area code) of that phone number. The input phone number is normalized before the lookup.

### `doesCityExistWithName(cityname)` -> `Boolean`

This function takes a city name as input and returns true if the city exists in the data set. The input city name is normalized before the lookup.

## Helper Functions

### `normalizeCityName(cityname)` -> Returns string representing a normalized city name

Expects a city name as string without any further preparation and normalizes it to a standard, comparable, format being all lowercase, no space, no special character version of the city name.
Characters will be replaced with given schema: `Ää` -> `ae`, `Öö` -> `oe`, `Üü` -> `ue`, `ß` -> `ss`, ` ` -> `_`, `.` -> `__`, `-` -> `___`

- `normalizeCityName("Berlin")` -> `berlin`
- `normalizeCityName("München")` -> `muenchen`
- `normalizeCityName("Fürstenberg Havel")` -> `fuerstenberg_havel`
- `normalizeCityName("Bergholz-Rehbrücke")` -> `bergholz___rehbruecke`

### `normalizePhoneNumber(phonenumber)` -> Returns a number representing a normalized phone number

Expects a phone number in any known german format as string without any further preparation and normalizes it to s standard, comparable, format
Every character that is not `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9` as well as leading `0`'s or leading country code `49` are removed.

- `normalizePhoneNumber("+49 (0) 4171-492482")` -> `4171492482`
- `normalizePhoneNumber("07171492482")` -> `7171492482`
- `normalizePhoneNumber("0049671-492482#433,222")` -> `671492482433222`

### `cities` -> `[{...}]`

This allows direct access to the data that is used by this package and returns the contents of `cities.json` which represents an array of cities.

# Licensing Information

Make sure to apply propper attribution when using this package in public facing projects. As this project is using data from OpenStreetMap and German GovData Portal, the following licensing information applies:

## Project Code License

As per the terms of this project's license, the project code is released under the MIT License. You can find the full text of the MIT License in the `LICENSE` file within this repository.

## Attribution to OpenStreetMap

This package is using data provided by OpenStreetMap based on the Open Database License (ODbL).

- OpenStreetMap: [https://www.openstreetmap.org](https://www.openstreetmap.org)

## Attribution to GovData

This package is using data provided by GovData based on the German Data License (dl-de-by-2.0).

- GovData: [https://www.govdata.de](https://www.govdata.de)
