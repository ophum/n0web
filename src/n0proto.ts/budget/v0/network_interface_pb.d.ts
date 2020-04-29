import * as jspb from "google-protobuf"

//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class NetworkInterface extends jspb.Message {
  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getHardwareAddress(): string;
  setHardwareAddress(value: string): void;

  getIpv4Address(): string;
  setIpv4Address(value: string): void;

  getIpv6Address(): string;
  setIpv6Address(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInterface.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInterface): NetworkInterface.AsObject;
  static serializeBinaryToWriter(message: NetworkInterface, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInterface;
  static deserializeBinaryFromReader(message: NetworkInterface, reader: jspb.BinaryReader): NetworkInterface;
}

export namespace NetworkInterface {
  export type AsObject = {
    annotationsMap: Array<[string, string]>,
    hardwareAddress: string,
    ipv4Address: string,
    ipv6Address: string,
  }
}
