import * as DataTypes from 'sequelize';

import { mysqlConnect } from '../../libs';
import { Leave } from './leave';

export const Employee: any = mysqlConnect.define(
  'employees',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    joining_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    tableName: 'employees',
    timestamps: true,
    underscored: true,
    paranoid: true,

    defaultScope: {
      where: { deleted_at: null },
      attributes: { exclude: ['deleted_at'] }
    },
    scopes: {
      withAll: { attributes: {} },
      withoutDeleted: { where: { deleted_at: null } },
      withDeleted: {
        attributes: {}
      }
    }
  }
);
