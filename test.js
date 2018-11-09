/* This is unit testing file */
const assert = require('assert');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect; 
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(2), -1);
    });
  });
});
/*
describe('Task API Routes', function() {
    // Testing the save task expecting status 201 of success
    describe('POST /tasks', function() {
        it('saves a new task', function(done) {
            request('localhost:3000').post('/saveUser')
                .send({
                    title: 'run',
                    done: false
                })
                .expect(201)
                .end(function(err, res) {
                    done(err);
                });
        });
    });
});

*/
