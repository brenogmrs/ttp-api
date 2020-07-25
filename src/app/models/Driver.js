const { Model, DataTypes } = require('sequelize');

class Driver extends Model {

    //metodo padrao do sequelize que recebe a coneção e os campos da tabela em questão
    static init(connection){
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize: connection
        });
    }

    static associate(models){
        this.hasOne(models.CarUse, { foreignKey: 'driver_id', as: 'drivers' });
    }

}

module.exports = Driver;