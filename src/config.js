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
        url: 'mongodb+srv://xxx:xxx@cluster.xxx.mongodb.net/ecommerce',
        options: {
            serverSelectionTimeoutMS: 5000
        }
    },
    firebase: {
        serviceAccount: {
            "type": "service_account",
            "project_id": "basefirebase-xxx",
            "private_key_id": "xxx",
            "private_key": "-----BEGIN PRIVATE KEY-----\xxx\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-xxx",
            "client_id": "XXX",
            "auth_uri": "https://...h",
            "token_uri": "https://...",
            "auth_provider_x509_cert_url": "https://...",
            "client_x509_cert_url": "https://..."
        },
        url: "https://basefirebase-xxx.firebaseio.com"
    }
}
