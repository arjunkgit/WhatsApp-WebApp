        var app = angular.module("myApp", []);
        app.controller("myCtrl", function($scope) {
            $scope.records = [{
                "Name": "Arun Kumar",
                "time": "11:43 PM",
                "message": "Hi, This is done with pure HTML and CSS"
            }, {
                "Name": "Mahesh",
                "time": "8:43 PM",
                "message": "This works on your mobile browser"
            }, {
                "Name": "Ramdas",
                "time": "8:36 PM",
                "message": "We are implimenting other part of the tabs too !"
            }, {
                "Name": "Shamitha Kumari",
                "time": "7:13 PM",
                "message": "Chats on your browser, cool !"
            }, {
                "Name": "Mohith Gowda",
                "time": "6:43 PM",
                "message": "Help on this to impliment more"
            }, {
                "Name": "Gopalchand",
                "time": "5:51 PM",
                "message": "We have to do"
            }, {
                "Name": "Kamal",
                "time": "5:54 PM",
                "message": "This is just a prototype"
            }]
        });
