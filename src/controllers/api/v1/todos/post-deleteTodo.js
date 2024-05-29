const TodoModel = require('../../../../models/todo-model');

module.exports = async (req, res) => {
    try {
        const incomingData = req.body.data;

        await TodoModel.findByIdAndUpdate(incomingData.id, {
            deletedAt: Date.now(),
            isDeleted: true,
        });

        return res.status(200).json({
            status: 200,
            message: "successful",
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