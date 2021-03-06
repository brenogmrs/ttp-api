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

    static associate(models){
        this.hasOne(models.CarUse, { foreignKey: 'car_id', as: 'cars' });
    }

}

module.exports = Car;

