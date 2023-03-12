import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import {
  CreateEmployeeInput,
  UpdateEmployeeInput,
} from '../schema/employee/employee.inputs';
import { Employee } from '../schema/employee/employee.schema';
import EmployeeService from '../service/employee.service';

@Resolver()
export default class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {
    this.employeeService = new EmployeeService();
  }

  @Query(() => Employee)
  getEmployee(@Arg('id') id: string) {
    return this.employeeService.fetchEmployeeById(id);
  }

  @Query(() => [Employee])
  getAllEmployees() {
    return this.employeeService.fetchAllEmployees();
  }

  @Mutation(() => Employee)
  createEmployee(@Arg('input') input: CreateEmployeeInput) {
    return this.employeeService.createEmployee(input);
  }

  @Mutation(() => Employee)
  deleteEmployee(@Arg('id') id: string) {
    return this.employeeService.deleteEmployeeById(id);
  }

  @Mutation(() => Employee)
  updateEmployee(
    @Arg('id') id: string,
    @Arg('input') input: UpdateEmployeeInput
  ) {
    return this.employeeService.updateEmployeeById({ id, input });
  }
}
