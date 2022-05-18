const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection')
const salesModel = require('../../../models/salesModel');

describe('sales Model', () => {
describe('1- testando função getAll', async () => {
        const resultList = [[]]
            before(() => {
                sinon.stub(connection, 'execute')
                .resolves(resultList)
            })
    
            after(() => {
                connection.execute.restore()
            });
    
            it('retorna um array', async () => {
                const response = await salesModel.getAll()
    
                expect(response).to.be.a("array")
            })
});

describe('2- testando função findById', async () => {
            const resultList = [[]]
                before(() => {
                    sinon.stub(connection, 'execute')
                    .resolves(resultList)
                })
        
                after(() => {
                    connection.execute.restore()
                });
        
                it('retorna um array', async () => {
                    const response = await salesModel.findById()
        
                    expect(response).to.be.a("array")
                })
});

describe('3- testando função getId', async () => {
    const resultList = [[]]
        before(() => {
            sinon.stub(connection, 'execute')
            .resolves(resultList)
        })

        after(() => {
            connection.execute.restore()
        });

        it('retorna um array', async () => {
            const response = await salesModel.getId()

            expect(response).to.be.a("array")
        })
});

describe('4- testando função addSales', async () => {
    const resultList = [[]]
        before(() => {
            sinon.stub(connection, 'execute')
            .resolves(resultList)
        })

        after(() => {
            connection.execute.restore()
        });

        it('retorna um array', async () => {
            const response = await salesModel.addSales()

            expect(response).to.be.a("array")
        })
});

describe('5- testando função create', async () => {
    const resultList = [{saleId: 4}]
        before(() => {
            sinon.stub(connection, 'execute')
            .resolves(resultList)
        })

        after(() => {
            connection.execute.restore()
        });

        it('retorna um objeto', async () => {
            const response = await salesModel.create()

            expect(response).to.be.an("object")
        })
});

describe('6- testando função updateSale', async () => {
    const resultList = [{saleId: 4}]
        before(() => {
            sinon.stub(connection, 'execute')
            .resolves(resultList)
        })

        after(() => {
            connection.execute.restore()
        });

        it('retorna um array', async () => {
            const response = await salesModel.updateSale()

            expect(response).to.be.an("object")
        })
});

})