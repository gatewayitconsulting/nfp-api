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

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a ContactForm
  const contactForm = new ContactForm({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    comment: req.body.comment
  });

  // Save ContactForm in the database
  ContactForm.create(contactForm, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ContactForm."
      });
    else res.send(data);
  });
};