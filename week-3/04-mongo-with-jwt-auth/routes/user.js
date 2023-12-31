const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

   await User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;

    const person = await User.find({
        username,
        password
    })
    if(person){
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    } else{
        res.json({
            msg: "User not found"
        })
    }
});



router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courseList = await Course.find({});
    res.json({
        courseList
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username

   try{
    await User.findOneAndUpdate({
        username: username
    },{
       $push:{
        purchasedCourse: courseId
       }
    })
} catch (e){
        console.log(e)
    }
    res.json({
        msg: "course purchased successfully"
    })
   
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username
    const user = await User.findOne({
        username
    })
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourse
        }
    })

res.json({
    courses: courses
})
});

module.exports = router