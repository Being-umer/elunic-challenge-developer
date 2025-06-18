import { DataSource } from "typeorm";
import { UserMessage } from "./src/app/entities/user-message.entity";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.APP_DB_USER || 'app',
    password: process.env.APP_DB_PASSWORD || 'app',
    database: process.env.APP_DB_NAME || 'app',
    entities: ['src/app/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
});