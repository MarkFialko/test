import {Sequelize} from 'sequelize-typescript'

import {User} from "./models/User.model";

const connection = new Sequelize(
    'YLDcvJaf',
    'UYQtyQ',
    'iRfDMkDpqiHimkVX',
    {
        dialect: 'mysql',
        host: '81.31.247.100',
        port: 3306,
        logging: false,
        models: [User],
        dialectModule: require('mysql2')
    })

export default connection
