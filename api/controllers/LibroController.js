const models = require('../models/Libro');

exports.list = async(req, res, next) => {
    try {
        const libros = await models.Libro.find();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};

exports.add = async(req, res, next) => {
     try {
        const libro = await models.Libro.create(req.body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    } 
};

 exports.update = async(req, res,next) => {
    try
    {
        const libro = await models.Libro.findOneAndUpdate({_id: req.body.id}, 
        {
            $set:{
                caratula:req.body.caratula,
                nombre:req.body.nombre,
                descripcion: req.body.descripcion,
                valorUnitario:req.body.valorUnitario,
                categorias:req.body.categorias} 
        }, {
            new: true
        }, (err, doc) => {
            if (err) {
                console.log("Errores al actualizar !");
            }                 
        });

        res.status(200).json(libro);

    } catch (error) {
        res.status(500).send({
            message: 'Cliente no encontrado'
        });
        next(error);
    }        
}
 


exports.remove = async(req, res,next) => {

    const libro = await models.Libro.deleteOne({_id: req.body.id},(err, doc) => {
        if (err) {
            console.log("errores: "+ err);
        }                    
    });
    res.status(202).json(" eliminado exitosamente !!");         
}
