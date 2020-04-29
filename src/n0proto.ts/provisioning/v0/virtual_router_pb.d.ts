import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class VirtualIPTarget extends jspb.Message {
  getNetworkName(): string;
  setNetworkName(value: string): void;

  getNetworkInterfaceName(): string;
  setNetworkInterfaceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualIPTarget.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualIPTarget): VirtualIPTarget.AsObject;
  static serializeBinaryToWriter(message: VirtualIPTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualIPTarget;
  static deserializeBinaryFromReader(message: VirtualIPTarget, reader: jspb.BinaryReader): VirtualIPTarget;
}

export namespace VirtualIPTarget {
  export type AsObject = {
    networkName: string,
    networkInterfaceName: string,
  }
}

export class VirtualRouter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getState(): VirtualRouter.VirtualRouterState;
  setState(value: VirtualRouter.VirtualRouterState): void;

  getConnectedNetworkList(): Array<VirtualRouter.VirtualRouterConnectedNetwork>;
  setConnectedNetworkList(value: Array<VirtualRouter.VirtualRouterConnectedNetwork>): void;
  clearConnectedNetworkList(): void;
  addConnectedNetwork(value?: VirtualRouter.VirtualRouterConnectedNetwork, index?: number): VirtualRouter.VirtualRouterConnectedNetwork;

  getVirtualIpMap(): jspb.Map<string, VirtualRouter.VirtualIP>;
  clearVirtualIpMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualRouter.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualRouter): VirtualRouter.AsObject;
  static serializeBinaryToWriter(message: VirtualRouter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualRouter;
  static deserializeBinaryFromReader(message: VirtualRouter, reader: jspb.BinaryReader): VirtualRouter;
}

export namespace VirtualRouter {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
    state: VirtualRouter.VirtualRouterState,
    connectedNetworkList: Array<VirtualRouter.VirtualRouterConnectedNetwork.AsObject>,
    virtualIpMap: Array<[string, VirtualRouter.VirtualIP.AsObject]>,
  }

  export class VirtualRouterConnectedNetwork extends jspb.Message {
    getNetworkName(): string;
    setNetworkName(value: string): void;

    getNetworkInterfaceName(): string;
    setNetworkInterfaceName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VirtualRouterConnectedNetwork.AsObject;
    static toObject(includeInstance: boolean, msg: VirtualRouterConnectedNetwork): VirtualRouterConnectedNetwork.AsObject;
    static serializeBinaryToWriter(message: VirtualRouterConnectedNetwork, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VirtualRouterConnectedNetwork;
    static deserializeBinaryFromReader(message: VirtualRouterConnectedNetwork, reader: jspb.BinaryReader): VirtualRouterConnectedNetwork;
  }

  export namespace VirtualRouterConnectedNetwork {
    export type AsObject = {
      networkName: string,
      networkInterfaceName: string,
    }
  }


  export class VirtualIP extends jspb.Message {
    getNetworkName(): string;
    setNetworkName(value: string): void;

    getNetworkInterfaceName(): string;
    setNetworkInterfaceName(value: string): void;

    getTargetsList(): Array<VirtualIPTarget>;
    setTargetsList(value: Array<VirtualIPTarget>): void;
    clearTargetsList(): void;
    addTargets(value?: VirtualIPTarget, index?: number): VirtualIPTarget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VirtualIP.AsObject;
    static toObject(includeInstance: boolean, msg: VirtualIP): VirtualIP.AsObject;
    static serializeBinaryToWriter(message: VirtualIP, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VirtualIP;
    static deserializeBinaryFromReader(message: VirtualIP, reader: jspb.BinaryReader): VirtualIP;
  }

  export namespace VirtualIP {
    export type AsObject = {
      networkName: string,
      networkInterfaceName: string,
      targetsList: Array<VirtualIPTarget.AsObject>,
    }
  }


  export enum VirtualRouterState { 
    VIRTUAL_ROUTER_UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    AVAILABLE = 3,
  }
}

export class CreateVirtualRouterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualRouterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualRouterRequest): CreateVirtualRouterRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualRouterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualRouterRequest;
  static deserializeBinaryFromReader(message: CreateVirtualRouterRequest, reader: jspb.BinaryReader): CreateVirtualRouterRequest;
}

export namespace CreateVirtualRouterRequest {
  export type AsObject = {
    name: string,
    annotationsMap: Array<[string, string]>,
    labelsMap: Array<[string, string]>,
  }
}

export class ListVirtualRoutersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualRoutersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualRoutersRequest): ListVirtualRoutersRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualRoutersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualRoutersRequest;
  static deserializeBinaryFromReader(message: ListVirtualRoutersRequest, reader: jspb.BinaryReader): ListVirtualRoutersRequest;
}

export namespace ListVirtualRoutersRequest {
  export type AsObject = {
  }
}

export class ListVirtualRoutersResponse extends jspb.Message {
  getVirtualRoutersList(): Array<VirtualRouter>;
  setVirtualRoutersList(value: Array<VirtualRouter>): void;
  clearVirtualRoutersList(): void;
  addVirtualRouters(value?: VirtualRouter, index?: number): VirtualRouter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualRoutersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualRoutersResponse): ListVirtualRoutersResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualRoutersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualRoutersResponse;
  static deserializeBinaryFromReader(message: ListVirtualRoutersResponse, reader: jspb.BinaryReader): ListVirtualRoutersResponse;
}

export namespace ListVirtualRoutersResponse {
  export type AsObject = {
    virtualRoutersList: Array<VirtualRouter.AsObject>,
  }
}

export class GetVirtualRouterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualRouterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualRouterRequest): GetVirtualRouterRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualRouterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualRouterRequest;
  static deserializeBinaryFromReader(message: GetVirtualRouterRequest, reader: jspb.BinaryReader): GetVirtualRouterRequest;
}

export namespace GetVirtualRouterRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteVirtualRouterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualRouterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualRouterRequest): DeleteVirtualRouterRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualRouterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualRouterRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualRouterRequest, reader: jspb.BinaryReader): DeleteVirtualRouterRequest;
}

export namespace DeleteVirtualRouterRequest {
  export type AsObject = {
    name: string,
  }
}

export class ConnectNetworkRequest extends jspb.Message {
  getVirtualRouterName(): string;
  setVirtualRouterName(value: string): void;

  getNetworkName(): string;
  setNetworkName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getIpv4Address(): string;
  setIpv4Address(value: string): void;

  getIpv6Address(): string;
  setIpv6Address(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectNetworkRequest): ConnectNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectNetworkRequest;
  static deserializeBinaryFromReader(message: ConnectNetworkRequest, reader: jspb.BinaryReader): ConnectNetworkRequest;
}

export namespace ConnectNetworkRequest {
  export type AsObject = {
    virtualRouterName: string,
    networkName: string,
    annotationsMap: Array<[string, string]>,
    ipv4Address: string,
    ipv6Address: string,
  }
}

export class DisconnectNetworkRequest extends jspb.Message {
  getVirtualRouterName(): string;
  setVirtualRouterName(value: string): void;

  getNetworkName(): string;
  setNetworkName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectNetworkRequest): DisconnectNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: DisconnectNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectNetworkRequest;
  static deserializeBinaryFromReader(message: DisconnectNetworkRequest, reader: jspb.BinaryReader): DisconnectNetworkRequest;
}

export namespace DisconnectNetworkRequest {
  export type AsObject = {
    virtualRouterName: string,
    networkName: string,
  }
}

export class ApplyVirtualIPRequest extends jspb.Message {
  getVirtualRouterName(): string;
  setVirtualRouterName(value: string): void;

  getVirtualIpName(): string;
  setVirtualIpName(value: string): void;

  getNetworkName(): string;
  setNetworkName(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getIpv4Address(): string;
  setIpv4Address(value: string): void;

  getIpv6Address(): string;
  setIpv6Address(value: string): void;

  getTargetsList(): Array<VirtualIPTarget>;
  setTargetsList(value: Array<VirtualIPTarget>): void;
  clearTargetsList(): void;
  addTargets(value?: VirtualIPTarget, index?: number): VirtualIPTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyVirtualIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyVirtualIPRequest): ApplyVirtualIPRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyVirtualIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyVirtualIPRequest;
  static deserializeBinaryFromReader(message: ApplyVirtualIPRequest, reader: jspb.BinaryReader): ApplyVirtualIPRequest;
}

export namespace ApplyVirtualIPRequest {
  export type AsObject = {
    virtualRouterName: string,
    virtualIpName: string,
    networkName: string,
    annotationsMap: Array<[string, string]>,
    ipv4Address: string,
    ipv6Address: string,
    targetsList: Array<VirtualIPTarget.AsObject>,
  }
}

export class DeleteVirtualIPRequest extends jspb.Message {
  getVirtualRouterName(): string;
  setVirtualRouterName(value: string): void;

  getVirtualIpName(): string;
  setVirtualIpName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualIPRequest): DeleteVirtualIPRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualIPRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualIPRequest, reader: jspb.BinaryReader): DeleteVirtualIPRequest;
}

export namespace DeleteVirtualIPRequest {
  export type AsObject = {
    virtualRouterName: string,
    virtualIpName: string,
  }
}

