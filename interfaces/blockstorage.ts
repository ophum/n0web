export interface IAnnotation {
	[key: string]: string,
}

export interface IBlockStorage {
	name: string,
	annotations: IAnnotation,
	request_bytes: string,
	limit_bytes: string,
	state: string,
	node_name: string,
	storage_name: string,
}

export interface IBlockStorages {
	block_storages: IBlockStorage[],
}