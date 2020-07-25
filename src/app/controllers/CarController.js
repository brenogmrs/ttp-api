const Car = require('../models/Car');
const { Op } = require("sequelize");

class CarController{

    async store(request, response){
        const { cor, marca, placa } = request.body;

        const car = await Car.create({ cor, marca, placa });

        return response.json({
            message: "Registro de veículo criado com sucesso",
            status: 201,
            data: car
        })

    }

    async one(request, response){
        const { id } = request.params;

        const car = await Car.findByPk(id);

        if(!car){
            return response.json({
                message: "Não é foi possível encontrar o veículo",
                status: 404,
                data: null
            })
        }

        return response.json({
            status: 200,
            data: car
        })

    }
    
    async update(request, response){
        const { id } = request.params;
        const {cor, marca, placa} = request.body;

        let car = await Car.findByPk(id);

        if(!car){
            return response.json({
                message: "Veículo não encontrado",
                status: 404,
                data: null
            });
        }

        await car.update(
            {cor, marca, placa},
            {where: id}
        );

        return response.json({
            message: "As Informações do veículo foram atualizadas",
            status: 204,
            data: null
        });

    }

    async destroy(request, response){
        const { id } = request.params;

        let car = await Car.findByPk(id);

        if(!car){
            return response.json({
                message: "Veículo não encontrado",
                status: 404,
                data: null
            });
        }

        await car.destroy();

        return response.json({
            message: "As Informações do veículo foram excluídas",
            status: 204,
            data: null
        });
    }

    async all(request, response){

        const { marca, cor } = request.query;

        if(marca && cor){

            if(!marca && !cor){
                return response.json({
                    message: "Não é possível filtrar por esses parâmetros",
                    status: 404,
                    data: null
                });
            }

            const cars = await Car.findAll({
                where: {
                    [Op.and]: [
                        { cor },
                        { marca }
                    ]
                }
            });

            return response.json({
                status: 200,
                data: cars
            });

        }

        const cars = await Car.findAll();

        return response.json({
            status: 200,
            data: cars
        });
        
    }
}

module.exports = CarController;