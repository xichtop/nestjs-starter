import { IsOptional, IsString } from "class-validator";

export class UpdatePatchDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  version?: string;

  @IsString()
  @IsOptional()
  path?: string;

  @IsString()
  @IsOptional()
  env?: string;

  @IsString()
  @IsOptional()
  software?: string;

  @IsString()
  @IsOptional()
  author?: string;
}