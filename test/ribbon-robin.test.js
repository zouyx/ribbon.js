import chai from "chai";

var assert = chai.assert
import eureka from "./eureka.test";
import RoundRobin from "../src/round-robin";

suite('ribbon-robin', function () {
    suite('#loadBalance()', function () {
        suiteSetup(function (done) {
            this.timeout(1000); // A very long environment setup.
            setTimeout(done, 1500);
        });
        test('should return undefined choose server', function (done) {
            var servers = eureka.client.getInstancesByAppId('STORE-SERVICE1');
            console.log("choosing server....")
            var roundRobin=new RoundRobin()
            var value1 = roundRobin.loadBalance('STORE-SERVICE1',servers);
            var value2 = roundRobin.loadBalance('STORE-SERVICE1',servers);

            assert.equal(value1, undefined)
            assert.equal(value2, undefined)
            done()
        });
    });

});
