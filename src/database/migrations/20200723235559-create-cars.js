'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {

		await queryInterface.createTable('cars', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			cor:{
				type: Sequelize.STRING,
				allowNull: false
			},
			marca:{
				type: Sequelize.STRING,
				allowNull: false
			},
			placa:{
				type: Sequelize.STRING,
				allowNull: false
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

		await queryInterface.dropTable('cars');
	}
};
