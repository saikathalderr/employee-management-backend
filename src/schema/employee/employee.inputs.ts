import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsUrl,
  Length,
} from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateAddressInput {
  @Length(5, 20)
  @Field(() => String)
  line1: string;

  @IsOptional()
  @Length(5, 20)
  @Field(() => String, { nullable: true })
  line2?: string;

  @Length(2, 20)
  @Field(() => String)
  city: string;

  @Length(2, 20)
  @Field(() => String)
  zip: string;

  @Length(2, 20)
  @Field(() => String)
  country: string;
}

@InputType()
export class CreateEmployeeInput {
  @Length(2, 20)
  @Field(() => String)
  firstName: string;

  @IsOptional()
  @Length(2, 20)
  @Field(() => String, { nullable: true })
  middleName?: string;

  @Length(2, 20)
  @Field(() => String)
  lastName: string;

  @IsEmail()
  @Field(() => String)
  email: string;

  @Length(4, 20)
  @Field(() => String)
  phoneNumber: string;

  @IsDateString()
  @Field(() => String)
  birthDate: string;

  @IsUrl()
  @Field(() => String)
  profilePicture: string;

  @IsOptional()
  @Field((_type) => CreateAddressInput, { nullable: true })
  address?: CreateAddressInput;

  @IsOptional()
  @Field(() => String, { nullable: true })
  supervisorId?: string;
}

@InputType()
export class UpdateEmployeeInput {
  @Length(2, 20)
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Length(2, 20)
  @Field(() => String, { nullable: true })
  middleName?: string;

  @Length(2, 20)
  @Field(() => String, { nullable: true })
  lastName?: string;

  @IsEmail()
  @Field(() => String, { nullable: true })
  email?: string;

  @Length(4, 20)
  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @IsDateString()
  @Field(() => String, { nullable: true })
  birthDate?: string;

  @IsUrl()
  @Field(() => String, { nullable: true })
  profilePicture?: string;

  @Field((_type) => CreateAddressInput, { nullable: true })
  address?: CreateAddressInput;

  @Field(() => String, { nullable: true })
  supervisorId?: string;
}
