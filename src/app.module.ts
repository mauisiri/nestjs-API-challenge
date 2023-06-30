import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService],
})
export class AppModule {}
