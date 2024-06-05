const TodoModel = require('../../../../models/todo-model');

module.exports = async (req, res) => {
    try {
        const todoId = req.params.id;
        const incomingData = req.body.data;

        const updateData = {};
        if ("title" in incomingData) {
            updateData['title'] = incomingData.title;
        }
        if ("description" in incomingData) {
            updateData['description'] = incomingData.description;
        }

        if (Object.keys(updateData).length > 0) {
            await TodoModel.findByIdAndUpdate(todoId, {
                ...updateData,
                updatedAt: Date.now(),
            });
        }

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