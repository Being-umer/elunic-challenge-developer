module.exports = {
    type: 'mysql',
    host: process.env.APP_DB_HOST || 'db',
    port: 3306,
    username: process.env.APP_DB_USER || 'app',
    password: process.env.APP_DB_PASSWORD || 'app',
    database: process.env.APP_DB_NAME || 'app',
    entities: ['src/app/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
    cli: {
        migrationsDir: 'src/migrations',
    },
}