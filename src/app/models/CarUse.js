const { Model, DataTypes } = require('sequelize');

class CarUse extends Model {

    //metodo padrao do sequelize que recebe a coneção e os campos da tabela em questão
    static init(connection){
        super.init({
            inicio_uso: DataTypes.DATE,
            fim_uso: DataTypes.DATE,
            motivo: DataTypes.STRING,
        },{
            sequelize: connection,
            tableName: 'car_use',
        });
    }

    static associate(models){
        this.belongsTo(models.Car, {
            foreignKey: 'car_id'
        });

        this.belongsTo(models.Driver, {
            foreignKey: 'driver_id',
        });
    }

}

module.exports = CarUse;

