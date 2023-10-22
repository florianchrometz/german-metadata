const { expect } = require('chai');
const germanMetadata = require('../german-metadata');

describe('German Metadata Package', function () {
  //getCityByPhoneNumber
  it('getCityByPhoneNumber', function () {
    expect(germanMetadata.getCityByPhoneNumber('+49 (0) 6971-492482').name).to.equal(
      'Frankfurt am Main',
    );
  });

  //getCityByPhonePrefix
  it('getCityByPhonePrefix', function () {
    expect(germanMetadata.getCityByPhonePrefix(69).name).to.equal('Frankfurt am Main');
  });

  //getPhonePrefixByCityName
  it('getPhonePrefixByCityName', function () {
    expect(germanMetadata.getPhonePrefixByCityName('Frankfurt am Main')).to.equal(69);
  });

  //getPrefixOfPhoneNumber
  it('getPrefixOfPhoneNumber', function () {
    expect(germanMetadata.getPrefixOfPhoneNumber('+49 (0) 6971-492482')).to.equal(69);
  });

  //doesCityExistWithName
  it('doesCityExistWithName', function () {
    expect(germanMetadata.doesCityExistWithName('Frankfurt am Main')).to.equal(true);
    expect(germanMetadata.doesCityExistWithName('Frankfurt am Rhein')).to.equal(false);
  });

  //normalizeCityName
  it('normalizeCityName', function () {
    expect(germanMetadata.normalizeCityName('Frankfurt am Main')).to.equal('frankfurtammain');
  });

  //normalizePhoneNumber
  it('normalizePhoneNumber', function () {
    expect(germanMetadata.normalizePhoneNumber('+49 (0) 4171-492482')).to.equal('4171492482');
  });
});
