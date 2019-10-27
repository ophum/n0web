export interface IAnnotation {
	[key: string]: string,
}

export interface IVirtualMachine {
	annotations: IAnnotation[],
	request_cpu_milli_cores: number,
	limit_cpu_milli_cores: number,
	request_memory_bytes: string,
	limit_memory_bytes: string,
}

export interface IReservedComputes {
	[key: string]: IVirtualMachine,
}

export interface IBlockStorage {
	annotations: IAnnotation[],
	request_bytes: string,
	limit_bytes: string,
}

export interface IReservedStorages {
	[key: string]: IBlockStorage,
}

export interface INode {
	name: string,
	address: string,
	serial: string,
	cpu_milli_cores: number,
	memory_bytes: string,
	storage_bytes: string,
	unit: number,
	state: string,
	annotations: IAnnotation,
	reserved_computes: IReservedComputes,
	reserved_storages: IReservedStorages,
}

export interface INodes {
	nodes: INode[]
}