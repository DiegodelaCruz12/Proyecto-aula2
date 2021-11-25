const express=require('express');
const router=express.Router();

const pool=require('../database');
const{isLoggedIn}=require('../lib/auth');





//Profesor
router.get('/agregarprofesor',(req,res)=>{
    res.render('links/Profesor/agregarprofesor');

});
router.post('/agregarprofesor',async(req,res)=>{
 
    const valor=1;
    const{usuario,contraseña,nombre,apm,app,fechadenacimiento,email}=req.body;
    const newUser={
        usuario,
        contraseña,
        nombre,
        apm,
        app,
        fechadenacimiento,
        email,
        valor
    };
    const rows=await pool.query('SELECT * FROM usuarios WHERE usuario=?',[usuario]);
    if(!rows){
        await pool.query('INSERT INTO usuarios SET ?',[newUser],
        (err) => {
            if(err){
                req.flash( 'message', 'hubo un error al ingresar el usuario');
                
                }
           });   
    }else{
        console.log("error")
        req.flash( 'message', 'hubo un error al ingresar el usuario');
                
    }
    res.render('links/Usuarios/gestionprofesor');
});

router.get('/gestionprofesor',async(req,res)=>{
    valor=1
    const usuarios=await pool.query('SELECT * FROM usuarios WHERE valor=?',[valor]);
    console.log(usuarios);
    res.render('links/Profesor/gestionprofesor',{usuarios}); 
});
//Usuario
router.post('/agregarusuario',async(req,res)=>{
    const valor=2;
    const{usuario,contraseña,nombre,apm,app,fechadenacimiento,email}=req.body;
    const newUser={
        usuario,
        contraseña,
        nombre,
        apm,
        app,
        fechadenacimiento,
        email,
        valor
    };
    const rows=await pool.query('SELECT * FROM usuarios WHERE usuario=?',[usuario]);
    if(!rows){
        await pool.query('INSERT INTO usuarios SET ?',[newUser],
        (err) => {
            if(err){
                req.flash( 'message', 'hubo un error al ingresar el usuario');
                
                }
           });   
    }else{
        console.log("error")
        req.flash( 'message', 'hubo un error al ingresar el usuario');
        console.log()           
    }
    
    res.render('links/Profesor/gestionusuarios');

});


router.get('/gestionprofesor',async(req,res)=>{
    valor=1
    const profesores=await pool.query('SELECT * FROM usuarios WHERE valor=?',[valor]);
    usuarios=profesores
    res.render('links/Profesor/gestionprofesor',profesores);
});


router.get('/modificarprofesor',(req,res)=>{
    res.render('links/Admin/modificarprofesor');
});



//Usuarios
router.get('/agregarusuario',(req,res)=>{
    res.render('links/Usuario/agregarusuario');
});

router.post('/agregarprofesor',async(req,res)=>{
 
    const valor=1;
    const{usuario,contraseña,nombre,apm,app,fechadenacimiento,email}=req.body;
    const newUser={
        usuario,
        contraseña,
        nombre,
        apm,
        app,
        fechadenacimiento,
        email,
        valor
    };
    console.log(newUser)
    await pool.query('INSERT INTO usuarios SET ?',[newUser]);    
    if(err){
        console.log("aqui esta")
    }
});

router.get('/gestionusuario',(req,res)=>{
    res.render('links/Usuario/gestionusuario');
});
router.get('/modificarusuario',(req,res)=>{
    res.render('links/Usuario/modificarusuario');
});

//Administrador
router.get('/profile',(req,res)=>{
    res.render('links/Admin/profile');
});

module.exports=router;