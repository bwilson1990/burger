var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers_table: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.id });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;

  burger.update(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
