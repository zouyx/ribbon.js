var Ribbon = require('../src/ribbon');

var chai = require("chai");

var assert = chai.assert

var serversJson=""

const Eureka = require('eureka-js-client').Eureka;

// example configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'jqservice',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: 8080,
        vipAddress: 'jq.test.something.com',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        // eureka server host / port
        host: 'localhost',
        port: 8761,
    },
});


describe('ribbon', function() {
    describe('#chooseServer()', function() {
        it('should return choose server', function() {
            client.start();
            var servers = client.getInstancesByAppId('STORE-SERVICE');
            var value=Ribbon.chooseServer(servers)

            // assert(Array.isArray(value))
            assert.isNotNaN(value)
            assert.isString(value.app)
            assert.equal(value.app,'STORE-SERVICE')
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
