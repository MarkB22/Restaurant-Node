// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
	Name: 'Hahahaha First Bitches',
	PhoneNumber:'407-ha-loser',
	Email:'email@amail.com',
	UniqueId:'First hoes'	
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reservations.html', function (req, res) {
	res.sendFile(path.join(__dirname, 'reservations.html'));
});
app.get('/index.html', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});


// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:reservations?', function (req, res) {
	var chosen = req.params.reservations;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < reservations.length; i++) {
			if (chosen === reservations[i].routeName) {
				res.json(reservations[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(reservations);
	}
});

// Create New Characters - takes in JSON input
app.post('/api/new', function (req, res) {
	var newreservaton = req.body;
	newreservation.routeName = newreservation.name.replace(/\s+/g, '').toLowerCase();

	console.log(newreservation);

	reservations.push(newreservation);

	res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
