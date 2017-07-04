'use strict';

describe('Service: localTranslate', function () {

  // load the service's module
  beforeEach(module('metronomeApp'));

  // instantiate service
  var localTranslate;
  beforeEach(inject(function (_localTranslate_) {
    localTranslate = _localTranslate_;
  }));

  it('should do something', function () {
    expect(!!localTranslate).toBe(true);
  });

});
