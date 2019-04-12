'use strict';

module.exports = function(app) {
    var todoList = require('../controller/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/home')
        .get(todoList.home);

    app.route('/save')
        .post(todoList.save);

    app.route('/update')
        .post(todoList.update);

    app.route('/delete')
        .post(todoList.delete);

    //----------------------------------\\

    app.route('/users')
        .get(todoList.users);

    app.route('/users/:user_id')
        .get(todoList.findUsers);

    app.route('/users')
        .post(todoList.createUsers);

    app.route('/users')
        .put(todoList.updateUsers);
    
    app.route('/users')
        .delete(todoList.deleteUsers);
};