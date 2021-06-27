const request = require('supertest');

const {server} = require('./build/http');


describe('teste de rotas', () => {
    jest.setTimeout(30000);

    it('teste cadastro de vagas', async () => {

        const res = await request(server)
        .post('/vaga')
        .send({
            categoria: 3,
            contratante_id: 30,
            num_vagas: 2,
            descricao: "Vagas para estagiario na fepsird",
            interesses: "Experiente em manutenção, saber Javascript",
            horario: 1
        })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('categoria');
    })
})