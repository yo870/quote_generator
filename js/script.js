
  $(document).ready(function() {
      getquote();
      $("#launchquote").on("click", function(){getquote()});
      $("#twitter").on("click", function(){tweet()});
  });

  var vquote;
  var vauthor;
  var test;

  function getquote(){
  	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
		vquote = json.quoteText;
    vauthor = json.quoteAuthor;
    test = vquote + vauthor;
    $("#quote").html("\" " + vquote + " \"");
		$("#author").html(vauthor);
		});      // Only change code above this line.
   };

   function tweet(){
    if (test.length < 151) {
      var tweetadd = "https://www.twitter.com/intent/tweet?text=" + vquote + "-" + vauthor;
      windowObjectReference = window.open(
      tweetadd,
      "DescriptiveWindowName",
      "resizable,scrollbars,status,height=600,width=600");  
    } else {
      alert("The total string length of the quote is longer than 150 characters. Please use another quote!");
    }
   }

