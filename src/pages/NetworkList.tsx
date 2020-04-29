import React, {useState, useEffect} from 'react';


import {ListNetworksRequest, Network} from '../n0proto.ts/pool/v0/network_pb';
import {NetworkServiceClient} from '../n0proto.ts/pool/v0/NetworkServiceClientPb';


interface NetworkListProps {

}

type Net = Network;

export function NetworkList(_: NetworkListProps) {

   // const [networkList, setNetworkList] = useState(0)
    //useEffect(() => reload(), [URL])
    const reload = () => {
        const request = new ListNetworksRequest();
        const client = new NetworkServiceClient("http://localhost:8080", {});
        client.listNetworks(request, {}, (err, res) => {
            if(err || res === null) {
                throw err;
            }
            const networks: Net[] = res.getNetworksList()
            console.log(networks);
    //        setNetworkList(1);
        });
    }
    reload();
    return (
        <>
        hoge
        </>
    )
}
