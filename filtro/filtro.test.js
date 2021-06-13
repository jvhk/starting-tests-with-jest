const filtro = require('./filtro');

const contatos = [{"nome": "paulo", "sobrenome": "camargo"}, {"nome":"joao", "sobrenome": "camara"}];

const encontrado = {"nome": "paulo", "sobrenome": "camargo"};

describe('Filtro', () => {

    test('Pesquisar um nome que existe na base', () => {
        expect(filtro(contatos, "paulo")).toEqual(encontrado);
    });

    test('Pesquisar um nome que não existe na base', () => {
        expect(filtro(contatos, "xpto")).toBeUndefined();
    });

})