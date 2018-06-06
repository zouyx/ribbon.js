var Ribbon = require('../src/ribbon');

var mocha = require('mocha');
var suite         = mocha.suite;
var setup         = mocha.setup;
var suiteSetup    = mocha.suiteSetup;
var test          = mocha.test;
var teardown      = mocha.teardown;
var suiteTeardown = mocha.suiteTeardown;

var chai = require("chai");

var assert = chai.assert
var eureka = require("./eureka.test");

suite('ribbon', function () {
    suite('#chooseServer()', function () {
        suiteSetup(function (done) {
            this.timeout(1000); // A very long environment setup.
            setTimeout(done, 1500);
        });
        test('should return choose server', function (done) {
            var servers = eureka.client.getInstancesByAppId('STORE-SERVICE');
            console.log("choosing server....")
            var value = Ribbon.chooseServer(servers)

            console.log("checking result....")
            // assert(Array.isArray(value))
            assert.isNotNaN(value)
            assert.isString(value.app)
            assert.equal(value.app, 'STORE-SERVICE')
            done()
        });
    });

    suite('#chooseServerUrl()', function () {
        test('should return home page url', function (done) {
            var servers = eureka.client.getInstancesByAppId('STORE-SERVICE');
            console.log("choosing server....")
            var value = Ribbon.chooseServerUrl(servers)

            console.log("checking result....")
            assert.isNotNaN(value)
            assert.isString(value)
            assert.match(value, /^http/)
            done()
        });
    });

});
