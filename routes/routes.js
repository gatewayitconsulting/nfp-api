// import other routes
// const eventRoutes = require('./events');
const events = require("../controllers/event.controller.js");
const contactForms = require("../controllers/contactForm.controller.js");


const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    app.get("/contactForms", contactForms.findAll);
    app.get("/events", events.findAll);
    app.get("/events/:eventId", events.findOne);


    // // other routes
    // eventRoutes(app, fs);

};

module.exports = appRouter;