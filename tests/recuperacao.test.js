const ServiceRecuperacao = require('../src/services/recuperacao')
const { describe, it, expect } = require('@jest/globals')

describe('testando a funcao conversor: ', () => {
    it('converter valor inteiro', () => {
        const resultado = ServiceRecuperacao.Conversor(30);
        expect(resultado).toBe(86);
    })

    it('converter valor decimal', () => {
        const resultado = ServiceRecuperacao.Conversor(35.5);
        expect(resultado).toBe(86);
    })
    it('converter com letras', () => {
        const resultado = ServiceRecuperacao.Conversor(a);
        expect(resultado).toBe('erro');
    })
})
describe('testando a funcao VerificarTriangulo: ', () => {
    it('verificar valores positivos', () => {
        const resultado = ServiceRecuperacao.VerificaTriangulos(1, 2, 3);
        expect(resultado).toBe('Escaleno')
    })
    it('verificar um valor negativo', () => {
        const resultado = ServiceRecuperacao.VerificaTriangulos(-1, 2, 3);
        expect(resultado).toBe('Nao é um triangulo')
    })
    it('verificar uma letra', () => {
        const resultado = ServiceRecuperacao.VerificaTriangulos('a', 2, 3);
        expect(resultado).toBe('erro')
    })
})
describe ('testando a funcao VerificarCusto', () => {
    it('verificar valores positivos', () => {
        const resultado = ServiceRecuperacao.VerificaCusto(12000);
        expect(resultado).toBe('20760')
    })
    it('verificar valor negativo', () => {
        const resultado = ServiceRecuperacao.VerificaCusto(-12000);
        expect(resultado).toBe('Valor inválido')
    })
    it('verificar letra', () => {
        const resultado = ServiceRecuperacao.VerificaCusto('a');
        expect(resultado).toBe('erro')
    })
})
describe ('testando a funcao Tabuada', () => {
    it('verificar valor positivo', () => {
        const resultado = ServiceRecuperacao.Tabuada(1);
        expect(resultado).toBe('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10')
    })
    it('verificar valor negativo', () => {
        const resultado = ServiceRecuperacao.Tabuada(-1);
        expect(resultado).toBe('0', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10')
    })
    it('verificar valor positivo', () => {
        const resultado = ServiceRecuperacao.Tabuada('a');
        expect(resultado).toBe('erro')
    })
    it('verificar valor decimal', () => {
        const resultado = ServiceRecuperacao.Tabuada(1.5);
        expect(resultado).toBe('0', '1.5', '3', '4.5', '6', '7.5', '9', '10.5', '12', '13.5', '15')
    })
})
describe ('testando a funcao Imposto', () => {
    it('verificar valor menor que 2 salMin', () => {
        const resultado = ServiceRecuperacao.Imposto('1412');
        expect(resultado).toBe('Isento')
    })
    it('verificar valor maior que 2 salMin', () => {
        const resultado = ServiceRecuperacao.Imposto('3530');
        expect(resultado).toBe('Aliquota de 5%, valor de imposto: 176.5')
    })
    it('verificar valor maior que 3 salMin', () => {
        const resultado = ServiceRecuperacao.Imposto('4942');
        expect(resultado).toBe('Aliquota de 10%, valor de imposto: 247.1')
    })
    it('verificar valor maior que 5 salMin', () => {
        const resultado = ServiceRecuperacao.Imposto('7766');
        expect(resultado).toBe('Aliquota de 15%, valor de imposto: 388.3')
    })
    it('verificar valor maior que 7 salMin', () => {
        const resultado = ServiceRecuperacao.Imposto('10590');
        expect(resultado).toBe('Aliquota de 20%, valor de imposto: 529.5')
    })
    it('verificar valor negativo', () => {
        const resultado = ServiceRecuperacao.Imposto('-1');
        expect(resultado).toBe('Valor Inválido!')
    })
    it('verificar letra', () => {
        const resultado = ServiceRecuperacao.Imposto('a');
        expect(resultado).toBe('erro!')
    })

    
    
})