import { Employee } from './../models/MYSQL/employee';
import { Helper } from '../libs';
import { Leave as Model } from '../models/MYSQL';
import { BaseController } from '../libs/baseController';

const controllerName = Helper.getFileName(__filename, __dirname);

export const leaveController = BaseController(controllerName, Model, {
    index: {
        include: [
            {
                model: Employee,
                as: 'employee',
                required: false
            }
        ]
    },
    show: {
        include: [
            {
                model: Employee,
                as: 'employee',
                required: false
            }
        ]
    }
});
