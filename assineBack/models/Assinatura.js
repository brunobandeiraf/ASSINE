import Sequelize from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";
import Restaurant from "./Abaixoassinado.js";

const Review = connection.define(
    'review',
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
                model: "restaurants",
                key: "id"
            }
        },
        dttimee: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
);

Review.belongsTo(Restaurant, {
    foreignKey: "idRestaurant"
});

Review.belongsTo(User, {
    foreignKey: "idUser"
});

export default Review;