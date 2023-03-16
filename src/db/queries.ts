import { v4 as uuidv4 } from 'uuid';

import {
  NO_EMPLOYEE_FOUND_ERROR,
  NO_EMPLOYEE_FOUND_TO_DELETE_ERROR,
  NO_EMPLOYEE_FOUND_TO_UPDATE_ERROR,
} from '../constants';
import { throwError } from '../helpers';
import { IEmployee } from '../interface/employee.interface';
import {
  CreateEmployeeInput,
  UpdateEmployeeInput,
} from '../schema/employee/employee.inputs';
import { employees as db, employees } from './store';

export const _getEmployeeByEmailQuery = (
  email: string
): IEmployee | undefined => {
  return db.find((employee: IEmployee) => employee.email === email);
};

export const _getEmployeeByPhoneNumberQuery = (
  phoneNumber: string
): IEmployee | undefined => {
  return db.find(
    (employee: IEmployee) => employee.phoneNumber === phoneNumber
  );
};

export const _getEmployeeByIdQuery = (
  id: string
): IEmployee | undefined => {
  const employee: IEmployee | undefined = db.find(
    (employee: IEmployee) => employee.id === id
  );
  if (!employee) throwError(NO_EMPLOYEE_FOUND_ERROR + id);
  return employee;
};

export const _createEmployeeQuery = ({
  employee,
}: {
  employee: CreateEmployeeInput;
}): IEmployee => {
  const { supervisorId } = employee;
  let newEmployee: IEmployee = { ...employee, id: uuidv4() };
  if (supervisorId) {
    newEmployee.supervisor = _getEmployeeByIdQuery(supervisorId);
    delete employee.supervisorId;
  }
  db.push(newEmployee);
  return newEmployee;
};

export const _getAllEmployeesQuery = (): IEmployee[] => {
  return employees;
};

export const _deleteEmployeeByIdQuery = (id: string): IEmployee => {
  const findIdx: number = employees.findIndex((e) => e.id === id);
  if (findIdx === -1)
    throwError(NO_EMPLOYEE_FOUND_TO_DELETE_ERROR + id);

  const deletedEmployee: IEmployee = employees[findIdx];
  employees.splice(findIdx, 1);

  return deletedEmployee;
};

export const _updateEmployeeByIdQuery = ({
  id,
  employee,
}: {
  id: string;
  employee: UpdateEmployeeInput;
}): IEmployee => {
  const findIdx: number = employees.findIndex((e) => e.id === id);
  if (findIdx === -1)
    throwError(NO_EMPLOYEE_FOUND_TO_UPDATE_ERROR + id);

  const { supervisorId } = employee;

  let updateEmployee: IEmployee = employees[findIdx];

  updateEmployee.supervisor = supervisorId
    ? _getEmployeeByIdQuery(supervisorId)
    : undefined;

  employees[findIdx] = <IEmployee>{
    ...updateEmployee,
    ...employee,
    id,
  };

  return employees[findIdx];
};
