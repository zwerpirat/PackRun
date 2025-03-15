import { Model, DataTypes } from "sequelize";
import sequelize from "./model";

interface UserAttributes {
  id: bigint,
  name: string,
  location: string,
  description: string,
  image: string
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: bigint;
  public name!: string;
  public location!: string;
  public description!: string;
  public image!: string;
}

// initializing a new table with sequelize
User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "userdata"
  }
);

export default User; 