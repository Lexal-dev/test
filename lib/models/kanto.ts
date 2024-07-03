import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeInstance from '../sequelize';

interface KantoAttributes {
    id: number;
    name: string;
    picture: string;
    types: string[];
    description: string;
    hp: number;
    pc: number;
}

interface KantoCreationAttributes extends Optional<KantoAttributes, 'id'> {}

class Kanto extends Model<KantoAttributes, KantoCreationAttributes> implements KantoAttributes {
    public id!: number;
    public name!: string;
    public picture!: string;
    public types!: string[];
    public description!: string;
    public hp!: number;
    public pc!: number;
}

Kanto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        types: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pc: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeInstance,
        tableName: 'Kantos',
        timestamps: false, // Désactive les timestamps automatiques
    }
);

export default Kanto;