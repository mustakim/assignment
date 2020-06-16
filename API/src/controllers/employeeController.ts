import { Helper } from '../libs';
import { BaseController } from '../libs/baseController';
import { Employee as Model } from '../models/MYSQL';

const controllerName = Helper.getFileName(__filename, __dirname);

export const employeeController = BaseController(controllerName, Model, {
});
