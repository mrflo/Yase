
function MainCtrl($scope,GetArticle,MapArticle,$rootScope,GetImage) {

    var self = this;
    
    $scope.remove = function (index){

        var cardElement = document.getElementById('card-container').children[index];

        cardElement.className += " removed";

        setTimeout(function(){
            cardElement.remove(index)
        }, 500);

        $scope.cards.splice(index, 1);
        
        if($scope.cards.length==0)
        {
             self.LoadCards();      
        }

    }

    this.LoadCards = function () {
        GetArticle.get().success(function (data) {

            $scope.cards = MapArticle.map(data);

            //images
            $scope.cards.forEach(function (card) {
                if (card['imageid']) {
                    console.log('image:' + card['imageid']);
                    GetImage.get(card['imageid']).success(function () {
                        console.log(GetImage.url);
                        card['image'] = GetImage.url;
                        //GetImage.url.toString(); //"https://commons.wikimedia.org/wiki/"+page.images[0].title.toString().replace(/ /g,"_");
                    });
                }
            });

            console.log($scope.cards);
        });
    }
    
    this.LoadCards();     
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
            if(page.images){ 
            card['imageid']=page.images[0].title;                           
            }
            cards.push(card);

        }
        console.log(cards);
        return cards; //articles.data.query.pages;
    }

    return Mapper;


}

function GetImage($http)
{
     
    var image = {
        url:"",
        get : function(imageId){
            //call to get image from wikipedia
            var url = 'https://en.wikipedia.org/w/api.php?action=query&titles='+imageId+'&prop=imageinfo&iiprop=url&format=json';
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
                for(var img in data.query.pages)
                {
                    console.log("success:"+data.query.pages[img].imageinfo[0].url);
                    image.url = data.query.pages[img].imageinfo[0].url;
                    break;
                }
            }).error(function(err){
                console.log(err);
            })            
        
        return get;
        }};

    return image;
}

app.factory('MapArticle', MapArticle);
app.factory('GetArticle', GetArticle);
app.factory('GetImage', GetImage);

app.controller('MainCtrl', MainCtrl);