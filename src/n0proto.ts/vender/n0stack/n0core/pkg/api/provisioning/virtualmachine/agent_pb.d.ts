import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class BlockDev extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getBootIndex(): number;
  setBootIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockDev.AsObject;
  static toObject(includeInstance: boolean, msg: BlockDev): BlockDev.AsObject;
  static serializeBinaryToWriter(message: BlockDev, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockDev;
  static deserializeBinaryFromReader(message: BlockDev, reader: jspb.BinaryReader): BlockDev;
}

export namespace BlockDev {
  export type AsObject = {
    name: string,
    url: string,
    bootIndex: number,
  }
}

export class NetDev extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNetworkName(): string;
  setNetworkName(value: string): void;

  getHardwareAddress(): string;
  setHardwareAddress(value: string): void;

  getIpv4AddressCidr(): string;
  setIpv4AddressCidr(value: string): void;

  getIpv4Gateway(): string;
  setIpv4Gateway(value: string): void;

  getNameserversList(): Array<string>;
  setNameserversList(value: Array<string>): void;
  clearNameserversList(): void;
  addNameservers(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetDev.AsObject;
  static toObject(includeInstance: boolean, msg: NetDev): NetDev.AsObject;
  static serializeBinaryToWriter(message: NetDev, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetDev;
  static deserializeBinaryFromReader(message: NetDev, reader: jspb.BinaryReader): NetDev;
}

export namespace NetDev {
  export type AsObject = {
    name: string,
    networkName: string,
    hardwareAddress: string,
    ipv4AddressCidr: string,
    ipv4Gateway: string,
    nameserversList: Array<string>,
  }
}

export class BootVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getVcpus(): number;
  setVcpus(value: number): void;

  getMemoryBytes(): number;
  setMemoryBytes(value: number): void;

  getBlockdevsList(): Array<BlockDev>;
  setBlockdevsList(value: Array<BlockDev>): void;
  clearBlockdevsList(): void;
  addBlockdevs(value?: BlockDev, index?: number): BlockDev;

  getNetdevsList(): Array<NetDev>;
  setNetdevsList(value: Array<NetDev>): void;
  clearNetdevsList(): void;
  addNetdevs(value?: NetDev, index?: number): NetDev;

  getLoginUsername(): string;
  setLoginUsername(value: string): void;

  getSshAuthorizedKeysList(): Array<string>;
  setSshAuthorizedKeysList(value: Array<string>): void;
  clearSshAuthorizedKeysList(): void;
  addSshAuthorizedKeys(value: string, index?: number): void;

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
    uuid: string,
    vcpus: number,
    memoryBytes: number,
    blockdevsList: Array<BlockDev.AsObject>,
    netdevsList: Array<NetDev.AsObject>,
    loginUsername: string,
    sshAuthorizedKeysList: Array<string>,
  }
}

export class BootVirtualMachineResponse extends jspb.Message {
  getState(): VirtualMachineState;
  setState(value: VirtualMachineState): void;

  getWebsocketPort(): number;
  setWebsocketPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BootVirtualMachineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BootVirtualMachineResponse): BootVirtualMachineResponse.AsObject;
  static serializeBinaryToWriter(message: BootVirtualMachineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BootVirtualMachineResponse;
  static deserializeBinaryFromReader(message: BootVirtualMachineResponse, reader: jspb.BinaryReader): BootVirtualMachineResponse;
}

export namespace BootVirtualMachineResponse {
  export type AsObject = {
    state: VirtualMachineState,
    websocketPort: number,
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

export class RebootVirtualMachineResponse extends jspb.Message {
  getState(): VirtualMachineState;
  setState(value: VirtualMachineState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RebootVirtualMachineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RebootVirtualMachineResponse): RebootVirtualMachineResponse.AsObject;
  static serializeBinaryToWriter(message: RebootVirtualMachineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RebootVirtualMachineResponse;
  static deserializeBinaryFromReader(message: RebootVirtualMachineResponse, reader: jspb.BinaryReader): RebootVirtualMachineResponse;
}

export namespace RebootVirtualMachineResponse {
  export type AsObject = {
    state: VirtualMachineState,
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

export class ShutdownVirtualMachineResponse extends jspb.Message {
  getState(): VirtualMachineState;
  setState(value: VirtualMachineState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownVirtualMachineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownVirtualMachineResponse): ShutdownVirtualMachineResponse.AsObject;
  static serializeBinaryToWriter(message: ShutdownVirtualMachineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownVirtualMachineResponse;
  static deserializeBinaryFromReader(message: ShutdownVirtualMachineResponse, reader: jspb.BinaryReader): ShutdownVirtualMachineResponse;
}

export namespace ShutdownVirtualMachineResponse {
  export type AsObject = {
    state: VirtualMachineState,
  }
}

export class DeleteVirtualMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNetdevsList(): Array<NetDev>;
  setNetdevsList(value: Array<NetDev>): void;
  clearNetdevsList(): void;
  addNetdevs(value?: NetDev, index?: number): NetDev;

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
    netdevsList: Array<NetDev.AsObject>,
  }
}

export enum VirtualMachineState { 
  FAILED = 0,
  UNKNOWN = 1,
  SHUTDOWN = 2,
  RUNNING = 3,
  PAUSED = 4,
}
