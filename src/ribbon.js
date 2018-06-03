function chooseServerUrl(servers) {
    var choosenServer = chooseServer(servers);
    if (!choosenServer) {
        return;
    }

    return choosenServer.homePageUrl;
}

function chooseServer(servers) {
    return servers[0]
}

module.exports ={
    chooseServerUrl:chooseServerUrl,
    chooseServer:chooseServer
}
