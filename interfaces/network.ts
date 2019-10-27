export interface IAnnotation {
	[key: string]: string,
}

export interface IVirtualMachine {
	annotations: IAnnotation[],
	hardware_address: string,
}

export interface IReservedNetworkInterface {
	[key: string]: IVirtualMachine,
}

export interface INetwork {
	name: string,
	state: string,
	ipv4_cidr: string,
	annotations: IAnnotation,
	reserved_network_interfaces: IReservedNetworkInterface,
}

export interface INetworks {
	networks: INetwork[]
}