/**
 * Created by mmoreira on 21/10/15.
 */





function MainCtrl($scope) {

    $scope.hello = "yo";


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


app.controller('MainCtrl', MainCtrl);