import { Body, Controller, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { PatchService } from './patch.service';
import { CreatePatchDto } from '@database/dtos/create-patch.dto';
import mongoose from 'mongoose';
import { UpdatePatchDto } from '@database/dtos/update-patch.dto';

@Controller('patch')
export class PatchController {

  constructor(
    private readonly patchService: PatchService
  ) {}

  @Get()
  findAll() {
    return this.patchService.findAll();
  }

  @Post()
  create(@Body() createPatchDto: CreatePatchDto) {
    return this.patchService.createPatch(createPatchDto);
  }

  @Get(':id')
  async getByID(@Param('id') id: string) {
    const isValidID = mongoose.Types.ObjectId.isValid(id);
    if (!isValidID) {
      throw new HttpException('Invalid ID', 404);
    }

    const findPatch = await this.patchService.getPatchByID(id);
    if (!findPatch) {
      throw new HttpException('Patch not found', 404);
    }

    return findPatch;
  }

  @Patch(':id')
  async updatePatch(@Param('id') id: string, @Body() updatePatchDto: UpdatePatchDto) {
    const isValidID = mongoose.Types.ObjectId.isValid(id);
    if (!isValidID) {
      throw new HttpException('Invalid ID', 404);
    }

    const findPatch = await this.patchService.getPatchByID(id);
    if (!findPatch) {
      throw new HttpException('Patch not found', 404);
    }

    return this.patchService.patchPatchByID(id, updatePatchDto);
  }

}
