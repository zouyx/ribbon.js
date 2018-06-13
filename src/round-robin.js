import LinkList from "./link-list";

export default class RoundRobin{

    constructor() {
        this.allServers={}
    }

    loadBalance(appId,servers) {
        this.updateServer(appId,servers)

        var storedServers = this.allServers.appId;

        if(!storedServers){
            return;
        }

        return storedServers.nextNode();
    }

    updateServer(appId,servers){
        var storedServers = this.allServers.appId;
        if(storedServers || !servers || servers.length==0){
            return;
        }

        var serverLinkList=new LinkList()
        for(let server of servers){
            serverLinkList.insert(server)
        }

        this.allServers.appId=serverLinkList;
    }

}