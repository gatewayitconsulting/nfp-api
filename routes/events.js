const eventRoutes = (app) => {

    // variables
    const dataPath = './data/events.json';

    // READ ALL
    app.get('/events', (req, res) => {
            res.send(JSON.parse(data));
        });
    };

    // READ SINGLE ID
    app.get('/events/:id', (req, res) => {
            res.send(JSON.parse(data));
        });
    };
};

module.exports = eventRoutes;