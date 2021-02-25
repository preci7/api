const models = require('../models/Venta');


exports.list = async(req, res, next) => {
    try {
        const ventas = await models.Venta.find()
        res.status(200).json(ventas); 
        
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};

exports.add = async(req, res, next) => {
    try {
        const venta = await models.Venta.create(req.body);
        res.status(201).json(venta);
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};


exports.update = async(req, res,next) => {
    console.log(req.body)
    try
    {
        const venta = await models.Venta.findOneAndUpdate({_id: req.body.id}, {$set:{total:req.body.total,detalle:req.body.detalle} }, {new: true}, (err, doc) => {
            if (err) {
                console.log("Errores al actualizar !");
            }        
            console.log(doc);            
        });
        res.status(201).json(venta);
    } catch (error) {
        res.status(500).send({
            message: 'Venta no found'
        });
        next(error);
    }        
}


exports.delete = async(req, res,next) => {
    
    const cliente = await models.Venta.deleteOne({_id: req.body.id},(err, doc) => {
        if (err) {
            console.log("errores: "+ err);
        }        
        console.log("Venta Eliminada ");                    
    });
    res.status(201).json(" Venta Eliminada !!");         
}


exports.findById = async(req, res, next) => {
    console.log(req.params)
    try {
        const venta = await models.Venta.findOne({ _id: req.body.id })
        if(venta ==null){
            res.status(200).json('No hay datos');
        }else{
            res.status(200).json(venta);
        }
                 
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
};