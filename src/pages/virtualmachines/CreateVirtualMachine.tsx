
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@material-ui/core';

import {ListNodesRequest, Node} from '../../n0proto.ts/pool/v0/node_pb';
import {NodeServiceClient} from '../../n0proto.ts/pool/v0/NodeServiceClientPb';
import {ListNetworksRequest, Network} from '../../n0proto.ts/pool/v0/network_pb';
import {NetworkServiceClient} from '../../n0proto.ts/pool/v0/NetworkServiceClientPb';
import {ListBlockStoragesRequest, BlockStorage} from '../../n0proto.ts/provisioning/v0/block_storage_pb';
import {GenerateBlockStorageRequest, ListImagesRequest, Image} from '../../n0proto.ts/deployment/v0/image_pb';
import {ImageServiceClient} from '../../n0proto.ts/deployment/v0/ImageServiceClientPb';
import {CreateVirtualMachineRequest, VirtualMachine, VirtualMachineNIC} from '../../n0proto.ts/provisioning/v0/virtual_machine_pb';
import {VirtualMachineServiceClient} from '../../n0proto.ts/provisioning/v0/Virtual_machineServiceClientPb';
import { NativeSelect, Grid, Card, CardContent, CardActions, ButtonGroup } from '@material-ui/core';
import { BlockStorageServiceClient } from '../../n0proto.ts/provisioning/v0/Block_storageServiceClientPb';
import { Config } from '../../config/config';



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

interface SelectBlockStorage {
    name: string;
    type: SelectBlockStorageType;
    requestBytes: number;
    limitBytes: number;
    imageName: string;
    imageTag: string;
}

enum SelectBlockStorageType {
    FromImage = "fromImage",
    Existing = "existing",
    Empty = "empty",
}

interface CreateVirtualMachineProps{

}

export function CreateVirtualMachine(_: CreateVirtualMachineProps) {
    const classes = useStyles();
    const history = useHistory();

    const [networkMap, setNetworkMap] = useState({} as {[key: string]: Network})
    const [networkList, setNetworkList] = useState([] as Network[])
    useEffect(() => {
        const request = new ListNetworksRequest;
        const client = new NetworkServiceClient(Config.ProxyURL, {});
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
        const client = new BlockStorageServiceClient(Config.ProxyURL, {});
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
    }, []);

    const [imageList, setImageList] = useState([] as Image[]);
    useEffect(() => {
        const request  = new ListImagesRequest;
        const client = new ImageServiceClient(Config.ProxyURL, {});
        client.listImages(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err)
                throw err;
            }
            setImageList(res.clone().getImagesList());
        })
    }, []);

    const [nodeList, setNodeList] = useState([] as Node[]);
    useEffect(() => {
        const request = new ListNodesRequest();
        const client = new NodeServiceClient(Config.ProxyURL, {});
        client.listNodes(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err)
                throw err;
            }
            const nodeList = res.clone().getNodesList();
            setNodeList(nodeList);

            if (nodeList.length > 0) {
                setSelectedNodeName(nodeList[0].getName());
            }
        })
    }, [])

    const [selectedNodeName, setSelectedNodeName] = useState("");
    const onChangeSelectedNodeName = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNodeName(e.target.value);
    }

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

    const [newBlockStorages, setNewBlockStorages] = useState([] as SelectBlockStorage[]);
    const onClickAddBS = () => {
        const imageName = imageList.length > 0 ? imageList[0].getName() : "";
        const imageTag = imageList.length > 0 ? imageList[0].getTagsMap().toArray()[0][0] : "";
        const newBS = {
            name: "",
            type: SelectBlockStorageType.FromImage,
            imageName: imageName,
            imageTag: imageTag
        } as SelectBlockStorage;
        setNewBlockStorages([
            ...newBlockStorages,
            newBS
        ])
    }

    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVM = vm.clone();
        newVM.setLoginUsername(e.target.value);
        setVM(newVM);
    }

    const onChangeSSHPublickKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVM = vm.clone();
        newVM.setSshAuthorizedKeysList([e.target.value]);
        setVM(newVM);
    }

    const onClickCreateVirtualMachine = () => {
        console.log(vm);
        console.log(newBlockStorages);

        vm.setBlockStorageNamesList(newBlockStorages.map((s) => {
            return s.name
        }))

        // create blockstorage
        newBlockStorages.forEach((s) => {
            if (s.type === SelectBlockStorageType.FromImage) {
                const generateBlockStorageRequest = new GenerateBlockStorageRequest();
                generateBlockStorageRequest.setBlockStorageName(s.name);
                generateBlockStorageRequest.setImageName(s.imageName);
                generateBlockStorageRequest.setTag(s.imageTag);
                generateBlockStorageRequest.setRequestBytes(s.requestBytes);
                generateBlockStorageRequest.setLimitBytes(s.limitBytes);
                generateBlockStorageRequest.getAnnotationsMap().set("n0core/provisioning/block_storage/request_node_name", selectedNodeName);
                console.log(generateBlockStorageRequest.getAnnotationsMap());
                const client = new ImageServiceClient(Config.ProxyURL, {});
                client.generateBlockStorage(generateBlockStorageRequest, null, (err, res) => {
                    console.log(err);
                    throw err;
                })
            }
        })

        const request = new CreateVirtualMachineRequest();
        request.setName(vm.getName());
        request.setRequestCpuMilliCore(vm.getRequestCpuMilliCore());
        request.setLimitCpuMilliCore(vm.getLimitCpuMilliCore());
        request.setRequestMemoryBytes(vm.getRequestMemoryBytes());
        request.setLimitMemoryBytes(vm.getLimitMemoryBytes());
        request.setNicsList(vm.getNicsList());
        request.setBlockStorageNamesList(vm.getBlockStorageNamesList());
        request.setLoginUsername(vm.getLoginUsername());
        request.setSshAuthorizedKeysList(vm.getSshAuthorizedKeysList());
        request.getAnnotationsMap().set("n0core/provisioning/virtual_machine/request_node_name", selectedNodeName);

        const client = new VirtualMachineServiceClient(Config.ProxyURL, {});
        client.createVirtualMachine(request, null, (err, res) => {
            if (err || res === null) {
                console.log(err);
                throw err;
            }

            history.push("/virtualmachines");
        })

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
                <Typography variant="subtitle2">Node</Typography>
                <NativeSelect
                    value={selectedNodeName}
                    onChange={onChangeSelectedNodeName}>
                        {nodeList.map((n, key) => (
                            <option key={key} value={n.getName()}>{n.getName()}</option>
                        ))}
                    </NativeSelect>
            </div>
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
                <TextField
                    label="user"
                    onChange={onChangeUserName} />
                <TextField
                    label="SSH Public Key"
                    onChange={onChangeSSHPublickKey} />
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
                    const onChangeIPv4Address = (e: React.ChangeEvent<HTMLInputElement>) => {
                        const newVM = vm.clone();
                        const newNicsList = newVM.getNicsList();
                        newNicsList[key].setIpv4Address(e.target.value);
                        newVM.setNicsList(newNicsList);
                        setVM(newVM);
                    }
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
                                placeholder="xxx.xxx.xxx.xxx"
                                onChange={onChangeIPv4Address}/>
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
                    BlockStorages
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickAddBS}>
                        Add
                </Button>
                {newBlockStorages.map((bs, key) => {
                    const onChangeBSType = (e: React.ChangeEvent<HTMLInputElement>) => {
                        const newBSS = [...newBlockStorages];
                        newBSS[key].type = e.target.value as SelectBlockStorageType
                        setNewBlockStorages(newBSS);
                    }
                    const onChangeBSName = (e: React.ChangeEvent<HTMLInputElement>) => {
                        const newBSS = [...newBlockStorages];
                        newBSS[key].name = e.target.value;
                        setNewBlockStorages(newBSS);
                    }
                    const onDelete = () => {
                        const newBSs = [...newBlockStorages.filter((_, i) => i !== key)];
                        setNewBlockStorages(newBSs);
                    }
                    const onSwapUp = () => {
                        if (key == 0) return;
                        const newBSS = [...newBlockStorages];
                        const tmp = newBSS[key]
                        newBSS[key] = newBSS[key-1];
                        newBSS[key-1] = tmp;
                        setNewBlockStorages(newBSS);
                    }
                    const onSwapDown = () => {
                        if (key == newBlockStorages.length - 1) return;
                        const newBSS = [...newBlockStorages];
                        const tmp = newBSS[key]
                        newBSS[key] = newBSS[key+1];
                        newBSS[key+1] = tmp;
                        setNewBlockStorages(newBSS);
                    }
                    return (
                    <Card key={key} className={classes.card}>
                        <CardContent>
                            <div>
                                <RadioGroup aria-label="storage" name="storage" value={bs.type} onChange={onChangeBSType}>
                                    <FormControlLabel value="fromImage" control={<Radio />} label="Create From Image" />
                                    <FormControlLabel value="empty" control={<Radio />} label="Create Empty Storage" />
                                    <FormControlLabel value="existing" control={<Radio />} label="Use Existing Storage" />
                                </RadioGroup>
                            </div>
                            {bs.type === SelectBlockStorageType.FromImage && (() => {
                                const onChangeImageName = (e: React.ChangeEvent<HTMLSelectElement>) => {
                                    const newBSS = [...newBlockStorages];
                                    newBSS[key].imageName = e.target.value;
                                    const imageTag = imageList.find((i) => i.getName() === e.target.value)?.getTagsMap().toArray()[0][0];
                                    if (imageTag !== undefined) {
                                        newBSS[key].imageTag = imageTag;

                                    }
                                    setNewBlockStorages(newBSS);
                                }

                                const onChangeBSRequestSize = (e: React.ChangeEvent<HTMLInputElement>) => {
                                    const newBSS = [...newBlockStorages];
                                    newBSS[key].requestBytes = parseInt(e.target.value) * 1024 * 1024 * 1024;
                                    setNewBlockStorages(newBSS);
                                }

                                const onChangeBSLimitSize = (e: React.ChangeEvent<HTMLInputElement>) => {
                                    const newBSS = [...newBlockStorages];
                                    newBSS[key].limitBytes = parseInt(e.target.value) * 1024 * 1024 * 1024;
                                    setNewBlockStorages(newBSS);
                                }
                                return (
                                    <>
                                        <TextField
                                            className={classes.input}
                                            label="Name"
                                            value={bs.name}
                                            onChange={onChangeBSName} />

                                        <Typography variant="subtitle2">Image</Typography>
                                        <NativeSelect
                                            fullWidth
                                            value={bs.imageName}
                                            onChange={onChangeImageName}
                                            >
                                            {imageList.map((i, key) => {
                                                return (
                                                    <option key={key} value={i.getName()}>{i.getName()}</option>
                                                )
                                            })}
                                        </NativeSelect>

                                        <Typography variant="subtitle2">Tag</Typography>
                                        <NativeSelect
                                            fullWidth
                                            value={bs.imageTag}
                                            >
                                                {console.log(imageList.filter((i) => i.getName() === bs.imageName))}
                                                {imageList.find((i) => i.getName() === bs.imageName)?.getTagsMap().toArray().map((t, key) => {
                                                    console.log(t);
                                                    return (
                                                        <option key={key} value={t[0]}>{t[0]}</option>
                                                    )
                                                })}
                                            </NativeSelect>

                                        <TextField
                                            className={classes.input}
                                            label="Request Size(GB)"
                                            onChange={onChangeBSRequestSize}/>

                                        <TextField
                                            className={classes.input}
                                            label="Limit Size(GB)"
                                            onChange={onChangeBSLimitSize}/>

                                    </>
                                )
                        })()}
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
                    onClick={onClickCreateVirtualMachine}>
                        Create
                </Button>
            </div>
        </Container>
    )
}
