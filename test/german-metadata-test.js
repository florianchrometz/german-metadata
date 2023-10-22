const { expect } = require('chai');
const germanMetadata = require('../german-metadata');

describe('German Metadata Package', function () {
  //getCityByPhoneNumber
  it('should getCityByPhoneNumber', function () {
    expect(germanMetadata.getCityByPhoneNumber('+49 (0) 6971-492482').name).to.equal(
      'Frankfurt am Main',
    );
  });

  //getCityByPhonePrefix
  it('should getCityByPhonePrefix', function () {
    expect(germanMetadata.getCityByPhonePrefix(69).name).to.equal('Frankfurt am Main');
  });

  //getPhonePrefixByCityName
  it('should getPhonePrefixByCityName', function () {
    expect(germanMetadata.getPhonePrefixByCityName('Frankfurt am Main')).to.equal(69);
  });

  //getPrefixOfPhoneNumber
  it('should getPrefixOfPhoneNumber', function () {
    expect(germanMetadata.getPrefixOfPhoneNumber('+49 (0) 6971-492482')).to.equal(69);
  });

  //doesCityExistWithName
  it('should doesCityExistWithName', function () {
    expect(germanMetadata.doesCityExistWithName('Frankfurt am Main')).to.equal(true);
    expect(germanMetadata.doesCityExistWithName('Frankfurt am Rhein')).to.equal(false);
  });

  //normalizeCityName
  it('should normalizeCityName', function () {
    expect(germanMetadata.normalizeCityName('Frankfurt am Main')).to.equal('frankfurt_am_main');
  });

  //normalizePhoneNumber
  it('should normalizePhoneNumber', function () {
    expect(germanMetadata.normalizePhoneNumber('+49 (0) 4171-492482')).to.equal('4171492482');
  });
});
