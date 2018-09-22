// testNumber is to help us test the graph to make sure the bars are changing height when search is pressed
var testNumber = 0;

// when user hits the city-search-btn
$("#search-btn").on("click", function () {

  // increase testNumber by 5 whenever seasrch button is pressed
  testNumber += 5;

  event.preventDefault();

  // Saves the search value from the city-search bar into a variable.
  let searchedCity = $("#city-search").val().trim();
  searchedCity = searchedCity.replace(/\s+/g, "").toLowerCase();

  $.get("/api/" + searchedCity, function (data) {
    // For now let's just work with 1 bar in our graph.
    var exampleData = testNumber // since our api doesn't work, we'll use some example data - this example data will just be our testNumber
    console.log(exampleData);

    // ########### code already in place before we started changing it ##############################################
    $("#test-data-dump").empty();
    if (!data) {
      $("#test-data-dump").append("<h2> Hmmm... No data was returned from database. Try another city. </h2>");
    } else {
      $("#test-data-dump").append("<h2> Areanam:" + data.areaname + "</h2>");
      $("#test-data-dump").append("<h3>Data Set #1: " + data.stateCounty + "</h3>");
      $("#test-data-dump").append("<h3>Data Set #2: " + data.totalPopulation + "</h3>");
      $("#percentPopulationOver65").append(`<span class="bar-fill" style="width:${data.populationOver65}%;"></span>`);
      $("#unemploymentRate2010").append(`<span class="bar-fill" style="width:${data.unemploymentRate2010}%;"></span>`);
      // ##############################################################################################################

      // Appending a place-holder bar in our graph into the repVote1992 element
      // this will act as the 1 bar in our graph we'll do for now.
      $("#repVote1992").append(`<div class="bar bar-1 stat-1" style="height:0%;"></div>`);

      // This changes the CSS styling of the bar so that the bar's height is X% of the height of the parent element
      $("#repVote1992").css("height", exampleData + "%");

      // Done - run this and check that everytime you press SEARCH it'll make the graph taller.
      //okay going back to line 67 ^ 8===================D     ~~~################################ ~ ----------------------------------------------------------> ~~~~~~~~~~~~~~~~~~~~
    }
  });
});
