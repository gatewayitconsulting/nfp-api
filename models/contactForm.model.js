const sql = require("./db.js");

// constructor
const ContactForm = function(contactForm) {
  this.firstName = contactForm.firstName;
  this.lastName = contactForm.lastName;
  this.email = contactForm.email;
  this.comment = contactForm.comment;
};

ContactForm.create = (newContactForm, result) => {
  sql.query("INSERT INTO ContactForms SET ?", newContactForm, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created contactform: ", { id: res.insertId, ...newContactForm });
    result(null, { id: res.insertId, ...newContactForm });
  });
};

ContactForm.findById = (contactFormId, result) => {
  sql.query(`SELECT * FROM contactForms WHERE id = ${contactFormId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found contactForm: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found ContactForm with the id
    result({ kind: "not_found" }, null);
  });
};

ContactForm.getAll = result => {
  sql.query("SELECT * FROM contactForms", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("contactForms: ", res);
    result(null, res);
  });
};

// ContactForm.updateById = (id, contactForm, result) => {
//   sql.query(
//     "UPDATE contactForms SET email = ?, name = ?, active = ? WHERE id = ?",
//     [contactForm.email, contactForm.name, contactForm.active, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found ContactForm with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated contactForm: ", { id: id, ...contactForm });
//       result(null, { id: id, ...contactForm });
//     }
//   );
// };

// ContactForm.remove = (id, result) => {
//   sql.query("DELETE FROM contactForms WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found ContactForm with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted contactForm with id: ", id);
//     result(null, res);
//   });
// };

// ContactForm.removeAll = result => {
//   sql.query("DELETE FROM contactForms", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} contactForms`);
//     result(null, res);
//   });
// };

module.exports = ContactForm;