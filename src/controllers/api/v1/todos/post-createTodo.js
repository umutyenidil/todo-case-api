const TodoModel = require('../../../../models/todo-model');

module.exports = async (req, res) => {
    try {
        const incomingData = req.body.data;

        const todo = await TodoModel.create({
            ...incomingData,
        });

        return res.status(200).json({
            status: 200,
            message: 'successful',
            data: {
                todo,
            },
        });
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