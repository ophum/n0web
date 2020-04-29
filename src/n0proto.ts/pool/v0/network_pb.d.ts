import * as jspb from "google-protobuf"

//import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as n0stack_budget_v0_network_interface_pb from './n0stack/budget/v0/network_interface_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class Network extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getIpv4Cidr(): string;
  setIpv4Cidr(value: string): void;

  getIpv6Cidr(): string;
  setIpv6Cidr(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  getState(): Network.NetworkState;
  setState(value: Network.NetworkState): void;

  getReservedNetworkInterfacesMap(): jspb.Map<string, n0stack_budget_v0_network_interface_pb.NetworkInterface>;
  clearReservedNetworkInterfacesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    ipv4Cidr: string,
    ipv6Cidr: string,
    domain: string,
    state: Network.NetworkState,
    reservedNetworkInterfacesMap: Array<[string, n0stack_budget_v0_network_interface_pb.NetworkInterface.AsObject]>,
  }

  export enum NetworkState {
    NETWORK_UNSPECIFIED = 0,
    UNKNOWN = 1,
    AVAILABLE = 2,
  }
}

export class ListNetworksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNetworksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNetworksRequest): ListNetworksRequest.AsObject;
  static serializeBinaryToWriter(message: ListNetworksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNetworksRequest;
  static deserializeBinaryFromReader(message: ListNetworksRequest, reader: jspb.BinaryReader): ListNetworksRequest;
}

export namespace ListNetworksRequest {
  export type AsObject = {
  }
}

export class ListNetworksResponse extends jspb.Message {
  getNetworksList(): Array<Network>;
  setNetworksList(value: Array<Network>): void;
  clearNetworksList(): void;
  addNetworks(value?: Network, index?: number): Network;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNetworksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNetworksResponse): ListNetworksResponse.AsObject;
  static serializeBinaryToWriter(message: ListNetworksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNetworksResponse;
  static deserializeBinaryFromReader(message: ListNetworksResponse, reader: jspb.BinaryReader): ListNetworksResponse;
}

export namespace ListNetworksResponse {
  export type AsObject = {
    networksList: Array<Network.AsObject>,
  }
}

export class GetNetworkRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkRequest): GetNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: GetNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkRequest;
  static deserializeBinaryFromReader(message: GetNetworkRequest, reader: jspb.BinaryReader): GetNetworkRequest;
}

export namespace GetNetworkRequest {
  export type AsObject = {
    name: string,
  }
}

export class ApplyNetworkRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getIpv4Cidr(): string;
  setIpv4Cidr(value: string): void;

  getIpv6Cidr(): string;
  setIpv6Cidr(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyNetworkRequest): ApplyNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyNetworkRequest;
  static deserializeBinaryFromReader(message: ApplyNetworkRequest, reader: jspb.BinaryReader): ApplyNetworkRequest;
}

export namespace ApplyNetworkRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    ipv4Cidr: string,
    ipv6Cidr: string,
    domain: string,
  }
}

export class DeleteNetworkRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNetworkRequest): DeleteNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNetworkRequest;
  static deserializeBinaryFromReader(message: DeleteNetworkRequest, reader: jspb.BinaryReader): DeleteNetworkRequest;
}

export namespace DeleteNetworkRequest {
  export type AsObject = {
    name: string,
  }
}

export class ReserveNetworkInterfaceRequest extends jspb.Message {
  getNetworkName(): string;
  setNetworkName(value: string): void;

  getNetworkInterfaceName(): string;
  setNetworkInterfaceName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getHardwareAddress(): string;
  setHardwareAddress(value: string): void;

  getIpv4Address(): string;
  setIpv4Address(value: string): void;

  getIpv6Address(): string;
  setIpv6Address(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveNetworkInterfaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveNetworkInterfaceRequest): ReserveNetworkInterfaceRequest.AsObject;
  static serializeBinaryToWriter(message: ReserveNetworkInterfaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveNetworkInterfaceRequest;
  static deserializeBinaryFromReader(message: ReserveNetworkInterfaceRequest, reader: jspb.BinaryReader): ReserveNetworkInterfaceRequest;
}

export namespace ReserveNetworkInterfaceRequest {
  export type AsObject = {
    networkName: string,
    networkInterfaceName: string,
    annotationsMap: Array<[string, string]>,
    hardwareAddress: string,
    ipv4Address: string,
    ipv6Address: string,
  }
}

export class ReleaseNetworkInterfaceRequest extends jspb.Message {
  getNetworkName(): string;
  setNetworkName(value: string): void;

  getNetworkInterfaceName(): string;
  setNetworkInterfaceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseNetworkInterfaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseNetworkInterfaceRequest): ReleaseNetworkInterfaceRequest.AsObject;
  static serializeBinaryToWriter(message: ReleaseNetworkInterfaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseNetworkInterfaceRequest;
  static deserializeBinaryFromReader(message: ReleaseNetworkInterfaceRequest, reader: jspb.BinaryReader): ReleaseNetworkInterfaceRequest;
}

export namespace ReleaseNetworkInterfaceRequest {
  export type AsObject = {
    networkName: string,
    networkInterfaceName: string,
  }
}
