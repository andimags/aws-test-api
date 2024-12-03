const sequelize = require("../db/sequelize")
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        await sequelize.authenticate();
        res.json({
            status: 1,
            message: "Connection has been established successfully."
        })
    } catch (error) {
        res.json({
            status: 1,
            message: 'Unable to connect to the database:', error
        })
    }
});

module.exports = router;
