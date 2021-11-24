//-------------------------------------------------------------------
// PROYECTO FINAL
// Fecha de Segunda Entrega: 19-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
import ContenedorMongoDB from '../../contenedores/ContenedorMongoDB.js'

class CarritoDaoMongoDB extends ContenedorMongoDB {
    constructor(){
        super('carritos', {
            producto: {type: Array, required: true},
            timestamp: {type: String, required: true},
            id: {type: Number, required: true, unique: true}
        })
    }
}

export default CarritoDaoMongoDB