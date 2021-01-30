import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '172.17.0.1',
    port: 5432,
    username: 'root',
    password: 'eb132223',
    database: 'tasks',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};