'use strict';

describe('Directive: languageSelect', function () {

  // load the directive's module
  beforeEach(module('metronomeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<language-select></language-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the languageSelect directive');
  }));
});
