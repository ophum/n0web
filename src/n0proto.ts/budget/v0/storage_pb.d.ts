import * as jspb from "google-protobuf"

import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class Storage extends jspb.Message {
  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  getRequestBytes(): number;
  setRequestBytes(value: number): void;

  getLimitBytes(): number;
  setLimitBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Storage.AsObject;
  static toObject(includeInstance: boolean, msg: Storage): Storage.AsObject;
  static serializeBinaryToWriter(message: Storage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Storage;
  static deserializeBinaryFromReader(message: Storage, reader: jspb.BinaryReader): Storage;
}

export namespace Storage {
  export type AsObject = {
    annotationsMap: Array<[string, string]>,
    requestBytes: number,
    limitBytes: number,
  }
}

