const express=require('express');
const router=express.Router();

router.get('/signin',(req,res)=>{
    res.render('auth/signin');
});
router.get('/signup',(req,res)=>{
    res.render('auth/signup');
});
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/signin');
  });

module.exports=router;