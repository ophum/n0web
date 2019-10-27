export interface IAnnotation {
	[key: string]: string,
}

export interface INic {
	network_name: string,
	hardware_address: string,
	ipv4_address: string,
}

export interface IVirtualMachine {
	name: string,
	annotations: IAnnotation,
	request_cpu_milli_core: number,
	limit_cpu_milli_core: number,
	request_memory_bytes: string,
	limit_memory_bytes: string,
	block_storage_names: string,
	nics: INic[],
	uuid: string,
	login_username: string,
	ssh_authorized_keys: string[],
	state: string,
	compute_node_name: string,
	compute_name: string,
	network_interface_names: string[],

}

export interface IVirtualMachines {
	virtual_machines: IVirtualMachine[]
}