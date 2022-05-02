import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

export default {
  type: 'postgres',
  host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
  port: 5432,
  cache: false,
  username: 'pzmnvrjricvrwc',
  password: '8e2e597349ce9ae70bb976edaaf6093cb835e1686564cb56397787f487e8b7da',
  database: 'd3lcll1lg2diob',
  synchronize: false,
  logging: false,
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
