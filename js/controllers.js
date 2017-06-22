angular.module('starter.controllers', [])

  .controller('loanCtrl', ['testService','$scope', '$stateParams', '$state', 'Chats', '$ionicModal', '$ionicPopup', function (testService,$scope, $stateParams, $state, Chats, $ionicModal, $ionicPopup) {
    // $ionicModal.fromTemplateUrl('../views/pop/confirmModal.html',{
    //   scope: $scope,
    //   animation: 'slide-in-up',
    //   backdropClickToClose: true
    // }).then(function(modal){
    //   $scope.modal = modal;
    // });
    var htmlEl = angular.element(document.querySelector('html'));
    htmlEl.on('click', function (event) {
      if (event.target.nodeName === 'HTML') {
        if (confirmDlg) {
          confirmDlg.close();
        }
      }
    });
    var confirmDlg;
    // 一个确认对话框
    $scope.showConfirm = function () {
      testService.test('');
      confirmDlg = $ionicPopup.show({
        // title: '温馨提示',
        // template: '抱歉，您还不具备申请贷款额度的资格，申请收银服务后，即可获得',
        // okType: 'button-positive',
        // okText: '点击前往',
        // cancelText: '暂不需要',
        // cancelType: 'button-clear button-stable',
        templateUrl: 'views/pop/confirmDlg.html',
        scope: $scope,
      });
      $scope.closeModal = function () {
        confirmDlg.close();
      };
      $scope.goSet = function () {
        confirmDlg.close();

        $state.go('home');
      };

    };
  }])
  .controller('orderDetailCtrl', ['$compile','$state','$scope', '$ionicPopup', '$ionicBackdrop', '$timeout', function ($compile,$state,$scope, $ionicPopup, $ionicBackdrop, $timeout) {


    var data = [{a:'马来西亚进口蔬菜',b:'10.5斤'},{a:'白菜',b:'20斤'},{a:'进口空心菜果园清新',b:'3kg'}];
    $scope.newData = [];
    for (var i = 0; i < data.length / 2;i ++){
      var temp1 = data[i * 2];
      var temp2 = data[i * 2 + 1];
      if(!temp2){
        temp2 = {a:'',b: ''};
      }
      var temp = [temp1,temp2];
      $scope.newData.push(temp);
    }

    console.log($scope.newData);


    var htmlEl = angular.element(document.querySelector('html'));
    htmlEl.on('click', function (event) {
      if (event.target.nodeName === 'HTML') {
        if (confirmDlg) {
          confirmDlg.close();
        }
      }
    });
    $scope.flag = false;
    $scope.data = {};
    var confirmDlg;
    $scope.showPopup = function () {
       confirmDlg = $ionicPopup.show({
        templateUrl: 'views/pop/inputMobileDlg.html',
        scope: $scope,
      });
      $scope.goSet = function () {
        var myreg = /^(((1[0-9]{1}[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if(!myreg.test($scope.data.mobile))
        {
          alert('号码输入有误');
        }else{
          confirmDlg.close();
          $scope.flag = true;
        }


      };
    };

  }])
  .controller('helpCtrl', ['$ionicHistory','$ionicActionSheet','$ionicBackdrop','$scope','$timeout', 'testService',function ($ionicHistory,$ionicActionSheet,$ionicBackdrop,$scope,$timeout,testService) {



    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function (group) {
      return group.show;
    };

    $scope.boxFunc = function (index) {
      // $ionicBackdrop.retain();
      // testService.test('');

      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>分享</b> This' },
          { text: '移除' }
        ],
        destructiveText: 'Delete',
        titleText: '内容',
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });

      // $timeout(function() {
      //   hideSheet();
      // }, 2000);
    };





  }])


  .controller('homeCtrl', ['$ionicHistory','testService','$ionicActionSheet','$scope', '$ionicLoading', function ($ionicHistory,testService,$ionicActionSheet,$scope, $ionicLoading) {
    $scope.goback=function(){
      $ionicHistory.goBack();
    };



  }])
  .controller('qrcodeCtrl', ['$ionicHistory','testService','$ionicActionSheet','$scope', '$ionicLoading', function ($ionicHistory,testService,$ionicActionSheet,$scope, $ionicLoading) {
    $scope.goback=function(){
      $ionicHistory.goBack();
    };



  }])

  .controller('shareCtrl', ['$scope', function ($scope) {
    $scope.shareFunc = function(index) {
      alert(index);
      switch (index){
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        default:
      }
    };
  }]);



