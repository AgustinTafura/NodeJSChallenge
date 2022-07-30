const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const db = require('../database');
const SeederDB = require('../database/seeder');

chai.should();
chai.use(chaiHttp);


setTimeout(function() {

    
    // after(function() {
    //     if (db.seeder) {
    //         db.seeder.down()
    //     }
    // });

    describe("User endpoints testing", function() {
        

        const newUser = {
            name: "userTest",
            email: "test1@mail.com",
            password:"123123",
        };
        
        
        it('Should create and get a user', (done) => {
            chai
            .request(app)
            .post('/auth/register')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('token');
                res.body.should.have.property('user');
                res.body.user.should.have.property('name');
                res.body.user.should.have.property('email');
                res.body.user.should.have.property('id');
                done();
            });
        });
        
        it('Should login and return a token', (done) => {
            chai
            .request(app)
            .post('/auth/login')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('token');
                done();
            });
        });
    })
    run()   
}, 3000)