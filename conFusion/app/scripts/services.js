'use strict';

angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getDishes = function() {
            return $resource(baseURL + "dishes/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };

        // deprecated : this is done with the getDishes().get({id:index}) call
        // this.getDish = function(index) {
        //     return $http.get(baseURL + "dishes/" + index);
        // };


        this.getPromotion = function() {
            return $resource(baseURL + "promotions/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
    }])

.factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    this.getLeaders = function() {
        return $resource(baseURL + "leadership/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    };

    return {
        getLeaders: this.getLeaders
    };
}])

.factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    this.getFeedbacks = function() {
        return $resource(baseURL + "feedback/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    };

    return {
        getFeedbacks: this.getFeedbacks
    };
}])
;
