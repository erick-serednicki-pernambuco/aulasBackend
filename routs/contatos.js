const express =require('express');

const router = express.Router();



contatos = [
    {
    "id": 1,
    "nome" : "p1",
    "numero" : 30
},
{
    "id": 2,
    "nome" : "p2",
    "numero" : 40
},
{
    "id": 3,
    "nome" : "p3",
    "numero" : 50
},
]

router.get('/', function(req,res,next){
    res.json(contatos);
});

router.get('/:id', function(req,res,next){
    const contato = contatos.find(item => item.id === Number(req.params.id))
    if(!contato){
        res.status(404).json("Não encontrado");
    }
    res.json(contato);
});

router.post('/', function(req,res,next){
    const novoContato = {
        id: contatos.length +1,
        nome: req.body.nome,
        numero: req.body.numero
    };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
});

<<<<<<< Updated upstream
<<<<<<< Updated upstream
outer.put('/:id', function(req,res,next){
=======
router.put('/:id', function(req,res,next){
>>>>>>> Stashed changes
=======
router.put('/:id', function(req,res,next){
>>>>>>> Stashed changes
    const contatoLocalizado = contatos.find(contato => contato.id === Number(req.params.id));
    if(!contatoLocalizado){
        return res.status(404).json("Não Localizado");
    }

    contatoLocalizado.nome = req.body.nome;
    contatoLocalizado.numero = req.body.numero;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
    return res.json(contatoLocalizado)
    res.status(204).end();    
});

router.delete('/:id', function(req,res,next){
    const localizado = contatos.findIndex(contato => contato.id === Number(req.params.id));
    if(!localizado < 0){
        return res.status(404).json("Não Localizado");
    }
    contatos.splice(localizado, 1);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    res.status(204).end();    
});


module.exports = router;