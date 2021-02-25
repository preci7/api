const models = require('../models/Cliente');


exports.list = async(req, res, next) => {
    try {
        const clientes = await models.Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
};

exports.add = async(req, res, next) => {
    try {
        const cliente = await models.Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
};

exports.update = async(req, res,next) => {
        let data = req.body;
        try
        {
            const cliente = await models.Cliente.findOneAndUpdate({_id: data.id}, 
            { $set: {
                nombre      : data.nombre,
                direccion   : data.direccion,
                celular     : data.celular,
                contrasena  : data.contrasena} 
            }, {
                new: true
            }, (err, result) => {

                if (err) {
                    console.log("Errores al actualizar !");
                }            
            });

            res.status(201).json(cliente);
        
        } catch (error) {
            res.status(500).send({
                message: 'Cliente no found'
            });
            next(error);
        }        
}



exports.remove = async(req, res,next) => {
    
        const cliente = await models.Cliente.deleteOne({_id: req.body.id},(err, doc) => {
            if (err) {
                console.log("errores: "+ err);
            }        
        });
        res.status(201).json(" eliminado exitosamente !!");         
}

