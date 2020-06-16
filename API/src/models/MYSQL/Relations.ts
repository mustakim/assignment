import { Employee } from './employee';
import { Leave } from './leave';

if (!process.env.migrate) {
  Leave.belongsTo(Employee, {
    foreignKey: 'employee_id',
    targetKey: 'id',
    as: 'employee'
  });
}
