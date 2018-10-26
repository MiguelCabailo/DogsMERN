const path = require('path');

const crypto = require('crypto');
const mongoose = require('mongoose');
// file upload
const multer = require('multer');
// for multer to store uploaded files directly to MongoDB
const GridFsStorage = require('multer-gridfs-storage');
//const Grid = require('gridfs-stream');

const mongoURI = require('../config/keys').mongoURI;

// const conn = mongoose.createConnection(mongoURI);

// let gfs;

// conn.once('open', function () {
//     //init stream
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploads');
//     console.log('connected to gfs');
// })


const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        console.log(req);
        return new Promise((resolve, reject) => {
            // method that generates random string name 16 chars long
            // attach the random name plus original file name then also attach fileInfo object
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads',
                    metadata : {
                        name: req.body.name,
                        breed: req.body.breed,
                        color: req.body.color,
                        age: req.body.age,
                    }
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({storage});

module.exports = {
    upload : upload
}