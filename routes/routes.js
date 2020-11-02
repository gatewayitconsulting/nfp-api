// import other routes
const events = require("../controllers/event.controller.js");
const contactForms = require("../controllers/contactForm.controller.js");


const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });


    app.post("/contactForms", contactForms.create);
    app.get("/contactForms", contactForms.findAll); 
    app.get("/contactForms/:contactFormId", contactForms.findOne);
    // app.put("/contactForms/:contactFormId", contactForms.update);
    // app.delete("/contactForms/:contactFormId", contactForms.delete);
    // app.delete("/contactForms", contactForms.deleteAll);
    app.get("/events", events.findAll);
    app.get("/events/:eventId", events.findOne);

};

module.exports = appRouter;