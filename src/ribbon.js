

export default class Ribbon{

    constructor() {
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
