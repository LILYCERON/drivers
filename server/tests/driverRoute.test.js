const request = require('supertest');
const app = require('../src/server');
const chai = require('chai');
const expect = chai.expect;

describe('Driver API', () => {
  it('should get all drivers', (done) => {
    request(app)
      .get('/drivers')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should create a new user', (done) => {
    request(app)
      .post('/drivers')
      .send({
        forename: 'Liliana',
        surname: 'Rosada',
        team: ['ferrari'],
        image:
          'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTIStt2uHyBhcrJlzDyER0vFHwgkQr7py2AfN4PEJn0b2R1Qd7R_W_U5mHcb7nUQ9rCy5xDrQUKocd__rk',
        description: 'Hola soy rápida',
        nationality: 'Colombiana',
        birth_date: '1992-06-06',
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.forename).to.equal('Liliana');
        done();
      });
  });
});
