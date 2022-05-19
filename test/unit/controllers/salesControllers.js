const sinon =require('sinon');
const {expect} = require('chai');

const salesService =require('../../../services/salesServices');

const productSales = require('../../../controllers/controllerSales');

const productModel =require('../../../models/productModel');

describe('1-chamada do controller sales controller', () => {
    describe('testando função getAll', async () => {
        const req = {}
        const res= {}

        before(() => {
            res.status =sinon.stub().returns(res)
            res.json =sinon.stub().returns();
            sinon.stub(salesService, 'getAll').resolves([]);
        })

        after(() => {
            salesService.getAll.restore();
        })
        it('é chamado metodo "status" passando o codigo 200', async () => {
            await productSales.getAll(req, res)
            expect(res.status.calledWith(200)).to.be.equal(true); 
        })
        it('é retornado um metodo json',async () => {
            await productSales.getAll(req, res)

            expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
        })
    })
})
describe('2-chamada do controller sales controller', () => {
    describe('testando função getAll error', async () => {
        const req = {}
        const res= {}

        before(() => {
            res.status =sinon.stub().returns(res)
            res.json =sinon.stub().returns();
            sinon.stub(salesService, 'getAll').resolves(undefined);
        })

        after(() => {
            salesService.getAll.restore();
        })
        it('é chamado metodo "status" passando o codigo 400', async () => {
            await productSales.getAll(req, res)
            expect(res.status.calledWith(400)).to.be.equal(true); 
        })
    })
})

describe('3-chamada do controller sales controller', () => {
    describe('testando função findById ', async () => {
        const req = {}
        const res= {}
        req.params = {id: 1}

        before(() => {
            res.status =sinon.stub().returns(res)
            res.json =sinon.stub().returns();
            sinon.stub(salesService, 'findById').resolves(true);
        })

        after(() => {
            salesService.findById.restore();
        })
        it('é chamado metodo "status" passando o codigo 200', async () => {
            await productSales.findById(req, res)
            expect(res.status.calledWith(200)).to.be.equal(true); 
        })
    })
})
// describe('4-chamada do controller sales controller', () => {
//     describe('testando função findById ERROR ', async () => {
//         const req = {}
//         const res= {}
//         req.params = {id: 5}

//         before(() => {
//             res.status =sinon.stub().returns(res)
//             res.json =sinon.stub().returns();
//             sinon.stub(salesService, 'findById').resolves([]);
//         })

//         after(() => {
//             salesService.findById.restore();
//         })
//         it('é chamado metodo "status" passando o codigo 400', async () => {
//             await productSales.findById(req, res)
//             expect(res.status.calledWith(200)).to.be.equal(true); 
//         })
//     })
// })

describe('5-chamada do controller sales controller', () => {
    describe('testando função createeeee ', async () => {
        const req = {}
        const res= {}
        req.body =[]

        before(() => {
            res.status =sinon.stub().returns(res)
            res.json =sinon.stub().returns();
            sinon.stub(salesService, 'create').resolves(true);
        })

        after(() => {
            salesService.create.restore();
        })
        it('é chamado metodo "status" passando o codigo 200', async () => {
            await productSales.create(req, res)
            expect(res.status.calledWith(201)).to.be.equal(true); 
        })
    })
})