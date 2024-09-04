import { Module } from '@nestjs/common';
import { PatchController } from './patch.controller';
import { PatchService } from './patch.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patch, PatchSchema } from '@database/schemas/patch.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Patch.name, schema: PatchSchema }])],
  controllers: [PatchController],
  providers: [PatchService]
})
export class PatchModule {}
