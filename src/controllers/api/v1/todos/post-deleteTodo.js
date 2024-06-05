const TodoModel = require('../../../../models/todo-model');

module.exports = async (req, res) => {
    try {
        const todoId = req.params.id;

        await TodoModel.findByIdAndUpdate(todoId, {
            deletedAt: Date.now(),
            isDeleted: true,
        });

        return res.sendStatus(204);
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: "something went wrong on the server",
            errors: {
                server: err,
            },
        });
    }
};