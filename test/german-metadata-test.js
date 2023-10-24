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

  // test cityByName with 3 positive and 3 negative tests
  it('cityByName', function () {
    //positive tests
    expect(germanMetadata.cityByName('Berlin')).to.be.an('object');
    expect(germanMetadata.cityByName('Hamburg')).to.be.an('object');
    expect(germanMetadata.cityByName('Nürnberg')).to.be.an('object');
    //negative tests
    expect(germanMetadata.cityByName('')).to.be.null;
    expect(germanMetadata.cityByName('Democity')).to.be.null;
    expect(germanMetadata.cityByName('Frankfurt aM')).to.be.null;
  });

  // test citiesByPostalCode with 3 positive and3 negative tests
  it('citiesByPostalCode', function () {
    //positive tests
    expect(germanMetadata.citiesByPostalCode('01067')).to.be.an('array');
    expect(germanMetadata.citiesByPostalCode('01069')).to.be.an('array');
    expect(germanMetadata.citiesByPostalCode('01097')).to.be.an('array');
    //negative tests
    expect(germanMetadata.citiesByPostalCode('')).to.be.empty;
    expect(germanMetadata.citiesByPostalCode('1234')).to.be.empty;
    expect(germanMetadata.citiesByPostalCode('123456')).to.be.empty;
  });

  // test citiesByState with 3 positive and 3 negative tests
  it('citiesByState', function () {
    //positive tests
    expect(germanMetadata.citiesByState('Bayern')).to.be.an('array');
    expect(germanMetadata.citiesByState('Baden-Württemberg')).to.be.an('array');
    expect(germanMetadata.citiesByState('Nordrhein-Westfalen')).to.be.an('array');
    //negative tests
    expect(germanMetadata.citiesByState('')).to.be.empty;
    expect(germanMetadata.citiesByState('Demostate')).to.be.empty;
    expect(germanMetadata.citiesByState('Frankfurt aM')).to.be.empty;
  });

  // test citiesByPhonePrefix with 3 positive and 3 negative tests
  it('citiesByPhonePrefix', function () {
    //positive tests
    expect(germanMetadata.citiesByPhonePrefix(30)).to.be.an('array');
    expect(germanMetadata.citiesByPhonePrefix(69)).to.be.an('array');
    expect(germanMetadata.citiesByPhonePrefix(641)).to.be.an('array');
    //negative tests
    expect(germanMetadata.citiesByPhonePrefix(-1)).to.be.empty;
    expect(germanMetadata.citiesByPhonePrefix(999)).to.be.empty;
    expect(germanMetadata.citiesByPhonePrefix('3333')).to.be.empty;
  });

  // test citiesByPhoneNumber with 3 positive and 3 negative tests
  it('citiesByPhoneNumber', function () {
    //positive tests
    expect(germanMetadata.citiesByPhoneNumber('+49 (0) 30 123456')).to.be.an('array');
    expect(germanMetadata.citiesByPhoneNumber('0049 069 123456')).to.be.an('array');
    expect(germanMetadata.citiesByPhoneNumber('0641123456')).to.be.an('array');
    //negative tests
    expect(germanMetadata.citiesByPhoneNumber('44299222')).to.be.empty;
    expect(germanMetadata.citiesByPhoneNumber('+12')).to.be.empty;
    expect(germanMetadata.citiesByPhoneNumber('44444')).to.be.empty;
  });

  // test postalCodesByCityName with 3 positive and 3 negative tests
  it('postalCodesByCityName', function () {
    //positive tests
    expect(germanMetadata.postalCodesByCityName('Berlin')).to.be.an('array');
    expect(germanMetadata.postalCodesByCityName('Hamburg')).to.be.an('array');
    expect(germanMetadata.postalCodesByCityName('Nürnberg')).to.be.an('array');
    //negative tests
    expect(germanMetadata.postalCodesByCityName('')).to.be.null;
    expect(germanMetadata.postalCodesByCityName('Democity')).to.be.null;
    expect(germanMetadata.postalCodesByCityName('Frankfurt aM')).to.be.null;
  });

  // test postalCodesByState with 3 positive and 3 negative tests
  it('postalCodesByState', function () {
    //positive tests
    expect(germanMetadata.postalCodesByState('Bayern')).to.be.an('array');
    expect(germanMetadata.postalCodesByState('Baden-Württemberg')).to.be.an('array');
    expect(germanMetadata.postalCodesByState('Nordrhein-Westfalen')).to.be.an('array');
    //negative tests
    expect(germanMetadata.postalCodesByState('')).to.be.empty;
    expect(germanMetadata.postalCodesByState('Demostate')).to.be.empty;
    expect(germanMetadata.postalCodesByState('Frankfurt aM')).to.be.empty;
  });

  // test postalCodesByPhonePrefix with 3 positive and 3 negative tests
  it('postalCodesByPhonePrefix', function () {
    //positive tests
    expect(germanMetadata.postalCodesByPhonePrefix(30)).to.be.an('array');
    expect(germanMetadata.postalCodesByPhonePrefix(69)).to.be.an('array');
    expect(germanMetadata.postalCodesByPhonePrefix(641)).to.be.an('array');
    //negative tests
    expect(germanMetadata.postalCodesByPhonePrefix(-1)).to.be.empty;
    expect(germanMetadata.postalCodesByPhonePrefix(999)).to.be.empty;
    expect(germanMetadata.postalCodesByPhonePrefix('3333')).to.be.empty;
  });

  // test postalCodesByPhoneNumber with 3 positive and 3 negative tests
  it('postalCodesByPhoneNumber', function () {
    //positive tests
    expect(germanMetadata.postalCodesByPhoneNumber('+49 (0) 30 123456')).to.be.an('array');
    expect(germanMetadata.postalCodesByPhoneNumber('0049 069 123456')).to.be.an('array');
    expect(germanMetadata.postalCodesByPhoneNumber('0641123456')).to.be.an('array');
    //negative tests
    expect(germanMetadata.postalCodesByPhoneNumber('44299222')).to.be.empty;
    expect(germanMetadata.postalCodesByPhoneNumber('+12')).to.be.empty;
    expect(germanMetadata.postalCodesByPhoneNumber('44444')).to.be.empty;
  });

  // test stateByCityName with 3 positive and 3 negative tests
  it('stateByCityName', function () {
    //positive tests
    expect(germanMetadata.stateByCityName('Berlin')).to.be.a('string');
    expect(germanMetadata.stateByCityName('Hamburg')).to.be.a('string');
    expect(germanMetadata.stateByCityName('Nürnberg')).to.be.a('string');
    //negative tests
    expect(germanMetadata.stateByCityName('')).to.be.null;
    expect(germanMetadata.stateByCityName('Democity')).to.be.null;
    expect(germanMetadata.stateByCityName('Frankfurt aM')).to.be.null;
  });

  // test stateByPostalCode with 3 positive and 3 negative tests
  it('stateByPostalCode', function () {
    //positive tests
    expect(germanMetadata.stateByPostalCode('01067')).to.be.a('string');
    expect(germanMetadata.stateByPostalCode('01069')).to.be.a('string');
    expect(germanMetadata.stateByPostalCode('01097')).to.be.a('string');
    //negative tests
    expect(germanMetadata.stateByPostalCode('')).to.be.null;
    expect(germanMetadata.stateByPostalCode('1234')).to.be.null;
    expect(germanMetadata.stateByPostalCode('123456')).to.be.null;
  });

  // test stateByPhonePrefix with 3 positive and 3 negative tests
  it('stateByPhonePrefix', function () {
    //positive tests
    expect(germanMetadata.stateByPhonePrefix(30)).to.be.a('string');
    expect(germanMetadata.stateByPhonePrefix(69)).to.be.a('string');
    expect(germanMetadata.stateByPhonePrefix(641)).to.be.a('string');
    //negative tests
    expect(germanMetadata.stateByPhonePrefix(-1)).to.be.null;
    expect(germanMetadata.stateByPhonePrefix(999)).to.be.null;
    expect(germanMetadata.stateByPhonePrefix('3333')).to.be.null;
  });

  // test stateByPhoneNumber with 3 positive and 3 negative tests
  it('stateByPhoneNumber', function () {
    //positive tests
    expect(germanMetadata.stateByPhoneNumber('+49 (0) 30 123456')).to.be.a('string');
    expect(germanMetadata.stateByPhoneNumber('0049 069 123456')).to.be.a('string');
    expect(germanMetadata.stateByPhoneNumber('0641123456')).to.be.a('string');
    //negative tests
    expect(germanMetadata.stateByPhoneNumber('44299222')).to.be.null;
    expect(germanMetadata.stateByPhoneNumber('+12')).to.be.null;
    expect(germanMetadata.stateByPhoneNumber('44444')).to.be.null;
  });

  // test phonePrefixByCityName with 3 positive and 3 negative tests
  it('phonePrefixByCityName', function () {
    //positive tests
    expect(germanMetadata.phonePrefixByCityName('Berlin')).to.be.a('number');
    expect(germanMetadata.phonePrefixByCityName('Hamburg')).to.be.a('number');
    expect(germanMetadata.phonePrefixByCityName('Nürnberg')).to.be.a('number');
    //negative tests
    expect(germanMetadata.phonePrefixByCityName('')).to.be.null;
    expect(germanMetadata.phonePrefixByCityName('Democity')).to.be.null;
    expect(germanMetadata.phonePrefixByCityName('Frankfurt aM')).to.be.null;
  });

  // test phonePrefixesByPostalCode with 3 positive and 3 negative tests
  it('phonePrefixesByPostalCode', function () {
    //positive tests
    expect(germanMetadata.phonePrefixesByPostalCode('01067')).to.be.an('array');
    expect(germanMetadata.phonePrefixesByPostalCode('01069')).to.be.an('array');
    expect(germanMetadata.phonePrefixesByPostalCode('01097')).to.be.an('array');
    //negative tests
    expect(germanMetadata.phonePrefixesByPostalCode('')).to.be.empty;
    expect(germanMetadata.phonePrefixesByPostalCode('1234')).to.be.empty;
    expect(germanMetadata.phonePrefixesByPostalCode('123456')).to.be.empty;
  });

  // test phonePrefixesByState with 3 positive and 3 negative tests
  it('phonePrefixesByState', function () {
    //positive tests
    expect(germanMetadata.phonePrefixesByState('Bayern')).to.be.an('array');
    expect(germanMetadata.phonePrefixesByState('Baden-Württemberg')).to.be.an('array');
    expect(germanMetadata.phonePrefixesByState('Nordrhein-Westfalen')).to.be.an('array');
    //negative tests
    expect(germanMetadata.phonePrefixesByState('')).to.be.empty;
    expect(germanMetadata.phonePrefixesByState('Demostate')).to.be.empty;
    expect(germanMetadata.phonePrefixesByState('Frankfurt aM')).to.be.empty;
  });

  // test phonePrefixByPhoneNumber with 3 positive and 3 negative tests
  it('phonePrefixByPhoneNumber', function () {
    //positive tests
    expect(germanMetadata.phonePrefixByPhoneNumber('+49 (0) 30 123456')).to.be.a('number');
    expect(germanMetadata.phonePrefixByPhoneNumber('0049 069 123456')).to.be.a('number');
    expect(germanMetadata.phonePrefixByPhoneNumber('0641123456')).to.be.a('number');
    //negative tests
    expect(germanMetadata.phonePrefixByPhoneNumber('44299222')).to.be.equal(-1);
    expect(germanMetadata.phonePrefixByPhoneNumber('+12')).to.be.equal(-1);
    expect(germanMetadata.phonePrefixByPhoneNumber('44444')).to.be.equal(-1);
  });

  // test isCityNameValid with 3 positive and 3 negative tests
  it('isCityNameValid', function () {
    //positive tests
    expect(germanMetadata.isCityNameValid('Berlin')).to.be.true;
    expect(germanMetadata.isCityNameValid('Hamburg')).to.be.true;
    expect(germanMetadata.isCityNameValid('Nürnberg')).to.be.true;
    //negative tests
    expect(germanMetadata.isCityNameValid('')).to.be.false;
    expect(germanMetadata.isCityNameValid('Democity')).to.be.false;
    expect(germanMetadata.isCityNameValid('Frankfurt aM')).to.be.false;
  });

  // test isPostalCodeValid with 3 positive and 3 negative tests
  it('isPostalCodeValid', function () {
    //positive tests
    expect(germanMetadata.isPostalCodeValid('01067')).to.be.true;
    expect(germanMetadata.isPostalCodeValid('01069')).to.be.true;
    expect(germanMetadata.isPostalCodeValid('01097')).to.be.true;
    //negative tests
    expect(germanMetadata.isPostalCodeValid('')).to.be.false;
    expect(germanMetadata.isPostalCodeValid(1067)).to.be.false;
    expect(germanMetadata.isPostalCodeValid('1234')).to.be.false;
  });

  // test isStateValid with 3 positive and 3 negative tests
  it('isStateValid', function () {
    //positive tests
    expect(germanMetadata.isStateValid('Bayern')).to.be.true;
    expect(germanMetadata.isStateValid('Baden-Württemberg')).to.be.true;
    expect(germanMetadata.isStateValid('Nordrhein-Westfalen')).to.be.true;
    //negative tests
    expect(germanMetadata.isStateValid('')).to.be.false;
    expect(germanMetadata.isStateValid('Demostate')).to.be.false;
    expect(germanMetadata.isStateValid('Frankfurt aM')).to.be.false;
  });

  // test isPhonePrefixValid with 3 positive and 3 negative tests
  it('isPhonePrefixValid', function () {
    //positive tests
    expect(germanMetadata.isPhonePrefixValid(30)).to.be.true;
    expect(germanMetadata.isPhonePrefixValid(69)).to.be.true;
    expect(germanMetadata.isPhonePrefixValid(641)).to.be.true;
    expect(germanMetadata.isPhonePrefixValid(89)).to.be.true;
    expect(germanMetadata.isPhonePrefixValid(911)).to.be.true;
    //negative tests
    expect(germanMetadata.isPhonePrefixValid(-1)).to.be.false;
    expect(germanMetadata.isPhonePrefixValid(999)).to.be.false;
    expect(germanMetadata.isPhonePrefixValid('3333')).to.be.false;
    expect(germanMetadata.isPhonePrefixValid('')).to.be.false;
    expect(germanMetadata.isPhonePrefixValid('abc')).to.be.false;
  });
});
