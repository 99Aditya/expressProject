const path = require('path');
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    //   cb(null,path.join(__dirname, "../", 'uploads/')); // Uploads will be stored in the 'uploads/' directory
        
        let uploadPath = '';
        if (file.fieldname === 'profileImage') {
            uploadPath = path.join(__dirname, "../", 'uploads/img/');
        } else if (file.fieldname === 'passportPhoto') {
            uploadPath = path.join(__dirname, "../", 'uploads/photo/');
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname); // Extracting file extension
        const uniqueFileName = uniqueSuffix + fileExtension; // Constructing unique filename
        cb(null, uniqueFileName);
    }
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only images are allowed'), false);
    }
};

// Multer instance
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    fields: [
        { name: 'profileImage', maxCount: 1 },
        { name: 'passportPhoto', maxCount: 1 }
    ]
}).fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'passportPhoto', maxCount: 1 }
]);

module.exports = upload;
