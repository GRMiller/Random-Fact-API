var randomFact = '';

$.get('/api/fact', function(data){
    randomFact = data;
    console.log(randomFact);

    var $newDiv = $("<div id='capfact'>");
    $newDiv.text(randomFact);
    $newDiv.appendTo('#snapcap');
});

$('#newFactBtn').on('click', function (){
  console.log("button click is working")

  $.get('/api/fact', function(data){
      randomFact = data;
      console.log("newFactBtn = " + randomFact);

      var elCapFact = document.getElementById('capfact');
     elCapFact.innerHTML = randomFact;

    })
  });
