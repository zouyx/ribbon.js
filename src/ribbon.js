
import Eureka from  'eureka-js-client';

export default class Ribbon{

    constructor(config={}) {
        // this.eurekaClient = new Eureka(config);
        //
        // this.eurekaClient.start()
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
}
