const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection')
const producstModel = require('../../../models/productModel');
describe('product Models ', () => {
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
            const response = await producstModel.getAll()

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
                const response = await producstModel.findById()
        
                expect(response).to.be.a("array")
            })
    });
    describe('3- testando função createAll', async () => {
            const resultList = [{insertId:3}]
                before(() => {
                    sinon.stub(connection, 'execute')
                    .resolves(resultList)
                })
        
                after(() => {
                    connection.execute.restore()
                });
            
                it('retorna um objeto', async () => {
                    const name = 'keuwe'
                    const quantity = 30
                    const response = await producstModel.createAll(name, quantity)
            
                    expect(response).to.be.an("object")
                })
    })
    describe('4- testando função validName', async () => {
        const resultList = [[]]
            before(() => {
                sinon.stub(connection, 'execute')
                .resolves(resultList)
            })
    
            after(() => {
                connection.execute.restore()
            });
        
            it('retorna um array', async () => {
            
                const response = await producstModel.validName()
                expect(response).to.be.a("array")
            })
})
    describe('5- testando função update', async () => {
    const resultList = [{}]
        before(() => {
            sinon.stub(connection, 'execute')
            .resolves(resultList)
        })

        after(() => {
            connection.execute.restore()
        });
    
        it('retorna um objeto com name, quantity e id', async () => {
            const name= 'keuwe'
            const quantity= 2
            const id= 3
        
            const response = await producstModel.update(name, quantity, id)
            expect(response).to.be.an("object")
            expect(response).to.have.all.keys("name", "quantity", "id")
        })
})
    describe('6- testando função remove', async () => {
    const resultList = [{}]
        before(() => {
            sinon.stub(connection, 'execute')
            .resolves(resultList)
        })

        after(() => {
            connection.execute.restore()
        });
    
        it('confere se retorna um objeto vazio', async () => {
        
            const response = await producstModel.remove()
            expect(response).to.be.an("object")
        })
})
})


