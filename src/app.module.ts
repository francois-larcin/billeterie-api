import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.BD_PASSWORD,
      options: {
        encrypt: true,
      },
      logging: true,
      synchronize: true,
      entities: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
