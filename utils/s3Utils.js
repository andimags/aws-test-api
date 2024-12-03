// Reference
// https://www.linkedin.com/pulse/how-upload-files-aws-s3-using-nodejs-expressjs-vue-3-mohit-sehgal-gmv7c/

const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require('aws-sdk');
const { S3Client } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        key: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        },
    }),
});

module.exports = { upload, s3 };