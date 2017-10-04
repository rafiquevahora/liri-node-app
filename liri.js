//Grab data from key.js

var keys = require("./keys.js");

//Take commands
var input = process.argv[2];
var action = process.argv[3];
var nodeArgs = process.argv;

//Spotify

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "67255e6d4ca14f8f9e44a5d9513f2a25",
  secret: "1a9eb7e3fee647cea3666cc2054eb3ec",
});

var songName = "";

