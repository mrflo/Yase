/**
 * Created by mmoreira on 21/10/15.
 */





function MainCtrl($scope,GetArticle,MapArticle,$rootScope) {


    GetArticle.get().success(function(data){

        $scope.cards = MapArticle.map(data);

        console.log($scope.cards);

    });
    

$scope.remove = function (index){


        var cardElement = document.getElementById('card-container').children[index];

        cardElement.className += " removed";

        setTimeout(function(){
            cardElement.remove(index)
        }, 500);

        $scope.cards.splice(index, 1);

    }

}


function GetArticle($http)
{

    //wikipedia call
    var url = "https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&rnlimit=5&grnlimit=5&exlimit=5&exintro&prop=extracts|images&format=json";
    //"https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=5&type=article&format=json";

    var article = {
        get : function() {

            var params = {
                method : 'GET',
                url : url,
                headers : {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Api-User-Agent': 'Example/1.0'
                },
                dataType : 'json'
            }

            var get = $http(params);

            get.success(function(data){
                return data;
            }).error(function(err){
                console.log(err);
            })

            return get;
        }
    };


    return article;

}

function MapArticle()
{

    var Mapper = {};

    Mapper.map = function (articles) {

        var cards = [];
        var pages = articles.query.pages
        for(var art in pages )
        {
            var page = pages[art];

            var card = {};
            card['title']=page.title;
            card['body']=page.extract;
            if(page.images)
                card['imgUrl']=page.images[0].title;
            cards.push(card);

        }

        return cards; //articles.data.query.pages;
    }

    return Mapper;


}

app.factory('MapArticle', MapArticle);
app.factory('GetArticle', GetArticle);


app.controller('MainCtrl', MainCtrl);