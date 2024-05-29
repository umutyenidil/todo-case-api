const generateRequiredFieldMessages = require('./../utils/middleware/generate-required-field-messages');

module.exports = (fields) => (req, res, next) => {
    if (!req.body.data) {
        return res.status(400).json({
            status: 400,
            message: "data is required",
            errors: {
                data: "data is required"
            },
        })
    }

    const incomingData = req.body.data;
    const missingFields = [];
    for (const requiredField of fields) {
        if (!(requiredField in incomingData)) {
            missingFields.push(requiredField);
        }
    }

    if (missingFields.length > 0) {
        const messages = generateRequiredFieldMessages(missingFields);
        return res.status(400).json({
            status: 400,
            message: "some fields missing in data",
            errors: {
                ...messages,
            },
        });
    }

    next();
};

