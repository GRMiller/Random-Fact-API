var express = require('express');
var app = express();

var randomFacts = [
					"When a male penguin falls in love with female penguin, he searches the entire beach to find the perfect pebble to present to her.",
					"It is illegal to climb trees in Oshawa, a town in Ontario, Canada.",
					"When you blush, the lining of your stomach also turns red.",
					"New Zealand will deny people residency visa’s if they too high of a BMI and there are cases where people have been rejected because of their weight.",
					"All pandas in the world are on loan from China.",
					"When howling together, no two wolves will howl on the same note, instead, they harmonize to create the illusion that there are more of them than there actually are.",
					"At room temperature, the average air molecule travels at the speed of a rifle bullet.",
					"The Bermuda Triangle has as many ship and plane disappearances as any other region of the ocean.",
					"Dolphins recognize and admire themselves in mirrors.",
					"India’s “Go Air” airline only hires female flight attendants because they are lighter, so they save up to US$500,000 per year in fuel.",
					"Children have more taste buds than adults.",
					"The eye makes movements 50 times every second.",
					"An ant’s sense of smell is stronger than a dog’s.",
					"A day on Venus lasts longer than a year, it is 243 Earth days.",
					"A snail breathes through its foot.",
					];

function generateRandomFact () {
    return randomFacts[Math.floor(Math.random() * (randomFacts.length))];
}

console.log(generateRandomFact());

app.use(express.static(__dirname + '/public'));

app.get('/api/fact', function (req, res) {
  res.send(generateRandomFact());
});

app.get('/randomFacts', function (req, res) {
	res.send(randomFacts);
});


var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
