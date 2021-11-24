//-------------------------------------------------------------------
// PROYECTO FINAL
// Fecha de Segunda Entrega: 19-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
import ContenedorFirebase from '../../contenedores/ContenedorFirebase.js'

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor(){
        super('productos')
    }
}

export default ProductosDaoFirebase