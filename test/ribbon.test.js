var Ribbon = require('../src/ribbon');

var chai = require("chai");

var assert = chai.assert

var serversJson=""


describe('ribbon', function() {
    describe('#chooseServer()', function() {
        it('should return choose server', function() {
            var servers = JSON.parse(serversJson);
            var ribbonInstance=new Ribbon()
            var value=ribbonInstance.chooseServer(servers)

            // assert(Array.isArray(value))
            assert.isNotNaN(value)
            assert.isString(value.app)
            assert.equal(value.app,'OCTOPUS-STORE-SERVICE')
        });
    });

    describe('#chooseServerUrl()', function() {
        it('should return home page url', function() {
            var servers = JSON.parse(serversJson);
            var ribbonInstance=new Ribbon()
            var value=ribbonInstance.chooseServerUrl(servers)
            assert.isNotNaN(value)
            assert.isString(value)
            assert.match(value,/^http/)
        });
    });
});
