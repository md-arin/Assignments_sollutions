const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../config')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

   await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created successfully"
    })
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const  password= req.body.password
    const admin = await Admin.find({
        username,
        password
    })
    if(admin){
        try {
            const token = jwt.sign({
                username
            },JWT_SECRET)
    
            res.json({
                token 
            })
        } catch (error) {
            console.log(error);
        }
    } else{
        res.status(411).json({
            msg: "Unable to find Admin"
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg: "Course created successfully",
        courseid: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const result = await Course.find({});
   res.json({
    result
   })
});

module.exports = router;