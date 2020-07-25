'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('car_use', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			driver_id:{
				type: Sequelize.INTEGER,
				allowNull: false,
                references: { model: 'drivers', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            car_id:{
				type: Sequelize.INTEGER,
				allowNull: false,
                references: { model: 'cars', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            inicio_uso:{
				type: Sequelize.DATE,
				allowNull: false,
            },
            fim_uso:{
				type: Sequelize.DATE,
				allowNull: false,
			},
			motivo:{
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}, 
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('car_use');

	}
};
