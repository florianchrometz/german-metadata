'use strict';

/**
 * Cities data
 */
const ALL_CITIES = require('./data/cities.json');

/**
 * All city names based on all joint city.name, ordered by city name
 * @type {array<string>}
 */
const ALL_CITY_NAMES = [...new Set(ALL_CITIES.map((city) => city.name))].sort();

/**
 * All postal codes based on all joint city.postalCodes, ordered by postal code
 * @type {array<string>}
 */
const ALL_POSTAL_CODES = [...new Set(ALL_CITIES.map((city) => city.postalCodes))].flat().sort();

/**
 * All states based on all distinct joint city.state, ordered by state
 * @type {array<string>}
 */
const ALL_STATES = [...new Set(ALL_CITIES.map((city) => city.state))].sort();

/**
 * All phone prefixes based on all distinct joint city.phonePrefix, ordered by phone prefix
 * @type {array<number>}
 * */
const ALL_PHONE_PREFIXES = [...new Set(ALL_CITIES.map((city) => city.phonePrefix))].sort();

/**
 * Function to get city object by city name
 * @param {string} cityName - Any german city name, will be made identifiable for comparison
 * @returns {object} - City object or null if not found
 */
function getCityByName(cityName) {
  const identifiableCityName = createIdentifiableCityOrStateName(cityName);
  return (
    ALL_CITIES.find(
      (city) => createIdentifiableCityOrStateName(city.name) === identifiableCityName,
    ) || null
  );
}

/**
 * Function to get city objects by postal code
 * @param {string} postalCode - Postal code in any german format
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByPostalCode(postalCode) {
  return ALL_CITIES.filter((city) => city.postalCodes.includes(postalCode)) || null;
}

/**
 * Function to get city objects by state
 * @param {string} state - Any german state name, will be made identifiable for comparison
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByState(state) {
  const identifiableState = createIdentifiableCityOrStateName(state);
  return (
    ALL_CITIES.filter(
      (city) => createIdentifiableCityOrStateName(city.state) === identifiableState,
    ) || null
  );
}

/**
 * Function to get a city objects by phone prefix
 * @param {number} phonePrefix - Phone prefix with no trailing 0
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByPhonePrefix(phonePrefix) {
  return ALL_CITIES.filter((city) => city.phonePrefix === phonePrefix) || null;
}

/**
 * Function to get a city objects by phone number
 * @param {string} phoneNumber - Phonenumber in any german format, will be made identifiable for comparison
 * @returns {array<object>} - Array if matching city objects or null if not found
 */
function getCitiesByPhoneNumber(phoneNumber) {}

/**
 * Function to get postal code by city name
 * @param {string} cityName - Any german city name, will be made identifiable for comparison
 * @returns {array<string>} - Postal codes or null if not found
 */
function getPostalCodesByCityName(cityName) {}

/**
 * Function to get postal codes by state
 * @param {string} state - Any german state name, will be made identifiable for comparison
 * @returns {array<string>} - Postal codes or null if not found
 */
function getPostalCodesByState(state) {}

/**
 * Function to get postal codes by phone prefix
 * @param {number} phonePrefix - Phone prefix with no trailing 0
 * @returns {array<string>} - Postal codes or null if not found
 */
function getPostalCodesByPhonePrefix(phonePrefix) {}

/**
 * Function to get postal codes by phone number
 * @param {string} phoneNumber - Phonenumber in any german format, will be made identifiable for comparison
 * @returns {array<string>} - Postal codes or null if not found
 */
function getPostalCodesByPhoneNumber(phoneNumber) {}

/**
 * Function to get state by city name
 * @param {string} cityName - Any german city name, will be made identifiable for comparison
 * @returns {string} - State name or null if not found
 */
function getStateByCityName(cityName) {}

/**
 * Function to get state by postal code
 * @param {string} postalCode - Postal code in any german format
 * @returns {string} - State name or null if not found
 */
function getStateByPostalCode(postalCode) {}

/**
 * Function to get state by phone prefix
 * @param {number} phonePrefix - Phone prefix with no trailing 0
 * @returns {string} - State name or null if not found
 */
function getStateByPhonePrefix(phonePrefix) {}

/**
 * Function to get state by phone number
 * @param {string} phoneNumber - Phonenumber in any german format, will be made identifiable for comparison
 * @returns {string} - State name or null if not found
 */
function getStateByPhoneNumber(phoneNumber) {}

/**
 * Function to get phone prefix by city name
 * @param {string} cityName - Any german city name, will be made identifiable for comparison
 * @returns {number} - Phone prefix or 0 if not found
 */
function getPhonePrefixByCityName(cityName) {}

/**
 * Function to get phone prefixes by postal code
 * @param {string} postalCode - Postal code in any german format
 * @returns {array<number>} - Phone prefixes or null if not found
 */
function getPhonePrefixesByPostalCode(postalCode) {}

/**
 * Function to get phone prefixes by state
 * @param {string} state - Any german state name, will be made identifiable for comparison
 * @returns {array<number>} - Phone prefixes or null if not found
 */
function getPhonePrefixesByState(state) {}

/**
 * Function to get phone prefix by phone number
 * @param {string} phoneNumber - Phonenumber in any german format, will be made identifiable for comparison
 * @returns {number} - Phone prefix or 0 if not found
 */
function getPrefixByPhoneNumber(phoneNumber) {}

/**
 * Function to validate if city name exists
 * @param {string} cityName - Any german city name, will be made identifiable for comparison
 * @returns {boolean} - true if city name exists, false if not
 */
function existsCityName(cityname) {}

/**
 * Function to validate if postal code exists
 * @param {string} postalCode - Postal code in any german format
 * @returns {boolean} - true if postal code exists, false if not
 */
function existsPostalCode(postalCode) {}

/**
 * Function to validate if state exists
 * @param {string} state - Any german state name, will be made identifiable for comparison
 * @returns {boolean} - true if state exists, false if not
 */
function existsState(state) {}

/**
 * Function to validate if phone prefix exists
 * @param {number} phonePrefix - Phone prefix with no trailing 0
 * @returns {boolean} - true if phone prefix exists, false if not
 */
function existsPhonePrefix(phonePrefix) {}

/**
 * Function to create identifiable city or state name
 * @param {string} cityOrStateName - Any german city or state name
 * @returns {string} Identifiable city or state name
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
 * Function to create identifiable phone number
 * @param {string} phoneNumber - Any german phone number
 * @returns {string} Identifiable phonenumber
 */
function createIdentifiablePhoneNumber(phoneNumber) {
  return toString(phoneNumber)
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
 * Export constants and functions to be consumable
 */
module.exports = {
  ALL_CITIES,
  ALL_CITY_NAMES,
  ALL_POSTAL_CODES,
  ALL_STATES,
  ALL_PHONE_PREFIXES,
  getCityByName,
  getCitiesByPostalCode,
  getCitiesByState,
  getCitiesByPhonePrefix,
  getCitiesByPhoneNumber,
  getPostalCodesByCityName,
  getPostalCodesByState,
  getPostalCodesByPhonePrefix,
  getPostalCodesByPhoneNumber,
  getStateByCityName,
  getStateByPostalCode,
  getStateByPhonePrefix,
  getStateByPhoneNumber,
  getPhonePrefixByCityName,
  getPhonePrefixesByPostalCode,
  getPhonePrefixesByState,
  getPrefixByPhoneNumber,
  existsCityName,
  existsPostalCode,
  existsState,
  existsPhonePrefix,
  createIdentifiableCityOrStateName,
  createIdentifiablePhoneNumber,
};
