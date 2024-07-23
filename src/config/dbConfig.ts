import {Sequelize} from "sequelize";

const sequelize = new Sequelize("NodeJsDB","postgres", "Passw0rd",
    {host: "localhost", dialect: "postgres"}
)

export default  sequelize;