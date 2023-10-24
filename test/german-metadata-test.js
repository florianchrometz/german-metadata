const { expect } = require('chai');
const germanMetadata = require('../german-metadata');

describe('german-metadata-test', function () {
  // test ALL_CITIES if length is expected lenght and all entries have the same keys
  it('ALL_CITIES', function () {
    expect(germanMetadata.ALL_CITIES).to.be.an('array');
    expect(germanMetadata.ALL_CITIES).to.have.lengthOf(7026);
    germanMetadata.ALL_CITIES.forEach((city) => {
      expect(city).to.have.all.keys('name', 'state', 'postalCodes', 'phonePrefix', 'identifiable');
    });
  });

  // test ALL_CITY_NAMES if length is expected lenght and all entries are strings
  it('ALL_CITY_NAMES', function () {
    expect(germanMetadata.ALL_CITY_NAMES).to.be.an('array');
    expect(germanMetadata.ALL_CITY_NAMES).to.have.lengthOf(7026);
    germanMetadata.ALL_CITY_NAMES.forEach((city) => {
      expect(city).to.be.a('string');
    });
  });

  // test ALL_POSTAL_CODES if length is expected lenght and all entries are strings
  it('ALL_POSTAL_CODES', function () {
    expect(germanMetadata.ALL_POSTAL_CODES).to.be.an('array');
    expect(germanMetadata.ALL_POSTAL_CODES).to.have.lengthOf(8749);
    germanMetadata.ALL_POSTAL_CODES.forEach((postalCode) => {
      expect(postalCode).to.be.a('string');
    });
  });

  // test ALL_STATES if length is expected lenght and all entries are strings
  it('ALL_STATES', function () {
    expect(germanMetadata.ALL_STATES).to.be.an('array');
    expect(germanMetadata.ALL_STATES).to.have.lengthOf(16);
    germanMetadata.ALL_STATES.forEach((state) => {
      expect(state).to.be.a('string');
    });
  });

  // test ALL_PHONE_PREFIXES if length is expected lenght and all entries are strings
  it('ALL_PHONE_PREFIXES', function () {
    expect(germanMetadata.ALL_PHONE_PREFIXES).to.be.an('array');
    expect(germanMetadata.ALL_PHONE_PREFIXES).to.have.lengthOf(2780);
    germanMetadata.ALL_PHONE_PREFIXES.forEach((phonePrefix) => {
      expect(phonePrefix).to.be.a('number');
    });
  });

  // test cityByName with 5 positive and 5 negative tests
  // test citiesByPostalCode with 5 positive and 5 negative tests
  // test citiesByState with 5 positive and 5 negative tests
  // test citiesByPhonePrefix with 5 positive and 5 negative tests
  // test citiesByPhoneNumber with 5 positive and 5 negative tests
  // test postalCodesByCityName with 5 positive and 5 negative tests
  // test postalCodesByState with 5 positive and 5 negative tests
  // test postalCodesByPhonePrefix with 5 positive and 5 negative tests
  // test postalCodesByPhoneNumber with 5 positive and 5 negative tests
  // test stateByCityName with 5 positive and 5 negative tests
  // test stateByPostalCode with 5 positive and 5 negative tests
  // test stateByPhonePrefix with 5 positive and 5 negative tests
  // test stateByPhoneNumber with 5 positive and 5 negative tests
  // test phonePrefixByCityName with 5 positive and 5 negative tests
  // test phonePrefixesByPostalCode with 5 positive and 5 negative tests
  // test phonePrefixesByState with 5 positive and 5 negative tests
  // test phonePrefixByPhoneNumber with 5 positive and 5 negative tests
  // test isCityNameValid with 5 positive and 5 negative tests
  // test isPostalCodeValid with 5 positive and 5 negative tests
  // test isStateValid with 5 positive and 5 negative tests
  // test isPhonePrefixValid with 5 positive and 5 negative tests
});
