const UserController =  require('../controller/userController');


module.exports = function(app) {
    app.get('/addUser', async (req, res) => {
        res.send("Add user route", req.body);
    });

    app.get('/', async (req, res) => {
        res.send("Sever is running");
    });
};