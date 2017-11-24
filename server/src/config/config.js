module.exports = {
    port: 8082,
    db: {
        database:process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'sagar',
        password: process.env.DB_PASS || 'sagar',
        options : {
            dialect:  process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}