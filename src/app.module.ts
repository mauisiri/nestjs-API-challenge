import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { DatabaseModule } from './database/database.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'my-weak-password',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  })],
  providers: [UsersService],
})
export class AppModule {}
