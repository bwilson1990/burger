var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers_table", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers_table", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers_table", objColVals, condition, function(res) {
        cb(res);
      });
    }

};
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;