# german-metadata
A js package for easy consumption of german metadata such as phone prefixes and city names

# City objects
The german meta data package is based on an array that consists of single city objects and a set of functions that allows to query them. Here is a basic city object sample for Frankfurt am  Main
```json
{
  "name": "Frankfurt am Main",
  "prefix": 69,
  "normalized": {
    "name":"frankfurt_am_main",
  } 
}
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


## Helper Functions
### ```normalizeCityName(cityname)``` -> Returns string representing a normalized city name
Expects a city name as string without any further preparation and normalizes it to a standard, comparable, format being all lowercase, no space, no special character version of the city name.
Characters will be replaced with given schema: `Ää` -> `ae`, `Öö` -> `oe`, `Üü` -> `ue`, `ß` -> `ss`, ` ` -> `_`, `.` -> `__`, `-` -> `___`
- ```normalizeCityName("Berlin")``` -> ```berlin```
- ```normalizeCityName("München")``` -> ```muenchen```
- ```normalizeCityName("Fürstenberg Havel")``` -> ```fuerstenberg_havel```
- ```normalizeCityName("Bergholz-Rehbrücke")``` -> ```bergholz___rehbruecke```

### ```normalizePhoneNumber(phonenumber)``` -> Returns a number representing a normalized phone number
Expects a phone number in any known german format as string without any further preparation and normalizes it to s standard, comparable, format
Every character that is not `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9` as well as leading `0`'s or leading country code `49` are removed.
- ```normalizePhoneNumber("+49 (0) 4171-492482")``` -> `4171492482`
- ```normalizePhoneNumber("07171492482")``` -> `7171492482`
- ```normalizePhoneNumber("0049671-492482#433,222")``` -> `671492482433222`

### ```rawCityArray()``` -> ```[{...}]```
This allows direct access to the data that is used by this package and returns the contents of `cities.json` which represents an array of cities.
```const germanCities = geme.rawCityArray()
