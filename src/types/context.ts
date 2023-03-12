import { Request, Response } from 'express';

import { Employee } from '../schema/employee/employee.schema';

interface Context {
  req: Request;
  res: Response;
  Employee: Employee | null;
}

export default Context;
