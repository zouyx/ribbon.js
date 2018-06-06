var Ribbon = require('../src/ribbon');

var chai = require("chai");

var assert = chai.assert

var eureka = require("./eureka.test");

describe('ribbon', function() {
    describe('#chooseServer()', function() {
        it('should return choose server', function() {
            setTimeout(function() {
                var servers = eureka.client.getInstancesByAppId('STORE-SERVICE');
                var value=Ribbon.chooseServer(servers)

                // assert(Array.isArray(value))
                assert.isNotNaN(value)
                assert.isString(value.app)
                assert.equal(value.app,'STORE-SERVICE')
            }, 5000);
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
