export default class RoundRobin{

    constructor() {
        this.allServers={}
    }

    loadBalance(appId,servers) {
        this.updateServer(appId,servers)

    }

    updateServer(appId,servers){
        var storedServers = this.allServers.appId;
        if(!storedServers || !servers){
            this.allServers.appId=servers;
            return;
        }
    }

}