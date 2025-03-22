const express= require('express')

const router=express.Router();
const postTshirtDesignController =require('./controller/addDesign');
const SignInController =require('./controller/signIn');
const LoginInController =require('./controller/login');
const LogoutController =require('./controller/logout');
const getDesignController =require('./controller/getdesign');
router.post("/save-In",SignInController);
router.post("/save-design",postTshirtDesignController);
router.post("/login",LoginInController );
router.post("/logout",LogoutController );
router.get("/get=design",getDesignController);
module.exports=router;