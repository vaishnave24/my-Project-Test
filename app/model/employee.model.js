const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/dbSqlConnection");

const employee = sequelize.define("employee", {
  emp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  hire_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  manager_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  createdAt: {
    type: Date,
    allowNull: true,
  },
  updatedAt: {
    type: Date,
    allowNull: true,
  },
});

module.exports = { employee };
