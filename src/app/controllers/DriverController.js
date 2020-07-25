const Driver = require('../models/Driver');

class DriverController {
    
    async store(request, response){
        const { nome } = request.body;

        const driver = await Driver.create({ nome });
        return response.json({
            message: "Registro de motorista criado com sucesso",
            status: 201,
            data: driver
        })

    }

    async one(request, response){
        const { id } = request.params;

        const driver = await Driver.findByPk(id);

        if(!driver){
            return response.json({
                message: "Motorista não encontrado",
                status: 404,
                data: null
            })
        }

        return response.json({
            status: 200,
            data: driver
        })

    }

    async update(request, response){
        const { id } = request.params;
        const { nome } = request.body;

        let driver = await Driver.findByPk(id);

        if(!driver){
            return response.json({
                message: "Motorista não encontrado",
                status: 404,
                data: null
            });
        }

        await driver.update(
            {nome},
            {where: id}
        );

        return response.json({
            message: "As Informações do motorista foram atualizadas",
            status: 204,
            data: null
        });

    }

    async destroy(request, response){
        const { id } = request.params;

        let driver = await Driver.findByPk(id);

        if(!driver){
            return response.json({
                message: "Motorista não encontrado",
                status: 404,
                data: null
            });
        }

        await driver.destroy();

        return response.json({
            message: "As Informações do motorista foram excluídas",
            status: 204,
            data: null
        });
    }

    async all(request, response){

        const { nome } = request.query;

        if(nome){

            if(!nome){
                return response.json({
                    message: "Não é possível filtrar por esse parâmetro",
                    status: 404,
                    data: null
                })
            }

            const drivers = await Driver.findAll({
                where: { nome }
            })

            return response.json({
                status: 200,
                data: drivers
            })
        }

        const drivers = await Driver.findAll();

        return response.json({
            status: 200,
            data: drivers
        })
        
    }
}

module.exports = DriverController;