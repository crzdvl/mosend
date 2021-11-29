import { Seeder } from './seeders/sedeer';
import { SeederModule } from './seeders/seeder.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
    .then((appContext) => {
      const seeder = appContext.get(Seeder);

      seeder
        .seed()
        .then(() => {
          console.info('Seeding complete!');
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}
bootstrap();