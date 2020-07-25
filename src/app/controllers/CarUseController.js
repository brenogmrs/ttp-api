const CarUse = require('../models/CarUse');
const Car = require('../models/Car');
const Driver = require('../models/Driver');

const { Op } = require("sequelize");


class CarUseController {

    async startCarUsage(request, response){

        try {
            
            const {car_id, driver_id, inicio_uso, motivo} = request.body;

            const car = await Car.findByPk(car_id);

            if(!car){
                return response.json({
                    message: "Não foi possível encontrar o veículo",
                    status: 404,
                });
            }

            const driver = await Driver.findByPk(driver_id);

            if(!driver){
                return response.json({
                    message: "Não é foi possível encontrar o motorista",
                    status: 404,
                });
            }

            const carUsage = await CarUse.findAll({ 
                where: {
                    [Op.and]: [
                        { car_id },
                        { fim_uso: null },
                    ]
                } 
            });

            if(carUsage.length != 0){
                return response.json({
                    message: "Carro ainda em uso",
                    status: 403,
                });
            }

            const driverUsing = await CarUse.findAll({ 
                where: {
                    [Op.and]: [
                        { driver_id },
                        { fim_uso: null }
                    ],
                } 
            });

            if(driverUsing.length != 0){
                return response.json({
                    message: "O motorista ainda está usando outro carro",
                    status: 403,
                });
            }

            const carUse = await CarUse.create({ car_id, driver_id, inicio_uso, motivo });

            return response.json({
                message: "Registro de veículo/motorista criado com sucesso",
                status: 201,
                data: carUse
            });


        } catch (error) {
        
            return response.json({
                message: "Ops, algo deu errado :(",
                status: 500,
                error: error
            });
        }

    }

    async finishCarUsage(request, response){

        try{
            const {driver_id, fim_uso} = request.body;

            const carUse = await CarUse.findAll({ 
                where: {
                    [Op.and]: [
                        { driver_id },
                        { fim_uso: null }
                    ],
                } 
            });

            if(carUse.length == 0){
                return response.json({
                    message: "Registo de veículo/motorista não encontrado",
                    status: 404,
                    data: null
                });
            }

            await CarUse.update(
                {fim_uso},
                {where: {driver_id}}
            );

            return response.json({
                message: "Uso do carro finalizado",
                status: 204,
                data: null
            });


        }catch(error){
            return response.json({
                message: "Ops, algo deu errado :(",
                status: 500,
                error: error
            });
        }
    }

    async listCarUsage(request, response){

        try {

            const carUsageList = await CarUse.findAll({
                include: [
                    {
                        model: Car,
                        required: true
                    },
                    {
                        model: Driver,
                        required: true
                    }
                ]
            });

            return response.json({
                status: 200,
                data: carUsageList
            });

        }catch(error){
            return response.json({
                message: "Ops, algo deu errado :(",
                status: 500,
                error: error
            });
        }
    }

}

module.exports = CarUseController;