/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CardUpdateManyWithoutTagsInput } from "./CardUpdateManyWithoutTagsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CardUpdateManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => CardUpdateManyWithoutTagsInput)
  @IsOptional()
  @Field(() => CardUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  cards?: CardUpdateManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { TagUpdateInput };
