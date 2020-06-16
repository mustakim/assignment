import { employeeRoutes } from './employeeRoutes';
import { leaveRoutes } from './leaveRoutes';
import { migrationRoutes } from '../libs/migrationRoutes';

export const apiRoutes = [migrationRoutes, leaveRoutes, employeeRoutes];
