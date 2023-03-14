import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

import { _getEmployeeByEmailQuery } from '../../db/queries';

@ValidatorConstraint({ async: true })
export class isEmailAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  validate(email: string, args: ValidationArguments) {
    return !_getEmployeeByEmailQuery(email);
  }
}

export function IsEmailAlreadyExists(
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: isEmailAlreadyExistConstraint,
    });
  };
}
