
$(document).ready(function() {

    $('#nav').hide();

  console.log ("All sorted");
$("#search-submit").click(function () {
  var query = $("#search").val();
  console.log(query);
  doMovieSearch(query);
}); //search click function
//take input from user and get api info
var doMovieSearch = function (query){
  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" +  query
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send(); //take input and create a string

  xhr.onreadystatechange = function() {
        // unless readyState = 4, dont run (4 means finished recieving response)
      if (xhr.readyState !== 4) {
        return;
      }
      console.log('Ready!');
        // given a specific JSON string, parse it and save it to searchResults
      var searchResults = JSON.parse(xhr.responseText);
        console.log(searchResults);
        for (var i = 0; i < searchResults.results.length; i++) {
          var result = searchResults.results[i];
          console.log(i, result.title); //searchResults.results[i].title
          // creating a new paragraph to appear in html
          var $para = $('<p class="results">').html(result.title);
          $para.attr('movie-id', result.id)
          $('#main').append($para);
           };
    };
  }
//use ID obained above and conduct detailed search
  var doDetailSearch = function (info){
    url = "https://api.themoviedb.org/3/movie/"+ info + "?api_key=24d863d54c86392e6e1df55b9a328755"
    xhr2.open('GET', url);
    xhr2.send();
  } //take input and create a string
  var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function() {
    if (xhr2.readyState !== 4) {
      return;
    }
    console.log('Ready!');
    var DetailSearch = JSON.parse(xhr2.responseText);
      console.log(DetailSearch);
// debugger;
        // creating a new paragraph to appear in html
         var $para2 = $('<p class="detailedResults">').html(DetailSearch.title + ": " + DetailSearch.overview);
        $('#detail').append($para2);
         // append new node to div#main DOM element (already in HTML file)
        var imageSource = 'http://image.tmdb.org/t/p/w300' + DetailSearch.poster_path;
        var $image = $('<img class="poster">').attr("src", imageSource)
        $("#detail").append($image);
}
$(".results").click(function () {
  //   console.log( $(this).attr('movie-id') );
    doDetailSearch('movie-id');
  }); //search click function
  $(document).on ('click','.results', function(){
    var info = $(this).attr('movie-id') ;
    doDetailSearch(info);
    $("#main").hide();
    $('#nav').show();
    $('#nav').on('click', function(){
        $('#detail').hide();
        $('#search').val('');
        $('#nav').hide();
    });
  });
});
// $('#main').hide
