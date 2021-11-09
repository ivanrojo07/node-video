require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS || '*',
    dbUser: process.env.DB_USER || 'user',
    dbPass: process.env.DB_PASSWORD || '1234567890',
    dbHost: process.env.DB_HOST || 'puerta.db.com',
    dbName: process.env.DB_NAME || 'video'
}

module.exports = { config }