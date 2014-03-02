'use strict';

var app = angular.module('factorizationApp',['ngRoute','ngAnimate','directives']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.animation('.my-repeat-animation', function() {
    return {
        enter : function(element, done) {
            jQuery(element).css({
                position:'relative',
                top:-200,
                opacity:0,
                left: parseInt(element[0].id, 10)*-1
            });
            jQuery(element).animate({
                top:0,
                opacity:1,
                left: parseInt(element[0].id, 10)
            },  2000, "easeOutElastic" );
        },

        leave : function(element, done) {
            jQuery(element).css({
                position:'relative',
                top:0,
                opacity:1,
                right: parseInt(element[0].id, 10)
            });
            jQuery(element).animate({
                top:-200,
                opacity:0,
                left: parseInt(element[0].id, 10)*-1
            }, 2000, "easeOutElastic" );
        },

        move : function(element, done) {
            jQuery(element).css({
                opacity:0.5
            });
            jQuery(element).animate({
                opacity:1
            }, 1000, "easeInOutBounce" );
        }
    };
});