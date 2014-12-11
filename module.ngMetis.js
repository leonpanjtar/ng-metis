'use strict';

angular
    .module('lpstudio.ngmetis', [])
    .directive('ngMetis', ["$timeout", function($timeout) {
        
        // ======================================
        // == DIRECTIVE DEFINITION
        // ======================================
        var directive = {
            restrict: 'A',
            link: function(scope, el, atts) {
                
                $timeout(function () {
                    angular.element(el).metisMenu();
                }, 0);             
            }
        };
        
        return directive;        
    }]);
