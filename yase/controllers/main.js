/**
 * Created by mmoreira on 21/10/15.
 */





function MainCtrl($scope,GetArticle) {

    $scope.hello = "yo";

    console.log(GetArticle);
    $scope.cards = [
        { title : "Hello there!",
          body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tortor luctus, commodo turpis congue, faucibus felis. Proin tincidunt neque odio, in consectetur est sodales nec. In mollis vestibulum pulvinar. Sed iaculis luctus orci, tempor elementum dui luctus quis. Suspendisse euismod ornare nunc, eu laoreet orci. Vivamus facilisis, felis eget euismod laoreet, mauris lectus elementum sapien, at molestie nulla mauris non ante. Maecenas et urna a est viverra venenatis. Donec ullamcorper sodales eros id euismod. Donec vitae leo egestas, sodales nunc eget, congue magna.",
          imgUrl : "http://i.dailymail.co.uk/i/pix/2015/09/28/16/2CDCD07600000578-3251966-image-a-112_1443453369162.jpg"

        },{ title : "Hello there!",
          body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tortor luctus, commodo turpis congue, faucibus felis. Proin tincidunt neque odio, in consectetur est sodales nec. In mollis vestibulum pulvinar. Sed iaculis luctus orci, tempor elementum dui luctus quis. Suspendisse euismod ornare nunc, eu laoreet orci. Vivamus facilisis, felis eget euismod laoreet, mauris lectus elementum sapien, at molestie nulla mauris non ante. Maecenas et urna a est viverra venenatis. Donec ullamcorper sodales eros id euismod. Donec vitae leo egestas, sodales nunc eget, congue magna.",
          imgUrl : "http://i.dailymail.co.uk/i/pix/2015/09/28/16/2CDCD07600000578-3251966-image-a-112_1443453369162.jpg"

        },{ title : "Hello there!",
          body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tortor luctus, commodo turpis congue, faucibus felis. Proin tincidunt neque odio, in consectetur est sodales nec. In mollis vestibulum pulvinar. Sed iaculis luctus orci, tempor elementum dui luctus quis. Suspendisse euismod ornare nunc, eu laoreet orci. Vivamus facilisis, felis eget euismod laoreet, mauris lectus elementum sapien, at molestie nulla mauris non ante. Maecenas et urna a est viverra venenatis. Donec ullamcorper sodales eros id euismod. Donec vitae leo egestas, sodales nunc eget, congue magna.",
          imgUrl : "http://i.dailymail.co.uk/i/pix/2015/09/28/16/2CDCD07600000578-3251966-image-a-112_1443453369162.jpg"

        },{ title : "Hello there!",
          body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tortor luctus, commodo turpis congue, faucibus felis. Proin tincidunt neque odio, in consectetur est sodales nec. In mollis vestibulum pulvinar. Sed iaculis luctus orci, tempor elementum dui luctus quis. Suspendisse euismod ornare nunc, eu laoreet orci. Vivamus facilisis, felis eget euismod laoreet, mauris lectus elementum sapien, at molestie nulla mauris non ante. Maecenas et urna a est viverra venenatis. Donec ullamcorper sodales eros id euismod. Donec vitae leo egestas, sodales nunc eget, congue magna.",
          imgUrl : "http://i.dailymail.co.uk/i/pix/2015/09/28/16/2CDCD07600000578-3251966-image-a-112_1443453369162.jpg"

        },

    ]

    $scope.remove = function (index){


        console.log(index);

        console.log(document.getElementById('card-container').children[index]);
        


        var cardElement = document.getElementById('card-container').children[index];

        cardElement.className += " removed";

        setTimeout(function(){
            cardElement.remove(index)
        }, 500);

        $scope.cards.splice(index, 1);

    }

}

app.factory('GetArticle', GetArticle);

function GetArticle($http)
{
    //wikipedia call
var url = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=5&type=article&format=json&rvsection=0";
$http({
     headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Api-User-Agent': 'Example/1.0'
            },
  method: 'POST',
  dataType: 'json',    
  type: 'POST',
  url: url
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    
    
    
    console.log(response);
    return response;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
     console.log(response);
     return response;
  });
    return "ok";
}

app.controller('MainCtrl', MainCtrl);