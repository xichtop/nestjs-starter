import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Patch {
  @Prop({required: true})
  name: string;

  @Prop({required: false})
  description?: string;

  @Prop({required: false})
  version?: string;

  @Prop({required: true})
  path: string;

  @Prop({required: true})
  env: string;

  @Prop({required: true})
  software: string;

  @Prop({required: false})
  author?: string;

  @Prop({required: false})
  createdAt?: Date;

  @Prop({required: false})
  updatedAt?: Date;
}

export const PatchSchema = SchemaFactory.createForClass(Patch);
