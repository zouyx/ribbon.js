
export default class Ribbon{
    constructor() {

    }

    chooseServerUrl(servers) {
        var choosenServer = chooseServer(servers);
        if(!choosenServer){
            return;
        }

        return choosenServer.homePageUrl;
    }

    chooseServer(servers) {
        return servers[0]
    }
}
