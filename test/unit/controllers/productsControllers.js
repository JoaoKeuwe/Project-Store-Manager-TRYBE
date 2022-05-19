const sinon =require('sinon');
const {expect} = require('chai');

const productService =require('../../../services/productService');

const productsController = require('../../../controllers/controllerProducts');

const productModel =require('../../../models/productModel');

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

    describe('1-chamada do controller get all ERROR', () => {
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

    describe('2-chamada do controller findById', () => {
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

    // describe('3-chamada do controller createAll', () => {
    //     describe('testando função createAll', async () => {
    //         const req = {}
    //         const res= {}
            
    //         before(() => {
    //             res.status = sinon.stub().returns(res)
    //             res.json = sinon.stub().returns();
    //             sinon.stub(productService, 'createAll').resolves([]);
    //         })

    //         after(() => {
    //             productService.createAll.restore();
    //         })
    //         it('é chamado metodo "status" passando o codigo 201', async () => {
    //             const test = await productsController.createAll(req, res)
    //             console.log(test);
    //             expect(res.status.calledWith(201)).to.be.equal(true); 
    //         })


    //     })
    // })

    describe('4-chamada do controller create all ERROR', () => {
        describe('testando função create all ERROR', async () => {
            const req = {}
            const res= {}
            req.body = {name:'keuwe'}
            req.body = { quantity: 1}

            before(() => {
                res.status =sinon.stub().returns(res)
                res.json =sinon.stub().returns();
                sinon.stub(productModel, 'validName').resolves([{}]);
                sinon.stub(productService, 'createAll').resolves({});
            })

            after(() => {
                productService.createAll.restore();
                productModel.validName.restore()
            })
            it('é chamado metodo "status" passando o codigo 409', async () => {
                await productsController.createAll(req, res)
                console.log(res.status);
                expect(res.status.calledWith(409)).to.be.equal(true);
            })
            it('retorna um json de erro quando tudo da certo', async () => {
                await productsController.createAll(req, res);
                expect(res.json.calledWith({message: 'Product already exists'})).to.be.equal(true);
              });
          
        })
    })

    describe('5-chamada do controller update', () => {
        describe('testando função update', async () => {
            const req = {}
            const res= {}
            req.params = {id: 3}
            req.body = {name:'keuwe', quantity: 1}

            before(() => {
                res.status = sinon.stub().returns(res)
                res.json = sinon.stub().returns();
                sinon.stub(productService, 'update').resolves({});
            })

            after(() => {
                productService.update.restore();
            })
            it('é chamado metodo "status" passando o codigo 201', async () => {
                await productsController.update(req, res)
                expect(res.status.calledWith(200)).to.be.equal(true); 
            })

            it('é retornado um metodo json',async () => {
                await productsController.update(req, res)

                expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
            })
        })
    })
    describe('5-chamada do controller update', () => {
        describe('testando função update', async () => {
            const req = {}
            const res= {}
            req.params = {id: 3}
            req.body = {name:'keuwe', quantity: 1}

            before(() => {
                res.status = sinon.stub().returns(res)
                res.json = sinon.stub().returns();
                sinon.stub(productService, 'update').resolves({});
            })

            after(() => {
                productService.update.restore();
            })
            it('é chamado metodo "status" passando o codigo 201', async () => {
                await productsController.update(req, res)
                expect(res.status.calledWith(200)).to.be.equal(true); 
            })

            it('é retornado um metodo json',async () => {
                await productsController.update(req, res)

                expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
            })
        })
    })

    describe('5-chamada do controller remove', () => {
        describe('testando função remove', async () => {
            const req = {}
            const res= {}
            req.params = {id: 3}
            before(() => {
                res.status = sinon.stub().returns(res)
                res.json = sinon.stub().returns();
                res.end = sinon.stub().returns();
                sinon.stub(productService, 'remove').resolves(false);
            })

            after(() => {
                productService.remove.restore();
            })
            it('é chamado metodo "status" passando o codigo 204', async () => {
                await productsController.remove(req, res)
                expect(res.status.calledWith(204)).to.be.equal(true); 
            })
        })
    })
    


