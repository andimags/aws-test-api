var express = require('express');
var router = express.Router();
var { upload } = require('../utils/s3Utils.js');

const {
    getUsers,
    addUser
} = require('../controllers/users.js')

router.get('/', getUsers);
router.post('/', upload.single('profile_picture'), addUser);

module.exports = router;