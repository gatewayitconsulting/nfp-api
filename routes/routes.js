// import other routes
const eventRoutes = require('./events');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    eventRoutes(app, fs);

};

module.exports = appRouter;