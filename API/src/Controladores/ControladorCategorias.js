import express from 'express';
const router = express.Router();
import Categoria from '../Clases/Categoria'



router.post('/', async function(req, res){
    const categoria = new Categoria(req.body);
    await categoria.save();
    res.json(usuario);
});


router.get('/', async function(req, res){
    console.log('MOSTRAR CATEGORIA');
        res.json(await Categoria.find());
})

export default router;