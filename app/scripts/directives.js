/**
 * Created by Oakley Hall on 2/27/14.
 */

"use strict";

var directives = angular.module('directives', ['ngRoute','ngAnimate']);

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

    $scope.xlocation = function(index){
       if(index===0){
           return 0;
       } else {
           return index * ( (index % 2 === 0) ? 50 : -50);
       }
    };
}

directives.directive('factorizer', function () {
    return {
        restrict: 'AE',
        scope: {
            userInput   : '=userInput'
        },
        controller: FactorizerCtrl,
        templateUrl:'/factorizer/app/views/factorizerTeplate.html'
    };

});



