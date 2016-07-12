function FooListController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.list = [{
    name: 'A'
  },{
    name: 'B'
  }];

  ctrl.addItem = function() {
    ctrl.list.push({
      name: '...'
    });
  }

  ctrl.removeItem = function() {
    ctrl.list.pop();
  }
};

angular.module('fiddle').component('fooList', {
  controller: FooListController,
  templateUrl: 'src/foo/list.html'
});