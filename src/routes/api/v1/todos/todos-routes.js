const express = require('express');

//  controllers
const todosController = require('./../../../../controllers/api/v1/todos/todos-controller');

//  middlewares
const requiredFieldsMiddleware = require('./../../../../middlewares/required-fields-middleware');

const router = express.Router();

router.get(
    '/',
    todosController.getReadTodos,
);

router.post(
    '/create',
    requiredFieldsMiddleware(['title', 'description']),
    todosController.postCreateTodo,
);

router.delete(
    '/:id',
    todosController.postDeleteTodo,
);

router.put(
    '/:id',
    todosController.postUpdateTodo,
);


module.exports = router;