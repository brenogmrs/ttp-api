const { connection, request, app } = require('./index');

const CarUse = require('../../src/app/models/CarUse');
CarUse.init(connection);

describe('car crud', () =>{
    
    //start
    it('Criar um registro que represente a utilização de um automóvel por um motorista', async ()=> {
        
        const response = await request(app)
            .post('/car_use/start')
            .send({
                car_id: 1, 
                driver_id: 1, 
                inicio_uso: "2020-07-25 12:00:00", 
                motivo: "Levar do ponto a ao ponto b"
            });

        expect(response.status).toBe(200)
    });

    //finish
    it('Finalizar a utilização de um automóvel por um motorista guardando a data de finalização', async ()=> {
        
        const response = await request(app)
            .post('/car_use/finish')
            .send({
                driver_id: 1, 
                fim_uso: "2020-07-25 12:00:00", 
            });

        expect(response.status).toBe(200)
    });

    //list
    it('Listar os registros de utilização cadastrados no sistema com o nome do motorista e as informações do automóvel utilizado', async ()=> {
        
        const response = await request(app)
            .get('/car_use');

        expect(response.status).toBe(200)
    });

});
