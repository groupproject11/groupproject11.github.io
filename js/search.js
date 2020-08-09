var API_Key = "AIzaSyD2S_XCwg9bfUZlRwy9QTlSYxjH2fCDahg"
var video = ''
var hiphop = "PLP4CSgl7K7ormBIO138tYonB949PHnNcP"
var pop = "PLP4CSgl7K7oqibt_5oDPppWxQ0iaxyyeq"
var rock = "PLP4CSgl7K7ori6-Iz-AWcX561iWCfapt_"
var loudrock = "PLP4CSgl7K7orAG2zKtoJKnTt_bAnLwTXo"
var electronic = "PLP4CSgl7K7ormX2pL9h0inES2Ub630NoL"
var other = "PLP4CSgl7K7orSnEBkcBRqI5fDgKSs5c8o"
var mt = "music theory"
var rdessert ="UCu1M3iuyi9PJ9hxn-JARNcg"
var vlab = "UCUtcQUlim-wN2MYApfccvzA"
var jlee = "UCFB0UCodO5DjcLxLBRzkG-g"
var profv = "UCD3_A_0yfTsAVuD4B75rsWA"
var ross = "UCKt3P8Wkp2l4fkJS_7KFCfw"
var twoset = "UCAzKFALPuF_EPe-AEI0WFFw"
var eddyc = "UCzkT7lUQcMUMawwTlkdNZ3Q"
var mma = "UCZQIHAPEvArUZ6EQ8HHm3_A"
var violinpiano = "UCLLxyaKSNav9f9Vqvp99npQ"
var glenng = "UC7BhnwhEDExZFtRlO9Am-wg"
var danielb = "UCD7QUSiWc7QBP2XGRMGwjEg"
var cmusic = "UCq0sDKI15IW8Fek6OqBhZ3w"
var jwright = "UCp4DtLatjb5dBNHHYcvVXCw"
var ptv = "UCz0PmHG0RvQHazlEsFU-4uQ"
var bhill = "UCZlOvB5LcAgJv3wwvWFOFLg"
var nsol = "UC8R8FRt1KcPiR-rtAflXmeg"
var hacad = "UCiKUKTMbojTIPGWPR_eec9w"
var jguitar = "UCBNkm8o5LiEVLxO8w0p2sfQ"
var pdavids = "UC_Oa7Ph3v94om5OyxY1nPKg"
var beller = "UCcLsvLJOecfCL6RplXhaO4Q"
var signal = "UCRDDHLvQb8HjE2r7_ZuNtWA"
var robs = "UCyDZai57BfE_N0SaBkKQyXg"
var daves = "UC45DvlXhHi7K3uHZDwUPvKA"
var mnew = "UCNBiLBQrKrnvwcVRD5fS8aA"
var rickb = "UCJquYOG5EL82sKTfH9aMA9Q"
var aimee = "UCZIB_p5AgVVdxgkYWHeUy-Q"
var guym = "UCMHG0rJtVF1LohiP63FJakw"
var andrewf = "UCpzgTNTgQsR9YYsyOm3k3KQ"
var dcuts = "UCRYhCg0DHloE9gn-PAiAYNg"
var poly = "UCXkNod_JcH7PleOjwK_8rYQ"
var aneely = "UCnkp4xDOwqqJD7sSM3xdUiQ"
var sidew = "UCi7l9chXMljpUft67vw78qw"
var roomie = "UC9SVhrnsGxWwiBRWT9c7Ozw"
var samuela = "UCI_dcH8Zr2UqNT1EqvMNgTg"
var fantano = "UCnxQ8o9RpqxGF2oLHcCn9VQ"
var asound ="UC8vR6VP-3o_SpdnEBrpYGiQ"
var bpoetry = "UC5DH3eN81b0RGJ7Xj3fsjVg"
var yalec = "PLh9mgdi4rNewA25FVJ-lawQ-yr-alF58z"
var sixm = "UCgDFMTONQz-JLXj3nM6MpiQ"
var wan = "UC9-aoNU-4g-vHNiWDtbDxaw"

/* Search youtube */
$(document).ready(function(){
 

    $("form").submit(function (event){
        event.preventDefault()
        var search = $("#search").val()
        videoSearch(API_Key,search,12)
    });

    function videoSearch(key,search,maxResults){
        $.get(" https://www.googleapis.com/youtube/v3/search?key="+ key +"&type=video&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
            console.log(data)
            $("#videos").empty()
            data.items.forEach(item => {
                video =  `
                <iframe width="480" height="271" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0"  allowfullscreen></iframe>
                `               
                $("#videos").append(video)
           });

         })
        
    }
 })

 /*toggle side nav */
 
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "265.18px";
    document.getElementById("main").style.marginLeft = "245px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "flex") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "flex";
      }
    });
  }

  var dropdowns = document.getElementsByClassName("dropdown-btns");
  var j;
  
  for (j = 0; j < dropdowns.length; j++) {
    dropdowns[j].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownsContent = this.nextElementSibling;
      if (dropdownsContent.style.display === "flex") {
        dropdownsContent.style.display = "none";
      } else {
        dropdownsContent.style.display = "flex";
      }
    });
  }

  
/* Get videos for selected instrument */
function instrument(instrument, maxResults){
  $.get(" https://www.googleapis.com/youtube/v3/search?key="+ API_Key +"&type=video&part=snippet&maxResults="+maxResults+"&q="+instrument,function(data){
    console.log(data)
    $("#videos").empty()
    data.items.forEach(item => {
        video =  `
        <iframe width="480" height="271" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
        `               
        $("#videos").append(video)
   });

 })
}

function reviews(playlistID,maxResults){
  $.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults="+maxResults+"&playlistId="+playlistID+"&key="+API_Key,function(data){
    console.log(data)
    $("#videos").empty()
      data.items.forEach(item =>{
        video =  `
        <iframe width="480" height="271" src="https://www.youtube.com/embed/${item.snippet.resourceId.videoId}" frameborder="0" allowfullscreen></iframe>
        `               
        $("#videos").append(video)
      });
  })
}

function channelplaylist(channelID,maxResults){
  $.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+channelID+"&maxResults="+maxResults+"&key="+API_Key,function(data){
    console.log(data)
    $("#videos").empty()
      data.items.forEach(items =>{
        video =  `
        <iframe width="480" height="271" src="https://www.youtube.com/embed/videoseries?list=${items.id}" frameborder="0" allowfullscreen></iframe>
        `               
        $("#videos").append(video)
      });
  })
}

function channelvideos(channelID,maxResults){
  $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+channelID+"&maxResults="+maxResults+"&key="+API_Key,function(data){
    console.log(data)
    $("#videos").empty()
      data.items.forEach(item =>{
        video =  `
        <iframe width="480" height="271" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `               
        $("#videos").append(video)
      });
  })
}

function playlists(search,maxResults){
  $.get(" https://www.googleapis.com/youtube/v3/search?key="+ API_Key +"&type=playlist&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
    console.log(data)
    $("#videos").empty()
    data.items.forEach(item => {
        video =  `
        <iframe width="720" height="415" src="https://www.youtube.com/embed/videoseries?list=${item.id.playlistId}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `               
        $("#videos").append(video)
   });

 })
}

function theorySearch(theory, maxResults){
  $.get(" https://www.googleapis.com/youtube/v3/search?key="+ API_Key +"&type=video&part=snippet&maxResults="+maxResults+"&q="+theory,function(data){
    console.log(data)
    $("#videos").empty()
    data.items.forEach(item => {
        video =  `
        <iframe width="480" height="271" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `               
        $("#videos").append(video)
   });

 })
}



/* Open when someone clicks on the span element */
function topenNav() {
  document.getElementById("myNav").style.width = "82%"; 
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function tcloseNav() {
  document.getElementById("myNav").style.width = "0%";
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


  



