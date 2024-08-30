import { IPatch } from '@database/model/patch.model';
import patchSchema from '@database/schema/patch.schema';
import { ErrorResponseModel } from '@interfaces/response/error-response.model';
import { SuccessResponseModel } from '@interfaces/response/success-response.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatchService {

  constructor(
    @InjectModel('Patch') private patchModel: Model<IPatch>
  ) {}
  static async list() {
    try {
      const patches = await patchSchema.find({});

      return new SuccessResponseModel(patches);

    } catch (error) {

      throw new ErrorResponseModel(null, 'Unexpected error occurred!')
    }
  }

  async findAll(): Promise<IPatch[]> {
    return this.patchModel.find().exec();
  }
}
