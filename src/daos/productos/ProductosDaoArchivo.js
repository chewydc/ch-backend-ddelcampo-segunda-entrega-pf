//-------------------------------------------------------------------
// PROYECTO FINAL
// Fecha de Segunda Entrega: 19-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
import ContenedorArchivo from '../../contenedores/ContenedorArchivo.js'
import {default as config} from '../../config.js'

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor(){
        super(`${config.fileSystem.path}/productos.txt`)
    }
}

export default ProductosDaoArchivo