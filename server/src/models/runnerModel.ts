import { Model, DataTypes } from "sequelize";
import sequelize from "./model";

interface RunnerAttributes {
  id: bigint,
  latitude: number,
  longitude: number, //how will the location look like from frontend? 
}

class Runner extends Model<RunnerAttributes> implements RunnerAttributes {
  public id!: bigint;
  public latitude!: number;
  public longitude!: number;
}

// initializing a new table with sequelize
Runner.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    latitude: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "runner"
  }
);

export default Runner; 