$( document ).ready(function() {
randomAdj();
randomName();

  $( "#generate" ).click(function() {
    randomName();
    ga('send', {
  hitType: 'event',
  eventCategory: 'RandomName',
  eventAction: 'TryAgain'
});
      });
});

function randomAdj() {
    $.get('txt/adjectives.txt', function(txt) {
      // Hide the latest name and the button
      $("#frameworkname").hide(0);
      $("#generate").hide(0);
      // generate a random time for the delay
      var delay = Math.floor(Math.random() * 2000) + 1500
      // show the animation for some time
      $("#trnt").fadeIn(200).delay(delay).slideUp(300);
      // extract a noun
        var lines = txt.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        // load definition
        $.ajax({
          url: "https://api.datamuse.com/words?sp="+lines[randLineNum]+"&md=d"
        }).done(function(data) {
          var str=data[0].defs[0].substring(2);
          $("#definition").html(str);
        });

        // display the noun and show everything again
        $("#theAdj").html(lines[randLineNum]);
});
}

function randomName() {
    $.get('txt/nounlist.txt', function(txt) {
      // Hide the latest name and the button
      $("#frameworkname").hide(0);
      $("#generate").hide(0);
      // generate a random time for the delay
      // var delay = Math.floor(Math.random() * 2000) + 1500
      // show the animation for some time
      // $("#trnt").fadeIn(200).delay(delay).slideUp(300);
      // extract a noun
        var lines = txt.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        // load definition
        $.ajax({
          url: "https://api.datamuse.com/words?sp="+lines[randLineNum]+"&md=d"
        }).done(function(data) {
          var str=data[0].defs[0].substring(2);
          $("#description").html(str);
        });

        // display the noun and show everything again
        $("#theNoun").html(lines[randLineNum]);
        $("#frameworkname").delay(delay).slideDown(200); // random line from the text file
        $("#generate").delay(delay).slideDown(200);
    });
}
