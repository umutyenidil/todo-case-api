module.exports = (missingFields) => {
    const messages = {};
    missingFields.forEach(field => {
        messages[field] = `${field} is required`;
    });
    return messages;
}