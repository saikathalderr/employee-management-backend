import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Address {
  @Field(() => String)
  line1: string;

  @Field(() => String, { nullable: true })
  line2?: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  zip: string;

  @Field(() => String)
  country: string;
}

@ObjectType()
export class Employee {
  @Field(() => String)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  birthDate: string;

  @Field(() => String)
  profilePicture: string;

  @Field((_type) => Address)
  address: Address;

  @Field((_type) => Employee, { nullable: true })
  supervisor?: Employee;
}
