const { expect } = require('chai');
const germanMetadata = require('../german-metadata').default;

describe('German Metadata Package', function () {
  it('should normalize city names correctly', function () {
    expect(germanMetadata.normalizeCityName('Frankfurt am Main')).to.equal('frankfurt_am_main');
  });

  it('should normalize phone numbers correctly', function () {
    expect(germanMetadata.normalizePhoneNumber('+49 (0) 4171-492482')).to.equal('494171492482');
  });

  it('should find a city by phone number', function () {
    const city = germanMetadata.getCityByPhoneNumber('+49 (0) 4171-492482');
    expect(city.name).to.equal('Frankfurt am Main');
  });

  it('should find a city by phone prefix', function () {
    const city = germanMetadata.getCityByPhonePrefix(69);
    expect(city.name).to.equal('Frankfurt am Main');
  });

  it('should find a phone prefix by city name', function () {
    const prefix = germanMetadata.getPhonePrefixByCityName('Frankfurt am Main');
    expect(prefix).to.equal(69);
  });

  it('should find the phone prefix of a phone number', function () {
    const prefix = germanMetadata.getPrefixOfPhoneNumber('+49 (0) 4171-492482');
    expect(prefix).to.equal(49);
  });
});
