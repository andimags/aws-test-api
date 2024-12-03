var { User } = require('../models');
var { s3 } = require('../utils/s3Utils.js');

async function addUser(req, res) {
    try {
        req.body.profile_picture = req.file.location;

        const user = await User.create(req.body);

        res.json({
            status: 1,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            status: 0,
            message: 'Failed to create user',
            error: error.message
        });
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.findAll();

        res.json({
            status: 1,
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            status: 0,
            message: 'Failed to retrieve users',
            error: error.message
        });
    }
}


module.exports = {
    getUsers,
    addUser
}