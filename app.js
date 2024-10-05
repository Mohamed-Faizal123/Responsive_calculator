var app = angular.module('calculatorApp', []);

app.controller('CalculatorController', function($scope) {
    $scope.display = '';

    $scope.appendNumber = function(num) {
        if ($scope.display == '0' && num === '0') return;
        $scope.display += num;
    };

    $scope.appendOperator = function(op) {
        const lastChar = $scope.display.slice(-1);
        if (['+', '-', '*', '/','%'].includes(lastChar)) return;
        $scope.display += op;
    };

    $scope.clear = function() {
        $scope.display = '';
    };

    $scope.delete = function() {
        $scope.display = $scope.display.slice(0, -1);
    };


    $scope.percentage = function() {
        try {
            $scope.display = (parseFloat($scope.display) / 100).toString();
        } catch (error) {
            $scope.display = 'Error';
        }
    };


    $scope.calculate = function() {
        try {
            $scope.display = eval($scope.display).toString();
        } catch (error) {
            $scope.display = 'Error';
        }
    };
});







