const TodoModel = require('../../../../models/todo-model');

module.exports = async (req, res) => {
    try {
        const incomingData = req.body.data;

        const updateData = {};
        if ("title" in incomingData) {
            updateData['title'] = incomingData.title;
        }
        if ("description" in incomingData) {
            updateData['description'] = incomingData.description;
        }

        if (Object.keys(updateData).length > 0) {
            await TodoModel.findByIdAndUpdate(incomingData.id, {
                ...updateData,
                updatedAt: Date.now(),
            });
        }

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