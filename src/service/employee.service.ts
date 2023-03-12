import {
  _createEmployeeQuery,
  _deleteEmployeeByIdQuery,
  _getAllEmployeesQuery,
  _getEmployeeByIdQuery,
  _updateEmployeeByIdQuery,
} from '../db/queries';
import {
  CreateEmployeeInput,
  UpdateEmployeeInput,
} from '../schema/employee/employee.inputs';

class EmployeeService {
  async createEmployee(input: CreateEmployeeInput) {
    return _createEmployeeQuery({ employee: input });
  }
  async fetchEmployeeById(id: string) {
    return _getEmployeeByIdQuery(id);
  }

  async fetchAllEmployees() {
    return _getAllEmployeesQuery();
  }

  async deleteEmployeeById(id: string) {
    return _deleteEmployeeByIdQuery(id);
  }

  async updateEmployeeById({
    id,
    input,
  }: {
    id: string;
    input: UpdateEmployeeInput;
  }) {
    return _updateEmployeeByIdQuery({ id, input });
  }
}

export default EmployeeService;
