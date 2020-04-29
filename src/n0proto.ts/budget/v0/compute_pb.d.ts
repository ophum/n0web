import * as jspb from "google-protobuf"

//import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class Compute extends jspb.Message {
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
  toObject(includeInstance?: boolean): Compute.AsObject;
  static toObject(includeInstance: boolean, msg: Compute): Compute.AsObject;
  static serializeBinaryToWriter(message: Compute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Compute;
  static deserializeBinaryFromReader(message: Compute, reader: jspb.BinaryReader): Compute;
}

export namespace Compute {
  export type AsObject = {
    annotationsMap: Array<[string, string]>,
    requestCpuMilliCore: number,
    limitCpuMilliCore: number,
    requestMemoryBytes: number,
    limitMemoryBytes: number,
  }
}
