import Ribbon from '../src/ribbon';

import chai from "chai";

var assert = chai.assert
import eureka from "./eureka.test";

suite('ribbon', function () {
    suite('#chooseServer()', function () {
        suiteSetup(function (done) {
            this.timeout(1000); // A very long environment setup.
            setTimeout(done, 1500);
        });
        test('should return choose server', function (done) {
            var servers = eureka.client.getInstancesByAppId('STORE-SERVICE');
            console.log("choosing server....")
            var ribbon=new Ribbon()
            var value = ribbon.chooseServer(servers)

            console.log("checking result....")
            // assert(Array.isArray(value))
            assert.isNotNaN(value)
            assert.isString(value.app)
            assert.equal(value.app, 'STORE-SERVICE')
            done()
        });
    });

});
