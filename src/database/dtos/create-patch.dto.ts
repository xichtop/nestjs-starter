import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreatePatchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description?: string;

  @IsString()
  version?: string;

  @IsNotEmpty()
  @IsString()
  path: string;

  @IsNotEmpty()
  @IsString()
  env: string;

  @IsNotEmpty()
  @IsString()
  software: string;

  @IsString()
  author?: string;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}