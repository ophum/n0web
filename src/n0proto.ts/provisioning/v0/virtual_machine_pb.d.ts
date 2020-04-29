import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class VirtualMachineNIC extends jspb.Message {
  getNetworkName(): string;
  setNetworkName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getHardwareAddress(): string;
  setHardwareAddress(value: string): void;

  getIpv4Address(): string;
  setIpv4Address(value: string): void;

  getIpv6Address(): string;
  setIpv6Address(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualMachineNIC.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualMachineNIC): VirtualMachineNIC.AsObject;
  static serializeBinaryToWriter(message: VirtualMachineNIC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualMachineNIC;
  static deserializeBinaryFromReader(message: VirtualMachineNIC, reader: jspb.BinaryReader): VirtualMachineNIC;
}

export namespace VirtualMachineNIC {
  export type AsObject = {
    networkName: string,
    annotationsMap: Array<[string, string]>,
    hardwareAddress: string,
    ipv4Address: string,
    ipv6Address: string,
  }
}

export class VirtualMachine extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestCpuMilliCore(): number;
  setRequestCpuMilliCore(value: number): void;

  getLimitCpuMilliCore(): number;
  setLimitCpuMilliCore(value: number): void;

  getRequestMemoryBytes(): number;
  setRequestMemoryBytes(value: number): void;

  getLimitMemoryBytes(): number;
  setLimitMemoryBytes(value: number): void;

  getBlockStorageNamesList(): Array<string>;
  setBlockStorageNamesList(value: Array<string>): void;
  clearBlockStorageNamesList(): void;
  addBlockStorageNames(value: string, index?: number): void;

  getNicsList(): Array<VirtualMachineNIC>;
  setNicsList(value: Array<VirtualMachineNIC>): void;
  clearNicsList(): void;
  addNics(value?: VirtualMachineNIC, index?: number): VirtualMachineNIC;

  getUuid(): string;
  setUuid(value: string): void;

  getLoginUsername(): string;
  setLoginUsername(value: string): void;

  getSshAuthorizedKeysList(): Array<string>;
  setSshAuthorizedKeysList(value: Array<string>): void;
  clearSshAuthorizedKeysList(): void;
  addSshAuthorizedKeys(value: string, index?: number): void;

  getState(): VirtualMachine.VirtualMachineState;
  setState(value: VirtualMachine.VirtualMachineState): void;

  getComputeNodeName(): string;
  setComputeNodeName(value: string): void;

  getComputeName(): string;
  setComputeName(value: string): void;

  getNetworkInterfaceNamesList(): Array<string>;
  setNetworkInterfaceNamesList(value: Array<string>): void;
  clearNetworkInterfaceNamesList(): void;
  addNetworkInterfaceNames(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualMachine.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualMachine): VirtualMachine.AsObject;
  static serializeBinaryToWriter(message: VirtualMachine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualMachine;
  static deserializeBinaryFromReader(message: VirtualMachine, reader: jspb.BinaryReader): VirtualMachine;
}

export namespace VirtualMachine {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestCpuMilliCore: number,
    limitCpuMilliCore: number,
    requestMemoryBytes: number,
    limitMemoryBytes: number,
    blockStorageNamesList: Array<string>,
    nicsList: Array<VirtualMachineNIC.AsObject>,
    uuid: string,
    loginUsername: string,
    sshAuthorizedKeysList: Array<string>,
    state: VirtualMachine.VirtualMachineState,
    computeNodeName: string,
    computeName: string,
    networkInterfaceNamesList: Array<string>,
  }

  export enum VirtualMachineState { 
    VIRTUAL_MACHINE_UNSPECIFIED = 0,
    PENDING = 1,
    RUNNING = 2,
    SHUTDOWN = 3,
    PAUSED = 4,
  }
}

export class CreateVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestCpuMilliCore(): number;
  setRequestCpuMilliCore(value: number): void;

  getLimitCpuMilliCore(): number;
  setLimitCpuMilliCore(value: number): void;

  getRequestMemoryBytes(): number;
  setRequestMemoryBytes(value: number): void;

  getLimitMemoryBytes(): number;
  setLimitMemoryBytes(value: number): void;

  getBlockStorageNamesList(): Array<string>;
  setBlockStorageNamesList(value: Array<string>): void;
  clearBlockStorageNamesList(): void;
  addBlockStorageNames(value: string, index?: number): void;

  getNicsList(): Array<VirtualMachineNIC>;
  setNicsList(value: Array<VirtualMachineNIC>): void;
  clearNicsList(): void;
  addNics(value?: VirtualMachineNIC, index?: number): VirtualMachineNIC;

  getUuid(): string;
  setUuid(value: string): void;

  getLoginUsername(): string;
  setLoginUsername(value: string): void;

  getSshAuthorizedKeysList(): Array<string>;
  setSshAuthorizedKeysList(value: Array<string>): void;
  clearSshAuthorizedKeysList(): void;
  addSshAuthorizedKeys(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualMachineRequest): CreateVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualMachineRequest;
  static deserializeBinaryFromReader(message: CreateVirtualMachineRequest, reader: jspb.BinaryReader): CreateVirtualMachineRequest;
}

export namespace CreateVirtualMachineRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestCpuMilliCore: number,
    limitCpuMilliCore: number,
    requestMemoryBytes: number,
    limitMemoryBytes: number,
    blockStorageNamesList: Array<string>,
    nicsList: Array<VirtualMachineNIC.AsObject>,
    uuid: string,
    loginUsername: string,
    sshAuthorizedKeysList: Array<string>,
  }
}

export class ListVirtualMachinesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualMachinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualMachinesRequest): ListVirtualMachinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualMachinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualMachinesRequest;
  static deserializeBinaryFromReader(message: ListVirtualMachinesRequest, reader: jspb.BinaryReader): ListVirtualMachinesRequest;
}

export namespace ListVirtualMachinesRequest {
  export type AsObject = {
  }
}

export class ListVirtualMachinesResponse extends jspb.Message {
  getVirtualMachinesList(): Array<VirtualMachine>;
  setVirtualMachinesList(value: Array<VirtualMachine>): void;
  clearVirtualMachinesList(): void;
  addVirtualMachines(value?: VirtualMachine, index?: number): VirtualMachine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualMachinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualMachinesResponse): ListVirtualMachinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualMachinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualMachinesResponse;
  static deserializeBinaryFromReader(message: ListVirtualMachinesResponse, reader: jspb.BinaryReader): ListVirtualMachinesResponse;
}

export namespace ListVirtualMachinesResponse {
  export type AsObject = {
    virtualMachinesList: Array<VirtualMachine.AsObject>,
  }
}

export class GetVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualMachineRequest): GetVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualMachineRequest;
  static deserializeBinaryFromReader(message: GetVirtualMachineRequest, reader: jspb.BinaryReader): GetVirtualMachineRequest;
}

export namespace GetVirtualMachineRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRequestCpuMilliCore(): number;
  setRequestCpuMilliCore(value: number): void;

  getRequestMemoryBytes(): number;
  setRequestMemoryBytes(value: number): void;

  getBlockStorageNamesList(): Array<string>;
  setBlockStorageNamesList(value: Array<string>): void;
  clearBlockStorageNamesList(): void;
  addBlockStorageNames(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualMachineRequest): UpdateVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualMachineRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualMachineRequest, reader: jspb.BinaryReader): UpdateVirtualMachineRequest;
}

export namespace UpdateVirtualMachineRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    requestCpuMilliCore: number,
    requestMemoryBytes: number,
    blockStorageNamesList: Array<string>,
  }
}

export class DeleteVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualMachineRequest): DeleteVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualMachineRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualMachineRequest, reader: jspb.BinaryReader): DeleteVirtualMachineRequest;
}

export namespace DeleteVirtualMachineRequest {
  export type AsObject = {
    name: string,
  }
}

export class BootVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BootVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BootVirtualMachineRequest): BootVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: BootVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BootVirtualMachineRequest;
  static deserializeBinaryFromReader(message: BootVirtualMachineRequest, reader: jspb.BinaryReader): BootVirtualMachineRequest;
}

export namespace BootVirtualMachineRequest {
  export type AsObject = {
    name: string,
  }
}

export class RebootVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getHard(): boolean;
  setHard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RebootVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RebootVirtualMachineRequest): RebootVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: RebootVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RebootVirtualMachineRequest;
  static deserializeBinaryFromReader(message: RebootVirtualMachineRequest, reader: jspb.BinaryReader): RebootVirtualMachineRequest;
}

export namespace RebootVirtualMachineRequest {
  export type AsObject = {
    name: string,
    hard: boolean,
  }
}

export class ShutdownVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getHard(): boolean;
  setHard(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownVirtualMachineRequest): ShutdownVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: ShutdownVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownVirtualMachineRequest;
  static deserializeBinaryFromReader(message: ShutdownVirtualMachineRequest, reader: jspb.BinaryReader): ShutdownVirtualMachineRequest;
}

export namespace ShutdownVirtualMachineRequest {
  export type AsObject = {
    name: string,
    hard: boolean,
  }
}

export class SaveVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveVirtualMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveVirtualMachineRequest): SaveVirtualMachineRequest.AsObject;
  static serializeBinaryToWriter(message: SaveVirtualMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveVirtualMachineRequest;
  static deserializeBinaryFromReader(message: SaveVirtualMachineRequest, reader: jspb.BinaryReader): SaveVirtualMachineRequest;
}

export namespace SaveVirtualMachineRequest {
  export type AsObject = {
    name: string,
  }
}

export class OpenConsoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenConsoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenConsoleRequest): OpenConsoleRequest.AsObject;
  static serializeBinaryToWriter(message: OpenConsoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenConsoleRequest;
  static deserializeBinaryFromReader(message: OpenConsoleRequest, reader: jspb.BinaryReader): OpenConsoleRequest;
}

export namespace OpenConsoleRequest {
  export type AsObject = {
    name: string,
  }
}

export class OpenConsoleResponse extends jspb.Message {
  getConsoleUrl(): string;
  setConsoleUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenConsoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenConsoleResponse): OpenConsoleResponse.AsObject;
  static serializeBinaryToWriter(message: OpenConsoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenConsoleResponse;
  static deserializeBinaryFromReader(message: OpenConsoleResponse, reader: jspb.BinaryReader): OpenConsoleResponse;
}

export namespace OpenConsoleResponse {
  export type AsObject = {
    consoleUrl: string,
  }
}

