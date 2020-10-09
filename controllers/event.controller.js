const Event = require("../models/event.model.js");

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
    Event.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving events."
          });
        else res.send(data);
    });
};

// Find a single Event with a eventId
exports.findOne = (req, res) => {
    Event.findById(req.params.eventId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Event with id ${req.params.eventId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Event with id " + req.params.eventId
            });
          }
        } else res.send(data);
    });
};