import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

import {
  _getEmployeeByEmailQuery,
  _getEmployeeByPhoneNumberQuery,
} from '../../db/queries';

@ValidatorConstraint({ async: true })
export class isPhoneNumberAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  validate(phoneNumber: string, args: ValidationArguments) {
    return !_getEmployeeByPhoneNumberQuery(phoneNumber);
  }
}

export function IsPhoneNumberAlreadyExists(
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: isPhoneNumberAlreadyExistConstraint,
    });
  };
}
