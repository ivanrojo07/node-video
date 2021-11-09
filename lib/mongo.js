const { MongoClient } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPass);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrittes=true&w=majority`;

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true
        });
        this.dbName = DB_NAME;
    }

    // singleton
    connect() {
        if(!MongoLib.connection){
            MongoLib.connection = new Promise( (resolve, reject) => {
                this.client.connect(err=>{
                    if(err){
                        reject(err);
                    }
                    else{
                        console.log('Conexión a la DB exitosa');
                        resolve(this.client.db(this.dbName));
                    }
                });
            });
        }
        else {
            return MongoLib.connection;
        }
    }
}

module.exports = MongoLib;