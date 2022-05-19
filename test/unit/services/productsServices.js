const sinon =require('sinon');
const {expect} = require('chai');

const ProductsService = require('../../../services/productService')

describe('1- testando função errorMessage', async () => {
    const message = 'keuwe'
    const status = 10

        it('retorna um array', () => {
            const response =  ProductsService.errorMessage(message,status)

            expect(response).to.be.a("object")
        })
});