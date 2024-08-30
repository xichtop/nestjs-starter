import { Module } from '@nestjs/common';
import { PatchController } from './patch.controller';
import { PatchService } from './patch.service';
import { MongooseModule } from '@nestjs/mongoose';
import patchSchema from '@database/schema/patch.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Patch', schema: patchSchema }])],
  controllers: [PatchController],
  providers: [PatchService]
})
export class PatchModule {}
