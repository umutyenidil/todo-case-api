const TodoModel = require('../../../../models/todo-model');

module.exports = async (req, res) => {
    try {
        const searchParams = req.query;

        const filter = {
            isDeleted: false,
        };

        if (searchParams.completed) {
            filter['isCompleted'] = searchParams.completed;
        }

        let todos = await TodoModel.find(
            filter,
            {
                id: 1,
                title: 1,
                description: 1,
                isCompleted: 1,
            },
        );

        return res.status(200).json({
            status: 200,
            message: 'successful',
            data: {
                todos,
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