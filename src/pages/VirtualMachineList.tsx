import React, {useState, useEffect} from 'react';


import {ListVirtualMachinesRequest, VirtualMachine} from '../n0proto.ts/provisioning/v0/virtual_machine_pb';
import {VirtualMachineServiceClient} from '../n0proto.ts/provisioning/v0/Virtual_machineServiceClientPb';


interface VirtualMachineListProps {

}

export function VirtualMachineList(_: VirtualMachineListProps) {

   // const [networkList, setNetworkList] = useState(0)
    //useEffect(() => reload(), [URL])
    const reload = () => {
        const request = new ListVirtualMachinesRequest();
        const client = new VirtualMachineServiceClient("http://localhost:8080", {});
        client.listVirtualMachines(request, {}, (err, res) => {
            if(err || res === null) {
                throw err;
            }
            const vms: VirtualMachine[] = res.getVirtualMachinesList()
            vms[1].clearSshAuthorizedKeysList()
            console.log(vms);
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
