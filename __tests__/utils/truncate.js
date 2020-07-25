const { sequelize } = require('../../src/app/models');

module.exports = () =>{
    Object.keys(sequelize.models).map(key =>{
        return Promises.all(
            sequelize.models[key].destroy({
                truncate: true,
                force: true
            })
        )
    });
}
