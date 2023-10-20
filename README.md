# german-metadata
A js package for easy consumption of german metadata such as post codes, phone prefixes and city names

# working with city objects
The german meta data package is based on a huge array that consists of single city objects. Here is a basic city object sample for Frankfurt am  Main
```json
{
  "name": "Frankfurt am Main",
  "state": "Hessen",
  "prefix": 69,
  "normalized": {
    "name":"frankfurt_am_main",
    "state":"hessen"
  } 
}
```

# functions
## preparing data
### ```normalizeCityName(cityname)```
Expects a city name as string without any further preparation and normalizes it to a standard, comparable, format being all lowercase, no space, no special character version of the city name.
- ```normalizeCityName("Berlin")``` -> ```berlin```
- ```normalizeCityName("München")``` -> ```muenchen```
- ```normalizeCityName("Fürstenberg Havel")``` -> ```fuerstenberg_havel```
- ```normalizeCityName("Bergholz-Rehbrücke")``` -> ```bergholz___rehbruecke```

### ```normalizePhoneNumber(phonenumber)```



## return explicit data

### ```getCityForPrefix(prefix)```

### ```getPrefixForCity(city)```

## try to find in data

### ```findPrefixForPhoneNumber(phonenumber)```

### ```findCityForPhoneNumber(phonenumber)```

## get raw data
### ```rawCityArray()``` -> ```[{...}]```
This allows direct access to the data that is used by this package.
```const germanCities = geme.rawCityArray()
