import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "notion-test",
    password: "notiontest999",
    database: "notion-test",
    synchronize: false,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    subscribers: [],
    migrations: [],
})