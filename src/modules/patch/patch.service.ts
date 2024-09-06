import { CreatePatchDto } from '@database/dtos/create-patch.dto';
import { UpdatePatchDto } from '@database/dtos/update-patch.dto';
import { IPatch } from '@database/model/patch.model';
import { Patch } from '@database/schemas/patch.schema';
import { ErrorResponseModel } from '@interfaces/response/error-response.model';
import { SuccessResponseModel } from '@interfaces/response/success-response.model';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class PatchService {

  constructor(
    @InjectModel(Patch.name) private patchModel: Model<Patch>
  ) {}

  createPatch(createPatchDto: CreatePatchDto) {
    const newPatch = new this.patchModel(createPatchDto);
    return newPatch.save();
  }

  findAll() {
    return this.patchModel.find();
  }

  getPatchByID(id: string) {
    return this.patchModel.findById(id);
  }

  updatePatchByID(id: string, updatePatchDto: UpdatePatchDto) {
    return this.patchModel.findByIdAndUpdate(id, updatePatchDto);
  }

  deletePatchByID(id: string) {
    return this.patchModel.findByIdAndDelete(id);
  }
}
