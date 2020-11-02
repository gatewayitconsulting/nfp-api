const eventRoutes = (app, fs) => {

    // variables
    const dataPath = './data/events.json';

    // READ ALL
    app.get('/events', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // READ SINGLE ID
    app.get('/events/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = eventRoutes;