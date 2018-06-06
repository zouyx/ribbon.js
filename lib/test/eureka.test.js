'use strict';

var Eureka = require('eureka-js-client').Eureka;
// import Eureka from 'eureka-js-client';

// example configuration
var client = new Eureka({
    // application instance information
    instance: {
        app: 'BAIDU-SERVICE',
        hostName: 'baidu.com',
        ipAddr: '10.199.204.7',
        vipAddress: 'baidu.com',
        statusPageUrl: 'http://localhost:9101',
        port: {
            '$': 9101,
            '@enabled': 'true'
        },
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn'
        }
    },
    eureka: {
        // eureka server host / port
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    }
});

client.start();

module.exports = {
    client: client
};
//# sourceMappingURL=eureka.test.js.map