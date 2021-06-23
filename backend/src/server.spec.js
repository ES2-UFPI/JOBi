const request = require('supertest');
const app = require('./server');

describe('teste de rotas', () => {
    it('teste cadastro de vagas', async () => {
        const res = await request(app)
        .post('/vaga')
        .send({
            categoria: "1,2,3",
            num_vagas: 2,
            descricao: "Vagas para estagiario na fepsird",
            interesses: "Experiente em manutenção, saber Javascript",
            horario: 3
        })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('categoria');
    })
})