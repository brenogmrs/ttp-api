const { connection, request, app } = require('./index');

const Car = require('../../src/app/models/Car');
Car.init(connection);

describe('car crud', () =>{
    
    //create
    it('Deve Cadastrar um novo automóvel', async ()=> {
        
        const response = await request(app)
            .post('/cars')
            .send({
                cor: 'preto',
                marca: 'volvo',
                placa: 'aaa-1234'
            });

        expect(response.status).toBe(200)
    });

    //update
    it('Deve Atualizar um automóvel cadastrado', async ()=> {
        
        const response = await request(app)
            .put('/cars/1')
            .send({
                cor: 'branco',
                marca: 'bmw',
                placa: 'aaa-1234'
            });

        expect(response.status).toBe(200)
    });


    //delete
    it('Deve Excluir um automóvel cadastrado', async ()=> {
        
        const response = await request(app)
            .delete('/cars/1');

        expect(response.status).toBe(200)
    });

    //get com filtro
    it('Deve Listar os automóveis cadastrados. Deve ser possível filtrar a listagem dos automóveis por cor e marca.', async ()=> {
        
        const response = await request(app)
            .get('/cars/?marca=volvo&cor=preto');

        expect(response.status).toBe(200)
    });
    

    it('Deve Recuperar um automóvel cadastrado pelo seu identificador único', async ()=> {
        
        const response = await request(app)
            .get('/cars/1');

        expect(response.status).toBe(200)
    });
    

    it('Deve Listar os automóveis cadastrados.', async ()=> {
        
        const response = await request(app)
            .get('/cars');

        expect(response.status).toBe(200)
    });
    
    
});
