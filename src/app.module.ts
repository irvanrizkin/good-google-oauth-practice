import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategyModule } from './strategy/google.strategy.module';

@Module({
  imports: [ConfigModule.forRoot(), GoogleStrategyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
