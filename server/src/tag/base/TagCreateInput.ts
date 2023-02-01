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
import { CardCreateNestedManyWithoutTagsInput } from "./CardCreateNestedManyWithoutTagsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagCreateInput {
  @ApiProperty({
    required: false,
    type: () => CardCreateNestedManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => CardCreateNestedManyWithoutTagsInput)
  @IsOptional()
  @Field(() => CardCreateNestedManyWithoutTagsInput, {
    nullable: true,
  })
  cards?: CardCreateNestedManyWithoutTagsInput;

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

export { TagCreateInput };
