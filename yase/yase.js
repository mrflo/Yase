



document.addEventListener("DOMContentLoaded", function() {
        GetArticle();
      });

    

function GetArticle()
{
    //wikipedia call
var url = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&type=article";
$http({
  method: 'GET',
  url: url
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    alert(response);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
     alert(response);
  });
    
}