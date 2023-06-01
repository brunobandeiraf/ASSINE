import Sequelize from "sequelize";
import connection from "../config/db.js";

const Restaurant = connection.define(
    'Abaixoassinado',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        titulo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        complemento: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
);

export default Restaurant;

