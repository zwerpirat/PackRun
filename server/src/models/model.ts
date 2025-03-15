import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "bob",
  password: "postgres124",
  database: "packRunDB",
});

export default sequelize; 