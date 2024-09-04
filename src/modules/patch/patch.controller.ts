import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatchService } from './patch.service';
import { CreatePatchDto } from '@database/dtos/create-patch.dto';

@Controller('patch')
export class PatchController {

  constructor(
    private readonly patchService: PatchService
  ) {}

  // @Get()
  // findAll() {
  //   return this.patchService.findAll();
  // }

  @Post()
  createPatch(@Body() createPatchDto: CreatePatchDto) {
    return this.patchService.createPatch(createPatchDto);
  }
}
