const { connection, request, app } = require('./index');

const Driver = require('../../src/app/models/Driver');
Driver.init(connection);

describe('car crud', () =>{
    
    //create
    it('Deve Cadastrar um novo motorista', async ()=> {
        
        const response = await request(app)
            .post('/drivers')
            .send({
                nome: 'Breno'
            });

        expect(response.status).toBe(200)
    });

    //update
    it('Atualizar um motorista cadastrado', async ()=> {
        
        const response = await request(app)
            .put('/drivers/1')
            .send({
                nome: 'Outro nome'
            });

        expect(response.status).toBe(200)
    });


    //delete
    it('Excluir um motorista cadastrado', async ()=> {
        
        const response = await request(app)
            .delete('/drivers/1');

        expect(response.status).toBe(200)
    });

    //get com filtro
    it('Deve buscar e filtrar a listagem dos motoristas por nome.', 
        async ()=> {
            const response = await request(app)
                .get('/drivers/?nome=breno');

            expect(response.status).toBe(200)
        }
    );
    

    it('Recuperar um motorista cadastrado pelo seu identificador único', 
        async ()=> {
            
            const response = await request(app)
                .get('/drivers/1');

            expect(response.status).toBe(200)
        }
    );
    

    it('Listar os motoristas cadastrados.', async ()=> {
        
        const response = await request(app)
            .get('/drivers');

        expect(response.status).toBe(200)
    });
    
    
});
