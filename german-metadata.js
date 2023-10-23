'use strict';

// City data array (Sample data for Frankfurt am Main)
const cities = require('./data/cities.json');

/**
 * Function to get city object by city name
 * @param {string} cityName - Any german city name
 * @returns {object} - City object or null if not found
 */
function getCityByName(cityName) {}

/**
 * Function to get city objects by postal code
 * @param {string} postalCode - Postal code in any german format
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByPostalCode(postalCode) {}

/**
 * Function to get city objects by state
 * @param {string} state - Any german state name
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByState(state) {}

/**
 * Function to get a city objects by phone number
 * @param {string} phoneNumber - Phonenumber in any german format
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByPhoneNumber(phoneNumber) {}

/**
 * Function to get a city objects by phone prefix
 * @param {number} phonePrefix - Phone prefix with no trailing 0
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByPhonePrefix(phonePrefix) {
  for (const city of cities) {
    if (city.phonePrefix === phonePrefix) {
      return city;
    }
  }
  return null;
}

/**
 * Function to get the phone prefix by city name
 * @param {string} cityName - Phone prefix with no trailing 0
 * @returns {number} City's prefix without leading 0
 */
function getPhonePrefixByCityName(cityName) {
  const normalizedCityName = normalizeCityName(cityName);
  for (const city of cities) {
    if (city.identifiable.name === normalizedCityName) {
      return city.phonePrefix;
    }
  }
  return null;
}

/**
 * Function to get the phone prefix of a phone number
 * @param {string} phoneNumber - Phone prefix with no trailing 0
 * @returns {number} City's prefix without leading 0
 */
function getPrefixByPhoneNumber(phoneNumber) {
  const normalizedNumber = normalizePhoneNumber(phoneNumber);
  const prefixLengths = [5, 4, 3, 2];
  for (const length of prefixLengths) {
    const prefix = Number(normalizedNumber.substring(0, length));
    const city = cities.find((p) => p.phonePrefix === prefix);
    if (city) {
      return city.phonePrefix;
    }
  }
  return null;
}

/**
 * Function to validate if a city exists by name (only major cities, no villages)
 * @param {string} cityname - German city name
 * @returns {bool} Indicator if city exists
 */
function existsCityName(cityname) {
  const identifiableCityName = createIdentifiableCityOrStateName(cityname);
  for (const city of cities) {
    if (city.identifiable.name === identifiableCityName) {
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
function createIdentifiableCityOrStateName(cityOrStateName) {
  return cityOrStateName
    .toLowerCase()
    .replaceAll(/ä/g, 'ae')
    .replaceAll(/ö/g, 'oe')
    .replaceAll(/ü/g, 'ue')
    .replaceAll(/ß/g, 'ss')
    .replaceAll(/ /g, '1')
    .replaceAll(/\//g, '2')
    .replaceAll(/\(/g, '3')
    .replaceAll(/\)/g, '4')
    .replaceAll(/\./g, '5')
    .replaceAll(/\,/g, '6')
    .replaceAll(/-/g, '7');
}

/**
 * Helper function to normalize phone numbers
 * @param {string} phonenumber - Any german phone number
 * @returns {string} Normalized phonenumber
 */
function createIdentifiablePhoneNumber(phonenumber) {
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
module.exports = {};
