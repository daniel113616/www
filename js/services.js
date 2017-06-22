angular.module('starter.services', [])
  .factory('testService', ['$http', function ($http) {//ajax请求测试
    var doRequest = function (data) {
      if (typeof data == 'undefined') {
        return;
      }
      return $http({
        method: 'POST',
        data: {
          'username': '1',
          'pwd':'111',
          // 'mobile': '13684908973',
          // 'code': '1234',
          // 'role': '1'
        },
        url: "http://10.118.192.175:8002/MyObject/rest/restFulService/get"
      });
    };
    return {
      test: function (data) {
        return doRequest(data);
      }
    };
  }])
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
