import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app.config.module';
import { DbProviderModule } from './providers/db.provider';
import { RedisCacheModule } from './modules/redisCache/redisCache.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AppConfigModule, DbProviderModule, UserModule, RedisCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
