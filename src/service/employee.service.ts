import {
  _createEmployeeQuery,
  _deleteEmployeeByIdQuery,
  _getAllEmployeesQuery,
  _getEmployeeByIdQuery,
  _updateEmployeeByIdQuery,
} from '../db/queries';
import { IEmployee } from '../interface/employee.interface';
import {
  CreateEmployeeInput,
  UpdateEmployeeInput,
} from '../schema/employee/employee.inputs';

class EmployeeService {
  async createEmployee(
    input: CreateEmployeeInput
  ): Promise<IEmployee> {
    return _createEmployeeQuery({ employee: input });
  }
  async fetchEmployeeById(
    id: string
  ): Promise<IEmployee | undefined> {
    return _getEmployeeByIdQuery(id);
  }

  async fetchAllEmployees(): Promise<IEmployee[]> {
    return _getAllEmployeesQuery();
  }

  async deleteEmployeeById(id: string): Promise<IEmployee> {
    return _deleteEmployeeByIdQuery(id);
  }

  async updateEmployeeById({
    id,
    input,
  }: {
    id: string;
    input: UpdateEmployeeInput;
  }): Promise<IEmployee> {
    return _updateEmployeeByIdQuery({ id, employee: input });
  }
}

export default EmployeeService;
