import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as n0stack_budget_v0_compute_pb from './n0stack/budget/v0/compute_pb';
import * as n0stack_budget_v0_storage_pb from './n0stack/budget/v0/storage_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class Node extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getAddress(): string;
  setAddress(value: string): void;

  getIpmiAddress(): string;
  setIpmiAddress(value: string): void;

  getSerial(): string;
  setSerial(value: string): void;

  getCpuMilliCores(): number;
  setCpuMilliCores(value: number): void;

  getMemoryBytes(): number;
  setMemoryBytes(value: number): void;

  getStorageBytes(): number;
  setStorageBytes(value: number): void;

  getDatacenter(): string;
  setDatacenter(value: string): void;

  getAvailabilityZone(): string;
  setAvailabilityZone(value: string): void;

  getCell(): string;
  setCell(value: string): void;

  getRack(): string;
  setRack(value: string): void;

  getUnit(): number;
  setUnit(value: number): void;

  getState(): Node.NodeState;
  setState(value: Node.NodeState): void;

  getReservedComputesMap(): jspb.Map<string, n0stack_budget_v0_compute_pb.Compute>;
  clearReservedComputesMap(): void;

  getReservedStoragesMap(): jspb.Map<string, n0stack_budget_v0_storage_pb.Storage>;
  clearReservedStoragesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    address: string,
    ipmiAddress: string,
    serial: string,
    cpuMilliCores: number,
    memoryBytes: number,
    storageBytes: number,
    datacenter: string,
    availabilityZone: string,
    cell: string,
    rack: string,
    unit: number,
    state: Node.NodeState,
    reservedComputesMap: Array<[string, n0stack_budget_v0_compute_pb.Compute.AsObject]>,
    reservedStoragesMap: Array<[string, n0stack_budget_v0_storage_pb.Storage.AsObject]>,
  }

  export enum NodeState { 
    NODE_UNSPECIFIED = 0,
    READY = 1,
    NOT_READY = 2,
  }
}

export class ListNodesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodesRequest): ListNodesRequest.AsObject;
  static serializeBinaryToWriter(message: ListNodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodesRequest;
  static deserializeBinaryFromReader(message: ListNodesRequest, reader: jspb.BinaryReader): ListNodesRequest;
}

export namespace ListNodesRequest {
  export type AsObject = {
  }
}

export class ListNodesResponse extends jspb.Message {
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): void;
  clearNodesList(): void;
  addNodes(value?: Node, index?: number): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodesResponse): ListNodesResponse.AsObject;
  static serializeBinaryToWriter(message: ListNodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodesResponse;
  static deserializeBinaryFromReader(message: ListNodesResponse, reader: jspb.BinaryReader): ListNodesResponse;
}

export namespace ListNodesResponse {
  export type AsObject = {
    nodesList: Array<Node.AsObject>,
  }
}

export class GetNodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRequest): GetNodeRequest.AsObject;
  static serializeBinaryToWriter(message: GetNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRequest;
  static deserializeBinaryFromReader(message: GetNodeRequest, reader: jspb.BinaryReader): GetNodeRequest;
}

export namespace GetNodeRequest {
  export type AsObject = {
    name: string,
  }
}

export class ApplyNodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getAddress(): string;
  setAddress(value: string): void;

  getIpmiAddress(): string;
  setIpmiAddress(value: string): void;

  getSerial(): string;
  setSerial(value: string): void;

  getCpuMilliCores(): number;
  setCpuMilliCores(value: number): void;

  getMemoryBytes(): number;
  setMemoryBytes(value: number): void;

  getStorageBytes(): number;
  setStorageBytes(value: number): void;

  getDatacenter(): string;
  setDatacenter(value: string): void;

  getAvailabilityZone(): string;
  setAvailabilityZone(value: string): void;

  getCell(): string;
  setCell(value: string): void;

  getRack(): string;
  setRack(value: string): void;

  getUnit(): number;
  setUnit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyNodeRequest): ApplyNodeRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyNodeRequest;
  static deserializeBinaryFromReader(message: ApplyNodeRequest, reader: jspb.BinaryReader): ApplyNodeRequest;
}

export namespace ApplyNodeRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    address: string,
    ipmiAddress: string,
    serial: string,
    cpuMilliCores: number,
    memoryBytes: number,
    storageBytes: number,
    datacenter: string,
    availabilityZone: string,
    cell: string,
    rack: string,
    unit: number,
  }
}

export class DeleteNodeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNodeRequest): DeleteNodeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNodeRequest;
  static deserializeBinaryFromReader(message: DeleteNodeRequest, reader: jspb.BinaryReader): DeleteNodeRequest;
}

export namespace DeleteNodeRequest {
  export type AsObject = {
    name: string,
  }
}

export class ScheduleComputeRequest extends jspb.Message {
  getComputeName(): string;
  setComputeName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getRequestCpuMilliCore(): number;
  setRequestCpuMilliCore(value: number): void;

  getLimitCpuMilliCore(): number;
  setLimitCpuMilliCore(value: number): void;

  getRequestMemoryBytes(): number;
  setRequestMemoryBytes(value: number): void;

  getLimitMemoryBytes(): number;
  setLimitMemoryBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleComputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleComputeRequest): ScheduleComputeRequest.AsObject;
  static serializeBinaryToWriter(message: ScheduleComputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleComputeRequest;
  static deserializeBinaryFromReader(message: ScheduleComputeRequest, reader: jspb.BinaryReader): ScheduleComputeRequest;
}

export namespace ScheduleComputeRequest {
  export type AsObject = {
    computeName: string,
    annotationsMap: Array<[string, string]>,
    requestCpuMilliCore: number,
    limitCpuMilliCore: number,
    requestMemoryBytes: number,
    limitMemoryBytes: number,
  }
}

export class ReserveComputeRequest extends jspb.Message {
  getNodeName(): string;
  setNodeName(value: string): void;

  getComputeName(): string;
  setComputeName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getRequestCpuMilliCore(): number;
  setRequestCpuMilliCore(value: number): void;

  getLimitCpuMilliCore(): number;
  setLimitCpuMilliCore(value: number): void;

  getRequestMemoryBytes(): number;
  setRequestMemoryBytes(value: number): void;

  getLimitMemoryBytes(): number;
  setLimitMemoryBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveComputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveComputeRequest): ReserveComputeRequest.AsObject;
  static serializeBinaryToWriter(message: ReserveComputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveComputeRequest;
  static deserializeBinaryFromReader(message: ReserveComputeRequest, reader: jspb.BinaryReader): ReserveComputeRequest;
}

export namespace ReserveComputeRequest {
  export type AsObject = {
    nodeName: string,
    computeName: string,
    annotationsMap: Array<[string, string]>,
    requestCpuMilliCore: number,
    limitCpuMilliCore: number,
    requestMemoryBytes: number,
    limitMemoryBytes: number,
  }
}

export class ReleaseComputeRequest extends jspb.Message {
  getNodeName(): string;
  setNodeName(value: string): void;

  getComputeName(): string;
  setComputeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseComputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseComputeRequest): ReleaseComputeRequest.AsObject;
  static serializeBinaryToWriter(message: ReleaseComputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseComputeRequest;
  static deserializeBinaryFromReader(message: ReleaseComputeRequest, reader: jspb.BinaryReader): ReleaseComputeRequest;
}

export namespace ReleaseComputeRequest {
  export type AsObject = {
    nodeName: string,
    computeName: string,
  }
}

export class ScheduleStorageRequest extends jspb.Message {
  getStorageName(): string;
  setStorageName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleStorageRequest): ScheduleStorageRequest.AsObject;
  static serializeBinaryToWriter(message: ScheduleStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleStorageRequest;
  static deserializeBinaryFromReader(message: ScheduleStorageRequest, reader: jspb.BinaryReader): ScheduleStorageRequest;
}

export namespace ScheduleStorageRequest {
  export type AsObject = {
    storageName: string,
    annotationsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
  }
}

export class ReserveStorageRequest extends jspb.Message {
  getNodeName(): string;
  setNodeName(value: string): void;

  getStorageName(): string;
  setStorageName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveStorageRequest): ReserveStorageRequest.AsObject;
  static serializeBinaryToWriter(message: ReserveStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveStorageRequest;
  static deserializeBinaryFromReader(message: ReserveStorageRequest, reader: jspb.BinaryReader): ReserveStorageRequest;
}

export namespace ReserveStorageRequest {
  export type AsObject = {
    nodeName: string,
    storageName: string,
    annotationsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
  }
}

export class ReleaseStorageRequest extends jspb.Message {
  getNodeName(): string;
  setNodeName(value: string): void;

  getStorageName(): string;
  setStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseStorageRequest): ReleaseStorageRequest.AsObject;
  static serializeBinaryToWriter(message: ReleaseStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseStorageRequest;
  static deserializeBinaryFromReader(message: ReleaseStorageRequest, reader: jspb.BinaryReader): ReleaseStorageRequest;
}

export namespace ReleaseStorageRequest {
  export type AsObject = {
    nodeName: string,
    storageName: string,
  }
}

