import express from 'express';
import Usuario from '../Clases/Usuario'
const router = express.Router();


router.post('/', async function(req, res){
    const usuario = new Usuario(req.body);
    usuario.fechaRegistro= new Date();
    await usuario.save();
    res.json(usuario);
});


router.put('/:_id', async function(req, res){
  console.log("ACTUALIZAR UN USUARIO")
  await Usuario.findByIdAndUpdate(req.params, req.body);
  res.json({mensaje: 'Usuario actualizado'});
});


router.get('/', async function(req, res){  
        console.log('MOSTRAR USUARIOS');
        res.json(await Usuario.find());
    });

    router.get('/:_id', async function(req, res){  
        console.log('MOSTRAR UN USUARIO');
        res.json(await Usuario.findById(req.params));
  });

    
    

router.delete('/:_id', async function(req, res){
    console.log("ELIMINAR UN USUARIO")
    await Usuario.findByIdAndDelete(req.params);
    res.json({mensaje: 'Usuario eliminado'});
});

export default router;
