const multer = require('multer')
// const multerS3 = require("multer-s3")
// const aws = require("aws-sdk")




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix+file.originalname)
    }
  })

// const storage = multerS3({
//     s3: s3,
//     bucket: 'awsmybucketarnab5',
//     acl: 'public-read', // Access control list
//     key: function (req, file, cb) {
//       const uniqueSuffix = Date.now();
//       cb(null, uniqueSuffix + file.originalname);
//     }
// });



const uploads = multer({
    storage:storage,
    fileFilter: function(req,file,cb){
        if(file.mimetype==='image/png'){
            cb(null,true)
        }
        else if(file.mimetype==="image/jpeg" || file.mimetype==="image/jpg"){
            cb(null,true)
        }
        else if(file.mimetype==='application/pdf'){
            cb(null,true)
        }
        else if(file.mimetype === 'application/msword'){
            cb(null,true)
        }
        else if(file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
            cb(null,true)
        }
        else if(file.mimetype === 'application/vnd.ms-excel' || file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
            cb(null,true)
        }
        else{
            cd(new Error('Files not supported!'))
            cb(null,false)
        }
    }
})


module.exports={uploads}