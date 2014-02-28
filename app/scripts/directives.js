/**
 * Created by Oakley Hall on 2/27/14.
 */

"use strict";

var directives = angular.module('directives', []);

function primeFactorization(num){
    var root = Math.sqrt(num),
        result = arguments[1] || [],  //get unnamed parameter from recursive calls
        x = 2;

    if ( num % x ) {//if not divisible by 2
        x = 3;//assign first odd
        while ((num % x) && ((x = x + 2) < root)) {}//iterate odds
    }
    //if no factor found then num is prime
    x = (x <= root) ? x : num;
    result.push(x);//push latest prime factor

    //if num isn't prime factor make recursive call
    return (x === num) ? result : primeFactorization( num/x, result ) ;
}

function FactorizerCtrl($scope){
    $scope.update = function(){
        $scope.factors = primeFactorization($scope.userInput);
    };
}

directives.directive('factorizer', function () {
    return {
        restrict: 'AE',
        scope: {
            userInput   : '=userInput'
        },
        controller: FactorizerCtrl,
        template:   '<div>' +
                        '<h3> Factorizer Directive </h3>' +
                        '<input type="number" ng-model="userInput" ng-change="update()" placeholder="number to factor..." />' +
                        '<span ng-repeat="factor in factors" style="display: block; background-color: orange; margin: 3px; text-align: center">' +
                            '{{factor}}</span>' +
                    '</div>'
    };

});


