import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { IEmployee } from '../interface/employee.interface';
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
  getEmployee(@Arg('id') id: string): Promise<IEmployee | undefined> {
    return this.employeeService.fetchEmployeeById(id);
  }

  @Query(() => [Employee])
  getAllEmployees(): Promise<IEmployee[]> {
    return this.employeeService.fetchAllEmployees();
  }

  @Mutation(() => Employee)
  createEmployee(
    @Arg('input') input: CreateEmployeeInput
  ): Promise<IEmployee> {
    return this.employeeService.createEmployee(input);
  }

  @Mutation(() => Employee)
  deleteEmployee(@Arg('id') id: string): Promise<IEmployee> {
    return this.employeeService.deleteEmployeeById(id);
  }

  @Mutation(() => Employee)
  updateEmployee(
    @Arg('id') id: string,
    @Arg('input') input: UpdateEmployeeInput
  ): Promise<IEmployee> {
    return this.employeeService.updateEmployeeById({ id, input });
  }
}
