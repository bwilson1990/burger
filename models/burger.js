var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(vals) {
      orm.create(vals, function(res) {
      });
    },
    update: function(vals) {
      orm.update(vals, function(res) {
      });
    }

};
  
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;