// Import mongoose
const mongoose = require('mongoose');

// Schema
const PropertiesSchema = new mongoose.Schema(
    {
        propertyType: {
            type: String,
            required: true
        },
        propertyNumber: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        beds: {
            type: String,
            required: true
        },
        size: {
            type: String
        },
        condition: {
            type: String
        },
    }
)

// Model
const PropertiesModel = mongoose.model('properties', PropertiesSchema);

module.exports = PropertiesModel;