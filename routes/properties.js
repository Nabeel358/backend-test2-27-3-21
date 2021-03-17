const express = require('express');
const router = express.Router();
const PropertiesModel = require('../models/PropertiesModel.js');

router.get(
    '/',                 //http://www.myapp.com/product/
    (req, res) => {

        ProductsModel
        .find({ model: '' })
        .then(
            (dbDocuments) => {
                res.send(dbDocuments)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }
);

router.post(
    '/create',             // //http://www.myapp.com/properties/create
    (req, res) => {

        // Capture the data in the BODY section
        const formData = {
            propertyType: req.body.propertyNumber,
            propertyNumber: req.body.propertyNumber,
            location: req.body.location,
            price: req.body.price,
            beds: req.body.beds,
            size: req.body.size,
            condition: req.body.condition
        }

        // Instantiate an instance of the PropertiesModel constructor
        const newPropertyModel = new PropertiesModel(formData);

        // Using newPropertyModel object to save to the database 
        newPropertyModel
        .save()
        // If Promise resolves...
        .then(
            (dbDocument) => {
                res.send(dbDocument)
            }
        )
        // If Promise rejects...
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
);

router.post(
    '/update',
    (req, res) => {

        PropertiesModel
        .findOneAndUpdate(
            {
                'propertyNumber': req.body.propertyNumber
            },
            {
                $set: {
                    price: req.body.price
                }
            }
        )
        .then(
            (dbDocument) => {
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
)


module.exports = router;