import { registerAs } from '@nestjs/config';

export default registerAs('application', () => ({
  port: process.env['APP_PORT'],
  db_host: process.env['DB_HOST'],
  db_password: process.env['DB_PASSWORD'],
  db_database: process.env['DB_DATABASE'],
  db_username: process.env['DB_USERNAME'],
  redis_host: process.env['REDIS_HOST'],
  redis_port: process.env['REDIS_PORT'],
  jwt_secret: process.env['JWT_SECRET'],
  jwt_expires_in: process.env['JWT_EXPIRES_IN'],
  jwt_audience: process.env['JWT_AUDIENCE'],
  jwt_not_before: process.env['JWT_NOT_BEFORE'],
  jwt_issuer: process.env['JWT_ISSUER'],
  jwt_subject: process.env['JWT_SUBJECT'],
}));
