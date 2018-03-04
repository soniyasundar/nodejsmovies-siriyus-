$(document).ready(function() {
$.ajax({
        type: "GET",
        dataType: "json",
        url: "movies/all",
        success: function(response){
          moviesList = response;
          arr=[];
            for(var i=0; i < moviesList.length; i++){ 
              let movieDOM =
                     '<div class="movie fleft">'+
                         '<a href="/movieDetail.html#'+moviesList[i].name+'">' +
                         '<div class="poster">'+
                             '<img src="'+moviesList[i].thumbnailUrl+'" alt="">'+
                         '</div></a>'+
                         '<div class="details">'+
                             '<p class="yearOfRelease">'+moviesList[i].releaseYear+'</p>'+
                             '<h4 class="name">'+moviesList[i].name+'</h4>'+
                             '<div class="stars">';
              arr.push(movieDOM);
            }
          $("#wrapper").html(arr);
        }
     })
});