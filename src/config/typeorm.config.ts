import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  url: 'postgres://szxmyjgxolnyve:4e7b3bf62713cec61bd0246e0e3bb4e5144c34e5745eea0d800f3aee33c2d724@ec2-54-159-175-38.compute-1.amazonaws.com:5432/dd0ptd8vdtj192',
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
  synchronize: dbConfig.synchronize,
  // connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};
