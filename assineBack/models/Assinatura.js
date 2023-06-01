import Sequelize from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";
import Restaurant from "./Abaixoassinado.js";

const Assinatura = connection.define(
    'assinatura',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        idAbaixoassinado: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "abaixoassinados",
                key: "id"
            }
        },
        dttimee: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
);

Assinatura.belongsTo(Assinatura, {
    foreignKey: "idAbaixoassinado"
});

Assinatura.belongsTo(User, {
    foreignKey: "idUser"
});

export default Assinatura;
