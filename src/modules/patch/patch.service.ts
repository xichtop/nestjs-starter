import { CreatePatchDto } from '@database/dtos/create-patch.dto';
import { IPatch } from '@database/model/patch.model';
import { Patch } from '@database/schemas/patch.schema';
import { ErrorResponseModel } from '@interfaces/response/error-response.model';
import { SuccessResponseModel } from '@interfaces/response/success-response.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatchService {

  constructor(
    @InjectModel(Patch.name) private patchModel: Model<Patch>
  ) {}
  // static async list() {
  //   try {
  //     const patches = await patchSchema.find({});

  //     return new SuccessResponseModel(patches);

  //   } catch (error) {

  //     throw new ErrorResponseModel(null, 'Unexpected error occurred!')
  //   }
  // }

  // async findAll(): Promise<IPatch[]> {
  //   return this.patchModel.find().exec();
  // }

  createPatch(createPatchDto: CreatePatchDto) {
    const newPatch = new this.patchModel(createPatchDto);
    return newPatch.save();
  }
}
