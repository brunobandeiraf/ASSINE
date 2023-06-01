import Sequelize from "sequelize";
import connection from "../config/db.js";

const User = connection.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rg: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        telefone: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        dtnascimento: {
            type: Sequelize.DATE,
            allowNull: false
        },
        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }
);

export default User;

