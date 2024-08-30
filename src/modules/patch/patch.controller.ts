import { Controller, Get } from '@nestjs/common';
import { PatchService } from './patch.service';

@Controller('patch')
export class PatchController {

  constructor(
    private readonly patchService: PatchService
  ) {}

  @Get()
  findAll() {
    return this.patchService.findAll();
  }
}
