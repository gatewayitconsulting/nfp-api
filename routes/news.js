// const newsRoutes = (app, fs) => {

//     // variables
//     const dataPath = './data/news.json';

//     // helper methods
//     const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
//         fs.readFile(filePath, encoding, (err, data) => {
//             if (err) {
//                 throw err;
//             }

//             callback(returnJson ? JSON.parse(data) : data);
//         });
//     };

//     // READ
//     app.get('/news', (req, res) => {
//         fs.readFile(dataPath, 'utf8', (err, data) => {
//             if (err) {
//                 throw err;
//             }

//             res.send(JSON.parse(data));
//         });
//     });
// };

// module.exports = newsRoutes;