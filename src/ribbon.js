
import Eureka from  'eureka-js-client';
import eureka from "../test/eureka.test";

export default class Ribbon{

    constructor(config={}) {
        this.eurekaClient = new Eureka(config);
    }

    start(){
        this.eurekaClient.start()
    }

    chooseServerUrl(servers) {
        var choosenServer = this.chooseServer(servers);
        if (!choosenServer) {
            return;
        }
        return choosenServer.homePageUrl;
    }


    chooseServer(servers) {
        return servers[0]
    }

    /**
     * Retrieves a instances by load balance from Eureka server given an appId
     * @param appId
     * @param lb
     * @returns {*}
     */
    chooseServerUrlByAppId(appId,lb) {
        var servers = this.eurekaClient.getInstancesByAppId(appId);
        return lb(appId,servers)
    }

}
