
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {ListNetworksRequest, Network} from '../../n0proto.ts/pool/v0/network_pb';
import {NetworkServiceClient} from '../../n0proto.ts/pool/v0/NetworkServiceClientPb';
import {ListBlockStoragesRequest, BlockStorage} from '../../n0proto.ts/provisioning/v0/block_storage_pb';
import {GenerateBlockStorageRequest} from '../../n0proto.ts/deployment/v0/image_pb';
import {ImageServiceClient} from '../../n0proto.ts/deployment/v0/ImageServiceClientPb';
import {CreateVirtualMachineRequest, VirtualMachine, VirtualMachineNIC} from '../../n0proto.ts/provisioning/v0/virtual_machine_pb';
import {VirtualMachineServiceClient} from '../../n0proto.ts/provisioning/v0/Virtual_machineServiceClientPb';
import { NativeSelect, Grid, Card, CardContent, CardActions, ButtonGroup } from '@material-ui/core';
import { BlockStorageServiceClient } from '../../n0proto.ts/provisioning/v0/Block_storageServiceClientPb';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  input: {
      marginTop: '10px',
  },
  title: {
    marginTop: '10px',
  },
  select: {
    marginTop: '10px',
  },
  attachButton: {
    marginLeft: '10px',
  },
  card: {
    width: '400px',
    marginTop: '10px',
  },
  createButton: {
      width: '400px',
      marginTop: '10px',
  },
});

interface CreateVirtualMachineProps{

}

export function CreateVirtualMachine(_: CreateVirtualMachineProps) {
    const classes = useStyles();
    const history = useHistory();

    const [networkMap, setNetworkMap] = useState({} as {[key: string]: Network})
    const [networkList, setNetworkList] = useState([] as Network[])
    useEffect(() => {
        const request = new ListNetworksRequest;
        const client = new NetworkServiceClient("http://localhost:8080", {});
        client.listNetworks(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            setNetworkList([
                ...res.getNetworksList(),
            ]);

            const maps = {} as {[key: string]: Network}
            res.getNetworksList().map((net) => {
                maps[net.getName()] = net.clone();
            })
            setNetworkMap(maps);
        });
    }, []);
    const [blockStorageMap, setBlockStorageMap] = useState({} as {[key: string]: BlockStorage});
    const [blockStorageList, setBlockStorageList] = useState([] as BlockStorage[]);
    useEffect(() => {
        const request = new ListBlockStoragesRequest;
        const client = new BlockStorageServiceClient("http://localhost:8080", {});
        client.listBlockStorages(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }
            const bss = res.getBlockStoragesList().filter((v) => {
                return v.getState() === BlockStorage.BlockStorageState.AVAILABLE;
            })
            setBlockStorageList(bss);

            const maps = {} as {[key: string]: BlockStorage};
            res.getBlockStoragesList().map((bs) => {
                maps[bs.getName()] = bs;
            })
            setBlockStorageMap(maps);
        })
    }, [])

    const [selectedNetworkIndex, setSelectedNetworkIndex] = useState(0);
    const [vm, setVM] = useState(new VirtualMachine())

    const onChangeNewVMName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVM = vm.clone()
        newVM.setName(e.target.value);
        setVM(newVM);
    }
    const onChangeNewVMVcpus = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVM = vm.clone();
        const vcpus = parseInt(e.target.value, 10);
        newVM.setRequestCpuMilliCore(vcpus);
        newVM.setLimitCpuMilliCore(vcpus * 1000);
        setVM(newVM);
    }
    const onChangeNewVMMemory = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVM = vm.clone();
        const memory = parseFloat(e.target.value);
        // とりあえずメモリはオーバーコミットしない
        newVM.setRequestMemoryBytes(memory * 1024 * 1024 * 1024);
        newVM.setLimitMemoryBytes(memory * 1024 * 1024 * 1024);
        setVM(newVM);
    }
    const onChangeSelectNetworkList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNetworkIndex(parseInt(e.target.value, 10));
    }
    const onClickAttachNic = () => {
        const newVM = vm.clone();
        const nicsList = vm.getNicsList();
        const nic = new VirtualMachineNIC();
        if(networkList.length <= 0) {
            return;
        }

        nic.setNetworkName(networkList[selectedNetworkIndex].getName());
        nicsList.push(nic);
        newVM.setNicsList(nicsList);
        setVM(newVM);
    };

    const [newBlockStoragesFromImage, setNewBlockStoragesFromImage] = useState([] as GenerateBlockStorageRequest[]);
    const onClickAddBS = () => {
        const newBS = new GenerateBlockStorageRequest();
        setNewBlockStoragesFromImage([
            ...newBlockStoragesFromImage,
            newBS
        ])
    }
    const onClickApplyNetwork = () => {
        console.log(vm);
//        const request = new ApplyNetworkRequest();
//        const client = new NetworkServiceClient("http://localhost:8080", {});
//        client.applyNetwork(request, null, (err, res) => {
//            if (err || res === null) {
//                console.log(err);
//                throw err;
//            }
//
//            history.push("/networks");
//        })
    }
    return (
        <Container>
            <Typography
                variant="h4">
                    Create VirtualMachine
            </Typography>
            <div>
                <TextField
                    label="Name"
                    onChange={onChangeNewVMName}
                />
            </div>
            <div>
                <TextField
                    label="vcpus"
                    onChange={onChangeNewVMVcpus}
                />
            </div>
            <div>
                <TextField
                    label="memory(GB)"
                    onChange={onChangeNewVMMemory}
                />
            </div>
            <div>
                <Typography variant="h6" className={classes.title}>
                    Nics
                </Typography>
                <NativeSelect
                    className={classes.select}
                    onChange={onChangeSelectNetworkList}
                    >
                    {networkList.map((net, key) => {
                        return (
                        <option key={key} value={key}>{net.getName()}({net.getIpv4Cidr()})</option>
                        )
                    })}
                </NativeSelect>
                <Button
                    className={classes.attachButton}
                    variant="contained"
                    color="primary"
                    onClick={onClickAttachNic}>
                        Attach
                </Button>
                {vm.getNicsList() !== null && vm.getNicsList().map((nic, key) => {
                    const onSwapUp = () => {
                        if(key <= 0) return;
                        const newVM = vm.clone();
                        const nicsList = vm.getNicsList();
                        const tmp = nicsList[key - 1];
                        nicsList[key - 1] = nicsList[key];
                        nicsList[key] = tmp;
                        newVM.setNicsList(nicsList);
                        setVM(newVM);
                    }
                    const onSwapDown = () => {
                        const nicsList = vm.getNicsList();
                        if(key >= nicsList.length - 1) return;
                        const newVM = vm.clone();
                        const tmp = nicsList[key + 1];
                        nicsList[key + 1] = nicsList[key];
                        nicsList[key] = tmp;
                        newVM.setNicsList(nicsList);
                        setVM(newVM);
                    }
                    const onDelete = () => {
                        const nicsList = vm.getNicsList();
                        const newVM = vm.clone();

                        newVM.setNicsList(nicsList.filter((_, i) => i !== key));
                        setVM(newVM);
                    }
                    return (
                    <Card key={key} className={classes.card}>
                        <CardContent>
                            <Typography variant="subtitle1">
                                {nic.getNetworkName()}({networkMap[nic.getNetworkName()].getIpv4Cidr()})
                            </Typography>
                            <TextField
                                label="IPv4 Address"
                                placeholder="xxx.xxx.xxx.xxx"/>
                        </CardContent>
                        <CardActions>
                            <ButtonGroup
                                variant="contained"
                                color="primary"
                                aria-label="contained primary button group">
                                    <Button
                                        onClick={onSwapUp}>
                                        ↑
                                    </Button>
                                    <Button
                                        onClick={onSwapDown}>
                                        ↓
                                    </Button>
                            </ButtonGroup>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={onDelete}>
                                    Detach
                                </Button>
                        </CardActions>
                    </Card>
                    )
                })}
            </div>
            <div>
                {/*
                <Typography variant="h6" className={classes.title}>
                    Existing BlockStorages
                </Typography>
                <NativeSelect
                    className={classes.select} >
                        {blockStorageList.map((bs, key) => {
                            return (
                                <option key={key} value={key}>{bs.getName()}(size: {bs.getLimitBytes() / 1024 / 1024 / 1024}GB, node: {bs.getNodeName()})</option>
                            )
                        })}
                </NativeSelect>
                <Button
                    className={classes.attachButton}
                    variant="contained"
                    color="primary">
                        Attach
                    </Button>*/}

                <Typography variant="h6" className={classes.title}>
                    Create BlockStorage
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickAddBS}>
                        Add
                </Button>
                {newBlockStoragesFromImage.map((bs, key) => {
                    const onChangeBSName = (e: React.ChangeEvent<HTMLInputElement>) => {
                        const newBSS = [...newBlockStoragesFromImage];
                        newBSS[key].setBlockStorageName(e.target.value);
                        setNewBlockStoragesFromImage(newBSS);
                    }
                    const onDelete = () => {
                        const newBSs = [...newBlockStoragesFromImage.filter((_, i) => i !== key)];
                        setNewBlockStoragesFromImage(newBSs);
                    }
                    return (
                    <Card key={key} className={classes.card}>
                        <CardContent>
                            <TextField
                                className={classes.input}
                                label="Name"
                                value={bs.getBlockStorageName()}
                                onChange={onChangeBSName} />

                            <Typography variant="subtitle2">Image</Typography>
                            <NativeSelect
                                fullWidth
                                >
                                {['ubuntu', 'centos', 'debian'].map((i, key) => {
                                    return (
                                        <option key={key} value={key}>{i}</option>
                                    )
                                })}
                            </NativeSelect>

                            <TextField
                                className={classes.input}
                                label="Request Size(GB)"
                                value={bs.getRequestBytes() * 1024 * 1024 * 1024} />

                            <TextField
                                className={classes.input}
                                label="Limit Size(GB)"
                                value={bs.getLimitBytes() * 1024 * 1024 * 1024} />
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={onDelete}>
                                    Delete
                                </Button>
                        </CardActions>
                    </Card>
                    )
                })}
            </div>
            <div>
                <Button
                    className={classes.createButton}
                    variant="outlined"
                    color="primary"
                    onClick={onClickApplyNetwork}>
                        apply
                </Button>
            </div>
        </Container>
    )
}
