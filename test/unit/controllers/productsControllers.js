const sinon =require('sinon');
const {expect} = require('chai');

const productService =require('../../../services/productService');

const productsController = require('../../../controllers/controllerProducts');

describe('1-chamada do controller get all', () => {
    describe('testando função getAll', async () => {
        const req = {}
        const res= {}

        before(() => {
            res.status =sinon.stub().returns(res)
            res.json =sinon.stub().returns();
            sinon.stub(productService, 'getAll').resolves([]);
        })

        after(() => {
            productService.getAll.restore();
        })
        it('é chamado metodo "status" passando o codigo 200', async () => {
            await productsController.getAll(req, res)
            expect(res.status.calledWith(200)).to.be.equal(true); 
        })

        it('é chamado metodo "status" passando o codigo 400', async () => {
            await productsController.getAll(req, res)
            expect(res.status.calledWith(400)).to.be.equal(false);
        })

        it('é retornado um metodo json',async () => {
            await productsController.getAll(req, res)

            expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
        })
    })
})

describe('2-chamada do controller get all ERROR', () => {
    describe('testando função  ERROR', async () => {
        const req = {}
        const res= {}

        before(() => {
            res.status =sinon.stub().returns(res)
            res.json =sinon.stub().returns();
            sinon.stub(productService, 'getAll').resolves(undefined);
        })

        after(() => {
            productService.getAll.restore();
        })
        it('é chamado metodo "status" passando o codigo 400', async () => {
            await productsController.getAll(req, res)
            expect(res.status.calledWith(400)).to.be.equal(true);
        })
    })
})

describe('1-chamada do controller findById', () => {
    describe('testando função findById', async () => {
        const req = {}
        const res= {}
        req.params = {id: 1}

        before(() => {
            res.status = sinon.stub().returns(res)
            res.json = sinon.stub().returns();
            sinon.stub(productService, 'findById').resolves([]);
        })

        after(() => {
            productService.findById.restore();
        })
        it('é chamado metodo "status" passando o codigo 200', async () => {
            await productsController.findById(req, res)
            expect(res.status.calledWith(200)).to.be.equal(true); 
        })

        it('é chamado metodo "status" passando o codigo 400', async () => {
            await productsController.findById(req, res)
            expect(res.status.calledWith(400)).to.be.equal(false);
        })

        it('é retornado um metodo json',async () => {
            await productsController.findById(req, res)

            expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
        })
    })
})


