import connection from './config/db.js';
import Restaurant from './models/Abaixoassinado.js';
import User from './models/User.js';
import Review from './models/Assinatura.js';

const migrate = async () => {
    try {
        const result = await connection.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

migrate();