import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  url: dbConfig.url,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
  synchronize: dbConfig.synchronize,
  ssl: {
    rejectUnauthorized: false,
  },
};
