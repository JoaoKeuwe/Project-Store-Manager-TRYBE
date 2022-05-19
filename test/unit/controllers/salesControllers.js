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