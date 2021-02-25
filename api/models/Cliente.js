const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema(
	{
		nombre		: String,
		direccion	: String,
		celular 	: String,
        correo 		: String,
        contrasena 	: String,
		date : {
			type : Date, 
			default: Date.now
		}
	}
)

const Cliente = mongoose.model('cliente',clienteSchema)

module.exports.Cliente = Cliente