# german-metadata

A js package for easy consumption of german metadata such as phone prefixes and city names in german language with given special characters. This package uses data from OpenStreetMap and German GovData, please see chapter `Licensing Information` for more details.

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

// get city by phone number, phone number does not need to be prepared
// output will be a city object for Frankfurt am Main
germanMetadata.getCityByPhoneNumber('069472111');
-> "Frankfurt am Main"

// get city by phone prefix, prefix must be a number without leading 0
germanMetadata.getCityByPhonePrefix(89);
-> "München"

//get phone prefix by city name, city name must be a string
germanMetadata.getPhonePrefixByCityName('Frankfurt am Main');
-> 69

// get the specific number only prefix for a non cleaned phone number
germanMetadata.getPrefixOfPhoneNumber('069472111');
-> 69

// validate if a city name is valid
germanMetadata.doesCityExistWithName('Frankfurt am Main');
-> true

//This gives access to the original cities data being used
germanMetadata.cities
-> [{cities}]

```

---

## Functions

### getCityByPhoneNumber(phonenumber) -> Object:City

This function takes a phone number as input and returns the corresponding city object. The input phone number is normalized before the lookup.

### getCityByPhonePrefix(prefix)` -> Object:City

This function takes a phone prefix (area code) as input and returns the corresponding city object.

### getPhonePrefixByCityName(cityname) -> Number:Prefix

This function takes a city name as input and returns the phone prefix (area code) associated with that city. The input city name is normalized before the lookup.

### getPrefixOfPhoneNumber(phonenumber) -> Number:Prefix

This function takes a phone number as input and returns the phone prefix (area code) of that phone number. The input phone number is normalized before the lookup.

### doesCityExistWithName(cityname) -> Boolean

This function takes a city name as input and returns true if the city exists in the data set. The input city name is normalized before the lookup.

### normalizeCityName(cityname) -> String:Normalized Name

Expects a city name as string without any further preparation and normalizes it to a standard, comparable, format being all lowercase, no space, no special character version of the city name.

### normalizePhoneNumber(phonenumber) -> String:Normalized Phone Number

Expects a phone number in any known german format as string without any further preparation and normalizes it to s standard, comparable, format.

### cities -> [{...}]

This allows direct access to the data that is used by this package and returns the contents of `cities.json` which represents an array of cities.

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
