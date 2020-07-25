const { Model, DataTypes } = require('sequelize');

class CarUse extends Model {

    //metodo padrao do sequelize que recebe a coneção e os campos da tabela em questão
    static init(connection){
        super.init({
            cor: DataTypes.STRING,
            inicio_uso: DataTypes.DATE,
            fim_uso: DataTypes.DATE,
            motivo_uso: DataTypes.STRING,

        },{
            sequelize: connection
        });
    }

    static associate(models){
        this.belongsTo(models.Car, {
            foreignKey: 'car_id',
            as: 'car'
        });

        this.belongsTo(models.Driver, {
            foreignKey: 'driver_id',
            as: 'driver'
        });
    }

}

module.exports = CarUse;

