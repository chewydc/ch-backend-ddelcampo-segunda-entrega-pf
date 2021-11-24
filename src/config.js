//-------------------------------------------------------------------
// PROYECTO FINAL
// Fecha de Segunda Entrega: 19-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
export default {
    fileSystem: {
        path: 'DB'
    },
    mongodb: {
        //url: 'mongodb://localhost:27017/ecommerce',
        url: 'mongodb+srv://admin:admin@cluster0.e47it.mongodb.net/ecommerce',
        options: {
            serverSelectionTimeoutMS: 5000
        }
    },
    firebase: {
        serviceAccount: {
            xxx
        },
        url: "https://basefirebase-4f09d.firebaseio.com"
    }
}
