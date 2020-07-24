const { Model, DataTypes } = require('sequelize');

class Car extends Model {

    //metodo padrao do sequelize que recebe a coneção e os campos da tabela em questão
    static init(connection){
        super.init({
            cor: DataTypes.STRING,
            marca: DataTypes.STRING,
            placa: DataTypes.STRING
        },{
            sequelize: connection
        });
    }

}

module.exports = Car;

