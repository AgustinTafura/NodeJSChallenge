const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const db = require('../database');
const SeederDB = require('../database/seeder');

chai.should();
chai.use(chaiHttp);


setTimeout(function() {

    // Default User created on migration 
    const defaultUser = {
        name: "user 1",
        email: "email1@mail.com",
        password:"123123",
    }; 

    before((done) => {
        chai.request(app)
        .post('/auth/login')
        .send(defaultUser)
        .end((err, response) => {
        defaultUser.token = response.body.token;
        done();
        });
    });
    
    describe("Categories endpoints testing", function() {
        
        const newCategory = {
            name: "category test",
            description: "description test"
        };    
        
        it('Should create a new Category', (done) => {
            chai
            .request(app)
            .post('/categories')
            .set({ Authorization: `Bearer ${defaultUser.token}` })
            .send(newCategory)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('id');
                res.body.should.have.property('name');
                res.body.should.have.property('description');
                newCategory.id = res.body.id
                done();
            });
        });

        it('Should get a Category by Id', (done) => {
            chai
            .request(app)
            .get(`/categories/${newCategory.id}`)
            .set({ Authorization: `Bearer ${defaultUser.token}` })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('id');
                res.body.should.have.property('name');
                res.body.should.have.property('description');
                res.body.should.have.property('Products');
                res.body.Products.should.be.a('array')

                done();
            });
        });
        
        it('Should update a categories', (done) => {

            const changes = {
                name: 'test name updated'
            }
            
            chai
            .request(app)
            .get(`/categories/${newCategory.id}`)
            .set({ Authorization: `Bearer ${defaultUser.token}` })
            .send(changes)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('id');
                res.body.should.have.property('name');
                res.body.should.have.property('description');
                res.body.should.have.property('Products');
                res.body.Products.should.be.a('array')
                done();
            });
        });

        it('Should return all Categories', (done) => {
            chai
            .request(app)
            .get('/categories')
            .set({ Authorization: `Bearer ${defaultUser.token}` })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array')
                done();
            });
        });

        it('Should delete Category by Id', (done) => {
            chai
            .request(app)
            .delete(`/categories/${newCategory.id}`)
            .set({ Authorization: `Bearer ${defaultUser.token}` })
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.include('eliminado');
                done();
            });
        });

    })

    run()   
}, 3000)