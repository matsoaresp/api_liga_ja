import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonesModule } from 'src/phones/phones.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PhonesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'liga_ja',
      password: '123456',
      autoLoadEntities: true,
      synchronize: true, 
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
