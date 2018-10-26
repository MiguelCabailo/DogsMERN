const express = require('express');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

// complete middleware and routing system
const router = express.Router();

const upload = require('../../models/GridModel').upload;

const mongoURI = require('../../config/keys').mongoURI;

const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', function () {
    //init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
    console.log('connected to gfs');
})

router.get('/', (req,res)=>{
    // find() = find all files and put it in an array
    gfs.files.find().toArray((err, files) => {
        // if there are no files return index ejs with files : false
        if (!files) {
            res.send('no files');
        } else {
            //let buffer;
            // if there are files then use map:
            //  check each file if it is an image then set isImage = true/false
            files.map(file=>{
                if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
                    file.isImage = true;
                } else {
                    file.isImage = false;
                }
            });
            res.send(files);
        }
    })
    

});

router.post('/upload', upload.single('file'), (req,res)=>{
    res.redirect('/profile');
})

// get the image

router.get('/image/:filename', (req,res)=>{
    gfs.files.findOne({filename: req.params.filename}, (err, file)=>{
        if (!file){
            return res.status(404).json({ err: 'file does not exist'})
        }

        if (file.contentType === 'image/png' || file.contentType === 'image/jpeg') {
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({err: 'Not an image'})
        }
    })
})

module.exports = router;
