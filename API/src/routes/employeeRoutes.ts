import * as express from 'express';
import {employeeController as controller } from '../controllers';
import { Helper } from '../libs';

const Routes = express.Router();
const routeName = 'employees';

export const employeeRoutes = Routes;

Routes.use([`/${routeName}`], (req, res, next) => {

    Helper.logger.info(`a ${req.method} request in ${routeName} route.`);
    next();

});

Helper.restApiPlaceHolder(Routes, controller, routeName);
