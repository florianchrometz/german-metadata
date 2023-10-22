'use strict';

// City data array (Sample data for Frankfurt am Main)
const cities = require('./data/cities.json');

/**
 * Function to get a city object by phone number
 * @param {string} phonenumber - Phonenumber in any german format, will be normalized
 * @returns {object} The city object or null if not found
 */
function getCityByPhoneNumber(phonenumber) {
  const prefixForNormalizedPhoneNumber = getPrefixOfPhoneNumber(phonenumber);
  if (prefixForNormalizedPhoneNumber) {
    return getCityByPhonePrefix(prefixForNormalizedPhoneNumber);
  }
  return null;
}

/**
 * Function to get a city object by phone prefix
 * @param {number} prefix - Phone prefix with no trailing 0
 * @returns {object} The city object or null if not found
 */
function getCityByPhonePrefix(prefix) {
  for (const city of cities) {
    if (city.prefix === prefix) {
      return city;
    }
  }
  return null;
}

/**
 * Function to get the phone prefix by city name
 * @param {string} cityname - Phone prefix with no trailing 0
 * @returns {number} City's prefix without leading 0
 */
function getPhonePrefixByCityName(cityname) {
  const normalizedCityName = normalizeCityName(cityname);
  for (const city of cities) {
    if (city.normalized.name === normalizedCityName) {
      return city.prefix;
    }
  }
  return null;
}

/**
 * Function to get the phone prefix of a phone number
 * @param {string} phonenumber - Phone prefix with no trailing 0
 * @returns {number} City's prefix without leading 0
 */
function getPrefixOfPhoneNumber(phonenumber) {
  const normalizedNumber = normalizePhoneNumber(phonenumber);
  const prefixLengths = [5, 4, 3, 2];
  for (const length of prefixLengths) {
    const prefix = Number(normalizedNumber.substring(0, length));
    const city = cities.find((p) => p.prefix === prefix);
    if (city) {
      return city.prefix;
    }
  }
  return null;
}

/**
 * Function to validate if a city exists by name (only major cities, no villages)
 * @param {string} cityname - German city name
 * @returns {bool} Indicator if city exists
 */
function doesCityExistWithName(cityname) {
  const normalizedCityName = normalizeCityName(cityname);
  for (const city of cities) {
    if (city.normalized.name === normalizedCityName) {
      return true;
    }
  }
  return false;
}

/**
 * Helper function to normalize city names
 * @param {string} cityname - Any german city name
 * @returns {string} Normalized cityname
 */
function normalizeCityName(cityname) {
  return cityname
    .toLowerCase()
    .replaceAll(/ä/g, 'ae')
    .replaceAll(/ö/g, 'oe')
    .replaceAll(/ü/g, 'ue')
    .replaceAll(/ß/g, 'ss')
    .replaceAll(/ /g, '_')
    .replaceAll(/\./g, '__')
    .replaceAll(/-/g, '___');
}

/**
 * Helper function to normalize phone numbers
 * @param {string} phonenumber - Any german phone number
 * @returns {string} Normalized phonenumber
 */
function normalizePhoneNumber(phonenumber) {
  return phonenumber
    .replace(/\D/g, '')
    .replace(/^0/, '')
    .replace(/^00/, '')
    .replace(/^\+/, '')
    .replace(/^\(/, '')
    .replace(/^\)/, '')
    .replace(/^0049/, '')
    .replace(/^049/, '')
    .replace(/^49/, '')
    .replace(/^0/, '')
    .replace(/^00/, '');
}

/**
 * Export the functions to be consumable
 */
module.exports = {
  getCityByPhoneNumber,
  getCityByPhonePrefix,
  getPhonePrefixByCityName,
  getPrefixOfPhoneNumber,
  doesCityExistWithName,
  normalizeCityName,
  normalizePhoneNumber,
  cities,
};
