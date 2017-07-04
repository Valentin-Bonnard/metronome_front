'use strict';

describe('Directive: textCarrousel', function () {

  // load the directive's module
  beforeEach(module('metronomeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<text-carrousel></text-carrousel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the textCarrousel directive');
  }));
});
