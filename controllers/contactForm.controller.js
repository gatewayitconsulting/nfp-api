const ContactForm = require("../models/contactForm.model.js");

// Retrieve all ContactForms from the database.
exports.findAll = (req, res) => {
    ContactForm.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving contactForms."
          });
        else res.send(data);
    });
};

// Find a single ContactForm with a contactFormId
exports.findOne = (req, res) => {
    ContactForm.findById(req.params.contactFormId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ContactForm with id ${req.params.contactFormId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving ContactForm with id " + req.params.contactFormId
            });
          }
        } else res.send(data);
    });
};