import * as DataTypes from 'sequelize';
import { mysqlConnect } from '../../libs';

export const Leave: any = mysqlConnect.define(
  'leaves',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },

    leave_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    end_date: {
      type: DataTypes.DATE,
      allowNull: false
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
    tableName: 'leaves',
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
