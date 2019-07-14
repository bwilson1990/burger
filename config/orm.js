// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    all: function (cb) {
      connection.query("SELECT * FROM burgers_table", function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function (vals, cb) {
      connection.query("INSERT INTO burgers_table (burger_name) VALUES (?)", [vals], function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // An example of objColVals would be {burger_name: 'cheeseburger', devoured: true}
    update: function (vals, cb) {
      connection.query("UPDATE burgers_table SET devoured = true WHERE id = ?", [vals], function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
};

// Export the orm object for the model (burger.js).
module.exports = orm;