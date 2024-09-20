import {Column, Model, Table} from 'sequelize-typescript'
import {DataTypes} from "sequelize";

@Table({
    tableName: 'users',
    timestamps: false,
})
export class User extends Model {
    @Column({
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataTypes.STRING
    })
    full_name!: string;

    @Column({
        type: DataTypes.STRING
    })
    role!: string;

    @Column({
        type: DataTypes.INTEGER
    })
    efficiency!: number;
}


