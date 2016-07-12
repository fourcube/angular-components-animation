var FooItemController = function($scope, $element, $attrs) { }

angular.module('fiddle').component('fooItem', {
  controller: FooItemController,
  templateUrl: 'src/foo/item.html',
  bindings: {
    item: '<',
    removeItem: "&"
  }
});