const sinon =require('sinon');
const {expect} = require('chai');

const ProductsService = require('../../../services/productService')

const productModel = require('../../../models/productModel');

describe('1- testando função errorMessage', async () => {
    const message = 'keuwe'
    const status = 10

        it('retorna um array', () => {
            const response =  ProductsService.errorMessage(message,status)

            expect(response).to.be.a("object")
        })
});

describe('2- testando função getAll', async () => {
    before(() => {
        sinon.stub(productModel, 'getAll').resolves([]);
    })

    after(() => {
        productModel.getAll.restore();
    })


        it('retorna um array', async () => {
            const response = await productModel.getAll()

            expect(response).to.be.a("array")
        })
});

describe('3- testando função findById', async () => {
    const id = 1
    before(() => {
        sinon.stub(productModel, 'findById').resolves([]);
    })

    after(() => {
        productModel.findById.restore();
    })


        it('retorna um array', async () => {
            const response = await  productModel.findById(id)

            expect(response).to.be.a("array")
        })
});
describe('4- testando função createAll', async () => {
    const id = 1
    before(() => {
        sinon.stub(productModel, 'createAll').resolves([]);
    })

    after(() => {
        productModel.createAll.restore();
    })


        it('retorna um array', async () => {
            const response = await  productModel.createAll(id)

            expect(response).to.be.a("array")
        })
})