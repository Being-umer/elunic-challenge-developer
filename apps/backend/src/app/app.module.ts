import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserMessage} from './entities/user-message.entity';
import { UserMessageController } from './controllers/user-message.controller';
import { UserMessageService } from './services/user-message.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'app',
      password: 'app',
      database: 'app',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TypeOrmModule.forFeature([UserMessage]),
  ],
  controllers: [AppController,UserMessageController],
  providers: [AppService,UserMessageService],
})
export class AppModule {}
