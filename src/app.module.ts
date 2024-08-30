import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PatchModule } from './modules/patch/patch.module';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from '@database/mongodb';

@Module({
  imports: [
    AuthModule,
    PatchModule,
    MongooseModule.forRoot(connectionString)
  ],
})
export class AppModule {}
