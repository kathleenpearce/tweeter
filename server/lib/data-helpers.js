"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, true)
      })
    },
    getTweets(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, tweets);
      });
    }
  };
};





