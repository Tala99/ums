import {DataTypes, Sequelize} from 'sequelize';
import { sequelize } from "../connection.js";

const UserModel= sequelize.define('Users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    emailConfirmed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
    profilePic:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    role:{
        type:DataTypes.ENUM('user', 'admin'),
        defaultValue:'user',
        allowNull:false,
    }
},
{
    timestamps:false,
}
);
export default UserModel;