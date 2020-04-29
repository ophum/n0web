import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class CreateEmptyBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBytes(): number;
  setBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmptyBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmptyBlockStorageRequest): CreateEmptyBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEmptyBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmptyBlockStorageRequest;
  static deserializeBinaryFromReader(message: CreateEmptyBlockStorageRequest, reader: jspb.BinaryReader): CreateEmptyBlockStorageRequest;
}

export namespace CreateEmptyBlockStorageRequest {
  export type AsObject = {
    name: string,
    bytes: number,
  }
}

export class CreateEmptyBlockStorageResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmptyBlockStorageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmptyBlockStorageResponse): CreateEmptyBlockStorageResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEmptyBlockStorageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmptyBlockStorageResponse;
  static deserializeBinaryFromReader(message: CreateEmptyBlockStorageResponse, reader: jspb.BinaryReader): CreateEmptyBlockStorageResponse;
}

export namespace CreateEmptyBlockStorageResponse {
  export type AsObject = {
    path: string,
  }
}

export class FetchBlockStorageRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBytes(): number;
  setBytes(value: number): void;

  getSourceUrl(): string;
  setSourceUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockStorageRequest): FetchBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: FetchBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockStorageRequest;
  static deserializeBinaryFromReader(message: FetchBlockStorageRequest, reader: jspb.BinaryReader): FetchBlockStorageRequest;
}

export namespace FetchBlockStorageRequest {
  export type AsObject = {
    name: string,
    bytes: number,
    sourceUrl: string,
  }
}

export class FetchBlockStorageResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockStorageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockStorageResponse): FetchBlockStorageResponse.AsObject;
  static serializeBinaryToWriter(message: FetchBlockStorageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockStorageResponse;
  static deserializeBinaryFromReader(message: FetchBlockStorageResponse, reader: jspb.BinaryReader): FetchBlockStorageResponse;
}

export namespace FetchBlockStorageResponse {
  export type AsObject = {
    path: string,
  }
}

export class DeleteBlockStorageRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlockStorageRequest): DeleteBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlockStorageRequest;
  static deserializeBinaryFromReader(message: DeleteBlockStorageRequest, reader: jspb.BinaryReader): DeleteBlockStorageRequest;
}

export namespace DeleteBlockStorageRequest {
  export type AsObject = {
    path: string,
  }
}

export class ResizeBlockStorageRequest extends jspb.Message {
  getBytes(): number;
  setBytes(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResizeBlockStorageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResizeBlockStorageRequest): ResizeBlockStorageRequest.AsObject;
  static serializeBinaryToWriter(message: ResizeBlockStorageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResizeBlockStorageRequest;
  static deserializeBinaryFromReader(message: ResizeBlockStorageRequest, reader: jspb.BinaryReader): ResizeBlockStorageRequest;
}

export namespace ResizeBlockStorageRequest {
  export type AsObject = {
    bytes: number,
    path: string,
  }
}

