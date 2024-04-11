import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeormConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_NAME,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      extra: {
        max: 100,
      },
      nameingStategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions;
  }
}